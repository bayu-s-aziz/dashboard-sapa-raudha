import { Camera, X } from 'lucide-react';
import { useRef, useState, type ChangeEvent } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PhotoUploadProps {
    currentPhoto?: string | null;
    onPhotoChange: (file: File | null) => void;
    label?: string;
    accept?: string;
    maxSize?: string;
    className?: string;
}

export default function PhotoUpload({
    currentPhoto,
    onPhotoChange,
    label = 'Foto',
    accept = 'image/*',
    maxSize = '2MB',
    className = '',
}: PhotoUploadProps) {
    const [preview, setPreview] = useState<string | null>(currentPhoto || null);
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            // Validate file type
            if (!selectedFile.type.startsWith('image/')) {
                alert('Harap pilih file gambar yang valid');
                return;
            }

            // Validate file size (2MB)
            if (selectedFile.size > 2 * 1024 * 1024) {
                alert('Ukuran file maksimal 2MB');
                return;
            }

            setFile(selectedFile);
            onPhotoChange(selectedFile);

            // Create preview
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreview(e.target?.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleRemovePhoto = () => {
        setFile(null);
        setPreview(currentPhoto || null);
        onPhotoChange(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className={`space-y-2 ${className}`}>
            <Label htmlFor="photo-upload">{label}</Label>

            <div className="flex items-center space-x-4">
                {/* Photo Preview - Sekarang bisa diklik */}
                <div className="relative cursor-pointer" onClick={handleAvatarClick}>
                    <div className="h-24 w-24 rounded-full border-2 border-gray-300 overflow-hidden bg-gray-100 flex items-center justify-center">
                        {preview ? (
                            <img
                                src={preview}
                                alt="Preview"
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <Camera className="h-8 w-8 text-gray-400" />
                        )}
                    </div>

                    {preview && (
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent triggering avatar click
                                handleRemovePhoto();
                            }}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    )}
                </div>

                {/* Hidden File Input */}
                <Input
                    ref={fileInputRef}
                    type="file"
                    accept={accept}
                    onChange={handleFileChange}
                    className="hidden"
                />

                {/* Info Text */}
                <div className="flex-1">
                    <p className="text-sm text-gray-600">
                        Klik avatar untuk memilih foto baru. Format: JPG, PNG, GIF. Maksimal: {maxSize}
                    </p>
                    {file && (
                        <p className="text-sm text-green-600 mt-1">
                            File dipilih: {file.name}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
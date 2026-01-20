import { useState, type ChangeEvent } from 'react';
import { Camera, Upload, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
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
        setPreview(null);
        onPhotoChange(null);
    };

    return (
        <div className={`space-y-2 ${className}`}>
            <Label htmlFor="photo-upload">{label}</Label>

            <div className="flex items-center space-x-4">
                {/* Photo Preview */}
                <div className="relative">
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
                            onClick={handleRemovePhoto}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    )}
                </div>

                {/* Upload Button */}
                <div className="flex-1">
                    <Input
                        id="photo-upload"
                        type="file"
                        accept={accept}
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    <Label htmlFor="photo-upload">
                        <Button
                            type="button"
                            variant="outline"
                            className="cursor-pointer"
                            asChild
                        >
                            <span>
                                <Upload className="h-4 w-4 mr-2" />
                                {file ? 'Ganti Foto' : 'Upload Foto'}
                            </span>
                        </Button>
                    </Label>

                    <p className="text-xs text-gray-500 mt-1">
                        Format: JPG, PNG, GIF. Maksimal: {maxSize}
                    </p>

                    {file && (
                        <p className="text-xs text-green-600 mt-1">
                            File dipilih: {file.name}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
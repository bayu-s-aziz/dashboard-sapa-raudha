<?php

namespace App\Http\Controllers;

use App\Models\Pengumuman;
use App\Models\Attachment;
use App\Models\Guru;
use App\Models\Kelas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of announcements
     */
    public function index(Request $request)
    {
        $query = Pengumuman::with('author', 'targetClass', 'attachments');

        // Filter by target audience
        if ($request->has('audience') && !empty($request->audience)) {
            $query->where('target_audience', $request->audience);
        }

        // Filter by target class
        if ($request->has('class_id') && !empty($request->class_id)) {
            $query->where('target_class_id', $request->class_id);
        }

        // Search by title or content
        if ($request->has('search') && !empty($request->search)) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%$search%")
                  ->orWhere('content', 'like', "%$search%");
            });
        }

        // Pagination
        $perPage = $request->input('per_page', 15);
        $announcements = $query->orderBy('created_at', 'desc')->paginate($perPage);

        if ($request->wantsJson()) {
            return response()->json($announcements);
        }

        // Get unique audiences for filter
        $audiences = Pengumuman::select('target_audience')->distinct()->orderBy('target_audience')->pluck('target_audience');

        // Get classes for filter
        $classes = Kelas::select('id', 'name', 'group')->orderBy('group')->get();

        return Inertia::render('announcements/index', [
            'announcements' => $announcements,
            'audiences' => $audiences,
            'classes' => $classes,
            'filters' => $request->only(['search', 'audience', 'class_id']),
        ]);
    }

    /**
     * Store a newly created announcement in storage
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'author_id' => 'required|exists:gurus,id',
            'target_audience' => 'required|in:all,parents,teachers,class',
            'target_class_id' => 'nullable|exists:classes,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Validate that if target_audience is 'class', target_class_id must be provided
        if ($request->target_audience === 'class' && empty($request->target_class_id)) {
            return response()->json([
                'message' => 'Target kelas harus dipilih jika audience adalah class',
            ], 422);
        }

        try {
            $announcement = Pengumuman::create($request->only([
                'title', 'content', 'author_id', 'target_audience', 'target_class_id'
            ]));

            // Handle file uploads
            if ($request->hasFile('attachments')) {
                foreach ($request->file('attachments') as $file) {
                    $this->storeAttachment($announcement, $file);
                }
            }

            $announcement->load('author', 'targetClass', 'attachments');

            return response()->json([
                'message' => 'Pengumuman berhasil dibuat',
                'data' => $announcement,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error membuat pengumuman',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified announcement
     */
    public function show($id)
    {
        $announcement = Pengumuman::with('author', 'targetClass', 'attachments')
            ->find($id);

        if (!$announcement) {
            return response()->json([
                'message' => 'Pengumuman tidak ditemukan',
            ], 404);
        }

        return response()->json($announcement);
    }

    /**
     * Update the specified announcement in storage
     */
    public function update(Request $request, $id)
    {
        $announcement = Pengumuman::find($id);

        if (!$announcement) {
            return response()->json([
                'message' => 'Pengumuman tidak ditemukan',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'target_audience' => 'sometimes|in:all,parents,teachers,class',
            'target_class_id' => 'nullable|exists:classes,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $announcement->update($request->only([
                'title', 'content', 'target_audience', 'target_class_id'
            ]));

            $announcement->load('author', 'targetClass', 'attachments');

            return response()->json([
                'message' => 'Pengumuman berhasil diperbarui',
                'data' => $announcement,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error memperbarui pengumuman',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified announcement from storage
     */
    public function destroy($id)
    {
        $announcement = Pengumuman::find($id);

        if (!$announcement) {
            return response()->json([
                'message' => 'Pengumuman tidak ditemukan',
            ], 404);
        }

        try {
            // Delete associated attachments
            foreach ($announcement->attachments as $attachment) {
                if (Storage::exists($attachment->file_path)) {
                    Storage::delete($attachment->file_path);
                }
                $attachment->delete();
            }

            $announcement->delete();

            return response()->json([
                'message' => 'Pengumuman berhasil dihapus',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error menghapus pengumuman',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get announcements for a specific class
     */
    public function getByClass($classId)
    {
        $announcements = Pengumuman::where(function ($query) use ($classId) {
            $query->where('target_audience', 'all')
                  ->orWhere(function ($q) use ($classId) {
                      $q->where('target_audience', 'class')
                        ->where('target_class_id', $classId);
                  });
        })->with('author', 'attachments')
          ->orderBy('created_at', 'desc')
          ->get();

        return response()->json($announcements);
    }

    /**
     * Get announcement statistics
     */
    public function getStatistics()
    {
        return response()->json([
            'total_announcements' => Pengumuman::count(),
            'announcements_this_month' => Pengumuman::whereMonth('created_at', now()->month)
                ->whereYear('created_at', now()->year)
                ->count(),
            'by_audience' => [
                'all' => Pengumuman::where('target_audience', 'all')->count(),
                'parents' => Pengumuman::where('target_audience', 'parents')->count(),
                'teachers' => Pengumuman::where('target_audience', 'teachers')->count(),
                'class' => Pengumuman::where('target_audience', 'class')->count(),
            ],
        ]);
    }

    /**
     * Upload attachment to announcement
     */
    public function uploadAttachment(Request $request, $announcementId)
    {
        $announcement = Pengumuman::find($announcementId);

        if (!$announcement) {
            return response()->json([
                'message' => 'Pengumuman tidak ditemukan',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'file' => 'required|file|max:10240', // 10MB
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            if ($request->hasFile('file')) {
                $attachment = $this->storeAttachment($announcement, $request->file('file'));

                return response()->json([
                    'message' => 'File berhasil diupload',
                    'data' => $attachment,
                ], 201);
            }

            return response()->json([
                'message' => 'Tidak ada file untuk diupload',
            ], 400);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error upload file',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Delete attachment from announcement
     */
    public function deleteAttachment($attachmentId)
    {
        $attachment = Attachment::find($attachmentId);

        if (!$attachment) {
            return response()->json([
                'message' => 'Attachment tidak ditemukan',
            ], 404);
        }

        try {
            if (Storage::exists($attachment->file_path)) {
                Storage::delete($attachment->file_path);
            }

            $attachment->delete();

            return response()->json([
                'message' => 'Attachment berhasil dihapus',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error menghapus attachment',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Show the form for creating a new announcement
     */
    public function create()
    {
        $gurus = Guru::orderBy('name')->get();
        $classes = Kelas::select('id', 'name', 'group')->orderBy('group')->get();

        return Inertia::render('announcements/create', [
            'gurus' => $gurus,
            'classes' => $classes,
        ]);
    }

    /**
     * Display the specified announcement (Inertia version)
     */
    public function showInertia(Pengumuman $pengumuman)
    {
        $pengumuman->load(['author', 'targetClass', 'attachments']);

        if (request()->wantsJson()) {
            return response()->json($pengumuman);
        }

        return Inertia::render('announcements/show', [
            'announcement' => $pengumuman,
        ]);
    }

    /**
     * Show the form for editing the specified announcement
     */
    public function edit(Pengumuman $pengumuman)
    {
        $pengumuman->load('author', 'targetClass', 'attachments');
        $gurus = Guru::orderBy('name')->get();
        $classes = Kelas::select('id', 'name', 'group')->orderBy('group')->get();

        return Inertia::render('announcements/edit', [
            'announcement' => $pengumuman,
            'gurus' => $gurus,
            'classes' => $classes,
        ]);
    }

    /**
     * Update the specified announcement (Inertia version)
     */
    public function updateInertia(Request $request, Pengumuman $pengumuman)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'target_audience' => 'sometimes|in:all,parents,teachers,class',
            'target_class_id' => 'nullable|exists:classes,id',
        ]);

        if ($validator->fails()) {
            if ($request->header('X-Inertia')) {
                return redirect()->back()->withErrors($validator)->withInput();
            }
            return response()->json($validator->errors(), 422);
        }

        // Validate that if target_audience is 'class', target_class_id must be provided
        if ($request->target_audience === 'class' && empty($request->target_class_id)) {
            if ($request->header('X-Inertia')) {
                return redirect()->back()->withErrors(['target_class_id' => 'Target kelas harus dipilih jika audience adalah class'])->withInput();
            }
            return response()->json([
                'message' => 'Target kelas harus dipilih jika audience adalah class',
            ], 422);
        }

        try {
            $pengumuman->update([
                'title' => $request->title ?? $pengumuman->title,
                'content' => $request->content ?? $pengumuman->content,
                'target_audience' => $request->target_audience ?? $pengumuman->target_audience,
                'target_class_id' => $request->target_class_id,
            ]);

            // Handle file uploads
            if ($request->hasFile('attachments')) {
                foreach ($request->file('attachments') as $file) {
                    $this->storeAttachment($pengumuman, $file);
                }
            }

            $pengumuman->load('author', 'targetClass', 'attachments');

            if ($request->header('X-Inertia')) {
                return redirect()->route('announcements.show', $pengumuman)->with('success', 'Pengumuman berhasil diperbarui');
            }

            return response()->json([
                'message' => 'Pengumuman berhasil diperbarui',
                'data' => $pengumuman,
            ]);
        } catch (\Exception $e) {
            if ($request->header('X-Inertia')) {
                return redirect()->back()->with('error', 'Error memperbarui pengumuman: ' . $e->getMessage());
            }

            return response()->json([
                'message' => 'Error memperbarui pengumuman',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified announcement (Inertia version)
     */
    public function destroyInertia(Pengumuman $pengumuman)
    {
        try {
            // Delete attachments first
            foreach ($pengumuman->attachments as $attachment) {
                Storage::disk('public')->delete($attachment->file_path);
                $attachment->delete();
            }

            $pengumuman->delete();

            if (request()->header('X-Inertia')) {
                return redirect()->route('announcements.index')->with('success', 'Pengumuman berhasil dihapus');
            }

            return response()->json([
                'message' => 'Pengumuman berhasil dihapus',
            ]);
        } catch (\Exception $e) {
            if (request()->header('X-Inertia')) {
                return redirect()->back()->with('error', 'Error menghapus pengumuman: ' . $e->getMessage());
            }

            return response()->json([
                'message' => 'Error menghapus pengumuman',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Store attachment helper function
     */
    private function storeAttachment($announcement, $file)
    {
        $filename = time() . '-' . $file->getClientOriginalName();
        $path = $file->storeAs('announcements/' . $announcement->id, $filename, 'public');

        $fileType = str_replace('.', '', $file->getClientOriginalExtension());

        $attachment = Attachment::create([
            'announcement_id' => $announcement->id,
            'filename' => $file->getClientOriginalName(),
            'file_path' => $path,
            'file_type' => $fileType,
            'file_size' => $file->getSize(),
        ]);

        return $attachment;
    }
}

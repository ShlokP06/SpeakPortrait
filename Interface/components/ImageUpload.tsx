'use client';

import { useCallback, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageUploadProps {
  image: File | null;
  onImageSelect: (file: File) => void;
}

export default function ImageUpload({ image, onImageSelect }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        handleImageFile(file);
      }
    }
  }, []);

  const handleImageFile = (file: File) => {
    onImageSelect(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleImageFile(files[0]);
    }
  };

  const removeImage = () => {
    setPreview(null);
    onImageSelect(null as any);
  };

  if (preview && image) {
    return (
      <Card className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="aspect-video relative">
          <img
            src={preview}
            alt="Uploaded portrait"
            className="w-full h-full object-cover"
          />
          <Button
            onClick={removeImage}
            variant="destructive"
            size="sm"
            className="absolute top-4 right-4 h-8 w-8 p-0 rounded-full shadow-lg"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4 bg-gray-800 backdrop-blur-sm">
          <p className="text-sm text-gray-300 font-medium">{image.name}</p>
          <p className="text-xs text-gray-400">
            {(image.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={`relative border-2 border transition-all duration-200 cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/50 ${
        dragActive ? 'border-indigo-500 bg-indigo-50' : 'border-slate-300'
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
      />
      
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
            {dragActive ? (
              <Upload className="h-8 w-8 text-indigo-600 animate-bounce" />
            ) : (
              <ImageIcon className="h-8 w-8 text-indigo-600" />
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-200 mb-2">
          {dragActive ? 'Drop your image here' : 'Upload Portrait Image'}
        </h3>
        
        <p className="text-gray-300 mb-6 max-w-sm">
          Drag and drop your portrait image here, or click to browse. 
          Best results with clear, well-lit face photos.
        </p>
        
        <Button variant="outline" className="pointer-events-none">
          <Upload className="mr-2 h-4 w-4" />
          Choose Image
        </Button>
        
        <p className="text-xs text-gray-300 mt-4">
          Supports JPG, PNG, WEBP
        </p>
      </div>
    </Card>
  );
}
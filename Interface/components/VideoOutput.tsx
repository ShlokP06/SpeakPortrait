'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, RotateCcw, Share2, Play } from 'lucide-react';

interface VideoOutputProps {
  videoUrl: string;
  onReset: () => void;
}

export default function VideoOutput({ videoUrl, onReset }: VideoOutputProps) {
  const handleDownload = async () => {
    try {
      const response = await fetch(videoUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `speakportrait-${Date.now()}.mp4`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Speaking Portrait',
          text: 'Check out this amazing speaking portrait I created with SpeakPortrait!',
          url: videoUrl,
        });
      } catch (error) {
        console.error('Sharing failed:', error);
      }
    } else {
      navigator.clipboard.writeText(videoUrl);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Video Generated Successfully!
        </div>
        <h2 className="text-3xl font-bold text-gray-300 mb-2">Your Speaking Portrait</h2>
        <p className="text-gray-300">Your AI-generated speaking portrait is ready to watch and share!</p>
      </div>

      <Card className="overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="aspect-video relative bg-black rounded-t-lg overflow-hidden">
          <video
            src={videoUrl}
            controls
            autoPlay
            muted
            className="w-full h-full object-cover"
            poster="/api/placeholder/800/450"
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Video overlay with play button styling */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <Play className="h-8 w-8 text-white ml-1" />
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-black backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleDownload}
              className="flex-1 sm:flex-none bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Video
            </Button>
            
            <Button
              onClick={handleShare}
              variant="outline"
              className="flex-1 sm:flex-none hover:bg-blue-50 hover:border-blue-300"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            
            <Button
              onClick={onReset}
              variant="outline"
              className="flex-1 sm:flex-none hover:bg-slate-50 hover:border-slate-300"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Create Another
            </Button>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-center text-sm text-slate-500">
              Video ready for download • Share with friends • Create more portraits
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
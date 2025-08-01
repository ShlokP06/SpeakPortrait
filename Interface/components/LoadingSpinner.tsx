'use client';

import { Card } from '@/components/ui/card';
import { Sparkles, Wand2 } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <Card className="p-12 text-center ">
      <div className="space-y-6">
        {/* Animated Icon */}
        <div className="relative mx-auto w-20 h-20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-spin">
            <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
              <Wand2 className="h-8 w-8 text-indigo-600 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-gray-200">
            Creating Your Speaking Portrait
          </h3>
          <p className="text-gray-400 max-w-md mx-auto">
            Our AI is working its magic to bring your portrait to life. This usually takes 30-60 seconds.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="space-y-4 max-w-sm mx-auto">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-500">Processing your image...</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-75"></div>
            <span className="text-gray-500">Analyzing facial features...</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-150"></div>
            <span className="text-gray-500">Generating speech animation...</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-300"></div>
            <span className="text-gray-500">Rendering final video...</span>
          </div>
        </div>

      </div>
    </Card>
  );
}
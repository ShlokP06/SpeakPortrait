'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import ImageUpload from '@/components/ImageUpload';
import InputSelector from '@/components/InputSelector';
import VideoOutput from '@/components/VideoOutput';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';


  export default function SpeakPortraitApp() {
    const [state, setState] = useState({
      image: null,
      inputType: 'text',
      textInput: '',
      audioFile: null,
      referenceAudio: null,
      emotion: 'default',
      isLoading: false,
      isGeneratingAudio: false,
      error: null,
      generatedVideo: null,
      generatedAudio: null,
      isGeneratingText: false,
    });

    const mapping = {
      "happy": "e1",
      "sad": "e2",
      "disgust": "e3",
      "fear": "e4",
      "surprised": "e5",
      "angry": "e6"
    }

    const emotionNameToIndex = {
      "angry": 0,
      "disgust": 1,
      "fear": 2,  
      "happy": 3, 
      "default": 4,
      "sad": 5,
      "surprised": 6,
      "contempt": 7
    };


    const updateState = (updates) => {
      setState(prev => ({ ...prev, ...updates }));
    };

  const handleGenerate = async () => {
    if (!state.image) {
      updateState({ error: 'Please upload an image first.' });
      return;
    }

    if (state.inputType === 'text' && !state.textInput.trim()) {
      updateState({ error: 'Please enter some text to generate speech.' });
      return;
    }

    if (state.inputType === 'audio' && !state.audioFile) {
      updateState({ error: 'Please upload an audio file.' });
      return;
    }

    updateState({ isLoading: true, error: null, generatedVideo: null });

    try {
      const formData = new FormData();
      formData.append('image', state.image);
      const emotionKey = state.emotion;
      const emotionIndex = emotionNameToIndex[emotionKey] ?? 4;
      formData.append('emotion', emotionIndex)

      if (state.inputType === 'text') {
        const audioResponse = await fetch(state.generatedAudio);
        const audioBlob = await audioResponse.blob();
        const file = new File([audioBlob], 'generated_audio.wav', { type: 'audio/wav' });
        formData.append('audio', file);
      } else {
        formData.append('audio', state.audioFile);
      }

      const response = await fetch('/api/generate', {
        method: 'POST',
        body: formData,
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();

      if (result.video_url) {
        updateState({ generatedVideo: result.video_url });
      } else {
        throw new Error('No video URL returned from server');
      }
    } catch (error) {
      console.error('Generation error:', error);
      updateState({
        error: error?.message || 'Failed to generate video. Please try again.',
      });
    } finally {
      updateState({ isLoading: false });
    }
  };

  const handleGenerateTTS = async () => {
  updateState({ isGeneratingAudio: true, error: null, generatedAudio: null });

  try {
    const formData = new FormData();
    const keys = [];
    const emotionalKey = mapping[state.emotion];
    formData.append('text', state.textInput);
    if (state.referenceAudio) {
      formData.append('speaker_audio', state.referenceAudio);
    }
    if(!state.referenceAudio){
      keys.push("speaker")
    }
    if(state.emotion === "default" ){
      keys.push("emotion")
    }
    formData.append("unconditional_keys", JSON.stringify(keys));
    if (state.emotion){
      const newEmotionalState = {};
      for (let i=1; i<=8; i++){
        const key = `e${i}`;
        newEmotionalState[key] = (key === emotionalKey) ? 0.95: 0.05;
      }
      formData.append('emotionalKeys', JSON.stringify(newEmotionalState));
    }
    const res = await fetch('/api/zonos', {
      method: 'POST',
      body: formData,
    });

    const result = await res.json();

    if (!res.ok || !result.audioUrl) {
      throw new Error('Failed to generate audio');
    }

      updateState({ generatedAudio: result.audioUrl });
    } catch (err) {
      console.error(err);
      updateState({
        error: err?.message || 'Audio generation failed',
      });
    } finally {
      updateState({ isGeneratingAudio: false });
    }
  };

  const handleGenerateShortText = async () => {
    updateState({ isGeneratingText: true });
    try {
      const res = await fetch('/api/shortgen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: state.textInput }),
      });

      const data = await res.json();
      if (data?.output) {
        updateState({ textInput: data.output });
      } else {
        updateState({ error: 'Text generation failed.' });
      }
    } catch (err) {
      updateState({ error: 'Failed to generate text.' });
    } finally {
      updateState({ isGeneratingText: false });
    }
  };


    const canGenerate = state.image &&
      ((state.inputType === 'text' && state.textInput.trim()) ||
        (state.inputType === 'audio' && state.audioFile));

    return (
      <div className="min-h-screen bg-[#060010] relative overflow-hidden">
        {/* Animated background grid */}
        <div className="fixed inset-0">
          {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}
          {/* <WavyBackground blur={10}/> */}
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>
        <div className="relative container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative">
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                SpeakPortrait
              </h1>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transform your photos into captivating speaking portraits with the power of AI.
              Upload an image and add your voice or text to create amazing talking videos.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 backdrop-blur-sm border-0 shadow-xl border">
              {state.isLoading ? (
                <LoadingSpinner />
              ) : state.generatedVideo ? (
                <VideoOutput
                  videoUrl={state.generatedVideo}
                  onReset={() => updateState({ generatedVideo: null, referenceAudio: null })}
                />
              ) : (
                <div className="space-y-8">
                  {/* Image Upload Section */}
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-indigo-600 font-bold text-sm">1</span>
                      </div>
                      Upload Your Portrait
                    </h2>
                    <ImageUpload
                      image={state.image}
                      onImageSelect={(file) => updateState({ image: file, error: null })}
                    />
                  </div>

                  {/* Input Selection */}
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-indigo-600 font-bold text-sm">2</span>
                      </div>
                      Choose Your Input
                    </h2>
                    <InputSelector
                      inputType={state.inputType}
                      textInput={state.textInput}
                      audioFile={state.audioFile}
                      onInputTypeChange={(type) => updateState({ inputType: type, error: null })}
                      onTextChange={(text) => updateState({ textInput: text, error: null })}
                      onAudioSelect={(file) => updateState({ audioFile: file, error: null })}
                      onReferenceAudioSelect={(file) => updateState({ referenceAudio: file })}
                      onEmotionSelect={(emotion) => updateState({ emotion })}
                      generatedAudioUrl={state.generatedAudio}
                      isGeneratingVoice={state.isGeneratingAudio}
                      onGenerateVoice={handleGenerateTTS}
                      isGeneratingText={state.isGeneratingText}
                      onGenerateShortText={handleGenerateShortText}
                    />
                  </div>

                  {/* Error Display */}
                  {state.error && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                      <p className="text-red-700 text-sm font-medium">{state.error}</p>
                    </div>
                  )}

                  {/* Generate Button */}
                  <div className="flex justify-center pt-4">
                    <Button
                      onClick={handleGenerate}
                      disabled={!canGenerate}
                      size="lg"
                      className="px-8 py-4 text-lg rounded-full font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Generate Speaking Portrait
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 text-slate-500 text-sm"></div>
        </div>
      </div>
    );
  }

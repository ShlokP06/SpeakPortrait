'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Type,
  Mic,
  Upload,
  X,
  Volume2,
  MicIcon,
  FileAudio,
} from 'lucide-react'
import {FFmpeg} from '@ffmpeg/ffmpeg';
import {fetchFile} from '@ffmpeg/util'

const EMOTION_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'happy', label: 'Happy'},
  { value: 'sad', label: 'Sad'},
  { value: 'disgust', label: 'Disgust'},
  { value: 'fear', label: 'Fear'},
  { value: 'surprised', label: 'Surprised'},
  { value: 'angry', label: 'Angry'},
]

export default function InputSelector({
  inputType,
  textInput,
  audioFile,
  onInputTypeChange,
  onTextChange,
  onAudioSelect,
  onReferenceAudioSelect,
  onEmotionSelect,
  generatedAudioUrl,
  isGeneratingVoice,
  onGenerateVoice,
  isGeneratingText,
  onGenerateShortText
}) {
  const [audioPreview, setAudioPreview] = useState(null)
  const [selectedEmotion, setSelectedEmotion] = useState('default')
  const [referenceAudio, setReferenceAudio] = useState(null)
  const [referenceAudioPreview, setReferenceAudioPreview] = useState(null)
  const [isRecording, setIsRecording] = useState(false)
  const [mediaRecorder, setMediaRecorder] = useState(null)

  const handleAudioFile = (file) => {
    onAudioSelect(file)
    const url = URL.createObjectURL(file)
    setAudioPreview(url)
  }
  
  const handleAudioInput = (e) => {
    const files = e.target.files
    if (files && files[0]) {
      handleAudioFile(files[0])
    }
  }

  const handleReferenceAudioInput = (e) => {
    const files = e.target.files
    if (files && files[0]) {
      const file = files[0]
      setReferenceAudio(file)
      onReferenceAudioSelect(file)
      const url = URL.createObjectURL(file)
      setReferenceAudioPreview(url)
    }
  }

  const removeAudio = () => {
    if (audioPreview) {
      URL.revokeObjectURL(audioPreview)
      setAudioPreview(null)
    }
    onAudioSelect(null)
  }

  const removeReferenceAudio = () => {
    if (referenceAudioPreview) {
      URL.revokeObjectURL(referenceAudioPreview)
      setReferenceAudioPreview(null)
    }
    setReferenceAudio(null)
    onReferenceAudioSelect(null)
  }

  async function convertWebmToMp3(webmBlob) {
    const ffmpeg = new FFmpeg();
    await ffmpeg.load();
    const inputName = 'input.webm';
    const outputName = 'output.mp3';
    await ffmpeg.writeFile(inputName, await fetchFile(webmBlob));
    await ffmpeg.exec(['-i', inputName, outputName]);
    const outputData = await ffmpeg.readFile(outputName);
    const outputBlob = new Blob([outputData.buffer], { type: 'audio/mp3' });
    return outputBlob;
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const recorder = new MediaRecorder(stream)
      const chunks = []
      recorder.ondataavailable = (e) => {
        chunks.push(e.data)
      }
      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: 'audio/webm' })
        try {
          const mp3Blob = await convertWebmToMp3(blob)
          const mp3File = new File([mp3Blob], `reference-audio-${Date.now()}.mp3`, {
            type: 'audio/mp3',
          })
          setReferenceAudio(mp3File)
          onReferenceAudioSelect(mp3File)
          const url = URL.createObjectURL(mp3Blob)
          setReferenceAudioPreview(url)
        } catch (error) {
          console.error('Conversion failed:', error)
        }
        stream.getTracks().forEach((track) => track.stop())
      }
      recorder.start()
      setMediaRecorder(recorder)
      setIsRecording(true)
    } catch (error) {
      console.error('Error starting recording:', error)
    }
  }
  
  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop()
      setIsRecording(false)
      setMediaRecorder(null)
    }
  }

  return (
    <div className="space-y-6">
      {/* Input Type Selector */}
      <div className="flex gap-3">
        <Button
          variant={inputType === 'text' ? 'default' : 'outline'}
          onClick={() => onInputTypeChange('text')}
          className={`flex-1 h-12 transition-all duration-200 ${
            inputType === 'text'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'
              : 'hover:bg-indigo-50 hover:border-indigo-300'
          }`}
        >
          <Type className="mr-2 h-4 w-4" />
          Text Input
        </Button>
        <Button
          variant={inputType === 'audio' ? 'default' : 'outline'}
          onClick={() => onInputTypeChange('audio')}
          className={`flex-1 h-12 transition-all duration-200 ${
            inputType === 'audio'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'
              : 'hover:bg-indigo-50 hover:border-indigo-300'
          }`}
        >
          <Mic className="mr-2 h-4 w-4" />
          Audio Upload
        </Button>
      </div>

      {/* Text Input */}
      {inputType === 'text' && (
        <Card className="p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-3">
              <Type className="h-5 w-5 text-indigo-600" />
              <h3 className="font-semibold text-gray-200">Enter Your Text</h3>
            </div>

            {/* Emotion */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-200">Voice Emotion</label>
              <Select
                value={selectedEmotion}
                onValueChange={(val) => {
                  setSelectedEmotion(val)
                  onEmotionSelect(val)
                }}
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select emotion" />
                </SelectTrigger>
                <SelectContent>
                  {EMOTION_OPTIONS.map((emotion) => (
                    <SelectItem key={emotion.value} value={emotion.value}>
                      <div className="flex flex-col">
                        <span className="font-medium">{emotion.label}</span>
                        <span className="text-xs text-slate-500">{emotion.description}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Textarea */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-200">Your Text</label>
              <Textarea
                placeholder="Enter the text you want your portrait to speak. Be creative and expressive!"
                value={textInput}
                onChange={(e) => onTextChange(e.target.value)}
                className="min-h-32 resize-none border-slate-200 focus:border-indigo-300 focus:ring-indigo-200 bg-white"
              />
              <div className="flex justify-between items-center text-xs text-slate-500">
                <span>Write naturally - AI will handle the rest</span>
                <span>{textInput.length}/500</span>
              </div>
            </div>
            <Button
              className="mt-2"
              variant="outline"
              onClick={onGenerateShortText}
              disabled={!textInput || isGeneratingText}
            >
              {isGeneratingText ? 'Generating...' : 'Auto Complete Prompt'}
            </Button>

            {/* Reference Audio Upload */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <label className="text-sm font-medium text-gray-200">Reference Voice (Optional)</label>
              <p className="text-xs text-slate-500 mb-3">
                Upload a sample audio to match the voice style and tone
              </p>

              {referenceAudio && referenceAudioPreview ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Volume2 className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {referenceAudio.name}
                        </p>
                        <p className="text-xs text-slate-600">
                          {(referenceAudio.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={removeReferenceAudio}
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:bg-red-50 hover:border-red-300 bg-transparent"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <audio controls src={referenceAudioPreview} className="w-full h-8" />
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleReferenceAudioInput}
                    className="hidden"
                    id="reference-audio-upload"
                  />
                  <label htmlFor="reference-audio-upload" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full cursor-pointer" asChild>
                      <span>
                        <FileAudio className="mr-2 h-4 w-4" />
                        Upload File
                      </span>
                    </Button>
                  </label>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`${isRecording ? 'bg-red-50 border-red-300 text-red-600' : ''}`}
                  >
                    <MicIcon className={`mr-2 h-4 w-4 ${isRecording ? 'animate-pulse' : ''}`} />
                    {isRecording ? 'Stop' : 'Record'}
                  </Button>
                </div>
              )}
            </div>
            {/* Generate Audio Button */}
            {textInput.trim() && (
              <div className='p-4'>
                <Button disabled={isGeneratingVoice} onClick={() => onGenerateVoice(textInput, referenceAudio)}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg disabled:opacity-50">
                  {isGeneratingVoice ? 'Generating Voice...' : 'Generate Audio from text'}
                </Button>
              </div>
            )}
            {/* Generated Audio Playback */}
            {generatedAudioUrl && (
              <div className="pt-4 border-t border-slate-200">
                <label className="text-sm font-medium text-gray-200 mb-2 block">
                  Generated Audio
                </label>
                <audio controls src={generatedAudioUrl} className="w-full h-10" />
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Audio Input */}
      {inputType === 'audio' && (
        <Card className="p-6">

      {/* Emotion */}
          <div className="space-y-3 mb-5">
            <label className="text-sm font-medium text-gray-200">Voice Emotion</label>
            <Select
              value={selectedEmotion}
              onValueChange={(val) => {
                setSelectedEmotion(val)
                onEmotionSelect(val)
              }}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select emotion" />
              </SelectTrigger>
              <SelectContent>
                {EMOTION_OPTIONS.map((emotion) => (
                  <SelectItem key={emotion.value} value={emotion.value}>
                    <div className="flex flex-col">
                      <span className="font-medium">{emotion.label}</span>
                      <span className="text-xs text-slate-500">{emotion.description}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
              
          {audioFile && audioPreview ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Volume2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-100">{audioFile.name}</p>
                    <p className="text-sm text-slate-500">{(audioFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <Button
                  onClick={removeAudio}
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:bg-red-50 hover:border-red-300 bg-transparent"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <audio controls src={audioPreview} className="w-full" />
            </div>
          ) : (
            <div className="text-center">
              <div className="flex items-center gap-2 mb-4 justify-center">
                <Mic className="h-5 w-5 text-indigo-600" />
                <h3 className="font-semibold text-gray-100">Upload Audio File</h3>
              </div>

              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <Upload className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-gray-300 mb-4">
                  Upload an audio file with the speech you want your portrait to speak
                </p>
              </div>

              <input type="file" accept="audio/*" onChange={handleAudioInput} className="hidden" id="audio-upload" />
              <label htmlFor="audio-upload">
                <Button variant="outline" className="cursor-pointer" asChild>
                  <span>
                    <Upload className="mr-2 h-4 w-4" />
                    Choose Audio File
                  </span>
                </Button>
              </label>

              <p className="text-xs text-gray-300 mt-4">Supports MP3, WAV, M4A</p>
            </div>
          )}
        </Card>
      )}
    </div>
  )
}

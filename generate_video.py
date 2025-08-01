# generate_video.py

from flask import Flask, request, send_file
from pyngrok import ngrok
import os
import numpy as np
import librosa

from your_model_lib import StreamSDK, run  # Adjust this import to your actual SDK script
from your_config import cfg_pkl, data_root  # Adjust accordingly

app = Flask(__name__)
ngrok.set_auth_token('2zBytGMcVk9x9BMsHaTl8LHQCsk_4ruiCTWtjRUNjapivYdEd')
public_url = ngrok.connect(5000)
print(f"🔗 Public URL: {public_url}")

def get_seq_len_from_audio(audio_path, fps=25, target_sr=16000):
    audio, sr = librosa.load(audio_path, sr=target_sr)
    duration_sec = len(audio) / sr
    return int(duration_sec * fps)

@app.route('/generate', methods=['POST'])
def generate():
    image = request.files.get('image')
    audio = request.files.get('audio')
    emotion_index = request.form.get('emotion')

    if not image or not audio or emotion_index is None:
        return "Missing image, audio, or emotion", 400

    try:
        emotion_index = int(emotion_index)
        if not (0 <= emotion_index <= 7):
            return "Emotion index must be between 0 and 7", 400
    except ValueError:
        return "Emotion index must be an integer", 400

    image_path = "/content/image.png"
    audio_path = "/content/audio.wav"
    output_path = "/content/result.mp4"
    image.save(image_path)
    audio.save(audio_path)

    try:
        seq_len = get_seq_len_from_audio(audio_path)
        emo_arr = np.zeros((seq_len, 8), dtype=np.float32)
        emo_arr[:, emotion_index] = 1.0

        setup_kwargs = {"emo": emo_arr}
        more_kwargs = {"setup_kwargs": setup_kwargs, "run_kwargs": {}}

        SDK = StreamSDK(cfg_pkl, data_root)
        run(SDK, audio_path, image_path, output_path, more_kwargs=more_kwargs)
        del SDK

    except Exception as e:
        return f"Inference failed: {e}", 500

    if not os.path.exists(output_path):
        return "Video not found", 500

    return send_file(output_path, mimetype="video/mp4", as_attachment=True)

if __name__ == "__main__":
    app.run(port=5000)

<h2 align='center'>SpeakPortrait: Audio-Driven Talking Head Animation</h2>

This repository contains a re-implementation and extension of AntGroup's [Ditto](https://github.com/antgroup/ditto-talkinghead), a state-of-the-art system for audio-driven talking head animation. We build upon SpeakPortrait's foundation (~80% of the core pipeline), and added improvements to the UI, backend inference interface, and model deployment. This project enables real-time generation of photorealistic talking head videos given an input image and audio clip.

Our modifications include:
- Added A Next.js Frontend and **Ngrok Backend** for seamless and user friendly interfacing. <br>
- Added **Zonos TTS** to the pipeline, to support text inputs. <br>
- The TTS Supports **Emotional Voice Generation** as well as **Zero-Shot Voice Cloning**. <br>
- Used **Qwen LLM API** in our Next.js frontend to help users in completing dialogues and prompting

## Setup
Clone the codes from [GitHub](https://github.com/ShlokP06/SpeakPortrait):  
```bash
git clone https://github.com/ShlokP06/SpeakPortrait
cd SpeakPortrait
```

### Conda
Create `conda` environment:
```bash
conda env create -f environment.yaml
conda activate ditto
```

### Pip
If you have problems creating a conda environment, you can also refer to our [Colab](https://colab.research.google.com/drive/19SUi1TiO32IS-Crmsu9wrkNspWE8tFbs?usp=sharing). 
After correctly installing `pytorch`, `cuda` and `cudnn`, you only need to install a few packages using pip:
```bash
pip install \
    tensorrt==8.6.1 \
    librosa \
    tqdm \
    filetype \
    imageio \
    opencv_python_headless \
    scikit-image \
    cython \
    cuda-python \
    imageio-ffmpeg \
    colored \
    polygraphy \
    numpy==2.0.1
```

If you don't use `conda`, you may also need to install `ffmpeg` according to the [official website](https://www.ffmpeg.org/download.html).
Alternatively, on a Linux-based platform such as Colab run 
```bash
bash setup.sh
```
The setup.sh file installs ffmpeg and libcudnn, as well as the dependencies listed in requirements.txt.

## NGROK Connection
To support NGROK Tunneling and frontend-backend connection, you need to create Ngrok Authentication Token from their [Official Website](https://ngrok.com/), and paste it in generate_video.py or colab notebook in the following format:
```bash
ngrok.set_auth_token('')            #Enter your token here: generate_video.py line 15, video_generation.ipynb last cell, line 8
```

## 📥 Download Checkpoints

Download checkpoints from [HuggingFace](https://huggingface.co/digital-avatar/ditto-talkinghead) and put them in `checkpoints` dir:
```bash
git lfs install
git clone https://huggingface.co/digital-avatar/ditto-talkinghead checkpoints
```
Alternatively, run the following python file for model download:
```bash
python download_models.py
```

The `checkpoints` should be like:
```text
./checkpoints/
├── ditto_cfg
│   ├── v0.4_hubert_cfg_trt.pkl
│   └── v0.4_hubert_cfg_trt_online.pkl
|   └── v0.4_hubert_cfg_pytorch.pkl
├── ditto_onnx
│   ├── appearance_extractor.onnx
│   ├── blaze_face.onnx
│   ├── decoder.onnx
│   ├── face_mesh.onnx
│   ├── hubert.onnx
│   ├── insightface_det.onnx
│   ├── landmark106.onnx
│   ├── landmark203.onnx
│   ├── libgrid_sample_3d_plugin.so
│   ├── lmdm_v0.4_hubert.onnx
│   ├── motion_extractor.onnx
│   ├── stitch_network.onnx
│   └── warp_network.onnx
└── ditto_trt_Ampere_Plus
    ├── appearance_extractor_fp16.engine
    ├── blaze_face_fp16.engine
    ├── decoder_fp16.engine
    ├── face_mesh_fp16.engine
    ├── hubert_fp32.engine
    ├── insightface_det_fp16.engine
    ├── landmark106_fp16.engine
    ├── landmark203_fp16.engine
    ├── lmdm_v0.4_hubert_fp32.engine
    ├── motion_extractor_fp32.engine
    ├── stitch_network_fp16.engine
    └── warp_network_fp16.engine
└── ditto_pytorch
    ├── aux_models
    │   ├── 2d106det.onnx
    │   ├── det_10g.onnx
    │   ├── face_landmarker.task
    │   ├── hubert_streaming_fix_kv.onnx
    │   └── landmark203.onnx
    └── models
        ├── appearance_extractor.pth
        ├── decoder.pth
        ├── lmdm_v0.4_hubert.pth
        ├── motion_extractor.pth
        ├── stitch_network.pth
        └── warp_network.pth
```

- The `ditto_cfg/v0.4_hubert_cfg_trt_online.pkl` is online config
- The `ditto_cfg/v0.4_hubert_cfg_trt.pkl` is offline config.
- The `ditto_cf/v0.4_hubert_cfg_pytorch.pkl` is the Pytorch model config.


## 🚀 Inference 
### To connect to backend
For inference, if you want to see the execution step by step and temper with the parameters, we provide a [Colab Notebook](https://github.com/ShlokP06/SpeakPortrait/blob/main/Interface/backend_script/Video_generation.ipynb) for reference.
Using the ngrok link generated in the final cell, you can connect to the frontend.
You can also run the backend using [generate_video.py](https://github.com/ShlokP06/SpeakPortrait/blob/main/generate_video.py) as follows:
```bash
python generate_video.py
```
Using the ngrok link generated, you can connect to the frontend.
In the [Interface](https://github.com/ShlokP06/SpeakPortrait/blob/main/Interface) create a file named .env.local and paste your Huggingface Access Token (For Auto Completing text) and Ngrok Tunnel Public URL:
```bash
NEXT_PUBLIC_API_URL =           #Your NGROK URL, without quotes
HF_API_KEY =            #Your HF Access toke, without quotes
```
### To run the Frontend
Now run the following commands
```bash
cd Interface
#Install project dependencies
npm install

#Start the development server
npm run dev
```
Note: You may see some deprecation warnings during `npm install`, but they do not prevent the app from running.
Now, the frontend-backend interface is working!

### TTS
If you further want to use the Zonos TTS, run [Zonos.tts.ipynb](https://github.com/ShlokP06/SpeakPortrait/blob/main/Interface/backend_script/Zonos_tts.ipynb), and use the generated url to paste inside [Route.js]()
## 📧 Acknowledgement
This work is primarily built on AntGroup's [Ditto](https://github.com/antgroup/ditto-talkinghead), which forms the backbone (~80%) of our implementation. We sincerely thank their team for open-sourcing such a well-engineered system.

We also draw inspiration from:
-[S2G-MDDiffusion](https://github.com/thuhcsi/S2G-MDDiffusion)
-[LivePortrait](https://github.com/KwaiVGI/LivePortrait)

If we've overlooked any contributors, please let us know — we’ll gladly update the acknowledgements.

## ⚖️ License
This repository is released under the Apache-2.0 license as found in the [LICENSE](LICENSE) file.
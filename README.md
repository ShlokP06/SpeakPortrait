<h2 align='center'>SpeakPortrait: Audio-Driven Talking Head Animantion</h2>

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
### To run the Frontend
```bash
cd Interface
#Install project dependencies
npm install

#Start the development server
npm run dev
```

### To connect to backend
For inference, if you want to see the execution step by step and temper with the parameters, we provide a [Colab Notebook](https://github.com/ShlokP06/SpeakPortrait/blob/main/Interface/backend_script/Video_generation.ipynb) for reference.
Using the ngrok link generated in the final cell, you can connect to the frontend.
You can also run the backend as follows:
```bash
python generate_video.py
```
Using the ngrok link generated, you can connect to the frontend.

## 📧 Acknowledgement
Our implementation is based on [S2G-MDDiffusion](https://github.com/thuhcsi/S2G-MDDiffusion) and [LivePortrait](https://github.com/KwaiVGI/LivePortrait). Thanks for their remarkable contribution and released code! If we missed any open-source projects or related articles, we would like to complement the acknowledgement of this specific work immediately.

## ⚖️ License
This repository is released under the Apache-2.0 license as found in the [LICENSE](LICENSE) file.
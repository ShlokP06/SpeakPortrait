<h2 align='center'>Ditto: Motion-Space Diffusion for Controllable Realtime Talking Head Synthesis</h2>

Clone the codes from [GitHub](https://github.com/antgroup/ditto-talkinghead):  
```bash
git clone https://github.com/antgroup/ditto-talkinghead
cd ditto-talkinghead
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
```

- The `ditto_cfg/v0.4_hubert_cfg_trt_online.pkl` is online config
- The `ditto_cfg/v0.4_hubert_cfg_trt.pkl` is offline config


## 🚀 Inference 

Run `inference.py`:

```shell
python inference.py \
    --data_root "<path-to-trt-model>" \
    --cfg_pkl "<path-to-cfg-pkl>" \
    --audio_path "<path-to-input-audio>" \
    --source_path "<path-to-input-image>" \
    --output_path "<path-to-output-mp4>" 
```

The `checkpoints` should be like:
```text
./checkpoints/
├── ditto_cfg
│   ├── ...
│   └── v0.4_hubert_cfg_pytorch.pkl
├── ...
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

## 📧 Acknowledgement
Our implementation is based on [S2G-MDDiffusion](https://github.com/thuhcsi/S2G-MDDiffusion) and [LivePortrait](https://github.com/KwaiVGI/LivePortrait). Thanks for their remarkable contribution and released code! If we missed any open-source projects or related articles, we would like to complement the acknowledgement of this specific work immediately.

## ⚖️ License
This repository is released under the Apache-2.0 license as found in the [LICENSE](LICENSE) file.
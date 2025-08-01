# download_models.py

import os
import torch

# Clone model checkpoints from Hugging Face
if not os.path.isdir("checkpoints"):
    os.system("git lfs install")
    os.system("git clone https://huggingface.co/digital-avatar/ditto-talkinghead checkpoints")

def cvt_custom_trt():
    from scripts.cvt_onnx_to_trt import main as cvt_trt
    onnx_dir = "./checkpoints/ditto_onnx"
    trt_dir = "./checkpoints/ditto_trt_custom"
    assert os.path.isdir(onnx_dir)
    os.makedirs(trt_dir, exist_ok=True)
    grid_sample_plugin_file = os.path.join(onnx_dir, "libgrid_sample_3d_plugin.so")
    cvt_trt(onnx_dir, trt_dir, grid_sample_plugin_file)
    return trt_dir

def download_Non_Ampere_trt():
    os.system("pip install --upgrade --no-cache-dir gdown")
    os.system("gdown https://drive.google.com/drive/folders/1-1qnqy0D9ICgRh8iNY_22j9ieNRC0-zf?usp=sharing -O ./checkpoints/ditto_trt --folder")
    return "./checkpoints/ditto_trt"

if __name__ == "__main__":
    if torch.cuda.get_device_capability()[0] < 8:
        data_root = download_Non_Ampere_trt()
    else:
        data_root = "./checkpoints/ditto_trt_Ampere_Plus"
    print(f"✅ Model files are ready at: {data_root}")

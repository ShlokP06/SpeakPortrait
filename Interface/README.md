# 🗣️ SpeakPortrait

A pipeline for generating realistic, emotion-aware talking head videos using DiffTalk and prosody-aware TTS systems.

---

## 🎬 Demo

<p align="center">
  <img src="https://github.com/user-attachments/assets/d792fb57-609c-4cec-843d-223a41ec6747" width="300" />
</p>
<div align="center">
  <video src="https://github.com/user-attachments/assets/311d5bcb-ef68-44ca-b609-4573ff67f318" width="80%"> </video>
</div>
<p align="center">
  <img src="https://github.com/TanishqDhari/SpeakPortrait/blob/main/demo/image.png" width="300" />
</p>
<div align="center">
  <video src="https://github.com/user-attachments/assets/7b632029-cc4a-4561-8c4a-55cd830b8067" width="80%"> </video>
</div>

---

## 🔧 Features

- 📷 Convert portrait images into animated speaking videos
- 🧠 Lip-sync with realistic facial motion using audio
- 🎤 Voice input: pre-recorded or cloned
- 🧩 Modular backend for integrating custom TTS models

---

## 🚀 Quick Start

### 1. Clone this repository

```bash
git clone https://github.com/TanishqDhari/SpeakPortrait.git
cd speakportrait
```
### 2. Set up a Python environment

```bash
# Using conda
conda create -n speakportrait python=3.10 -y
conda activate speakportrait

# OR using virtualenv
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

> Make sure ffmpeg is installed and added to your system path.

### 4. Download pre-trained models

```bash
bash scripts/download_models.sh
```

Or manually place model checkpoints in the checkpoints/ directory (see scripts/manual_downloads.md).

### 5. Run a demo

```bash
# Using a text prompt
python demo.py --text "Hello, this is a test sentence." --output output.mp4

# Using a speech file
python demo.py --audio sample.wav --output output.mp4
```

---

## 🧪 Project Structure

```
speakportrait/
├─  data/                # Custom or downloaded datasets
├── scripts/             # Helper scripts (downloads, preprocess, align)
├── models/              # Model definitions and utils
├── outputs/             # Generated videos
├── checkpoints/         # Pretrained models
├── demo.py              # Run inference/demo
├── train.py             # Fine-tuning pipeline
└── requirements.txt     # Python dependencies
```

---

## 📅 Tentative Plan

### Week 5: Integration & Testing
- Integrate DiffTalk with TTS and prosody extraction.
- Run end-to-end pipeline tests with sample inputs.
- Identify bugs, latency issues, or mismatches in audio-visual sync.

### Week 6: Dataset Curation & Preprocessing
- Create a high-quality custom dataset using frontal YouTube videos.
- Extract frames, audio embeddings, and prosody features.
- Run Face-Alignment and DECA for tuning readiness.

### Week 7: Optimization & Fine-tuning
- Fine-tune DiffTalk to generate more emotion-aware and realistic outputs.
- Use efficient fine-tuning methodologies like LoRA/QLoRA.

### Week 8: Final Testing & Documentation
- Final integration with frontend and latency fixes.
- Setup examples for demonstration.
- Clean/document code and write README/report.

---

## 🤝 Contribution

Pull requests and issues are welcome! Please open an issue before major changes.

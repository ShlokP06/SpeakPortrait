#!/bin/bash

echo "Updating apt packages..."
apt update

echo "Installing ffmpeg and libcudnn8..."
apt install ffmpeg -y
apt install -y libcudnn8

echo "Installing Python packages from requirements.txt..."
pip install -r requirements.txt

echo "Setup complete."
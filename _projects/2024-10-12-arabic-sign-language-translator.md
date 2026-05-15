---
title: Real-Time Arabic Sign Language Translator
subtitle: An AI-powered, edge-deployed system that translates Arabic Sign Language gestures into Arabic video responses in real time — using LSTM deep learning, MediaPipe Holistic body tracking, and a PyQt6 dual-screen GUI running on NVIDIA Jetson Orin Nano.
date: 2024-10-12
image: /assets/img/projects/arabic-sign-language-translator.png
video_url: /assets/img/projects/isl-demo.mp4
category: Computer Vision & Edge AI
tech_stack: [Python, TensorFlow, Keras, LSTM, MediaPipe, OpenCV, PyQt6, NVIDIA Jetson, Edge AI, Deep Learning]
layout: project
---

## 🌟 Project Overview

The **Real-Time Arabic Sign Language Translator** is a complete, production-deployed AI system that bridges communication between Arabic Sign Language (ArSL) users and non-signers — in real time, with no internet connection required. A webcam captures the signer's gestures, a deep learning model classifies them, and the system immediately plays the corresponding Arabic instructional video on a second screen.

Arabic Sign Language is one of the most underserved languages in AI research. While most sign language tools focus on American Sign Language (ASL), this project was built specifically for Arabic-speaking deaf communities — including culturally significant signs like *Assalamualaikum* and *Wa'alaikumsalam* that are entirely absent from standard datasets.

The system was developed iteratively across **four major versions**, evolving from a single-script prototype into a fully structured, dual-pane GUI application deployed as a background system service (`systemd`) on the **NVIDIA Jetson Orin Nano** — a compact AI inference computer. This means the translator runs automatically at startup, on physical hardware, without a laptop or cloud account.

---

## 💡 What Makes This Tool Different

Most sign language recognition tools are desktop demos that classify static hand poses from a webcam. This system is fundamentally different across every dimension:

**It is the only ArSL tool that:**
- Recognises **temporal gesture sequences** (not snapshots) using stacked LSTM over 30 video frames
- Tracks **the full body** — face mesh (468 points), body pose (33 points), and both hands (42 points) — producing a rich 1,662-feature vector per frame
- Responds with **synchronised Arabic video**, making it usable by non-signers who don't know any sign language
- Runs **completely offline on embedded edge hardware**, making it viable in hospitals, schools, and remote areas without internet
- Runs as a **systemd daemon** — it starts automatically at boot, exactly like a system application, not a Python script
- Includes **Islamic greeting signs** (*Assalamualaikum*, *Wa'alaikumsalam*) designed specifically for Arabic-speaking cultural contexts

This is not a proof-of-concept. It is a deployable assistive technology device.

---

## ✨ Key Features

**Real-Time Temporal Gesture Recognition**
The system processes 30 consecutive video frames at a time, treating each sign as a motion sequence rather than a single image. A 15-frame majority voting mechanism filters out noise and accidental triggers, and a confidence threshold (0.5–0.7) ensures only stable, high-confidence predictions drive output. This makes the system robust under natural variation in how different people sign the same word.

**Holistic Body Landmark Extraction**
Using MediaPipe Holistic, the system extracts a 1,662-dimensional keypoint vector from every frame — capturing face mesh contours, full-body pose, and left and right hand landmarks simultaneously. This is significantly richer than hand-only trackers and enables the model to distinguish gestures that involve body posture, not just finger positions.

**Dual-Pane PyQt6 Application**
The main interface splits the screen into two panels: the left panel plays the corresponding Arabic video response using Qt's native media player (`QMediaPlayer` + `QVideoWidget`), while the right panel shows the live webcam feed with skeleton landmark overlays drawn in real time. The layout auto-detects screen resolution and fills the full display.

**Synchronised Arabic Video Response**
Each recognised gesture maps to a pre-recorded Arabic instructional video. When a gesture is detected, the video plays immediately. A smart playlist system tracks what was last played and prevents the same clip from repeating unnecessarily, maintaining a natural conversational flow.

**Live Probability Dashboard**
A colour-coded confidence bar chart is rendered directly on the webcam feed, showing the model's current probability score for each gesture class. This gives users and developers instant visual feedback on recognition confidence and model behaviour — useful for both operational use and debugging.

**Production-Grade Edge Deployment**
The application is configured as a `systemd` service (`signapp.service`) on the Jetson Orin Nano. It auto-starts at boot, runs inside an isolated virtual environment, and automatically restarts if it crashes — making it as reliable as any hardware appliance.

---

## 🎯 Applications

**Healthcare Settings**
Deaf patients in hospitals can communicate basic but critical needs — water, help, pain, toilet — to clinical staff who don't know sign language. The Arabic video response makes the system usable without any training on the staff side.

**Educational Environments**
The system can serve inclusive classrooms where deaf students are present, or function as a self-directed learning tool for hearing students studying Arabic Sign Language. The visual feedback and gesture confidence scores make it a natural teaching aid.

**Social and Religious Contexts**
By recognising Islamic greeting signs (*Assalamualaikum*, *Wa'alaikumsalam*), the system enables respectful, natural interaction in social settings that are deeply embedded in Arabic-speaking culture — a dimension completely missing from generic sign language tools.

**Assistive Technology Device**
Running on the compact Jetson Orin Nano with a standard webcam and speaker, this becomes an affordable, standalone communication device for deaf individuals — no cloud subscription, no laptop, no smartphone required.

**Research Platform**
The project's modular data collection and training pipeline makes it straightforward to extend: add new gesture classes, collect additional training data into the `MP_Data` directory structure, retrain the LSTM, and deploy updated weights — all without changing the application code.

---

## 🧠 Core Technical Architecture

The system is built as an integrated pipeline in which each stage feeds directly into the next — from raw webcam input to Arabic video output:

**Stage 1 — Video Capture & Frame Processing**
OpenCV opens a webcam stream and reads frames in real time. Each frame is converted from BGR to RGB for compatibility with MediaPipe, processed, then converted back for display.

**Stage 2 — MediaPipe Holistic Landmark Extraction**
Every frame is passed through MediaPipe Holistic, which detects and tracks 543 body landmarks simultaneously: 33 pose landmarks (with visibility scores), 468 face mesh points, and 21 landmarks per hand. These are flattened into a single 1,662-dimensional NumPy array per frame.

**Stage 3 — Temporal Sliding Window Buffer**
The extracted keypoint vector is appended to a rolling buffer of the last 30 frames. Once the buffer is full, the complete 30-frame sequence — shaped `(30, 1662)` — is passed to the LSTM model for classification. This sliding window runs at every new frame, meaning the model is evaluated continuously in real time.

**Stage 4 — Stacked LSTM Classification**
The sequence is fed into a Keras model built as follows: two stacked LSTM layers (64 units each, ELU activation) extract temporal gesture features, two Dropout layers (30%) prevent overfitting, two Dense layers with L2 regularisation refine the representation, and a final softmax Dense layer outputs a probability distribution over the gesture classes. The model was trained with Adam optimiser, categorical cross-entropy loss, and EarlyStopping with best-weight checkpointing.

**Stage 5 — Majority Voting & Confidence Filtering**
To prevent flickering output, the last 15 predictions must all agree on the same class *and* the current confidence score must exceed the threshold. Only then does the system register a new gesture detection and append it to the active sentence buffer.

**Stage 6 — PyQt6 Dual-Screen Output**
A confirmed gesture triggers two simultaneous outputs: the corresponding Arabic video is loaded into the left-pane `QMediaPlayer` and played immediately, while the webcam feed in the right pane is updated with landmark overlays, the probability dashboard, and a text strip showing the current recognised sentence.

**Technology Stack**

| Layer | Technology |
|---|---|
| Computer Vision | OpenCV 4.x |
| Pose & Hand Estimation | MediaPipe Holistic |
| Deep Learning Framework | TensorFlow 2.15.0 / Keras |
| Model Architecture | Stacked LSTM + Dense |
| GUI Framework | PyQt6 |
| Video Playback | Qt Multimedia (`QMediaPlayer`) |
| Hardware Platform | NVIDIA Jetson Orin Nano 4GB |
| System Deployment | Linux `systemd` service |
| Data Processing | NumPy, scikit-learn |

**Training Data**
Each gesture class was recorded as 30 sequences of 30 frames each, yielding approximately 9,000 keypoint arrays per training run. Data was collected across four iterations (`MP_Data`, `NewData_1`, `NewData_2`, `NewData_3`), with the dataset expanded and the model retrained at each version to improve accuracy and add new gesture classes.

---

## 🔬 Research & Academic Impact

**Filling a Gap in Arabic AI Research**
Arabic Sign Language is critically under-resourced compared to ASL. There are no large public ArSL keypoint datasets, no pre-trained models, and very limited academic work on ArSL recognition. Every element of this project — the dataset, the training pipeline, the deployment architecture — was built from scratch with ArSL as the primary language.

**Temporal Modelling Over Static Classification**
The majority of sign language recognition research uses CNN-based classifiers on individual frames or short clips. This project instead applies **stacked LSTMs over 30-frame sequences**, capturing the motion dynamics that define sign language — the path of the hand, the speed of the gesture, and the relationship between hand position and body pose over time. This temporal approach is both more accurate and more linguistically authentic.

**End-to-End Edge Deployment as a Research Contribution**
Most published sign language systems exist only as benchmark experiments. This project goes further: it is physically deployed on embedded hardware, runs as an OS-level service, and is designed to operate in real environments. The full deployment stack — hardware selection, systemd configuration, virtual environment isolation, application logging — represents an often-overlooked but critical phase of applied AI research.

**Multimodal Output Design**
Rather than producing text predictions (which are only useful to literate non-signers who happen to be watching a screen), this system responds with **synchronised Arabic video** — usable by people of any literacy level, by those unfamiliar with transliterated Arabic, and in settings where audio output matters. This is a meaningful design contribution to accessibility-focused AI.

**Iterative Methodology**
The system was developed and retrained four times, with each version improving gesture vocabulary, model robustness, or application architecture. This cycle of collect → train → deploy → evaluate → expand is the standard methodology of rigorous applied ML research, and its documentation here demonstrates the ability to manage a long-horizon AI project end-to-end.

---

## ✨ Key Skills Demonstrated

- **Deep Learning & Temporal Sequence Modelling** — Stacked LSTM design, ELU activation, L2 and Dropout regularisation, EarlyStopping with best-weight checkpointing, categorical cross-entropy optimisation
- **Computer Vision & Body Pose Estimation** — Real-time webcam processing with OpenCV, full MediaPipe Holistic pipeline (face mesh, pose, bilateral hand tracking), keypoint extraction and serialisation
- **Custom Dataset Engineering** — Designing and executing a data collection protocol for ArSL, structured directory-based keypoint storage, iterative dataset expansion across four training versions
- **GUI & Desktop Application Development** — Dual-pane PyQt6 architecture, real-time frame rendering via QTimer at 30ms intervals, Qt Multimedia video playback integration, fullscreen layout management
- **Edge AI & Embedded Systems Deployment** — NVIDIA Jetson Orin Nano configuration, ARM-compatible Python environment setup, `systemd` service design and deployment, application logging and crash recovery
- **AI for Accessibility & Inclusion** — Designing and deploying AI for deaf and hard-of-hearing Arabic-speaking communities; culturally informed feature selection including Islamic greeting signs
- **Applied Research Methodology** — End-to-end problem scoping, dataset design, model training, deployment, iterative improvement, and documentation of a full production AI system

import os

tech_stacks = {
    "2022-02-14-sharjah-arabic-romanization.md": "[Python, NLP, Data Processing, Regular Expressions]",
    "2023-06-01-sukounbert-arabic-diacritization.md": "[Python, BERT, PyTorch, Hugging Face, NLP]",
    "2023-10-01-isl-recognition.md": "[Python, OpenCV, MediaPipe, Scikit-Learn, Computer Vision]",
    "2023-12-01-al-murshid-dictionary.md": "[Python, Django, HTML/CSS, SQLite, Data Engineering]",
    "2024-01-01-iris-gender-recognition.md": "[MATLAB, Computer Vision, Signal Processing, Biometrics]",
    "2024-03-01-arabic-sentence-aligner.md": "[Python, Transformers, LaBSE, Hugging Face, NLP]",
    "2024-06-01-sentence-transformers-nlp.md": "[Python, PyTorch, Transformers, Sentence-BERT]",
    "2025-05-01-rubber-duck-debug-coach.md": "[React, TypeScript, Tailwind CSS, Gemini API, AI/LLMs]",
    "2026-05-15-translator-style-emulation.md": "[Python, Django, DeepSeek API, spaCy, Agentic AI]"
}

proj_dir = "/home/reshma/RESHMA_PROFILE/profile/ReshmaAbdulRazack.github.io/_projects/"

for fname, stack in tech_stacks.items():
    path = os.path.join(proj_dir, fname)
    if not os.path.exists(path):
        continue
        
    with open(path, "r") as f:
        content = f.read()
        
    if "tech_stack:" in content:
        continue
        
    # Find category line and insert tech_stack right below it
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        new_lines.append(line)
        if line.startswith('category:'):
            new_lines.append(f'tech_stack: {stack}')
            
    with open(path, "w") as f:
        f.write('\n'.join(new_lines))
        
print("Updated project files with tech_stack.")

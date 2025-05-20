# 📝 Ollama Grammar Fixer Chrome Extension

A lightweight Chrome extension that uses a **local Ollama LLM** (like LLaMA 3) to fix grammar and spelling in selected or typed text. Fast, private, and offline-friendly.

---

## ✅ Features

- Press **Enter** to submit, **Shift+Enter** for newline
- Clean, responsive popup UI
- Word and character counter
- ⏳ Shows loading spinner while processing
- 📋 Automatically copies corrected output to clipboard

---

## 🚀 Requirements

- macOS (tested on M1/M2/M4)
- [Ollama](https://ollama.com/) installed via Homebrew
- A supported model (like `llama3`) downloaded

---

## 🧠 How It Works

The extension sends your text to:

```
http://localhost:11434/api/generate
```

…which is the Ollama local server. It uses a prompt like:

> Fix the grammar and spelling in the following text:  
> `"i has a apple"`

The corrected version is returned, displayed, and copied to clipboard.

---

## 🛠 Setup Instructions

### 1. Install Ollama and LLaMA 3

```bash
brew install ollama
brew services start ollama
ollama pull llama3
```

---

### 2. Enable CORS for Ollama

```bash
launchctl setenv OLLAMA_ORIGINS "*"
brew services restart ollama
```

> ⚠️ Required so Chrome extensions can access `localhost:11434`

---

### 3. Install the Chrome Extension

1. Download or extract this repo
2. Go to `chrome://extensions`
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the folder with `manifest.json`

---

### 4. Use It

- Paste or type text
- Press `Enter` or click **Fix Grammar**
- Output appears and is copied to your clipboard

---

## 🔄 Model Switching (Optional)

To use another local model (like `mistral`, `phi`, or `dolphin-mistral`), open:

```js
background.js
```

Change:
```js
model: "llama3"
```

To:
```js
model: "mistral"
```

Or any other model you’ve downloaded via `ollama pull`.

---

## 🔐 Security

- Your text never leaves your machine
- No OpenAI keys or cloud access
- All requests go to `localhost:11434`

---

## 📦 Files

```
├── manifest.json
├── popup.html
├── popup.js
├── background.js
└── README.md
```

---

## 🙋‍♂️ Credits

Created with GPT-4 and dumb determination.

No external libraries. Just Chrome, JavaScript, and a local LLM.

---

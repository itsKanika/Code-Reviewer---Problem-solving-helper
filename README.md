<div align="center">

# 🧠✨ Code Reviewer — Problem Solving Helper

### Your friendly AI DSA mentor — review, dry-run, and vibe-check your code

[![Made with React](https://img.shields.io/badge/Frontend-React_19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Server-Express_5-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Groq](https://img.shields.io/badge/AI-Groq-F55036?style=for-the-badge&logo=lightning&logoColor=white)](https://groq.com)
[![License](https://img.shields.io/badge/License-ISC-9B59B6?style=for-the-badge)](#-license)

Paste any code (or just a plain DSA question) and get a **structured mentor-style review** 📋 or a **step-by-step dry run trace** 🔍 — powered by Groq.

</div>

<br>

## 💫 Features

| | |
|---|---|
| 🩺 **Review Mode** | Full mentor-style breakdown — summary, bugs & edge cases (as a table), brute-force vs optimal approach, complexity, step-by-step thinking, test cases, graph/DP notes, clean-code tips, and a practice plan |
| 🐢➡️🐇 **Dry Run Mode** | Traces your code line by line — initial state, execution table, final output, and a quick-check edge case |
| 🎨 **Live Code Editor** | Syntax highlighting for C/C++/JS via Prism |
| 📊 **Rich Markdown Output** | GitHub-flavored tables render cleanly in the UI |
| 💬 **Flexible Input** | Works with real code *or* a plain-language question — no perfect problem statement needed |
| 🇮🇳 **Hinglish Friendly** | Ask in Hindi/Hinglish and get technical answers back in the same style |

<br>

## 🛠️ Tech Stack

<div align="center">

**Frontend**

![React](https://img.shields.io/badge/-React-20232A?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Prism.js](https://img.shields.io/badge/-Prism.js-1a1a1a?style=flat-square&logo=prism&logoColor=orange)
![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)

**Backend**

![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white)
![Groq SDK](https://img.shields.io/badge/-Groq_SDK-F55036?style=flat-square&logo=lightning&logoColor=white)

</div>

<br>

## 📁 Project Structure

```
Code-Reviewer---Problem-solving-helper/
├── 🖥️ backend/
│   ├── server.js                  # Express entry point (port 3000)
│   └── src/
│       ├── app.js                 # App setup, middleware, routes
│       ├── controllers/
│       │   └── ai.controller.js   # Review/dry-run prompts + Groq call
│       └── routes/
│           └── ai.routes.js       # POST /ai/get-review
└── 🎨 frontend/
    └── src/
        ├── App.jsx                # Editor + Review/Dry Run UI
        └── App.css
```

<br>

## 📸 Demo

### 🩺 Code Review

<img width="1440" height="813" alt="Screenshot 2026-08-14 at 8 40 03 PM" src="https://github.com/user-attachments/assets/263d8f37-39c6-46bb-8880-fb1a199731b2" />
<img width="1439" height="807" alt="Screenshot 2026-08-14 at 8 40 25 PM" src="https://github.com/user-attachments/assets/25c43130-6643-4ed9-805b-16b7004991d2" />

<img width="1440" height="818" alt="Screenshot 2026-08-14 at 8 40 46 PM" src="https://github.com/user-attachments/assets/502e1e23-54fb-4ebd-b18e-e78a48505438" />
<img width="1440" height="818" alt="Screenshot 2026-08-14 at 8 40 54 PM" src="https://github.com/user-attachments/assets/5cf74aa1-dc82-4b2e-aaa4-f6eba5c0a3c6" />

### 🔍 Dry Run

<img width="1440" height="814" alt="Screenshot 2026-08-14 at 8 41 58 PM" src="https://github.com/user-attachments/assets/aee28099-c174-4cac-be84-dd85bfa1e8a0" />

<img width="1440" height="808" alt="Screenshot 2026-08-14 at 8 42 08 PM" src="https://github.com/user-attachments/assets/cc7a1aaa-5551-4995-919a-385ef1d41f2c" />

### 🧩 Problem Solver

<img width="1440" height="809" alt="Screenshot 2026-08-14 at 8 44 58 PM" src="https://github.com/user-attachments/assets/47ed8c62-5dfc-436e-b98a-5726a54057b2" />
<img width="1440" height="816" alt="Screenshot 2026-08-14 at 8 45 32 PM" src="https://github.com/user-attachments/assets/274ca09a-0231-4223-8ea1-efbeb6140de2" />

<img width="1440" height="821" alt="Screenshot 2026-08-14 at 8 46 06 PM" src="https://github.com/user-attachments/assets/be42bc1d-99ef-48f2-b139-26825da46b27" />

### 🔍 Dry Run (Problem Solver)

<img width="1440" height="813" alt="Screenshot 2026-08-14 at 8 47 04 PM" src="https://github.com/user-attachments/assets/26aee71e-396c-4b9c-99d2-682a0b716a32" />
<img width="1440" height="811" alt="Screenshot 2026-08-14 at 8 47 47 PM" src="https://github.com/user-attachments/assets/5bc146e3-b24c-426f-a582-5ea153d7f5bc" />

<img width="1440" height="821" alt="Screenshot 2026-08-14 at 8 47 57 PM" src="https://github.com/user-attachments/assets/02da57ad-d5ba-490b-9dd6-e5616606313c" />

<br>

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v18+ recommended)
- A 🔑 [Groq API key](https://console.groq.com)

### 1️⃣ Clone the repo

```bash
git clone https://github.com/itsKanika/Code-Reviewer---Problem-solving-helper.git
cd Code-Reviewer---Problem-solving-helper
```

### 2️⃣ Backend setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=openai/gpt-oss-120b   # optional, this is the default
```

Run the server:

```bash
npm run dev
```

🟢 The API will be live at `http://localhost:3000`

### 3️⃣ Frontend setup

In a new terminal:

```bash
cd frontend
npm install
npm run dev
```

🟣 The app will be live at `http://localhost:5174` (or whatever port Vite prints)

<br>

## ⚙️ How It Works

1. ✍️ Paste code or a coding question into the left-hand editor
2. 🖱️ Click **Review** for a full mentor-style breakdown, or **Dry Run** to trace execution step by step
3. 📡 The frontend sends `{ code, mode }` to `POST /ai/get-review`
4. 🧠 The backend picks the matching system prompt (`review` or `dry-run`) and sends it to Groq
5. 🎉 The response is rendered on the right with syntax-aware, table-friendly markdown

<details>
<summary>💡 <b>Example — Dry Run mode</b> (click to expand)</summary>
<br>

Given a `productExceptSelf` solution, Dry Run mode returns:

- **📥 Dry Run Input** — the traced example, with any assumed values labeled
- **🎬 Initial State** — starting values of `lp`, `rp`, and `result`
- **🪜 Step-by-Step Trace** — a table of each loop iteration and how the arrays change
- **🏁 Final Output** — the returned array and why
- **⚠️ Quick Check** — an edge case (e.g. an input containing a zero) that can expose a bug the happy-path trace didn't catch

</details>

<br>

## 🔌 API

### `POST /ai/get-review`

**Body:**

```json
{
  "code": "your code or question here",
  "mode": "review"
}
```

**Response:**

```json
{
  "review": "markdown-formatted response"
}
```

<br>

## 🗺️ Roadmap

- [ ] 🚢 Deploy backend + frontend
- [ ] 🌈 Support more languages in the editor's syntax highlighting
- [ ] 💾 Save/export review and dry-run history

<br>

## 📄 License

Released under the **ISC** License 💜

<div align="center">

Made with 🧠 + ☕ by [Kanika](https://github.com/itsKanika)

</div>

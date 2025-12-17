# Flask Sample Application (Python 3.8.20)

This is a simple Flask web application built using **Flask 2.3.x** and **Python 3.8.20**.  
It renders an HTML template and can run locally or through platforms that support **Buildpacks / Automatic Builds** (no Dockerfile required).

---

## 🚀 Features
- Flask 2.3
- HTML template rendering
- Displays the Python version on the homepage
- Buildpack-ready (no Dockerfile needed)

---

## 📁 Project Structure

```
.
├── app.py
├── requirements.txt
├── runtime.txt
└── templates/
    └── index.html
```

---

## 🧩 Run Locally

### 1️⃣ Create and activate virtual environment
```bash
python3 -m venv venv
source venv/bin/activate      # macOS / Linux
venv\Scripts\activate         # Windows
```

### 2️⃣ Install dependencies
```bash
pip install -r requirements.txt
```

### 3️⃣ Start the application
```bash
python app.py
```

Visit: **http://localhost:8000**

---

## 🚀 Deployment Using Buildpacks (Nimbuz, Heroku-style, Railway, etc.)

This project does **not** require a Dockerfile.

Build systems automatically detect:

- Python version via `runtime.txt`
- Dependencies via `requirements.txt`
- Start command from `app.py`

### ✔ `runtime.txt`

To run this application with **Python 3.8.20**, set your `runtime.txt` file to:

```
python-3.8.20
```

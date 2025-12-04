# 📦 Sample Project Repository

This repository contains **sample projects** used for internal testing, learning, version comparison, and framework compatibility checks.

---

## 📌 Purpose

The main goals of this repository are:

- To store and maintain **tested sample projects** for various frameworks and versions.
- To provide **reference implementations** for verification or reproduction of issues.
- To keep a clean, organized structure for future testing and evaluations.

---

## 📁 Repository Structure

Projects are grouped by **technology** and then by **version**:

root/
├── angular/
│ ├── v14/
│ │ └── <project-folders>
│ ├── v16/
│ │ └── <project-folders>
│ └── v18/
│ └── <project-folders>
├── react/
│ ├── v18/
│ └── v19/
└── python/
├── 3.10/
└── 3.12/


---

## 🚫 Files & Folders to Exclude From Git

Please ensure the following are **NOT committed**:

### ❌ Node / Frontend
- `node_modules/`
- `dist/`, `build/`
- `.cache/`, `.parcel-cache/`

### ❌ Backend / Python / Other
- `.venv/`, `venv/`
- `__pycache__/`
- `*.pyc`

### ❌ IDE & System Files
- `.vscode/`, `.idea/`
- `.DS_Store`, `Thumbs.db`

### ❌ Logs & Temp Files
- `*.log`
- `tmp/`, `temp/`

Use a proper `.gitignore` file inside each project.

---

## 🔐 Sensitive Information — DO NOT COMMIT

Never commit:

- API keys / Secrets
- Access tokens
- Login passwords
- `.env` files
- Certificates
- Any personal or company credentials

Always use environment variables or secret management tools.

---

## 📝 README Requirement for Each Project

Each project inside this repository must include its own `README.md` with:

### 1️⃣ **Source of the Project**

#### If taken from GitHub:
Source

Project sourced from: <GitHub URL>


#### If taken from tutorial / documentation:

Source

Reference: <Article / Documentation / Tutorial Link>


#### If internally created:

Source

This project was developed internally by our team.


---

## ✔️ Best Practices

### ✅ Use **LTS (Long-Term Support)** versions  
Prefer LTS versions of frameworks like:

- Node.js
- Angular
- React
- Python
- Java

This ensures stability and long-term maintenance.

---

## 🤝 Contribution Guidelines

1. Place your project in the correct **framework > version** folder.
2. Add a `README.md` with the project’s source and instructions.
3. Ensure `.gitignore` is present and correct.
4. Confirm no sensitive or unwanted files are committed.
5. Follow clean and consistent commit messages.

---

## 📬 Support

For help or clarification, contact the team or open an issue in this repository.

---


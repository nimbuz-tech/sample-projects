# Django Sample Application (Python 3.12.0)

This is a simple Django web application built using **Django 3.2.x** and **Python 3.12.0**.  
It renders an HTML template and displays both the Python and Django versions on the homepage.

---

## 🚀 Features
- Django 3.2.x  
- HTML template rendering  
- Displays Python & Django versions on homepage  
- SQLite database for basic migrations  

---

## 📁 Project Structure

```
.
├── manage.py
├── requirements.txt
├── django_test/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
└── home/
    ├── __init__.py
    ├── views.py
    └── templates/
        └── index.html
```

---

## 🧩 Run Locally

### 1️⃣ Create and activate virtual environment
```bash
python3.13 -m venv venv
source venv/bin/activate      # macOS / Linux
venv\Scripts\activate         # Windows
```

### 2️⃣ Install dependencies
```bash
pip install -r requirements.txt
```

### 3️⃣ Run migrations
```bash
python manage.py migrate
```

### 4️⃣ Start the application
```bash
python manage.py runserver 0.0.0.0:8000
```

Visit: **http://localhost:8000**

---

## 📦 `requirements.txt`

```
Django>=3.2,<3.3
gunicorn
```
### ✔ `runtime.txt`

To run this application with **Python 3.12.0**, set your `runtime.txt` file to:

```
python-3.12.0
```


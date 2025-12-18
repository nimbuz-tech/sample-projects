from flask import Flask, render_template
import sys
import flask

app = Flask(__name__)

@app.get("/")
def home():
    return render_template(
        "index.html",
        python_version=sys.version,
        flask_version=flask.__version__
    )

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)

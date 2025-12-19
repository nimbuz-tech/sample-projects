import sys
import django
from django.shortcuts import render

def home(request):
    return render(request, "index.html", {
        "python_version": sys.version,
        "django_version": django.get_version(),
    })

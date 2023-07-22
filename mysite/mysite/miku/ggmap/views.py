from django.shortcuts import render
from django.urls import path
from django.http import HttpResponse
from django.template import loader
from .import templates
# Create your views here.
def index(request):
    return render(request, "ggmap/index.html")
def ugv(request):
    return render(request, "ggmap/ugv.html")
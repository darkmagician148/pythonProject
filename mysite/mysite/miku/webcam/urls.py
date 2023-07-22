from django.urls import path
from . import views

from webcam.stream import index, video_feed
urlpatterns = [

    path('',views.index, name = "index"),
    path('video_feed/', video_feed, name="video-feed"),
]

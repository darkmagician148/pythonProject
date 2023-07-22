from django.urls import path
from . import views
from . import templates
from webcam.views import index, video_feed
urlpatterns = [

    path('',views.index, name = "index"),
    path('video_feed/', video_feed, name="video-feed")
]

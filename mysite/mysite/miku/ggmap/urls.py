from django.urls import path
from . import views
from . import templates
urlpatterns = [
    path('ggmap/',views.index, name = "index"),
    path('ugv/', views.ugv, name="ugv"),
    path('', views.ugv_1, name="ugv_1"),
]

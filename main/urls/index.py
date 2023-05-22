from django.urls import path, include
from main.views.index import index

urlpatterns = [ 
    path("", index, name="index"),
]

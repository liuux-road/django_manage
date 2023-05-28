from django.urls import path, include
from travel.views.index import index

urlpatterns = [ 
    path("", index, name="index"),
]

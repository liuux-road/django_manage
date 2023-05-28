from django.urls import path, include
from favorites.views.index import index

urlpatterns = [ 
    path("", index, name="index"),
]

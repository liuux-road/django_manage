from django.urls import path, include
from nav.views.index import index

urlpatterns = [ 
    path("", index, name="index"),
]

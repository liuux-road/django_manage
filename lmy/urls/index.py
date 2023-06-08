from django.urls import path, include
from lmy.views.index import index

urlpatterns = [ 
    path("", index, name="index"),
]

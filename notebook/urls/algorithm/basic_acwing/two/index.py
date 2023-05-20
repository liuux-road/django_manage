from django.urls import path, include
from notebook.views.algorithm.basic_acwing.two.index import index

urlpatterns = [ 
    path("", index, name="index"),
]
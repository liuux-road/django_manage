from django.urls import path, include
from page.views.algorithm.basic_acwing.one.index import index

urlpatterns = [ 
    path("", index, name="index"),
]
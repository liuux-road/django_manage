from django.urls import path, include
from notebook.views.algorithm.index import index
# from page.views.algorithm.basic_acwing.index import basic_acwing


urlpatterns = [ 
    path("", index, name="algorithm"),
]
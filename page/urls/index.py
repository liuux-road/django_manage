from django.urls import path, include
from page.views.index import index

urlpatterns = [ 
    path("", index, name="index"),
    path("algorithm/", include("page.urls.algorithm.index")),
    path("algorithm/basic_acwing", include("page.urls.algorithm.basic_acwing.index")),
    path("algorithm/basic_acwing/基础算法", include("page.urls.algorithm.basic_acwing.one.index")),
    path("algorithm/basic_acwing/数据结构", include("page.urls.algorithm.basic_acwing.two.index")),
    path("algorithm/basic_acwing/搜索与图论", include("page.urls.algorithm.basic_acwing.three.index")),
]

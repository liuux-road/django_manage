### 1. 新建 **Django** 项目

```shell
$ django-admin --version
$ django-admin startproject acapp
$ tree .
```

### 2. 连接git

```shell
$ git init
$ touch readme.md
$ touch .gitignore
$ git add .
$ git commit -m "first commit"
$ git branch -M main
$ git remote add origin git@github.com:liuux-road/my_first_WEBpage.git
$ git push -u origin main
```

### 3. 启动Django

```shell
$ python manage.py migrate
### '47.120.42.98' 参数添加到 ALLOWED_HOSTS 下
$ python3 manage.py runserver 0.0.0.0:8000
$ python3 manage.py startapp game
$ python3 manage.py createsuperuser
```

### 4。 实现路由定向
* templates ：管理 html 文件
* urls ：管理路由，即链接与函数的对应关系
* views ：管理 http 函数
* models ：管理数据库数据
**url 输入网址 -> my_first_WEBpage.urls -> page.urls -> page.views.index -> 展示页面**

* `my_first_WEBpage/settings`中的`INSTALLED_APPS`加入`'page.apps.PageConfig',`
* `my_first_WEBpage/settings`中的`TIME_ZONE` = `'Asia/Shanghai'`
* 声明静态文件路径：

```shell
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'
```

```python
# my_first_WEBpage.urls
from django.contrib import admin
from django.urls import path, include

urlpatterns = [ 
    path('', include('page.urls')),
    path('admin/', admin.site.urls),
] 
```

```python
# page.urls
from django.urls import path
from page.views import index

urlpatterns = [ 
    path("", index, name="index"),
]
```

```python
# page.views
from django.http import HttpResponse

def index(request):
    line1 = '<h1 style="text-align: center"> 第一个网页 </h1>'
    return HttpResponse(line1)
```

### 5. 创建第一个页面
templates 目录：管理 html 文件
urls 目录：管理路由，即链接与函数的对应关系
views 目录：管理 http 函数
models 目录：管理数据库数据
static 目录：管理静态文件，比如：
css : 对象的格式，比如位置、长宽、颜色、背景、字体大小等
js : 对象的逻辑，比如对象的创建与销毁、事件函数、移动、变色等
image : 图片
audio : 声音
…
consumers 目录：管理 websocket 函数

**url 输入网址 -> my_first_WEBpage.urls -> page.urls -> page.views.index -> main.html -> 展示页面**

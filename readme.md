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

### 4. 实现路由定向
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
templates 目录：管理 html 文件<br>
urls 目录：管理路由，即链接与函数的对应关系<br>
views 目录：管理 http 函数<br>
models 目录：管理数据库数据<br>
static 目录：管理静态文件，比如：<br>
css : 对象的格式，比如位置、长宽、颜色、背景、字体大小等<br>
js : 对象的逻辑，比如对象的创建与销毁、事件函数、移动、变色等<br>
image : 图片<br>
audio : 声音<br>
…<br>
consumers 目录：管理 websocket 函数

**url 输入网址 -> my_first_WEBpage.urls -> page.urls -> page.views.index -> main.html -> 展示页面**


### 6. 配置nginx
将 nginx.conf 中的内容写入服务器 /etc/nginx/nginx.conf 文件中。如果 django 项目路径与配置文件中不同，注意修改路径。<br>
将 acapp.key 中的内容写入服务器 /etc/nginx/cert/acapp.key 文件中。<br>
将 acapp.pem 中的内容写入服务器 /etc/nginx/cert/acapp.pem 文件中。
```shell
$ nginx start
```
将域名添加到 ALLOWED_HOSTS 列表中<br>
在 django 项目中添加uwsgi的配置文件 : scripts/uwsgi.ini
```shell
[uwsgi]
socket          = 127.0.0.1:8000
chdir           = /home/liuux/my_first_WEBpage
wsgi-file       = my_first_WEBpage/wsgi.py
master          = true
processes       = 2
threads         = 5
vacuum          = true
```
启动Django服务
```shell
$ uwsgi --ini scripts/uwsgi.ini
```

### 7. 多页面设计
显示笔记。嵌入md文件（其实是直接md -> html）
```python
    path('notebook/', include('notebook.urls.index')),
    path('game/', include('game.urls.index')),
    path('admin/', admin.site.urls),
```
现在做了两个页面<br>
一是自己的简陋的没有任何修饰的笔记<br>
二是一个acwing学的游戏<br><br>
**目标架构：**<br>
├──个人主页<br>
│   ├── 笔记<br>
│   │   ├── 论文<br>
│   │   ├── 算法<br>
│   │   └── 程序<br>
│   │<br>
│   ├── 小游戏<br>
│   │   └── 肉蛋冲击<br>
│   │<br>
│   ├── 地图相册<br>
│   │<br>
│   ├── 吃灰夹<br>
│   │<br>
│   │<br>
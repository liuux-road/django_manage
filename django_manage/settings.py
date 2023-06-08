"""
Django settings for django_manage project.

Generated by 'django-admin startproject' using Django 3.2.8.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

import os
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-wu695vjvlp6t*3%ppackxrp!j)-!%$w^$pb2lm&)2kibdm2&-@'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["47.120.42.98", "liuux.top", "liuux.top"]


# Application definition

INSTALLED_APPS = [
    'channels',
    'main.apps.MainConfig',
    'notebook.apps.NotebookConfig',
    'game.apps.GameConfig',
    'travel.apps.TravelConfig',
    'nav.apps.NavConfig',
    'lmy.apps.LmyConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'django_manage.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'django_manage.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': 'redis://127.0.0.1:6379/1',
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        },
    },
}
USER_AGENTS_CACHE = 'default'


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Shanghai'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

# # 在这里，当访问静态文件时，会自动添加 static
# # 例如访问默认应用 admin 时，他会加载 admin/css/base.css，这里配置后，加载的资源链接变为 /static/admin/css/base.css
# # 也可以写为：STATIC_URL = 'http://192.168.0.0/static/' 这样的形式（方便CDN）
# STATIC_URL = '/static/'

# # 配置默认静态文件夹路径
# # 在开发环境下，访问静态资源，可以直接访问这里配置的路径下的文件，例如web访问url为 /static/a.html，实际上访问的是根目录下 /static/a.html 这个文件
# # 在生产环境下，会将这些目录下的文件复制到 STATIC_ROOT 这里配置的目录中（注意，如果有同名文件，可能会被覆写，他会提示你）
# STATICFILES_DIRS = [
#     os.path.join(BASE_DIR, 'static')
# ]

# # 当运行 python manage.py collectstatic 的时候
# # STATIC_ROOT 目录，是用来将所有 STATICFILES_DIRS 中所有文件夹中的文件，以及各app中（在INSTALLED_APPS里配置）的static中的文件，都复制到这里配置的文件夹中
# # 集中之后，方便通过例如 nginx 服务器，或者 CDN 之类的进行部署
# STATIC_ROOT = os.path.join(BASE_DIR, 'collected_static')
# # STATIC_ROOT = os.path.join(BASE_DIR, 'static')

# # 这个是默认设置，Django 默认会在 STATICFILES_DIRS 中的文件夹 和 各app下的static文件夹中找文件
# # 注意有先后顺序，找到了就不再继续找了
# STATICFILES_FINDERS = (
#     # 这个先写的话，如果有重复文件，会优先采用 STATICFILES_DIRS 文件夹中的文件
#     # "django.contrib.staticfiles.finders.FileSystemFinder",
#     # 同上，会优先采用应用中的文件
#     "django.contrib.staticfiles.finders.AppDirectoriesFinder"
# )



# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

ASGI_APPLICATION = 'django_manage.asgi.application'
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [("127.0.0.1", 6379)],
        },
    },
}

ROOM_CAPACITY = 3
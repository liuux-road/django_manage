#! /bin/bash

# rm -rf ../static
sudo nginx -s reload
sudo /etc/init.d/nginx start

JS_PATH=/home/liuux/django_manage/notebook/static/js/
JS_PATH_DIST=${JS_PATH}dist/
JS_PATH_SRC=${JS_PATH}src/
find $JS_PATH_SRC -type f -name '*.js' | sort | xargs cat | terser -c -m > ${JS_PATH_DIST}notebook.js

JS1_PATH=/home/liuux/django_manage/game/static/js/
JS1_PATH_DIST=${JS1_PATH}dist/
JS1_PATH_SRC=${JS1_PATH}src/
find $JS1_PATH_SRC -type f -name '*.js' | sort | xargs cat | terser -c -m > ${JS1_PATH_DIST}game.js

JS2_PATH=/home/liuux/django_manage/main/static/js/
JS2_PATH_DIST=${JS2_PATH}dist/
JS2_PATH_SRC=${JS2_PATH}src/
find $JS2_PATH_SRC -type f -name '*.js' | sort | xargs cat | terser -c -m > ${JS2_PATH_DIST}main.js

JS3_PATH=/home/liuux/django_manage/favorites/static/js/
JS3_PATH_DIST=${JS3_PATH}dist/
JS3_PATH_SRC=${JS3_PATH}src/
find $JS3_PATH_SRC -type f -name '*.js' | sort | xargs cat | terser -c -m > ${JS3_PATH_DIST}favorites.js

JS4_PATH=/home/liuux/django_manage/travel/static/js/
JS4_PATH_DIST=${JS4_PATH}dist/
JS4_PATH_SRC=${JS4_PATH}src/
find $JS4_PATH_SRC -type f -name '*.js' | sort | xargs cat | terser -c -m > ${JS4_PATH_DIST}travel.js

echo yes | python3 /home/liuux/django_manage/manage.py collectstatic
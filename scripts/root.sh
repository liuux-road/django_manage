#! /bin/bash

# rm -rf ../static

JS_PATH=/home/liuux/my_first_WEBpage/notebook/static/js/
JS_PATH_DIST=${JS_PATH}dist/
JS_PATH_SRC=${JS_PATH}src/
# find $JS_PATH_SRC -type f -name '*.js' | sort | xargs cat | terser -c -m > ${JS_PATH_DIST}notebook.js
find $JS_PATH_SRC -type f -name '*.js' | sort | xargs cat  > ${JS_PATH_DIST}notebook.js

JS1_PATH=/home/liuux/my_first_WEBpage/game/static/js/
JS1_PATH_DIST=${JS1_PATH}dist/
JS1_PATH_SRC=${JS1_PATH}src/
find $JS1_PATH_SRC -type f -name '*.js' | sort | xargs cat | terser -c -m > ${JS1_PATH_DIST}game.js

echo yes | python3 /home/liuux/my_first_WEBpage/manage.py collectstatic
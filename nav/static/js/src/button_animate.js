var $box = document.getElementById('search_box');

$box.scrollTop = $box.scrollTop + 135;

console.log($box.scrollTop);

$box.onmousewheel = function (event) {
    if (event.wheelDelta > 0 || event.detail < 0) {
        //向上滚
        $box.scrollTop = $box.scrollTop - 45;
    } else {
        //向下滚
        $box.scrollTop = $box.scrollTop + 45;
    }
    return false;
};

$('.百度').on('click', function (e) {
    let search_info = $('input').val()
    console.log("baidu");

    let url = 'https://www.baidu.com/s?wd='
        + search_info
        + '&rsv_spt=1&rsv_iqid=0xbf18ff060007868c&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_dl=tb&rsv_enter=1&rsv_sug3=7&rsv_sug1=3&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&inputT=3193&rsv_sug4=5555';
    // window.location.href = url;
    window.open(url, '_blank');
})
$('.Bing').on('click', function (e) {
    let search_info = $('input').val()

    let url = 'https://www.bing.com/search?q=' + search_info
    window.open(url, '_blank');
})
$('.bilibili').on('click', function (e) {
    let search_info = $('input').val()

    let url = 'https://search.bilibili.com/all?keyword='
        + search_info
        + '&from_source=webtop_search&spm_id_from=333.1007&search_source=5';
    window.open(url, '_blank');
})

$('.知乎').on('click', function (e) {
    let search_info = $('input').val()

    let url = 'https://www.zhihu.com/search?type=content&q='
        + search_info
    window.open(url, '_blank');
})
$('.Google').on('click', function (e) {
    let search_info = $('input').val()

    let url = 'https://www.google.com/search?q='
        + search_info
    window.open(url, '_blank');
})
$('.GitHub').on('click', function (e) {
    let search_info = $('input').val()

    let url = 'https://github.com/search?q='
        + search_info
    window.open(url, '_blank');
})
$('.StackOverdlow').on('click', function (e) {
    let search_info = $('input').val()

    let url = 'https://stackoverflow.com/nocaptcha?s='
        + search_info
    window.open(url, '_blank');
})


// var key_pressed = {};
// var key_time = {};


// document.addEventListener("keydown", function (e) {

//     key_time[e.keyCode] = Date.now(); //获取当前秒
//     key_pressed[e.keyCode] = true;
// });

// document.addEventListener("keyup", function (e) {

//     key_pressed[e.keyCode] = 0;

// });

// // 检测时间，避免跳转到其他页面，无法捕获到按键抬起事件
// setInterval(function () {
//     for (var key in key_pressed) {
//         if (key_pressed[key] && (Date.now() - key_time[key] >= 1000)) {
//             key_pressed[key] = false;
//         }
//     }
// }, 50);



// // 测试案件事件
// setInterval(function () {
//     for (var key in key_pressed) {
//         if (key_pressed[key]) {
//             console.log(key + " is down");
//         }
//     }
// }, 50);

$('#input_value').on("keydown", function (e) {
    // if (key_pressed[13] && key_pressed[229])  // 判断输入是否是Enter
    // {
    //     $('.百度').click();
    //     console.log(key_pressed);
    //     console.log(key_time);
    // }
    if (e.key == "Enter")  // 判断输入是否是Enter
    {
        $('.Bing').click();
        // console.log(key_pressed);
        // console.log(key_time);
    }
})



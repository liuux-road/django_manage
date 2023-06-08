$('.百度').on('click', function (e) {
    let search_info = $('input').val()
    console.log("baidu");

    let url = 'https://www.baidu.com/s?wd='
        + search_info
        + '&rsv_spt=1&rsv_iqid=0xbf18ff060007868c&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_dl=tb&rsv_enter=1&rsv_sug3=7&rsv_sug1=3&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&inputT=3193&rsv_sug4=5555';
    window.location.href = url;
})
$('.Bing').on('click', function (e) {
    let search_info = $('input').val()

    let url = 'https://www.bing.com/search?q=' + search_info
    window.location.href = url;
})
$('.bilibili').on('click', function (e) {
    let search_info = $('input').val()

    let url = 'https://search.bilibili.com/all?keyword='
        + search_info
        + '&from_source=webtop_search&spm_id_from=333.1007&search_source=5';
    window.location.href = url;
})

$('.知乎').on('click', function (e) {
    let search_info = $('input').val()

    let url = 'https://www.zhihu.com/search?type=content&q='
        + search_info
    window.location.href = url;
})
$('.Google').on('click', function (e) {
    let search_info = $('input').val()

    let url = 'https://www.google.com/search?q='
        + search_info
    window.location.href = url;
})
$('.GitHub').on('click', function (e) {
    let search_info = $('input').val()

    let url = 'https://github.com/search?q='
        + search_info
    window.location.href = url;
})
$('.StackOverdlow').on('click', function (e) {
    let search_info = $('input').val()

    let url = 'https://stackoverflow.com/nocaptcha?s='
        + search_info
    window.location.href = url;
})



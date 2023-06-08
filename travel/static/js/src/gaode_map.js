// // var map = new AMap.Map('container', {
// //     resizeEnable: true,
// //     zoom: 4,
// //     center: [116.397428, 39.90923],
// //     mapStyle: 'amap://styles/4aa7d6e8f3ff1b9f3cd4f82ad88e2fa9'
// //     //前往创建自定义地图样式：https://lbs.amap.com/dev/mapstyle/index
// // });
// // 创建地图
var map = new AMap.Map('container', {
    zoom: 7,//级别
    center: [106.56355, 29.54304],//中心点坐标
    viewMode: '3D'//使用3D视图
});

// // 添加一个标记
// var marker_0 = new AMap.Marker({
//     position: [116.39, 39.9]//位置
// })
// map.add(marker_0);//添加到地图

// // 事件功能与信息窗体
// var infoWindow = new AMap.InfoWindow({ //创建信息窗体
//     isCustom: true,  //使用自定义窗体
//     content: '<div>信息窗体</div>', //信息窗体的内容可以是任意html片段
//     offset: new AMap.Pixel(16, -45)
// });
// var onMarkerClick = function (e) {
//     infoWindow.open(map, e.target.getPosition());//打开信息窗体
//     console.log("受到了点击");
//     //e.target就是被点击的Marker
// }
// var marker_1 = new AMap.Marker({
//     position: [116.481181, 39.980792]
// })
// map.add(marker_1);
// marker.on('click', onMarkerClick);//绑定click事件

// 构建自定义信息窗体
function createInfoWindow(title, content) {
    var info = document.createElement("div");
    info.className = "custom-info input-card content-window-card";

    //可以通过下面的方式修改自定义窗体的宽高
    info.style.width = "230px";
    info.style.height = "130px";
    // 定义顶部标题
    var top = document.createElement("div");
    var titleD = document.createElement("div");
    var closeX = document.createElement("img");
    top.className = "info-top";
    titleD.innerHTML = title;
    closeX.src = "https://webapi.amap.com/images/close2.gif";
    closeX.onclick = closeInfoWindow;

    top.appendChild(titleD);
    top.appendChild(closeX);
    info.appendChild(top);

    // 定义中部内容
    var middle = document.createElement("div");
    middle.className = "info-middle";
    middle.style.backgroundColor = 'white';
    middle.innerHTML = content;
    info.appendChild(middle);

    // 定义底部内容
    var bottom = document.createElement("div");
    bottom.className = "info-bottom";
    bottom.style.position = 'relative';
    bottom.style.top = '0px';
    bottom.style.margin = '0 auto';
    var sharp = document.createElement("img");
    sharp.src = "https://webapi.amap.com/images/sharp.png";
    bottom.appendChild(sharp);
    info.appendChild(bottom);
    return info;
}

// 关闭信息窗体
function closeInfoWindow() {
    map.clearInfoWindow();
}

// // 自定义标记
// var marker = new AMap.Marker({
//     position: new AMap.LngLat(116.39, 39.9),
//     offset: new AMap.Pixel(-10, -10),
//     icon: 'https://liuux.top/media/image/local.png', // 添加 Icon 图标 URL
//     title: '北京'
// });

// map.add(marker);


// 云南
addMarker_LiJiang();
addMarker_ErYuan();
addMarker_NingLang();
addMarker_DaLi();
addMarker_Huaping();
addMarker_LuGuHu();
// 川渝
addMarker_ChengDu();
addMarker_ChongQing();
addMarker_YiBin();
addMarker_ZiGong();
addMarker_JianYang();
// 黑龙江
addMarker_HaErBin();
addMarker_QingAn();



function addMarker_LiJiang() {
    //实例化信息窗体
    var title = '云南-丽江<span style="font-size:11px;">2023/1/1</span>',
        content = [];
    content.push("信息1");
    content.push("信息2");
    content.push("<a href='https://liuux.top/page_travle/none/'>详细信息</a>");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });

    // map.clearMap();
    var marker = new AMap.Marker({
        map: map,
        position: [100.23248, 26.88316]
    });
    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });
}

function addMarker_ErYuan() {
    //实例化信息窗体
    var title = '云南-洱源<span style="font-size:11px;">2023/1/1</span>',
        content = [];
    content.push("信息1");
    content.push("信息2");
    content.push("<a href='https://liuux.top/page_travle/none/'>详细信息</a>");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });

    var marker = new AMap.Marker({
        map: map,
        position: [99.96921, 26.12009]
    });
    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });
}
function addMarker_NingLang() {
    //实例化信息窗体
    var title = '云南-宁蒗<span style="font-size:11px;">2023/1/1</span>',
        content = [];
    content.push("信息1");
    content.push("信息2");
    content.push("<a href='https://liuux.top/page_travle/none/'>详细信息</a>");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });

    var marker = new AMap.Marker({
        map: map,
        position: [100.85859, 27.28773]
    });
    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });
}
function addMarker_DaLi() {
    //实例化信息窗体
    var title = '云南-大理<span style="font-size:11px;">2023/1/1</span>',
        content = [];
    content.push("信息1");
    content.push("信息2");
    content.push("<a href='https://liuux.top/page_travle/none/'>详细信息</a>");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });

    var marker = new AMap.Marker({
        map: map,
        position: [100.17048, 25.70080]
    });
    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });
}
function addMarker_Huaping() {
    //实例化信息窗体
    var title = '云南-华坪<span style="font-size:11px;">2023/1/1</span>',
        content = [];
    content.push("信息1");
    content.push("信息2");
    content.push("<a href='https://liuux.top/page_travle/none/'>详细信息</a>");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });

    var marker = new AMap.Marker({
        map: map,
        position: [101.27243, 26.63522]
    });
    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });
}
function addMarker_LuGuHu() {
    //实例化信息窗体
    var title = '云南-泸沽湖<span style="font-size:11px;">2023/1/1</span>',
        content = [];
    content.push("信息1");
    content.push("信息2");
    content.push("<a href='https://liuux.top/page_travle/none/'>详细信息</a>");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });

    var marker = new AMap.Marker({
        map: map,
        position: [100.75985, 27.70018]
    });
    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });
}
function addMarker_ChengDu() {
    //实例化信息窗体
    var title = '四川-成都<span style="font-size:11px;">2023/1/1</span>',
        content = [];
    content.push("信息1");
    content.push("信息2");
    content.push("<a href='https://liuux.top/page_travle/none/'>详细信息</a>");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });

    var marker = new AMap.Marker({
        map: map,
        position: [104.07274, 30.57899]
    });
    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });
}
function addMarker_YiBin() {
    //实例化信息窗体
    var title = '四川-宜宾<span style="font-size:11px;">2023/1/1</span>',
        content = [];
    content.push("信息1");
    content.push("信息2");
    content.push("<a href='https://liuux.top/page_travle/none/'>详细信息</a>");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });

    var marker = new AMap.Marker({
        map: map,
        position: [104.64940, 28.75801]
    });
    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });
}
function addMarker_ZiGong() {
    //实例化信息窗体
    var title = '四川-自贡<span style="font-size:11px;">2023/1/1</span>',
        content = [];
    content.push("信息1");
    content.push("信息2");
    content.push("<a href='https://liuux.top/page_travle/none/'>详细信息</a>");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });

    var marker = new AMap.Marker({
        map: map,
        position: [104.78445, 29.34559]
    });
    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });
}
function addMarker_JianYang() {
    //实例化信息窗体
    var title = '四川-简阳<span style="font-size:11px;">2023/1/1</span>',
        content = [];
    content.push("信息1");
    content.push("信息2");
    content.push("<a href='https://liuux.top/page_travle/none/'>详细信息</a>");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });

    var marker = new AMap.Marker({
        map: map,
        position: [104.55349, 30.41745]
    });
    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });
}
function addMarker_ChongQing() {
    //实例化信息窗体
    var title = '重庆<span style="font-size:11px;">2023/1/1</span>',
        content = [];
    content.push("信息1");
    content.push("信息2");
    content.push("<a href='https://liuux.top/page_travle/none/'>详细信息</a>");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });

    var marker = new AMap.Marker({
        map: map,
        position: [106.55844, 29.56900]
    });
    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });
}
function addMarker_HaErBin() {
    //实例化信息窗体
    var title = '黑龙江-哈尔滨<span style="font-size:11px;">2023/1/1</span>',
        content = [];
    content.push("信息1");
    content.push("信息2");
    content.push("<a href='https://liuux.top/page_travle/none/'>详细信息</a>");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });

    var marker = new AMap.Marker({
        map: map,
        position: [126.54161, 45.80882]
    });
    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });
}
function addMarker_QingAn() {
    //实例化信息窗体
    var title = '黑龙江-庆安<span style="font-size:11px;">2023/1/1</span>',
        content = [];
    content.push("信息1");
    content.push("信息2");
    content.push("<a href='https://liuux.top/page_travle/none/'>详细信息</a>");
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });

    var marker = new AMap.Marker({
        map: map,
        position: [127.51461, 46.88575]
    });
    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });
}









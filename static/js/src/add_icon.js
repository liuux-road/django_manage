var demo = document.getElementsByClassName('add_icon');

for (var i = 0; i < demo.length; i++) {
    var demo_icon = document.createElement("img");
    // console.log(demo[i]);
    // console.log(demo[i].getAttribute("icon"));
    // console.log($('span').attr('name'));
    demo_icon.src = demo[i].getAttribute("icon");
    demo_icon.style = "padding: 0 7px 2px 2px;vertical-align:middle;display: inline;";
    demo[i].insertBefore(demo_icon, demo[i].childNodes[0]);//在第0个子节点之前插入这个节点，改变childNodes[]可以控制插入的文本的位置

}
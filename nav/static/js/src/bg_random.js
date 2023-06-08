var $body = document.getElementById('bg');

var bg_img = ["/media/image/searchbg.jpg",
    "/media/image/test.JPG",
    "/media/image/search.png",
    "/media/image/search_bg/5.png",
    "/media/image/search_bg/06.png",
    "/media/image/search_bg/08.png",
    "/media/image/search_bg/09.png",
    "/media/image/search_bg/11.png",
    "/media/image/search_bg/12.png",
    "/media/image/search_bg/13.png",
    "/media/image/search_bg/14.png",
    "/media/image/search_bg/15.png",
    "/media/image/search_bg/16.png",
    "/media/image/search_bg/17.png",
    "/media/image/search_bg/18.png",
    "/media/image/search_bg/19.png",
    "/media/image/search_bg/20.png",
    "/media/image/search_bg/21.png",
    "/media/image/search_bg/22.png",
    "/media/image/search_bg/23.png",
    "/media/image/search_bg/24.png",
    "/media/image/search_bg/25.png",
    "/media/image/search_bg/26.jpeg",
    "/media/image/search_bg/28.png",

]

var index = parseInt(Math.random() * (bg_img.length - 1));

var currentImage = bg_img[index];

// console.log($body);

// console.log('url(\"' + currentImage + '\")');
// console.log("url(" + currentImage + ") no-repeat");

// $body.style.backgroundImage = 'url(\"' + currentImage + '\")';
$body.style.background = "url(" + currentImage + ") no-repeat";

// $body.style.background = "url(\"' + currentImage + '\") center top no-repeat #090f36";

// console.log("执行了");

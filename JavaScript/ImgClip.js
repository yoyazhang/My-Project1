function squareClip(){
    var img = document.getElementsByClassName("normalPic");
    for(var i = 0;i < img.length;i++){
        var width = parseInt(window.getComputedStyle(img[i]).width);
        img[i].style.height = width.toString() +'px';
    }
}
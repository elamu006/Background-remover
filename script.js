let imgBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");
let originalImg = document.getElementById("originalImg");
let line = document.getElementById("line");

// Match foreground image width to container
originalImg.style.width = imgBox.offsetWidth + "px";

imgBox.onmousemove = function (e) {

    let boxLeft = imgBox.getBoundingClientRect().left;

    let position = e.clientX - boxLeft;

    // Prevent slider from moving outside image
    if(position < 0) position = 0;
    if(position > imgBox.offsetWidth)
        position = imgBox.offsetWidth;

    imgWrap.style.width = position + "px";
    line.style.left = position + "px";
};

var slideIndex = 1;

showSlides1(slideIndex);
showSlides2(slideIndex);
showSlides3(slideIndex);
showSlides4(slideIndex);
showSlides5(slideIndex);
showSlides6(slideIndex);

function plusSlides1(n) {
    showSlides1(slideIndex += n);
}
function plusSlides2(n) {
    showSlides2(slideIndex += n);
}
function plusSlides3(n) {
    showSlides3(slideIndex += n);
}
function plusSlides4(n) {
    showSlides4(slideIndex += n);
}
function plusSlides5(n) {
    showSlides5(slideIndex += n);
}
function plusSlides6(n) {
    showSlides6(slideIndex += n);
}

function showSlides1(n) {
    var i;
    var slides1 = document.getElementsByClassName("slides1");
    if (n > slides1.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides1.length }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    slides1[slideIndex - 1].style.display = "block";
}

function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName("slides2");
    if (n > slides2.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides2.length }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slides2[slideIndex - 1].style.display = "block";
}

function showSlides3(n) {
    var i;
    var slides3 = document.getElementsByClassName("slides3");
    if (n > slides3.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides3.length }
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    slides3[slideIndex - 1].style.display = "block";
}

function showSlides4(n) {
    var i;
    var slides4 = document.getElementsByClassName("slides4");
    if (n > slides4.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides4.length }
    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";
    }
    slides4[slideIndex - 1].style.display = "block";
}

function showSlides5(n) {
    var i;
    var slides5 = document.getElementsByClassName("slides5");
    if (n > slides5.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides5.length }
    for (i = 0; i < slides5.length; i++) {
        slides5[i].style.display = "none";
    }
    slides5[slideIndex - 1].style.display = "block";
}

function showSlides6(n) {
    var i;
    var slides6 = document.getElementsByClassName("slides6");
    if (n > slides6.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides6.length }
    for (i = 0; i < slides6.length; i++) {
        slides6[i].style.display = "none";
    }
    slides6[slideIndex - 1].style.display = "block";
}


var videoIndex = 1;
showVideo(videoIndex);

function currentVideo(n) {
    showVideo(videoIndex = n);
}

function showVideo(n) {
    var j;
    var video = document.getElementsByClassName("video");
    var dot = document.getElementsByClassName("dot");
    if (n > video.length) { videoIndex = 1 }
    if (n < 1) { videoIndex = video.length }
    for (j = 0; j < video.length; j++) {
        video[j].style.display = 'none';
    }
    for (j = 0; j < dot.length; j++) {
        dot[j].className = dot[j].className.replace(" active", "");
    }
    video[videoIndex - 1].style.display = 'block';
    dot[videoIndex - 1].className += " active";
}
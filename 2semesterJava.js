// JavaScript Documentfunction imgNext() {

      var image = document.getElementById("img1")
if (image.src.match("Billeder/Booth.jpg")) {

    image.src = "SlidePictures/image2.png";
} else if (image.src.match("SlidePictures/image2.png")) {
    image.src = "SlidePictures/image3.png";

} else if (image.src.match("SlidePictures/image3.png")) {
    image.src = "SlidePictures/image4.png";
} else {
    image.src = "SlidePictures/image.png";
}
}

function imgPrev() {

      var image = document.getElementById("img1")
if (image.src.match("Billeder/Booth.jpg")) {
     image.src = "SlidePictures/image4.png";

} else if (image.src.match("SlidePictures/image4.png")) {
    image.src = "SlidePictures/image3.png";

} else if (image.src.match("SlidePictures/image3.png")) {
    image.src = "SlidePictures/image2.png";
} else {
    image.src = "SlidePictures/image.png";
}
}
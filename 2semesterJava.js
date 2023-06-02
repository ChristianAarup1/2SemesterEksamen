// JavaScript Document

//Define HTML/CSS


/*
function imgNext() {

      var image = document.getElementById("img1")
if (image.src.match("Billeder/Youtube_Capture.jpg")) {

    image.src = "Billeder/Booth.jpg";
} else if (image.src.match("Billeder/Boba_Revan.jpg")) {
    image.src = "Billeder/Boba_Revan.jpg";
	
	} else if (image.src.match("Billeder/Boba_Revan.jpg")) {
    image.src = "Billeder/Presentation.jpg";
} else {
  image.src = "Billeder/Youtube_Capture.jpg";
}
}
*/

function imgNext() {

      var image = document.getElementById("img1")
if (image.src.match("Billeder/Youtube_Capture.JPG")) {

    image.src = "Billeder/Booth.JPG";
} else if (image.src.match("Billeder/Booth")) {
    image.src = "Billeder/Boba_Revan.JPG";

} else if (image.src.match("Billeder/Boba_Revan.JPG")) {
    image.src = "Billeder/Presentation.JPG";
} else {
    image.src = "Billeder/Youtube_Capture.JPG";
}
}

function imgPrev() {

      var image = document.getElementById("img1")
if (image.src.match("Billeder/Youtube_Capture.JPG")) {
	
     image.src = "Billeder/Presentation.jpg";
} else if (image.src.match("Billeder/Presentation.jpg")) {
    image.src = "Billeder/Boba_Revan.jpg";
	
	} else if (image.src.match("Billeder/Boba_Revan.jpg")) {
    image.src = "Billeder/Booth.jpg";

} else {
    image.src = "Billeder/Youtube_Capture.JPG";
}
}
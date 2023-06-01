// JavaScript Document

//Define HTML/CSS

function imgNext() {

      var image = document.getElementById("img1")
if (image.src.match("Billeder/Booth.jpg")) {

    image.src = "Billeder/Boba_Revan.jpg";
} else if (image.src.match("Billeder/Boba_Revan.jpg")) {
    image.src = "Billeder/Presentation.jpg";
} else {
    image.src = "Billeder/Booth.jpg";
}
}

function imgPrev() {

      var image = document.getElementById("img1")
if (image.src.match("Billeder/Booth.jpg")) {
	
     image.src = "Billeder/Presentation.jpg";
} else if (image.src.match("Billeder/Presentation.jpg")) {
    image.src = "Billeder/Boba_Revan.jpg";

} else {
    image.src = "Billeder/Booth.jpg";
}
}
// JavaScript Document

//Define HTML/CSS



function imgNext() {

      var image = document.getElementById("img1")
if (image.src.match("Billeder/Booth.jpg")) {

    image.src = "Billeder/Boba_Revan.jpg";
} else if (image.src.match("Billeder/Boba_Revan.jpg")) {
    image.src = "Billeder/Presentation.jpg";
} else {
    // Replace the image with the YouTube video embed
    var videoContainer = document.createElement("div");
    videoContainer.innerHTML = '<iframe width="1120" height="630" src="https://www.youtube.com/embed/5PhVUPImx1s" title="KoyoCon 2022 Cosplay Highlights - Cosplay Denmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

	 image.parentNode.replaceChild(videoContainer, image);
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
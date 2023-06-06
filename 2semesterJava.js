// JavaScript Document

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

// Koyocon Summer Countdown
// Set the date we're counting down to
var countDownDate = new Date("Jun 30, 2023 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("CountdownSommer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("CountdownSommer").innerHTML = "EXPIRED";
  }
}, 1000);

// Koyocon Winter Countdown
// Set the date we're counting down to
var countDownDate2 = new Date("Oct 27, 2023 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate2 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo2"
  document.getElementById("CountdownVinter").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("CountdownVinter").innerHTML = "EXPIRED";
  }
}, 1000);

// Koyocon Cosplay Camp Counterdown

// Set the date we're counting down to
var countDownDate3 = new Date("Mar 17, 2023 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate3 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("CountdownCosplay").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("CountdownCosplay").innerHTML = "EXPIRED";
  }
}, 1000);
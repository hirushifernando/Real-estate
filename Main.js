
let slideIndex = 1;
showSlides(slideIndex);

// Function to increment or decrement the slide index
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to set the current slide index
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display the slides
function showSlides(n) {
  // Initialize variables
let i; // Counter variable
let slides = document.getElementsByClassName("mySlides"); // Get elements with class "mySlides" (presumed to be image slides)
let dots = document.getElementsByClassName("demo"); // Get elements with class "demo" (presumed to be slide navigation dots)
let captionText = document.getElementById("caption"); // Get element with ID "caption" (presumed to be a caption for the slides)

// Check if the provided slide index (n) is greater than the total number of slides
if (n > slides.length) {
  slideIndex = 1; // If so, set slideIndex to the first slide
}

// Check if the provided slide index (n) is less than 1
if (n < 1) {
  slideIndex = slides.length; // If so, set slideIndex to the last slide
}

// Hide all slides
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}

// Remove "active" class from all dots
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}

// Display the current slide
slides[slideIndex - 1].style.display = "block";

// Add "active" class to the dot corresponding to the current slide
dots[slideIndex - 1].className += " active";

// Set the caption text to the alt text of the current slide's dot
captionText.innerHTML = dots[slideIndex - 1].alt;
}
 
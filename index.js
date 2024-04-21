// JavaScript
window.onscroll = function() {scrollFunction()};
const scrollableContent = document.querySelector('.video-container');

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    const opacity = 3 - window.scrollY / 1000; // Adjust 1000 to fit your content height
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.backgroundColor = "#000"; // Change background color on scroll
    navbar.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)"; // Add box shadow
    scrollableContent.style.opacity = opacity > 0.2 ? 0.2 : opacity; // Limit opacity to 0.8 max
  } else {
    navbar.style.backgroundColor = "transparent"; // Reset background color
    navbar.style.boxShadow = "none"; // Remove box shadow
    scrollableContent.style.opacity = opacity < 1 ? 1 : opacity; 
  }
}
var audio = document.getElementById("myAudio");
var soundIcon = document.getElementById("soundIcon");

function toggleSound() {
  if (audio.muted) {
    audio.muted = false;
    soundIcon.className = "fas fa-volume-up";
  } else {
    audio.muted = true;
    soundIcon.className = "fas fa-volume-mute";
  }
}

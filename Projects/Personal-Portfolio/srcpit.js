// script.js
const roles = ["Web Developer", "Tech Enthusiast", "Web Designer", "Problem Solver"];
const typingSpeed = 150; // Typing speed in ms
const erasingSpeed = 100; // Erasing speed in ms
const delayBetweenRoles = 1000; // Delay before switching to the next role
let roleIndex = 0; // Index of the current role
let charIndex = 0; // Index of the current character

const roleElement = document.querySelector(".role");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    roleElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(eraseRole, delayBetweenRoles);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, erasingSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
    setTimeout(typeRole, delayBetweenRoles);
  }
}

// Start the typing animation
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeRole, delayBetweenRoles);
});
//bg-video
const video = document.querySelector('video');
video.addEventListener('ended', () => {
  video.currentTime = 0; // Reset to the beginning
  video.play(); // Play again
});

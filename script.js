//your JS code here. If required.
// script.js

// Function to handle window resize event
function handleWindowResize() {
    // Get the width and height of the window
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Update the dimensions on the webpage
    var dimensionsElement = document.getElementById("size-info");
    dimensionsElement.innerHTML = "Width: " + width + ", Height: " + height;
}

// Add event listener for window resize event
window.addEventListener("resize", handleWindowResize);

// Call the handleWindowResize function initially to get the initial width and height
handleWindowResize();

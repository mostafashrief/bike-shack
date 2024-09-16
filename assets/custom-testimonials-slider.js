// initialize slideshow

// config:
// assume there is just one single slider on the page
// navigation dots should be disabled
// no autoplay
// infinite loop
// the slides or cells should be aligned to the left side on initialization.
// pauseAutoPlayOnHover: false

// Wait for the DOM to fully load before initializing the slider
document.addEventListener("DOMContentLoaded", function() {
    // Initialize the slider for the testimonial section
    const slideshowContainer = document.querySelector(".testimonial-slider");
  
    if (slideshowContainer) {
      const slider = new Flickity(slideshowContainer, {
        // Slider options
        cellAlign: "left", // Align slides to the left
        wrapAround: true, // Infinite loop
        autoPlay: false, // Disable autoplay
        pageDots: false, // Disable navigation dots
        pauseAutoPlayOnHover: false, // Don't pause on hover
        pageDots: false,
      });
    }
  });
  
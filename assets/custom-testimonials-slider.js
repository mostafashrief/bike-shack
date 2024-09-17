document.addEventListener("DOMContentLoaded", function() {

  const slideshowContainers = document.querySelectorAll(".testimonial-slider");

  slideshowContainers.forEach((slideshowContainer) => {
  
    let autoplayValue = slideshowContainer.getAttribute("data-autoplay");
    if (autoplayValue === "false") {
      autoplayValue = false; 
    } else {
      autoplayValue = parseInt(autoplayValue, 10); 
    }

    const slider = new Flickity(slideshowContainer, {
      cellAlign: "left", 
      wrapAround: true, 
      autoPlay: autoplayValue, 
      pageDots: false, 
      pauseAutoPlayOnHover: false, 
    });
  });
});

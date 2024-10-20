const slides = [
  '<img class="carousel-image" src="img/carousel_first-gallery.png" alt="Image 1">',
  '<img class="carousel-image" src="img/carousel__second-gallery.jpg" alt="Image 2">',
  '<img class="carousel-image" src="img/carousel__third-gallery.jpg" alt="Image 3">',
  '<img class="carousel-image" src="img/carousel__four-gallery.png" alt="Image 4">',
];

let currentIdx = 0;

function renderSlide() {
  const slideContainer = document.querySelector(
    ".gallery__carousel__block-container .gallery__carousel"
  );

  if (!slideContainer) {
    console.error("Slide container not found");
    return;
  }

  // Reset the slide content
  slideContainer.innerHTML = slides[currentIdx];

  // Check for larger screens and add more slides accordingly
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
    slideContainer.innerHTML += slides[secondSlideIdx];

    if (window.matchMedia("(min-width: 980px)").matches) {
      const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
      slideContainer.innerHTML += slides[thirdSlideIdx];
    }
  }
}

renderSlide();

function nextSlide() {
  currentIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
  renderSlide();
}

function prevSlide() {
  currentIdx = currentIdx - 1 < 0 ? slides.length - 1 : currentIdx - 1;
  renderSlide();
}

const btnNext = document.querySelector(".gallery .arrow-button.right-arrow");
if (btnNext) {
  btnNext.addEventListener("click", nextSlide);
} else {
  console.error("Next button not found");
}

const btnPrev = document.querySelector(".gallery .arrow-button.left-arrow");
if (btnPrev) {
  btnPrev.addEventListener("click", prevSlide);
} else {
  console.error("Previous button not found");
}

// Re-render slides on window resize
window.addEventListener("resize", renderSlide);

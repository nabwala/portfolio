document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const scrollAmount = 400; // pixels per scroll
  const scrollDelay = 5000; // milliseconds

  function autoScroll() {
    // If near the end, scroll back to start
    if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 1) {
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  // Start auto-scrolling every few seconds
  setInterval(autoScroll, scrollDelay);
});

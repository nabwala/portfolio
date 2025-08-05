//Carousel auto-scroll script
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

document.addEventListener("DOMContentLoaded", function () {
  const text = "And those who were seen dancing \nwere thought to be insane \nby those who could not hear the music";
  const element = document.querySelector(".typewriter-text");

  let i = 0;

  //hero typewriter effect
  function typeWriter() {
    if (i < text.length) {
      if (text[i] === '\n') {
        element.innerHTML += "<br>";
      } else {
        element.innerHTML += text[i];
      }
      i++;
      setTimeout(typeWriter, 60); // adjust speed here
    }
  }

  typeWriter(); // just call it here once, no need for a second DOMContentLoaded
});

// Smooth scroll for anchor links
document.addEventListener("DOMContentLoaded", function () {
  const exploreBtn = document.getElementById("cta-button");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
      const target = document.querySelector(".projects");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
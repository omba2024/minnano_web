document.addEventListener("DOMContentLoaded", function () {
  // Image slider
  const sliderImages = document.querySelectorAll(".slider-img");
  let currentImage = 0;

  function changeImage() {
    sliderImages[currentImage].style.opacity = 0;
    currentImage = (currentImage + 1) % sliderImages.length;
    sliderImages[currentImage].style.opacity = 1;
  }

  setInterval(changeImage, 5000);

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Mobile menu toggle
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });

  // Scroll to top button
  const scrollToTopButton = document.createElement("div");
  scrollToTopButton.classList.add("scroll-to-top");
  scrollToTopButton.innerHTML = "&#8593;";
  document.body.appendChild(scrollToTopButton);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      scrollToTopButton.classList.add("visible");
    } else {
      scrollToTopButton.classList.remove("visible");
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Fade-in animation for sections
  const sections = document.querySelectorAll(".section");
  const fadeInOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const fadeInObserver = new IntersectionObserver(function (
    entries,
    fadeInObserver
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("fade-in");
        fadeInObserver.unobserve(entry.target);
      }
    });
  },
  fadeInOptions);

  sections.forEach((section) => {
    fadeInObserver.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  var html = document.querySelector('html'),
    menuOpenIcon = document.querySelector(".icon__menu"),
    menuCloseIcon = document.querySelector(".nav__icon-close"),
    menuList = document.querySelector(".main-nav"),
    toggleTheme = document.querySelector(".toggle-theme-js"),
    btnScrollToTop = document.querySelector(".top");


  /* =======================================================
  // Menu + Theme Switcher
  ======================================================= */
  menuOpenIcon.addEventListener("click", () => {
    menuOpen();
  });

  menuCloseIcon.addEventListener("click", () => {
    menuClose();
  });

  function menuOpen() {
    menuList.classList.add("is-open");
  }
  
  function menuClose() {
    menuList.classList.remove("is-open");
  }

  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      darkMode();
      disqus_loaded = false
      // Check if disqus is a valid function before calling it
      if (typeof disqus === 'function') {
        disqus();
      }
    });
  };


  // Theme Switcher
  function darkMode() {
    if (html.classList.contains('dark-mode')) {
      html.classList.remove('dark-mode');
      localStorage.removeItem("theme");
      document.documentElement.removeAttribute("dark");
    } else {
      html.classList.add('dark-mode');
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("dark", "");
    }
  }


  /* ================================================================
  // Stop Animations During Window Resizing and Switching Theme Modes
  ================================================================ */
  let disableTransition;
  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      stopAnimation();
    });
  }
    

  window.addEventListener("resize", () => {
    stopAnimation();
  });

  function stopAnimation() {
    document.body.classList.add("disable-animation");
    clearTimeout(disableTransition);
    disableTransition = setTimeout(() => {
      document.body.classList.remove("disable-animation");
    }, 100);
  }


  /* =======================
  // Responsive Videos
  ======================= */
  if (typeof reframe !== "undefined") {
    reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off), .project-content iframe:not(.reframe-off)");
  }



  /* =======================
  // LazyLoad Images
  ======================= */
  // LazyLoad Images - Check if LazyLoad is defined
  if (typeof LazyLoad !== "undefined") {
    // Initialize LazyLoad as usual
    var lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy"
    });
  } else {
    // Fallback: Immediately load all lazy images
    var lazyImages = document.querySelectorAll('.lazy');
    lazyImages.forEach(function(img) {
      var src = img.getAttribute('data-src');
      if (src) {
        img.setAttribute('src', src);
        img.classList.remove('lazy'); // Optional: remove the 'lazy' class
      }

      // If your images use srcset
      var srcset = img.getAttribute('data-srcset');
      if (srcset) {
        img.setAttribute('srcset', srcset);
      }
    });
  }
  /* =======================
  // Zoom Image
  ======================= */
  try {
    const lightense = document.querySelector(".page__content img, .post__content img, .project-content img, .gallery__image img"),
    imageLink = document.querySelectorAll(".page__content a img, .post__content a img, .project-content a img, .gallery__image a img");

    if (imageLink) {
      for (var i = 0; i < imageLink.length; i++) {
        imageLink[i].parentNode.classList.add("image-link");
        imageLink[i].classList.add("no-lightense");
      }
    }

    if (lightense && typeof Lightense !== "undefined") {
      Lightense(".page__content img:not(.no-lightense), .post__content img:not(.no-lightense), .project-content img:not(.no-lightense), .gallery__image img:not(.no-lightense)", {
        padding: 60,
        offset: 30
      });
    }
  } catch (error) {
    console.error("Lightense library not loaded:", error);
  }


  /* ============================
  // Testimonials Slider
  ============================ */
  if (document.querySelector(".my-slider") && typeof tns !== "undefined") {
    var slider = tns({
      container: ".my-slider",
      items: 3,
      slideBy: 1,
      gutter: 32,
      nav: true,
      mouseDrag: true,
      autoplay: false,
      controls: false,
      speed: 500,
      responsive: {
        1024: {
          items: 3,
        },
        768: {
          items: 2,
        },
        0: {
          items: 1,
        }
      }
    });
  }


  /* =================================
  // Smooth scroll to the tags page
  ================================= */
  document.querySelectorAll(".tag__link, .top__link").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  /* =======================
  // Scroll Sticky Topnav
  ======================= */
  // Debounce function to limit the rate at which a function can fire.
  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var headerInner = document.querySelector('.header__inner');
    var lightLogoImage = document.querySelector('.logo__link.logo-light img'); // Select the light logo image
    var darkLogoImage = document.querySelector('.logo-dark img'); // Select the dark logo image
  
    // Set initial and final values for the logo width and bottom position
    var initialLogoWidth = 150; // Initial logo width
    var finalLogoWidth = 100; // Final logo width when scrolled
    var initialBottom = 50; // Initial bottom position for logos
    var finalBottomLight = 40; // Final bottom position for light logo
    var finalBottomDark = 35; // Final bottom position for dark logo
    var maxScrollForEffect = 200; // Max scroll distance for full effect
    var initialYPadding = 60;
    var finalYPadding = 16;
  
    // Calculate the scale of change based on scroll position
    var scrollScale = scrollPosition / maxScrollForEffect;
    scrollScale = scrollScale > 1 ? 1 : scrollScale; // Cap the scale to 1
  
    // Calculate new logo width values
    var newLogoWidth = initialLogoWidth - ((initialLogoWidth - finalLogoWidth) * scrollScale);
  
    // Apply the new width to both logos
    lightLogoImage.style.width = newLogoWidth + 'px';
    darkLogoImage.style.width = newLogoWidth + 'px';
  
    // Calculate and apply the new bottom positions based on scroll
    var newBottomLight = initialBottom - ((initialBottom - finalBottomLight) * scrollScale);
    var newBottomDark = initialBottom - ((initialBottom - finalBottomDark) * scrollScale);
    lightLogoImage.style.bottom = newBottomLight + 'px';
    darkLogoImage.style.bottom = newBottomDark + 'px';
    var newYPadding = initialYPadding - ((initialYPadding - finalYPadding) * scrollScale);
    headerInner.style.paddingBottom = newYPadding + 'px';
    headerInner.style.paddingTop = newYPadding + 'px';
  });
  

  
  
  /* =======================
  // Scroll Top Button
  ======================= */
  btnScrollToTop.addEventListener("click", function () {
    if (window.scrollY != 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }
  });

});
// ============================================================
//  RPS — Main Script
// ============================================================

(function () {
    "use strict";
  
    /* ---- SPA Navigation ---- */
    const sections = document.querySelectorAll(".page-section");
    const navLinks = document.querySelectorAll("[data-page]");
  
    function showPage(pageId) {
      sections.forEach(function (s) {
        s.classList.toggle("active", s.id === pageId);
      });
      navLinks.forEach(function (l) {
        l.classList.toggle("active", l.dataset.page === pageId);
      });
      window.scrollTo({ top: 0, behavior: "instant" });
      // Close mobile menu
      document.querySelector(".nav-mobile").classList.remove("open");
    }
  
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        showPage(link.dataset.page);
      });
    });
  
    // Show home by default
    showPage("page-home");
  
    /* ---- Navbar scroll effect ---- */
    var navbar = document.getElementById("navbar");
    function handleScroll() {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
  
    /* ---- Hamburger menu ---- */
    var hamburger = document.querySelector(".nav-hamburger");
    var mobileNav = document.querySelector(".nav-mobile");
    if (hamburger) {
      hamburger.addEventListener("click", function () {
        mobileNav.classList.toggle("open");
      });
    }
  
    /* ---- Hero background Ken-Burns effect ---- */
    var heroBg = document.querySelector(".hero-bg");
    if (heroBg) {
      setTimeout(function () { heroBg.classList.add("loaded"); }, 100);
    }
  
    /* ---- Gallery filter ---- */
    var filterBtns = document.querySelectorAll(".filter-btn");
    var galleryItems = document.querySelectorAll(".gallery-item");
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
  
        var filter = btn.dataset.filter;
        galleryItems.forEach(function (item) {
          if (
            filter === "all" ||
            item.dataset.category.split(" ").includes(filter)
          ) {            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  

/* ---- Project Carousel Modal ---- */

var modal = document.getElementById("projectModal");
var modalTrack = document.getElementById("modalTrack");
var modalClose = document.querySelector(".modal-close");
var leftArrow = document.querySelector(".modal-arrow.left");
var rightArrow = document.querySelector(".modal-arrow.right");

var currentIndex = 0;
var imagesPerView = 3;
var totalImages = 0;

var projectImages = {
  southwoods: [
    "Images/Projects/southwoods 1.jpg",
    "Images/Projects/southwoods 2.jpg",
    "Images/Projects/southwoods 3.jpg",
    "Images/Projects/southwoods 4.jpg",
    "Images/Projects/southwoods 5.jpg",
    "Images/Projects/southwoods 6.jpg",
    "Images/Projects/southwoods 7.jpg",
    "Images/Projects/southwoods 8.jpg",
    "Images/Projects/southwoods 9.jpg",
    "Images/Projects/southwoods 10.jpg",
    "Images/Projects/southwoods 11.jpg",
    "Images/Projects/southwoods 12.jpg",

  ],

  ronquillo: [
    "Images/Projects/ronquillo 1.jpg",
    "Images/Projects/ronquillo 2.jpg",
    "Images/Projects/ronquillo 3.jpg",
    "Images/Projects/ronquillo 4.jpg",
    "Images/Projects/ronquillo 5.jpg",
    "Images/Projects/ronquillo 6.jpg"
  ],

  nap: [
    "Images/Projects/nap 1.jpg",
    "Images/Projects/nap 2.jpg",
    "Images/Projects/nap 3.jpg",
    "Images/Projects/nap 4.jpg",
    "Images/Projects/nap 5.jpg",
    "Images/Projects/nap 6.jpg"
  ],

  regina: [
    "Images/Projects/regina.jpg",
    "Images/Projects/regina 1.jpg",
    "Images/Projects/regina 2.jpg",
    "Images/Projects/regina 3.jpg",
    "Images/Projects/regina 4.jpg",
    "Images/Projects/regina 5.jpg",
    "Images/Projects/regina 6.jpg",
    "Images/Projects/regina 7.jpg",
    "Images/Projects/regina 8.jpg",
    "Images/Projects/regina 9.jpg",
    "Images/Projects/regina 10.jpg",
    "Images/Projects/regina 11.jpg",
    "Images/Projects/regina 12.jpg",
    "Images/Projects/regina 13.jpg",
  ],

  sonia: [
    "Images/Projects/sonia.jpg",
    "Images/Projects/sonia 1.jpg",
    "Images/Projects/sonia 2.jpg",
    "Images/Projects/sonia 3.jpg",
    "Images/Projects/sonia 4.jpg",
    "Images/Projects/sonia 5.jpg",
    "Images/Projects/sonia 6.jpg",
    "Images/Projects/sonia 7.jpg",
    "Images/Projects/sonia 8.jpg",
    "Images/Projects/sonia 9.jpg",
    "Images/Projects/sonia 10.jpg",
    "Images/Projects/sonia 11.jpg",
    "Images/Projects/sonia 12.jpg",
    "Images/Projects/sonia 13.jpg",
    "Images/Projects/sonia 14.jpg",
    "Images/Projects/sonia 15.jpg",
    "Images/Projects/sonia 16.jpg",
  ],

  samaniego: [
    "Images/Projects/samaniego.jpg",
    "Images/Projects/samaniego 1.jpg",
    "Images/Projects/samaniego 2.jpg",
    "Images/Projects/samaniego 3.jpg",
    "Images/Projects/samaniego 4.jpg",
    "Images/Projects/samaniego 5.jpg",
    "Images/Projects/samaniego 6.jpg",
    "Images/Projects/samaniego 7.jpg",
    "Images/Projects/samaniego 8.jpg"
  ],

  axeia1: [
    "Images/axeia/1.jpg",
    "Images/axeia/2.jpg",
    "Images/axeia/3.jpg",
    "Images/axeia/4.jpg",
    "Images/axeia/5.jpg",
    "Images/axeia/6.jpg",
    "Images/axeia/7.jpg",
    "Images/axeia/8.jpg",
    "Images/axeia/9.jpg",
    "Images/axeia/10.jpg",
  ],

  axeia2: [
    "Images/axeia2/1.jpg",
    "Images/axeia2/2.jpg",
    "Images/axeia2/3.jpg",
    "Images/axeia2/4.jpg",
    "Images/axeia2/5.jpg",
    "Images/axeia2/6.jpg",
    "Images/axeia2/7.jpg",
    "Images/axeia2/8.jpg",
    "Images/axeia2/9.jpg",
    "Images/axeia2/10.jpg",
  ],

  axeia3: [
    "Images/axeia3/1.jpg",
    "Images/axeia3/2.jpg",
    "Images/axeia3/3.jpg",
    "Images/axeia3/4.jpg",
    "Images/axeia3/5.jpg",
    "Images/axeia3/6.jpg",
    "Images/axeia3/7.jpg",
    "Images/axeia3/8.jpg",
    "Images/axeia3/9.jpg"
  ],

  sanlorenzo: [
    "Images/Projects/sanlorenzo 1.jpg",
    "Images/Projects/sanlorenzo 2.jpg",
    "Images/Projects/sanlorenzo 3.jpg",
    "Images/Projects/sanlorenzo 4.jpg",
    "Images/Projects/sanlorenzo 5.jpg",
    "Images/Projects/sanlorenzo 6.jpg"
  ],

  paran: [
    "Images/Projects/paran 1.jpg",
    "Images/Projects/paran 2.jpg",
    "Images/Projects/paran 3.jpg",
    "Images/Projects/paran 4.jpg",
    "Images/Projects/paran 5.jpg",
    "Images/Projects/paran 6.jpg",
    "Images/Projects/paran 7.jpg",
    "Images/Projects/paran 8.jpg",
    "Images/Projects/paran 9.jpg",
    "Images/Projects/paran 10.jpg",
    "Images/Projects/paran 11.jpg",
    "Images/Projects/paran 12.jpg",
    "Images/Projects/paran 13.jpg"
  ],

  tolen: [
    "Images/Projects/tolen 1.jpg",
    "Images/Projects/tolen 2.jpg",
    "Images/Projects/tolen 3.jpg",
    "Images/Projects/tolen 4.jpg",
    "Images/Projects/tolen 5.jpg",
    "Images/Projects/tolen 6.jpg",
    "Images/Projects/tolen 7.jpg"
  ],

  ong: [
    "Images/Projects/ong 1.jpg",
    "Images/Projects/ong 2.jpg",
    "Images/Projects/ong 3.jpg",
    "Images/Projects/ong 4.jpg",
    "Images/Projects/ong 5.jpg",
    "Images/Projects/ong 6.jpg",
    "Images/Projects/ong 7.jpg"
  ],

  cha: [
    "Images/Projects/cha 1.jpg",
    "Images/Projects/cha 2.jpg",
    "Images/Projects/cha 3.jpg",
    "Images/Projects/cha 4.jpg",
    "Images/Projects/cha 5.jpg",
    "Images/Projects/cha 6.jpg",
    "Images/Projects/cha 7.jpg"
  ],

  office: [
    "Images/Projects/office 1.jpg",
    "Images/Projects/office 2.jpg"
  ],

  varkitchen: [
    "Images/var/21.jpg",
    "Images/var/1.jpg",
    "Images/var/23.jpg",
    "Images/var/9.jpg",
    "Images/var/16.jpg",
    "Images/Bathroom/park ridge state 4.jpg",
    "Images/Kitchen/ayala alabang 1.jpg",
    "Images/Kitchen/ayala alabang 2.jpg",
    "Images/Kitchen/ayala alabang 3.jpg",
    "Images/Kitchen/ayala alabang 4.jpg",
    "Images/Kitchen/ayala alabang 5.jpg",
    "Images/Kitchen/ayala alabang 6.jpg",
    "Images/Kitchen/ayala alabang 7.jpg",
    "Images/Kitchen/susana heights village 5.jpg",
    "Images/Kitchen/susana heights village 6.jpg",

  ],

  varbath: [
    "Images/var/2.jpg",
    "Images/var/4.jpg",
    "Images/var/12.jpg",
    "Images/var/19.jpg",
    "Images/var/20.jpg",
    "Images/Bathroom/park ridge state 3.jpg",
    "Images/Bathroom/park ridge state.jpg"
  ],

  varcloset: [
    "Images/var/3.jpg",
    "Images/var/5.jpg",
    "Images/var/6.jpg",
    "Images/var/7.jpg",
    "Images/var/8.jpg",
    "Images/var/10.jpg",
    "Images/var/11.jpg",
    "Images/var/13.jpg",
    "Images/var/14.jpg",
    "Images/var/15.jpg",
    "Images/var/17.jpg",
    "Images/var/18.jpg",
    "Images/var/22.jpg",
    "Images/var/24.jpg",
    "Images/var/25.jpg",
    "Images/var/26.jpg",
    "Images/Cabinets/architect brian 1.jpg",
    "Images/Cabinets/architect brian 2.jpg",
    "Images/Cabinets/susana heights village 4.jpg",
    "Images/Entertainment-Others/susana heights village.jpg"
  ]

};

galleryItems.forEach(function (item) {
  item.addEventListener("click", function () {

    var projectKey = item.dataset.project;
    var images = projectImages[projectKey];
    if (!images) return;

    modalTrack.innerHTML = "";
    currentIndex = 0;
    totalImages = images.length;

    images.forEach(function (src) {
      var img = document.createElement("img");
      img.src = src;
      modalTrack.appendChild(img);
    });

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});

function updateCarousel() {

  var firstImg = modalTrack.querySelector("img");
  if (!firstImg) return;

  var imageWidth = firstImg.offsetWidth + 20;
  modalTrack.style.transform =
    "translateX(-" + (currentIndex * imageWidth) + "px)";

  var maxIndex = Math.max(totalImages - imagesPerView, 0);

  // Disable arrows visually
  leftArrow.style.opacity = currentIndex === 0 ? "0.4" : "1";
  rightArrow.style.opacity = currentIndex >= maxIndex ? "0.4" : "1";
}

rightArrow.addEventListener("click", function () {

  var maxIndex = Math.max(totalImages - imagesPerView, 0);

  if (currentIndex < maxIndex) {
    currentIndex += imagesPerView;
    updateCarousel();
  }
});

leftArrow.addEventListener("click", function () {

  if (currentIndex > 0) {
    currentIndex -= imagesPerView;
    updateCarousel();
  }
});

    var startX = 0;
var endX = 0;

modalTrack.addEventListener("touchstart", function (e) {
  startX = e.touches[0].clientX;
});

modalTrack.addEventListener("touchend", function (e) {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {

  var swipeDistance = startX - endX;
  var maxIndex = Math.max(totalImages - imagesPerView, 0);

  if (Math.abs(swipeDistance) < 40) return;

  // On mobile move 1, desktop move 3
  var step = window.innerWidth <= 768 ? 1 : imagesPerView;

  // Swipe LEFT
  if (swipeDistance > 0 && currentIndex < maxIndex) {
    currentIndex = Math.min(currentIndex + step, maxIndex);
    updateCarousel();
  }

  // Swipe RIGHT
  else if (swipeDistance < 0 && currentIndex > 0) {
    currentIndex = Math.max(currentIndex - step, 0);
    updateCarousel();
  }
}

modalClose.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

window.addEventListener("click", function (e) {
  if (e.target === modal) closeModal();
});

var zoomOverlay = document.getElementById("zoomOverlay");
var zoomImage = document.getElementById("zoomImage");
var zoomClose = document.querySelector(".zoom-close");

var zoomIndex = 0;
var currentZoomImages = [];
var zoomStartX = 0;

/* -------- CLICK IMAGE TO OPEN ZOOM -------- */

modalTrack.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {

    currentZoomImages = Array.from(modalTrack.querySelectorAll("img"));
    zoomIndex = currentZoomImages.indexOf(e.target);

    updateZoomImage();

    zoomOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
});

/* -------- UPDATE IMAGE -------- */

function updateZoomImage() {
  if (!currentZoomImages.length) return;

  zoomImage.src = currentZoomImages[zoomIndex].src;
}

/* -------- MOBILE SWIPE SUPPORT -------- */

zoomOverlay.addEventListener("touchstart", function (e) {
  zoomStartX = e.touches[0].clientX;
});

zoomOverlay.addEventListener("touchend", function (e) {

  var zoomEndX = e.changedTouches[0].clientX;
  var distance = zoomStartX - zoomEndX;

  // Ignore very small swipes
  if (Math.abs(distance) < 40) return;

  // Swipe LEFT → Next image
  if (distance > 0) {
    if (zoomIndex < currentZoomImages.length - 1) {
      zoomIndex++;
      updateZoomImage();
    }
  }

  // Swipe RIGHT → Previous image
  if (distance < 0) {
    if (zoomIndex > 0) {
      zoomIndex--;
      updateZoomImage();
    }
  }
});

/* -------- KEYBOARD SUPPORT -------- */

document.addEventListener("keydown", function (e) {

  if (zoomOverlay.style.display === "flex") {

    if (e.key === "Escape") {
      closeZoom();
    }

    if (e.key === "ArrowRight" && zoomIndex < currentZoomImages.length - 1) {
      zoomIndex++;
      updateZoomImage();
    }

    if (e.key === "ArrowLeft" && zoomIndex > 0) {
      zoomIndex--;
      updateZoomImage();
    }
  }
});

/* -------- CLOSE EVENTS -------- */

zoomClose.addEventListener("click", closeZoom);

zoomOverlay.addEventListener("click", function (e) {
  if (e.target === zoomOverlay) {
    closeZoom();
  }
});

function closeZoom() {
  zoomOverlay.style.display = "none";
  document.body.style.overflow = "";
}
  
    /* ---- Contact Form Email ---- */

var contactForm = document.getElementById("contact-form");
var formMessage = document.getElementById("form-message");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_2jatz1m",
      "template_prsqn7c",
      contactForm
    )
    .then(function () {

      formMessage.textContent = "Thank you! Your message has been sent successfully. We’ll get back to you shortly.";
      formMessage.className = "form-message success show";

      contactForm.reset();

      setTimeout(function () {
        formMessage.classList.remove("show");
      }, 5000);

    })
    .catch(function (error) {

      formMessage.textContent = "Something went wrong. Please try again or contact us directly.";
      formMessage.className = "form-message error show";

      console.log(error);

      setTimeout(function () {
        formMessage.classList.remove("show");
      }, 5000);

    });
  });
}
  
    /* ---- Scroll reveal ---- */
    var revealEls = document.querySelectorAll(".reveal");
  
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  
    revealEls.forEach(function (el) { observer.observe(el); });
  
    /* ---- Re-init reveals on page change ---- */
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        setTimeout(function () {
          var newReveals = document.querySelectorAll(".page-section.active .reveal:not(.visible)");
          newReveals.forEach(function (el) { observer.observe(el); });
        }, 50);
      });
    });
  

  })();










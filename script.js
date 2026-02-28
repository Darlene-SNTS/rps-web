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
    "images/Projects/southwoods 1.jpg",
    "images/Projects/southwoods 2.jpg",
    "images/Projects/southwoods 3.jpg",
    "images/Projects/southwoods 4.jpg",
    "images/Projects/southwoods 5.jpg",
    "images/Projects/southwoods 6.jpg",
    "images/Projects/southwoods 7.jpg",
    "images/Projects/southwoods 8.jpg",
    "images/Projects/southwoods 9.jpg",
    "images/Projects/southwoods 10.jpg",
    "images/Projects/southwoods 11.jpg",
    "images/Projects/southwoods 12.jpg",

  ],

  ronquillo: [
    "images/Projects/ronquillo 1.jpg",
    "images/Projects/ronquillo 2.jpg",
    "images/Projects/ronquillo 3.jpg",
    "images/Projects/ronquillo 4.jpg",
    "images/Projects/ronquillo 5.jpg",
    "images/Projects/ronquillo 6.jpg"
  ],

  nap: [
    "images/Projects/nap 1.jpg",
    "images/Projects/nap 2.jpg",
    "images/Projects/nap 3.jpg",
    "images/Projects/nap 4.jpg",
    "images/Projects/nap 5.jpg",
    "images/Projects/nap 6.jpg"
  ],

  regina: [
    "images/Projects/regina.jpg",
    "images/Projects/regina 1.jpg",
    "images/Projects/regina 2.jpg",
    "images/Projects/regina 3.jpg",
    "images/Projects/regina 4.jpg",
    "images/Projects/regina 5.jpg",
    "images/Projects/regina 6.jpg",
    "images/Projects/regina 7.jpg",
    "images/Projects/regina 8.jpg",
    "images/Projects/regina 9.jpg",
    "images/Projects/regina 10.jpg",
    "images/Projects/regina 11.jpg",
    "images/Projects/regina 12.jpg",
    "images/Projects/regina 13.jpg",
  ],

  sonia: [
    "images/Projects/sonia.jpg",
    "images/Projects/sonia 1.jpg",
    "images/Projects/sonia 2.jpg",
    "images/Projects/sonia 3.jpg",
    "images/Projects/sonia 4.jpg",
    "images/Projects/sonia 5.jpg",
    "images/Projects/sonia 6.jpg",
    "images/Projects/sonia 7.jpg",
    "images/Projects/sonia 8.jpg",
    "images/Projects/sonia 9.jpg",
    "images/Projects/sonia 10.jpg",
    "images/Projects/sonia 11.jpg",
    "images/Projects/sonia 12.jpg",
    "images/Projects/sonia 13.jpg",
    "images/Projects/sonia 14.jpg",
    "images/Projects/sonia 15.jpg",
    "images/Projects/sonia 16.jpg",
  ],

  samaniego: [
    "images/Projects/samaniego.jpg",
    "images/Projects/samaniego 1.jpg",
    "images/Projects/samaniego 2.jpg",
    "images/Projects/samaniego 3.jpg",
    "images/Projects/samaniego 4.jpg",
    "images/Projects/samaniego 5.jpg",
    "images/Projects/samaniego 6.jpg",
    "images/Projects/samaniego 7.jpg",
    "images/Projects/samaniego 8.jpg"
  ],

  axeia1: [
    "images/axeia/1.jpg",
    "images/axeia/2.jpg",
    "images/axeia/3.jpg",
    "images/axeia/4.jpg",
    "images/axeia/5.jpg",
    "images/axeia/6.jpg",
    "images/axeia/7.jpg",
    "images/axeia/8.jpg",
    "images/axeia/9.jpg",
    "images/axeia/10.jpg",
  ],

  axeia2: [
    "images/axeia2/1.jpg",
    "images/axeia2/2.jpg",
    "images/axeia2/3.jpg",
    "images/axeia2/4.jpg",
    "images/axeia2/5.jpg",
    "images/axeia2/6.jpg",
    "images/axeia2/7.jpg",
    "images/axeia2/8.jpg",
    "images/axeia2/9.jpg",
    "images/axeia2/10.jpg",
  ],

  axeia3: [
    "images/axeia3/1.jpg",
    "images/axeia3/2.jpg",
    "images/axeia3/3.jpg",
    "images/axeia3/4.jpg",
    "images/axeia3/5.jpg",
    "images/axeia3/6.jpg",
    "images/axeia3/7.jpg",
    "images/axeia3/8.jpg",
    "images/axeia3/9.jpg"
  ],

  sanlorenzo: [
    "images/Projects/sanlorenzo 1.jpg",
    "images/Projects/sanlorenzo 2.jpg",
    "images/Projects/sanlorenzo 3.jpg",
    "images/Projects/sanlorenzo 4.jpg",
    "images/Projects/sanlorenzo 5.jpg",
    "images/Projects/sanlorenzo 6.jpg"
  ],

  paran: [
    "images/Projects/paran 1.jpg",
    "images/Projects/paran 2.jpg",
    "images/Projects/paran 3.jpg",
    "images/Projects/paran 4.jpg",
    "images/Projects/paran 5.jpg",
    "images/Projects/paran 6.jpg",
    "images/Projects/paran 7.jpg",
    "images/Projects/paran 8.jpg",
    "images/Projects/paran 9.jpg",
    "images/Projects/paran 10.jpg",
    "images/Projects/paran 11.jpg",
    "images/Projects/paran 12.jpg",
    "images/Projects/paran 13.jpg"
  ],

  tolen: [
    "images/Projects/tolen 1.jpg",
    "images/Projects/tolen 2.jpg",
    "images/Projects/tolen 3.jpg",
    "images/Projects/tolen 4.jpg",
    "images/Projects/tolen 5.jpg",
    "images/Projects/tolen 6.jpg",
    "images/Projects/tolen 7.jpg"
  ],

  ong: [
    "images/Projects/ong 1.jpg",
    "images/Projects/ong 2.jpg",
    "images/Projects/ong 3.jpg",
    "images/Projects/ong 4.jpg",
    "images/Projects/ong 5.jpg",
    "images/Projects/ong 6.jpg",
    "images/Projects/ong 7.jpg"
  ],

  cha: [
    "images/Projects/cha 1.jpg",
    "images/Projects/cha 2.jpg",
    "images/Projects/cha 3.jpg",
    "images/Projects/cha 4.jpg",
    "images/Projects/cha 5.jpg",
    "images/Projects/cha 6.jpg",
    "images/Projects/cha 7.jpg"
  ],

  office: [
    "images/Projects/office 1.jpg",
    "images/Projects/office 2.jpg"
  ],

  varkitchen: [
    "images/var/21.jpg",
    "images/var/1.jpg",
    "images/var/23.jpg",
    "images/var/9.jpg",
    "images/var/16.jpg",
    "images/Bathroom/park ridge state 4.jpg",
    "images/kitchen/ayala alabang 1.jpg",
    "images/kitchen/ayala alabang 2.jpg",
    "images/kitchen/ayala alabang 3.jpg",
    "images/kitchen/ayala alabang 4.jpg",
    "images/kitchen/ayala alabang 5.jpg",
    "images/kitchen/ayala alabang 6.jpg",
    "images/kitchen/ayala alabang 7.jpg",
    "images/kitchen/susana heights village 5.jpg",
    "images/kitchen/susana heights village 6.jpg",

  ],

  varbath: [
    "images/var/2.jpg",
    "images/var/4.jpg",
    "images/var/12.jpg",
    "images/var/19.jpg",
    "images/var/20.jpg",
    "images/Bathroom/park ridge state 3.jpg",
    "images/Bathroom/park ridge state.jpg"
  ],

  varcloset: [
    "images/var/3.jpg",
    "images/var/5.jpg",
    "images/var/6.jpg",
    "images/var/7.jpg",
    "images/var/8.jpg",
    "images/var/10.jpg",
    "images/var/11.jpg",
    "images/var/13.jpg",
    "images/var/14.jpg",
    "images/var/15.jpg",
    "images/var/17.jpg",
    "images/var/18.jpg",
    "images/var/22.jpg",
    "images/var/24.jpg",
    "images/var/25.jpg",
    "images/var/26.jpg",
    "images/cabinets/architect brian 1.jpg",
    "images/cabinets/architect brian 2.jpg",
    "images/cabinets/susana heights village 4.jpg",
    "images/entertainment-others/susana heights village.jpg"
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
  var imageWidth = modalTrack.querySelector("img").offsetWidth + 20;
  modalTrack.style.transform =
    "translateX(-" + (currentIndex * imageWidth) + "px)";
}

rightArrow.addEventListener("click", function () {
  currentIndex += imagesPerView;
  if (currentIndex >= totalImages) {
    currentIndex = 0; // infinite loop
  }
  updateCarousel();
});

leftArrow.addEventListener("click", function () {
  currentIndex -= imagesPerView;
  if (currentIndex < 0) {
    currentIndex = Math.max(totalImages - imagesPerView, 0);
  }
  updateCarousel();
});

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

// Click image inside carousel
modalTrack.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    zoomImage.src = e.target.src;
    zoomOverlay.style.display = "flex";
  }
});

zoomClose.addEventListener("click", closeZoom);

zoomOverlay.addEventListener("click", function (e) {
  if (e.target === zoomOverlay) closeZoom();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeZoom();
});

function closeZoom() {
  zoomOverlay.style.display = "none";
}
  
    /* ---- Contact Form Email ---- */

var contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_2jatz1m",
      "template_prsqn7c",
      contactForm
    )
    .then(function () {
      alert("Email sent successfully!");
      contactForm.reset();
    })
    .catch(function (error) {
      alert("Failed to send message. Please try again.");
      console.log(error);
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
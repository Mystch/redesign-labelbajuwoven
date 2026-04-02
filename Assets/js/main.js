// ==========================
// DOM READY
// ==========================
document.addEventListener("DOMContentLoaded", function () {

  // ==========================
  // MOBILE MENU TOGGLE
  // ==========================
  const menuToggle = document.querySelectorAll(".th-menu-toggle");
  const menuWrapper = document.querySelector(".th-menu-wrapper");

  menuToggle.forEach(btn => {
    btn.addEventListener("click", () => {
      menuWrapper.classList.toggle("active");
    });
  });

  // ==========================
  // CLOSE MENU WHEN CLICK OUTSIDE
  // ==========================
  document.addEventListener("click", function (e) {
    if (!menuWrapper.contains(e.target) && !e.target.closest(".th-menu-toggle")) {
      menuWrapper.classList.remove("active");
    }
  });

  // ==========================
  // SWIPER HERO SLIDER
  // ==========================
  if (typeof Swiper !== "undefined") {
    new Swiper("#heroSlide2", {
      loop: true,
      effect: "fade",
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".slider-pagination",
        clickable: true
      }
    });
  }

  // ==========================
  // MAGNIFIC POPUP (Quick View)
  // ==========================
  if (typeof $ !== "undefined") {
    $('.popup-link').magnificPopup({
      type: 'inline',
      midClick: true
    });
  }

  // ==========================
  // QUANTITY BUTTON
  // ==========================
  document.querySelectorAll(".quantity").forEach(qtyBox => {
    const input = qtyBox.querySelector(".qty-input");
    const plus = qtyBox.querySelector(".quantity-plus");
    const minus = qtyBox.querySelector(".quantity-minus");

    plus.addEventListener("click", () => {
      input.value = parseInt(input.value) + 1;
    });

    minus.addEventListener("click", () => {
      if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
      }
    });
  });

  // ==========================
  // SCROLL TO TOP
  // ==========================
  const scrollBtn = document.querySelector(".scroll-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});
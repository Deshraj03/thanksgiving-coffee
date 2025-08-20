const announcement = document.querySelector('.announcement');
const header = document.querySelector('header');
const closeBtn = document.querySelector('.announcement-close-btn');

closeBtn.addEventListener('click', function () {
  announcement.style.display = 'none';
  header.classList.add('header-bg');
});


// search button
document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector(".Search");
  const searchBar = document.querySelector(".search-bar");
  const closeBtn = document.querySelector(".close-search");

  if (searchBtn && searchBar && closeBtn) {
    // Toggle on search button
    searchBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      searchBar.classList.toggle("hidden");
      if (!searchBar.classList.contains("hidden")) {
        searchBar.querySelector("input").focus();
      }
    });

    // Close on close button
    closeBtn.addEventListener("click", function () {
      searchBar.classList.add("hidden");
    });

    // Click outside closes
    document.addEventListener("click", function (e) {
      if (!searchBar.contains(e.target) && !searchBtn.contains(e.target)) {
        searchBar.classList.add("hidden");
      }
    });
  }
});


// Banner-slider

document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('#banner-slider', {
    type: 'loop',
    perPage: 1,
    arrows: false,
    pagination: true,
    autoplay: true,
    interval: 4000,
  }).mount();

});

// Awards slider 
document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('#awards-slider', {
    type: 'carousel',
    perPage: 5,
    perMove: 3,
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 4000,
    breakpoints: {
      1024: { perPage: 5 }, 
      767: { perPage: 3 }
    }
  });

  splide.mount();
});

// Sidebar open/close toggle
const menuToggle = document.querySelector(".nav-toggle");
const sidebar = document.getElementById("mobileMenu");

if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
}



document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#mobileMenu");


  menu.querySelectorAll(".submenu-toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {
      const submenu = toggle.nextElementSibling;

      if (submenu && (submenu.classList.contains("submenu") || submenu.classList.contains("child-submenu"))) {

        const siblings = submenu.parentElement.parentElement.querySelectorAll(".submenu.active, .child-submenu.active");
        siblings.forEach(sib => {
          if (sib !== submenu) {
            sib.classList.remove("active", "slideInFromRight", "slideInFromLeft");
          }
        });


        if (submenu.classList.contains("active")) {
          submenu.classList.remove("active");
        } else {
          submenu.classList.add("active", "slideInFromRight");
          submenu.addEventListener("animationend", () => {
            submenu.classList.remove("slideInFromRight");
          }, { once: true });
        }
      }
    });
  });


  menu.querySelectorAll(".back-to-main").forEach(backBtn => {
    backBtn.addEventListener("click", () => {
      const currentSubmenu = backBtn.closest(".submenu, .child-submenu");

      currentSubmenu.classList.add("slideInFromLeft");
      currentSubmenu.addEventListener("animationend", () => {
        currentSubmenu.classList.remove("active", "slideInFromLeft");
      }, { once: true });
    });
  });
});

// collection Tab 
document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));


      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
});


// product-slider
document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('#product-slider', {
    type: 'carousel',
    perPage: 4,
    perMove: 1,
    arrows: true,
    gap: '10px',
    pagination: false,
    autoplay: false,
    interval: 3000,
    breakpoints: {
      1024: { perPage: 3 },
      768: { perPage: 2 },
      480: { perPage: 1 }
    }
  });

  splide.mount();
});
// product-slider
document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('#coffee-clubs-product-slider', {
    type: 'carousel',
    perPage: 4,
    perMove: 1,
    arrows: true,
    gap: '10px',
    pagination: false,
    autoplay: false,
    interval: 3000,
    breakpoints: {
      1024: { perPage: 3 },
      768: { perPage: 2 },
      480: { perPage: 1 }
    }
  });

  splide.mount();
});

// product-slider
document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('#all-product-slider', {
    type: 'carousel',
    perPage: 4,
    perMove: 1,
    arrows: true,
    gap: '10px',
    pagination: false,
    autoplay: false,
    interval: 3000,
    breakpoints: {
      1024: { perPage: 3 },
      768: { perPage: 2 },
      480: { perPage: 1 }
    }
  });

  splide.mount();
});

document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('#community-slider', {
    type: 'carousel',
    perPage: 3,
    perMove: 1,
    arrows: true,
    gap: '10px',
    pagination: false,
    autoplay: false,
    interval: 3000,
    breakpoints: {
      1024: { perPage: 3 },
      768: { perPage: 2 },
      480: { perPage: 1 }
    }
  });

  splide.mount();
});


document.addEventListener("DOMContentLoaded", function () {
  let splide;

  function initSplide() {
    if (window.innerWidth <= 767) {  
      if (!splide) {
        splide = new Splide(".instagram-post-slider", {
          type: "loop",
          perPage: 2,
          gap: "10px",
          pagination: false,
          arrows: true,
          breakpoints: {
            480: { perPage: 1 }
          }
        }).mount();
      }
    } else {
      if (splide) {
        splide.destroy();
        splide = null;
      }
    }
  }

  initSplide();
  window.addEventListener("resize", initSplide);
});

document.querySelectorAll(".accordion-title").forEach((title) => {
  title.addEventListener("click", () => {
    if (window.innerWidth < 768) {  
      title.classList.toggle("active");
      const content = title.nextElementSibling;
      content.classList.toggle("open");
    }
  });
});

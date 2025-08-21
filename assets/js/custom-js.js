document.addEventListener("DOMContentLoaded", () => {

  // Reusable Splide init function
  const initSplide = (selector, options) => {
    const el = document.querySelector(selector);
    if (!el) return null;
    return new Splide(el, options).mount();
  };

  // List of all sliders
  const sliders = [
    {
      selector: '#banner-slider',
      options: { type: 'loop', perPage: 1, arrows: true, pagination: true, autoplay: true, interval: 4000 }
    },
    {
      selector: '#awards-slider',
      options: { type: 'carousel', perPage: 5, perMove: 3, arrows: false, pagination: false, autoplay: true, interval: 4000, breakpoints: { 1024: { perPage: 5 }, 767: { perPage: 3 } } }
    },
    {
      selector: '#product-slider',
      options: { type: 'carousel', perPage: 4, perMove: 1, arrows: true, gap: '10px', pagination: false, autoplay: false, interval: 3000, breakpoints: { 1024: { perPage: 3 }, 768: { perPage: 2 }, 480: { perPage: 1 } } }
    },
    {
      selector: '#coffee-clubs-product-slider',
      options: { type: 'carousel', perPage: 4, perMove: 1, arrows: true, gap: '10px', pagination: false, autoplay: false, interval: 3000, breakpoints: { 1024: { perPage: 3 }, 768: { perPage: 2 }, 480: { perPage: 1 } } }
    },
    {
      selector: '#all-product-slider',
      options: { type: 'carousel', perPage: 4, perMove: 1, arrows: true, gap: '10px', pagination: false, autoplay: false, interval: 3000, breakpoints: { 1024: { perPage: 3 }, 768: { perPage: 2 }, 480: { perPage: 1 } } }
    },
    {
      selector: '#community-slider',
      options: { type: 'carousel', perPage: 3, perMove: 1, arrows: true, gap: '10px', pagination: false, autoplay: false, interval: 3000, breakpoints: { 1024: { perPage: 2 }, 768: { perPage: 2 }, 480: { perPage: 1 } } }
    }
  ];

  // Initialize all sliders
  const splideInstances = sliders.map(slider => initSplide(slider.selector, slider.options));

  // Instagram mobile slider
  let instagramSplide;
  const instagramEl = document.querySelector(".instagram-post-slider");
  const initInstagramSlider = () => {
    if (!instagramEl) return;
    if (window.innerWidth <= 767 && !instagramSplide) {
      instagramSplide = new Splide(instagramEl, { type: "loop", perPage: 2, gap: "10px", pagination: false, arrows: true, breakpoints: { 480: { perPage: 1 } } }).mount();
    } else if (window.innerWidth > 767 && instagramSplide) {
      instagramSplide.destroy();
      instagramSplide = null;
    }
  };
  initInstagramSlider();
  window.addEventListener("resize", initInstagramSlider);

});

document.addEventListener("DOMContentLoaded", () => {
  // Announcement close
  const announcement = document.querySelector('.announcement');
  const header = document.querySelector('header');
  const closeAnnouncementBtn = document.querySelector('.announcement-close-btn');

  if (announcement && header && closeAnnouncementBtn) {
    closeAnnouncementBtn.addEventListener('click', () => {
      announcement.style.display = 'none';
      header.classList.add('header-bg');
    });
  }

  // Search button toggle
  const searchBtn = document.querySelector(".Search");
  const searchBar = document.querySelector(".search-bar");
  const closeSearchBtn = document.querySelector(".close-search");

  if (searchBtn && searchBar && closeSearchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      searchBar.classList.toggle("hidden");
      if (!searchBar.classList.contains("hidden")) {
        searchBar.querySelector("input").focus();
      }
    });

    closeSearchBtn.addEventListener("click", () => searchBar.classList.add("hidden"));

    document.addEventListener("click", (e) => {
      if (!searchBar.contains(e.target) && !searchBtn.contains(e.target)) {
        searchBar.classList.add("hidden");
      }
    });
  }


  const menuToggle = document.querySelector(".nav-toggle");
  const sidebar = document.getElementById("mobileMenu");
  const sidebarClose = document.querySelector(".sidebar-close");

  // Open/close sidebar
  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active"); 
    });
  }

// close sidebar
  if (sidebarClose && sidebar) {
    sidebarClose.addEventListener("click", () => {
      sidebar.classList.remove("active");
      if (menuToggle) menuToggle.classList.remove("active");
    });
  }

  if (!sidebar) return;

  // Submenu toggle
  sidebar.querySelectorAll(".submenu-toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {
      const submenu = toggle.nextElementSibling;
      if (!submenu || (!submenu.classList.contains("submenu") && !submenu.classList.contains("child-submenu"))) return;

      // Close other submenus on the same level
      const parentMenu = toggle.closest("ul");
      parentMenu.querySelectorAll(".submenu.active, .child-submenu.active").forEach(sib => {
        if (sib !== submenu) {
          sib.classList.remove("active", "slideInFromRight", "slideInFromLeft");
        }
      });

      // Toggle clicked submenu
      if (submenu.classList.contains("active")) {
        submenu.classList.remove("active");
      } else {
        submenu.classList.add("active", "slideInFromRight");
        submenu.addEventListener("animationend", () => submenu.classList.remove("slideInFromRight"), { once: true });
      }
    });
  });

  // Back button in nested submenus
  sidebar.querySelectorAll(".back-to-main").forEach(backBtn => {
    backBtn.addEventListener("click", () => {
      const currentSubmenu = backBtn.closest(".submenu, .child-submenu");
      if (!currentSubmenu) return;

      currentSubmenu.classList.add("slideInFromLeft");
      currentSubmenu.addEventListener("animationend", () => {
        currentSubmenu.classList.remove("active", "slideInFromLeft");
      }, { once: true });
    });
  });



  // Collection tabs
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  if (tabBtns.length && tabContents.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        const target = document.getElementById(btn.dataset.tab);
        if (target) target.classList.add("active");
      });
    });
  }

  // Accordion
  document.querySelectorAll(".accordion-title").forEach(title => {
    const content = title.nextElementSibling;
    if (!content) return;

    title.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        title.classList.toggle("active");
        content.classList.toggle("open");
      }
    });
  });
});
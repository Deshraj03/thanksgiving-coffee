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
 
// Banner-slider

document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('#awards-slider', {
    type: 'loop',
    perPage: 5,
    arrows: false,
    pagination: true,
    autoplay: true,
    interval: 4000,
  }).mount();
 
});
 
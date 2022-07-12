"use strict";

window.addEventListener("scroll", reveal), document.addEventListener("DOMContentLoaded", scrollAnimation);
var myWidth = window.innerWidth,
    reveals = document.querySelectorAll(".reveal"),
    headerNav = document.querySelector(".header-navigation"),
    searchContainer = document.querySelector(".search-icon-container"),
    mobileHeaderContainer = document.querySelector(".mobile-header-container"),
    mobileMenuCloseIcon = document.querySelector(".mobile-menu-close-icon"),
    mobileMenuOpenIcon = (mobileMenuCloseIcon.addEventListener("click", closeMobileMenu), document.querySelector(".mobile-menu-open-icon")),
    desktopHeader = (mobileMenuOpenIcon.addEventListener("click", openMobileMenu), document.querySelector(".page-header")),
    scrollHeader = document.addEventListener("scroll", changeHeader);

function changeHeader() {
  50 <= window.scrollY ? desktopHeader.classList.add("scroll") : window.scrollY < 50 && desktopHeader.classList.remove("scroll");
}

function openMobileMenu() {
  mobileHeaderContainer.classList.add("show"), mobileMenuOpenIcon.classList.add("hide");
}

function closeMobileMenu() {
  mobileHeaderContainer.classList.remove("show"), mobileMenuOpenIcon.classList.remove("hide");
}

document.addEventListener("click", function (e) {
  var n = document.querySelector(".fa-bars");
  mobileHeaderContainer.contains(e.target) || n.contains(e.target) || window.innerWidth < 990 && closeMobileMenu();
}), window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

for (var mobileDropdownContainer = document.querySelectorAll(".mobile-dropdown-item"), i = 0; i < mobileDropdownContainer.length; i++) {
  mobileDropdownContainer[i].children[0].addEventListener("click", function (e) {
    var n = e.target.closest(".mobile-dropdown-item-link").nextElementSibling;
    n.style.maxHeight = n.style.maxHeight ? null : n.scrollHeight + "px", n.classList.toggle("open");
  });
}

function scrollAnimation() {
  var e = document.querySelector(".introduction-container"),
      n = document.querySelector(".representation-container");
  e.classList.add("active"), 1600 < window.innerWidth && (n.classList.add("active"), n.classList.remove("reveal"));
}

function reveal() {
  for (var e = 0; e < reveals.length; e++) {
    var n = window.innerHeight;
    reveals[e].getBoundingClientRect().top < n - 200 && reveals[e].classList.add("active");
  }
}

window.addEventListener("resize", documentHeight);

var documentHeight = function documentHeight() {
  var e = document.documentElement;
  e.style.setProperty("--doc-height", window.innerHeight + "px");
};

documentHeight();
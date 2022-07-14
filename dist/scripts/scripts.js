"use strict";

window.addEventListener("scroll", reveal), document.addEventListener("DOMContentLoaded", scrollAnimation);
var reveals = document.querySelectorAll(".js-is-reveal"),
    mobileHeaderContainer = document.querySelector(".header__mobile-container"),
    mobileMenuCloseIcon = document.querySelector(".header__close-icon"),
    mobileMenuOpenIcon = (mobileMenuCloseIcon.addEventListener("click", closeMobileMenu), document.querySelector(".header__mobile-icon")),
    desktopHeader = (mobileMenuOpenIcon.addEventListener("click", openMobileMenu), document.querySelector(".header")),
    scrollHeader = document.addEventListener("scroll", changeHeader);

function changeHeader() {
  50 <= window.scrollY ? desktopHeader.classList.add("js-is-scroll") : window.scrollY < 50 && desktopHeader.classList.remove("js-is-scroll");
}

function openMobileMenu() {
  mobileHeaderContainer.classList.add("js-is-show"), mobileMenuOpenIcon.classList.add("js-is-hide");
}

function closeMobileMenu() {
  mobileHeaderContainer.classList.remove("js-is-show"), mobileMenuOpenIcon.classList.remove("js-is-hide");
}

document.addEventListener("click", function (e) {
  var n = document.querySelector(".fa-bars");
  mobileHeaderContainer.contains(e.target) || n.contains(e.target) || window.innerWidth < 990 && closeMobileMenu();
}), window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

for (var mobileDropdownContainer = document.querySelectorAll(".dropdown-title"), i = 0; i < mobileDropdownContainer.length; i++) {
  mobileDropdownContainer[i].children[0].addEventListener("click", function (e) {
    var n = e.currentTarget.nextElementSibling;
    n.style.maxHeight = n.style.maxHeight ? null : n.scrollHeight + "px", n.classList.toggle("js-is-open");
  });
}

function scrollAnimation() {
  var e = document.querySelector(".introduction__container"),
      n = document.querySelector(".representation");
  1200 <= window.innerWidth && (e.classList.add("js-custom-scroll-animation"), n.classList.add("js-scroll-animation"));
}

function reveal() {
  for (var e = 0; e < reveals.length; e++) {
    var n = window.innerHeight;
    reveals[e].getBoundingClientRect().top < n - 200 && reveals[e].classList.add("js-scroll-animation");
  }
}

window.addEventListener("resize", documentHeight);

var documentHeight = function documentHeight() {
  var e = document.documentElement;
  e.style.setProperty("--doc-height", window.innerHeight + "px");
};

documentHeight();
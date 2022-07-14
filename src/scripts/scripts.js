window.addEventListener("scroll", reveal);
document.addEventListener("DOMContentLoaded", scrollAnimation);

const reveals = document.querySelectorAll(".js-is-reveal");
const mobileHeaderContainer = document.querySelector(".header__mobile-container");

const mobileMenuCloseIcon = document.querySelector(".header__close-icon");
mobileMenuCloseIcon.addEventListener("click", closeMobileMenu);

const mobileMenuOpenIcon = document.querySelector(".header__mobile-icon");
mobileMenuOpenIcon.addEventListener("click", openMobileMenu);

const desktopHeader = document.querySelector(".header");
const scrollHeader = document.addEventListener("scroll", changeHeader);


function changeHeader() {
  if (window.scrollY >= 50) {
    desktopHeader.classList.add("js-is-scroll");
  } else if (window.scrollY < 50) {
    desktopHeader.classList.remove("js-is-scroll");
  }
}

// Open mobile menu
function openMobileMenu() {
  mobileHeaderContainer.classList.add("js-is-show");
  mobileMenuOpenIcon.classList.add("js-is-hide");
}

// Close mobile menu
function closeMobileMenu() {
  mobileHeaderContainer.classList.remove("js-is-show");
  mobileMenuOpenIcon.classList.remove("js-is-hide");
}

// Close the mobile menu, when click outside the box
document.addEventListener('click', function handleClickOutsideBox(event) {
  let closeIcon = document.querySelector(".fa-bars");

  if (!mobileHeaderContainer.contains(event.target)) {
    if (!closeIcon.contains(event.target)) {
      if (window.innerWidth < 990) {
        closeMobileMenu();
      }
    }
  }

});


//  Return to top when reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


// Mobile Dropdown
var mobileDropdownContainer = document.querySelectorAll(".dropdown-title");
for (var i = 0; i < mobileDropdownContainer.length; i++) {
  mobileDropdownContainer[i].children[0].addEventListener("click", (event) => {
    let dropdownItem = event.currentTarget;
    let dropdown = dropdownItem.nextElementSibling;
    dropdown.style.maxHeight = dropdown.style.maxHeight ? null : dropdown.scrollHeight + "px";
    dropdown.classList.toggle("js-is-open");
  });
}


//  Scroll animations for introduction section
function scrollAnimation() {
  let introductionSection = document.querySelector(".introduction__container");
  let representationSection = document.querySelector(".representation");
  if (window.innerWidth >= 1200) {
    introductionSection.classList.add("js-custom-scroll-animation");
    representationSection.classList.add("js-scroll-animation");
  }
}


//  Scroll animations for all sections
function reveal() {
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("js-scroll-animation");
    }
  }
}

window.addEventListener("resize", documentHeight);

const documentHeight = () => {
 const doc = document.documentElement;
 doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
}

documentHeight();



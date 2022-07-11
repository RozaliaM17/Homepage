window.addEventListener("scroll", reveal);
document.addEventListener("DOMContentLoaded", scrollAnimation);

const myWidth = window.innerWidth;
const reveals = document.querySelectorAll(".reveal");
const headerNav = document.querySelector(".header-navigation");
const searchContainer = document.querySelector(".search-icon-container");
const mobileHeaderContainer = document.querySelector(".mobile-header-container");

const mobileMenuCloseIcon = document.querySelector(".mobile-menu-close-icon");
mobileMenuCloseIcon.addEventListener("click", closeMobileMenu);

const mobileMenuOpenIcon = document.querySelector(".mobile-menu-open-icon");
mobileMenuOpenIcon.addEventListener("click", openMobileMenu);

const desktopHeader = document.querySelector(".page-header");
const scrollHeader = document.addEventListener("scroll", changeHeader);


function changeHeader() {
  if (window.scrollY >= 100) {
    desktopHeader.classList.add("scroll");
  } else if (window.scrollY < 100) {
    desktopHeader.classList.remove("scroll");
  }
}


// Open mobile menu
function openMobileMenu() {
  mobileHeaderContainer.classList.add("show");
  mobileMenuOpenIcon.classList.add("hide");
}


// Close mobile menu
function closeMobileMenu() {
  mobileHeaderContainer.classList.remove("show");
  mobileMenuOpenIcon.classList.remove("hide");
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
var mobileDropdownContainer = document.querySelectorAll(".mobile-dropdown-item");
for (var i = 0; i < mobileDropdownContainer.length; i++) {
  mobileDropdownContainer[i].children[0].addEventListener("click", (event) => {
    let dropdownItem = event.target.closest(".mobile-dropdown-item-link");
    let dropdown = dropdownItem.nextElementSibling;
    dropdown.style.maxHeight = dropdown.style.maxHeight ? null : dropdown.scrollHeight + "px";
    dropdown.classList.toggle("open");
  });
}


//  Scroll animations for introduction section
function scrollAnimation() {
  let introductionSection = document.querySelector(".introduction-container");
  let representationSection = document.querySelector(".representation-container");
  introductionSection.classList.add("active");
  if (window.innerWidth > 1600) {
    representationSection.classList.add("active");
    representationSection.classList.remove("reveal");
  }
}


//  Scroll animations for all sections
function reveal() {
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("resize", documentHeight);

const documentHeight = () => {
 const doc = document.documentElement;
 doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
}

documentHeight();



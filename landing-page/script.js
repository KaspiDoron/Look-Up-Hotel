/*****************************************************************************************/
/* NAV SECTION */
/*****************************************************************************************/
// title Declaring Elements
const overlay = document.querySelector(".overlay");

const userDropdownIcons = document.querySelector(".user-login");
const navbarDropdown = document.querySelector(".user-login-dropdown");
let isUserDropdownOpen = false;

const iconGlobe = document.querySelector(".globe-lan-icon");
const lanPopup = document.querySelector(".lan-popup");
let isLanPopupOpen = false;

const navLinks = document.querySelector(".nav-links");
const openMobileMenu = document.querySelector(".open-mobile-menu");
const closeMobileMenu = document.querySelector(".close-mobile-menu");
let isMobileMenuOpen = false;

// title Helper Functions
function openLan() {
  isLanPopupOpen = true;
  lanPopup.classList.remove("hidden");
}

function closeLan() {
  isLanPopupOpen = false;
  lanPopup.classList.add("hidden");
}

function openDropdownUser() {
  isUserDropdownOpen = true;
  navbarDropdown.classList.remove("hidden");
}

function closeDropdownUser() {
  isUserDropdownOpen = false;
  navbarDropdown.classList.add("hidden");
}

function addOverlayCntrl() {
  overlay.classList.remove("hidden");
}

function removeOverlayCntrl() {
  overlay.classList.add("hidden");
}

function openMobileMenuFn() {
  isMobileMenuOpen = true;
  openMobileMenu.classList.add("hidden-opacity");
  closeMobileMenu.classList.remove("hidden-opacity");
  navLinks.classList.add("opens-mobile-menu");
}

function closeMobileMenuFn() {
  isMobileMenuOpen = false;
  openMobileMenu.classList.remove("hidden-opacity");
  closeMobileMenu.classList.add("hidden-opacity");
  navLinks.classList.remove("opens-mobile-menu");
}

// title Handling Dropdown & Popup
userDropdownIcons.addEventListener("click", function () {
  // Activate dropdown if it's close
  if (!isUserDropdownOpen) {
    openDropdownUser();
    addOverlayCntrl();

    closeLan(); // Close popup if it's open
  }
  // Close dropdown if it's open
  else {
    closeDropdownUser();
    removeOverlayCntrl();
  }
});

iconGlobe.addEventListener("click", function () {
  // Activate popup if it's close
  if (!isLanPopupOpen) {
    openLan();
    addOverlayCntrl();

    closeDropdownUser(); // Close dropdown if it's open
  }
  // Close dropdown if it's open
  else {
    closeLan();
    removeOverlayCntrl();
  }
});

overlay.addEventListener("click", function () {
  // If we able to click overlay that means dropdown/popup/mobile menu are open and the overlay applies
  closeLan();
  closeDropdownUser();
  closeMobileMenuFn();

  removeOverlayCntrl();
});

// title Handling Mobile Menu
openMobileMenu.addEventListener("click", function () {
  // Clickinng on the open menu btn, open only if it's closed
  if (!isMobileMenuOpen) {
    openMobileMenuFn();
    addOverlayCntrl();
  }
});

closeMobileMenu.addEventListener("click", function () {
  // Clickinng on the close menu btn, close only if it's open
  if (isMobileMenuOpen) {
    closeMobileMenuFn();
    removeOverlayCntrl();
  }
});

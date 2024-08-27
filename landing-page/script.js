"use strict";

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
    closeMobileMenuFn(); // Close menuMobile if it's open
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
    closeMobileMenuFn(); // Close menuMobile if it's open
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

/*****************************************************************************************/
/* HERO SECTION */
/*****************************************************************************************/
// title Declaring Elements
const searchBar = document.querySelector(".search-bar");
const searchField = document.querySelectorAll(".search-field");
const inputField = document.querySelectorAll(".input");

let chosenSearchField = 0,
  chosenInputField = 0;

let isSearchFieldChooseNow = false; // Creating a boolean to handle clicking and UNclicking

// title Helper Functions
// todo MAKING HELPER CLASSES THAT ADDS AND REMOVE THE "REGULAR MDOE" AND THE "CHOSE MODE"

// title Handling the search bar "chose mode"

// Taking the info about the clicked search field
function activateElement(event) {
  const clickedElement = event.target; // Get the clicked element

  // Condition that distinguish between "choose mode" and "regular mode"
  if (!isSearchFieldChooseNow) {
    isSearchFieldChooseNow = true; //Once it clicked when it was false, now it's true

    // Condition that distinguish between first time clicking and a second/third.. time while there is a clicked field
    if (
      chosenInputField !== clickedElement ||
      chosenSearchField !== clickedElement
    ) {
      // Set the chosenSearchField && chosenInputField to the QS
      if (
        clickedElement.classList.contains("where") ||
        clickedElement.classList.contains("where-input")
      ) {
        chosenSearchField = document.querySelector(".where");
        chosenInputField = document.querySelector(".where-input");
      } else if (
        clickedElement.classList.contains("arrive-by") ||
        clickedElement.classList.contains("arrive-by-input")
      ) {
        chosenSearchField = document.querySelector(".arrive-by");
        chosenInputField = document.querySelector(".arrive-by-input");
      } else if (
        clickedElement.classList.contains("check-out") ||
        clickedElement.classList.contains("check-out-input")
      ) {
        chosenSearchField = document.querySelector(".check-out");
        chosenInputField = document.querySelector(".check-out-input");
      } else if (
        clickedElement.classList.contains("travelers") ||
        clickedElement.classList.contains("travelers-input")
      ) {
        chosenSearchField = document.querySelector(".travelers");
        chosenInputField = document.querySelector(".travelers-input");
      } else {
        console.log("there is a bug");
      }

      // Removing all the css classes from the regular mode
      searchField.forEach((element) => {
        element.classList.remove("search-field-regular-mode");
      });
      inputField.forEach((element) => {
        element.classList.remove("input-background-regular-mode");
      });

      // Adding all the right css classes to the chosen search field and the search bar
      searchBar.classList.add("search-bar-choose-mode");
      searchField.forEach((element) => {
        element.classList.add("search-background-choosing-mode");
      });
      inputField.forEach((element) => {
        element.classList.remove("input-background-in-choose-mode");
      });
    }
    // If it's second time clicking and there is already clicked element
    else {
    }
  }

  // When the user clicked a second time he want
  else {
  }
}

// Add event listeners to all elements with the desired classes
const elementsWithClasses = document.querySelectorAll(".input, .search-field");
elementsWithClasses.forEach((element) => {
  element.addEventListener("click", activateElement);
});

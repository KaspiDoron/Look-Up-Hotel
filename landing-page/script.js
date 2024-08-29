"use strict";

/*****************************************************************************************/
/* NAV SECTION */
/*****************************************************************************************/
// title Declaring Elements
const navBarOverlay = document.querySelector(".navbar-overlay");

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

function addNabarOverlayCntrl() {
  navBarOverlay.classList.remove("hidden");
}

function removeNabarOverlayCntrl() {
  navBarOverlay.classList.add("hidden");
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
    addNabarOverlayCntrl();

    closeLan(); // Close popup if it's open
    closeMobileMenuFn(); // Close menuMobile if it's open
  }
  // Close dropdown if it's open
  else {
    closeDropdownUser();
    removeNabarOverlayCntrl();
  }
});

iconGlobe.addEventListener("click", function () {
  // Activate popup if it's close
  if (!isLanPopupOpen) {
    openLan();
    addNabarOverlayCntrl();

    closeDropdownUser(); // Close dropdown if it's open
    closeMobileMenuFn(); // Close menuMobile if it's open
  }
  // Close dropdown if it's open
  else {
    closeLan();
    removeNabarOverlayCntrl();
  }
});

navBarOverlay.addEventListener("click", function () {
  // If we able to click overlay that means dropdown/popup/mobile menu are open and the overlay applies
  closeLan();
  closeDropdownUser();
  closeMobileMenuFn();

  removeNabarOverlayCntrl();
});

// title Handling Mobile Menu
openMobileMenu.addEventListener("click", function () {
  // Clickinng on the open menu btn, open only if it's closed
  if (!isMobileMenuOpen) {
    openMobileMenuFn();
    addNabarOverlayCntrl();
  }
});

closeMobileMenu.addEventListener("click", function () {
  // Clickinng on the close menu btn, close only if it's open
  if (isMobileMenuOpen) {
    closeMobileMenuFn();
    removeNabarOverlayCntrl();
  }
});

/*****************************************************************************************/
/* HERO SECTION */
/*****************************************************************************************/
// title Declaring Elements
const searchBar = document.querySelector(".search-bar");
const searchField = document.querySelectorAll(".search-field");
const inputField = document.querySelectorAll(".input");
const labelField = document.querySelectorAll(".label-field");

const heroOverlay = document.querySelector(".hero-overlay");

let chosenSearchField = null,
  chosenInputField = null,
  chsoenLabelField = null;

let isASearchFieldChooseNow = false; // Creating a boolean to handle clicking and UNclicking

// title Helper Functions
function searchBarRemoveStylesRegularMode() {
  searchField.forEach((element) => {
    element.classList.remove("search-field-regular-mode");
  });
  inputField.forEach((element) => {
    element.classList.remove("input-background-regular-mode");
  });
}

function searchBarAddStylesChooseMode() {
  searchField.forEach((element) => {
    element.classList.add("search-background-choosing-mode");
  });
  inputField.forEach((element) => {
    element.classList.add("input-background-in-choose-mode");
  });
  searchBar.classList.add("search-bar-choose-mode");
}

function searchBarResetStylesChooseMode() {
  // Removing the special backgrounds "choose mode"
  searchField.forEach((element) => {
    element.classList.remove("search-background-choosing-mode");
  });
  inputField.forEach((element) => {
    element.classList.remove("input-background-in-choose-mode");
  });
  searchBar.classList.remove("search-bar-choose-mode");

  // Add the regular backgrounds
  searchField.forEach((element) => {
    element.classList.add("search-field-regular-mode");
  });
  inputField.forEach((element) => {
    element.classList.add("input-background-regular-mode");
  });
}

function deactivateChoosingMode() {
  if (isASearchFieldChooseNow) {
    chosenSearchField.classList.remove("choosing-search-field");
    chosenInputField.classList.remove("choosing-input");
    isASearchFieldChooseNow = false;
  }
}

function activateChoosingMode() {
  // Add the "choosing" classes to the chosen search field and input
  chosenSearchField.classList.add("choosing-search-field");
  chosenInputField.classList.add("choosing-input");
  isASearchFieldChooseNow = true;
}

function addHeroOverlayCntrl() {
  heroOverlay.classList.remove("hidden");
}

function removeHeroOverlayCntrl() {
  heroOverlay.classList.add("hidden");
}

// todo find a way to make the doc qs with chosen elements shorter DRY

// title Handling the search bar "chose mode"

// Taking the info about the clicked search field
function activateElement(event) {
  const clickedElement = event.target; // Get the clicked element

  // Check if clicked element is a label
  if (clickedElement.tagName === "LABEL") {
    const associatedInputId = clickedElement.getAttribute("for");
    const associatedInputField = document.getElementById(associatedInputId);

    // If associated input found, handle choosing mode activation
    if (associatedInputField) {
      // Deactivate any existing choosing mode
      deactivateChoosingMode();
      searchBarRemoveStylesRegularMode();

      chosenSearchField = associatedInputField.parentElement; // Get parent search-field
      chosenInputField = associatedInputField;
      chsoenLabelField = clickedElement;
      // After deactivated the previous fields, activate the new ones
      searchBarAddStylesChooseMode();
      activateChoosingMode();
      addHeroOverlayCntrl(); // Add overlay cntrl
    } else {
      console.error("Could not find associated input field for label");
    }
  }

  // Existing logic for clicking directly on search-field or input
  else {
    // Condition that distinguish between first time clicking and a second/third.. time while there is a clicked field
    if (
      chosenInputField !== clickedElement ||
      chosenSearchField !== clickedElement ||
      chsoenLabelField != clickedElement
    ) {
      // Checking if there is already chosen field
      if (!isASearchFieldChooseNow) {
        // Enter only if none field is choosen
        isASearchFieldChooseNow = true;

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
        searchBarRemoveStylesRegularMode();

        // Adding all the right css classes to the chosen search field and the search bar
        searchBarAddStylesChooseMode();
        activateChoosingMode();
        addHeroOverlayCntrl(); // Add overlay CNTRL
      }
      // If there is a field choosen now
      else {
        // Remove all the "choosing" CSS styles from the current chosen input & the currrent chosen search
        deactivateChoosingMode();

        // Add the right CSS styles to the rest of the search bar
        searchBarAddStylesChooseMode();

        // Add the QS to the new chosen fields
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

        // And add the right css classes to the new chosens fields
        activateChoosingMode();
        addHeroOverlayCntrl();
      }
    }
  }
}

// Add event listeners to all elements with the desired classes
const searchbarClasses = document.querySelectorAll(
  ".input, .search-field, .label-field"
);
searchbarClasses.forEach((element) => {
  element.addEventListener("click", activateElement);
});

heroOverlay.addEventListener("click", function () {
  // If we able to click overlay that means that the search bar in chose mode and the overlay applies
  deactivateChoosingMode();
  searchBarResetStylesChooseMode();

  removeNabarOverlayCntrl(); // Remove the cntrl at last
});

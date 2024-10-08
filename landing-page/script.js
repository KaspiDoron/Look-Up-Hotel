"use strict";
/*****************************************************************************************/
/* ACCOUNTS (DEMO) */
/*****************************************************************************************/
const account1 = {
  name: "Doron Kaspi",
  email: "kaspidoron@gmail.com",
  password: "Doronkaspi",
};
const account2 = {
  name: "Romi Meir Kalaf",
  email: "romikalaf@gmail.com",
  password: "Rmeir34",
};
const account3 = {
  name: "Yair Kaspi",
  email: "yairkaspi@gmail.com",
  password: "GolaniSheli",
};
const account4 = {
  name: "Shalom Hanoch",
  email: "shalomhanoch@gmail.com",
  password: "shabatShalom",
};

const accounts = [account1, account2, account3, account4];

// title Create Usernames
const checkType = function (arg) {
  if (Array.isArray(arg)) {
    return "arr";
  } else if (typeof arg === "object" && arg !== null) {
    return "obj";
  } else {
    console.log("It's neither an array nor an object");
  }
};

// can create for individual and for a group
const createUsernames = function (accs) {
  if (checkType(accs) === "obj") {
    const username = accs.name
      .toLowerCase()
      .split(" ")
      .map((name) => name.at(0))
      .join("");
    accs.username = username;
  } else if (checkType(accs) === "arr") {
    accs.forEach((acc) => {
      const username = acc.name
        .toLowerCase()
        .split(" ")
        .map((name) => name.at(0))
        .join("");
      acc.username = username;
    });
  } else {
    console.log("it's not obj/arr");
  }
};
createUsernames(accounts);

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
const openMobileMenu = document.querySelector(".close-mobile-menu");
const closeMobileMenu = document.querySelector(".open-mobile-menu");
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
/* FORM SIGN UP/IN SECTION */
/*****************************************************************************************/
// title Declaring Elements
const signBtn = document.getElementById("form-register");
const loginBtn = document.getElementById("form-login");
const closeFormBtn = document.querySelector(".close-form");
const openFormLogBtn = document.querySelector(".log-in-dropdown");
const openFormSignBtn = document.querySelector(".sign-in-dropdown");
const sumbitLogBtn = document.querySelector(".login-sumbit");

const logUsernameInput = document.querySelector(".login-username_value");
const logEmailInput = document.querySelector(".login-email_value");
const logPasswordInput = document.querySelector(".login-password_value");

const greetUserLabel = document.querySelector(".greeting-user");
const logoutLabel = document.querySelector(".logout-label");
const loginOverlay = document.querySelector(".blur-form");
const formContainer = document.querySelector(".entire-form-container");
const formSectionContainer = document.querySelector(".section-form-sign");

// title Handling Login (create currentAcc)
let currentAcc;
sumbitLogBtn.addEventListener("click", function (e) {
  e.preventDefault();

  currentAcc = accounts.find((acc) => acc.username === logUsernameInput.value);
  console.log(currentAcc);

  if (
    currentAcc?.password === logPasswordInput.value &&
    currentAcc?.username === logUsernameInput.value &&
    currentAcc?.email === logEmailInput.value
  ) {
    // Display logout and grret
    greetUser(currentAcc);
    logoutLabel.textContent = "Log Out";

    // Close Form
    closeForm();
  }
});

// title Helper Functions
// Starts in 'log in' state
const switchToSign = () => formContainer.classList.remove("active-form");

const switchToLog = () => formContainer.classList.add("active-form");

const openForm = () => {
  loginOverlay.classList.remove("hidden");
  formSectionContainer.classList.remove("hidden");
};

const closeForm = () => {
  loginOverlay.classList.add("hidden");
  formSectionContainer.classList.add("hidden");
};

const greetUser = (acc) => {
  greetUserLabel.textContent = `Welcome ${acc.name.split(" ")[0]}!`;
};

// title Handling Events
signBtn.addEventListener("click", switchToLog);

loginBtn.addEventListener("click", switchToSign);

openFormSignBtn.addEventListener("click", function () {
  openForm();
  switchToLog();
});

openFormLogBtn.addEventListener("click", function () {
  openForm();
  switchToSign();
});

closeFormBtn.addEventListener("click", closeForm);

loginOverlay.addEventListener("click", function () {
  closeForm();
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
  chosenLabelField = null;

let isFieldChosen = false; // Tracks if a search field is currently selected

// title Helper Functions
function removeStylesRegularMode() {
  // Remove regular mode styles
  searchField.forEach((element) =>
    element.classList.remove("search-field-regular-mode")
  );
  inputField.forEach((element) =>
    element.classList.remove("input-background-regular-mode")
  );
}

function addStylesChooseMode() {
  // Apply styles for "choose mode"
  searchField.forEach((element) =>
    element.classList.add("search-background-choosing-mode")
  );
  inputField.forEach((element) =>
    element.classList.add("input-background-in-choose-mode")
  );
  searchBar.classList.add("search-bar-choose-mode");
}

function resetStylesChooseMode() {
  // Remove "choose mode" styles
  searchField.forEach((element) =>
    element.classList.remove("search-background-choosing-mode")
  );
  inputField.forEach((element) =>
    element.classList.remove("input-background-in-choose-mode")
  );
  searchBar.classList.remove("search-bar-choose-mode");

  // Reapply regular mode styles
  searchField.forEach((element) =>
    element.classList.add("search-field-regular-mode")
  );
  inputField.forEach((element) =>
    element.classList.add("input-background-regular-mode")
  );
}

function deactivateChoosingMode() {
  // Remove styles from the currently chosen field
  if (isFieldChosen) {
    chosenSearchField.classList.remove("choosing-search-field");
    chosenInputField.classList.remove("choosing-input");
    isFieldChosen = false;
  }
}

function activateChoosingMode() {
  // Apply styles to the currently chosen field
  chosenSearchField.classList.add("choosing-search-field");
  chosenInputField.classList.add("choosing-input");
  isFieldChosen = true;
}

function showHeroOverlay() {
  heroOverlay.classList.remove("hidden");
}

function hideHeroOverlay() {
  heroOverlay.classList.add("hidden");
}

// todo to understand how can make all the elif qs shorter as a function to apply the DRY rule
// title Handling the search bar "choose mode"

// Handle click events on search fields and labels
function handleElementClick(event) {
  const clickedElement = event.target; // Get the clicked element

  if (clickedElement.tagName === "LABEL") {
    const associatedInputId = clickedElement.getAttribute("for");
    const associatedInputField = document.getElementById(associatedInputId);

    if (associatedInputField) {
      // Deactivate any previously chosen fields
      deactivateChoosingMode();
      removeStylesRegularMode();

      chosenSearchField = associatedInputField.parentElement; // Get parent search-field
      chosenInputField = associatedInputField;
      chosenLabelField = clickedElement;

      // Apply styles to the new chosen field
      addStylesChooseMode();
      activateChoosingMode();
      showHeroOverlay(); // Show overlay
    } else {
      console.error("Associated input field not found for label");
    }
  } else {
    // Handle click on search field or input
    if (
      chosenInputField !== clickedElement &&
      chosenSearchField !== clickedElement &&
      chosenLabelField !== clickedElement
    ) {
      if (!isFieldChosen) {
        // No field is currently chosen
        isFieldChosen = true;

        // Determine which field was clicked
        changeInptElementStyle(clickedElement);

        // Apply styles to the new chosen field
        removeStylesRegularMode();
        addStylesChooseMode();
        activateChoosingMode();
        showHeroOverlay(); // Show overlay
      } else {
        // A field is already chosen
        deactivateChoosingMode();

        // Apply styles to the new field
        addStylesChooseMode();
        determineChosenField(clickedElement);
        activateChoosingMode();
        showHeroOverlay(); // Show overlay
      }
    }
  }
}

const changeInptElementStyle = (clickedElement) => {
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
    console.log("Unexpected element clicked");
  }
};

function determineChosenField(clickedElement) {
  // Determine the new chosen field based on the clicked element
  changeInptElementStyle(clickedElement);
}

// Attach click event listeners to search bar elements
const searchbarClasses = document.querySelectorAll(
  ".input, .search-field, .label-field"
);
searchbarClasses.forEach((element) =>
  element.addEventListener("click", handleElementClick)
);

// Hide the overlay and reset styles when overlay is clicked
heroOverlay.addEventListener("click", function () {
  deactivateChoosingMode();
  resetStylesChooseMode();
  hideHeroOverlay(); // Hide overlay
});

/*****************************************************************************************/
/* FEATURED HOTELS SECTION */
/*****************************************************************************************/
// title Declaring Elements
let list = document.querySelector(".carousel .images-list");
let items = document.querySelectorAll(
  ".carousel .images-list .image-container"
);
let dots = document.querySelectorAll(".carousel .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};

prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};

function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  let lastActiveDot = document.querySelector(".carousel .dots li.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");
}

dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadSlider();
  });
});

/*****************************************************************************************/
/* GALLERY SECTION */
/*****************************************************************************************/

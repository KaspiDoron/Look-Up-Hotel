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
  // If we able to click overlay that means the dropdown or the popup are open and the overlay applies
  closeLan();
  closeDropdownUser();
  removeOverlayCntrl();
});

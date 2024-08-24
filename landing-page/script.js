/*****************************************************************************************/
/* NAV SECTION */
/*****************************************************************************************/
// title Dropdown Navigation
const overlay = document.querySelector(".overlay");
const userDropdownIcons = document.querySelector(".user-login");
const navbarDropdown = document.querySelector(".user-login-dropdown");
let isDropdownOpen = false;

userDropdownIcons.addEventListener("click", function () {
  // Activate dropdown if it's close
  if (!isDropdownOpen) {
    isDropdownOpen = true;
    navbarDropdown.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
  // Disable dropdown if it's open
  else {
    isDropdownOpen = false;
    navbarDropdown.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

// Close the dropdown when clicking on screen
overlay.addEventListener("click", function () {
  if (isDropdownOpen) {
    isDropdownOpen = false;
    navbarDropdown.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

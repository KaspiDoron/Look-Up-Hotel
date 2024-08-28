/*****************************************************************************************/
/* HERO SECTION */
/*****************************************************************************************/
const searchBar = document.querySelector(".search-bar");
const searchFields = document.querySelectorAll(".search-field");
const inputFields = document.querySelectorAll(".input");
const heroOverlay = document.querySelector(".hero-overlay");

let chosenSearchField = null;
let chosenInputField = null;
let isSearchFieldChosen = false;

// Helper function to handle adding and removing styles
function toggleClasses(elementList, className, action) {
  elementList.forEach((element) => element.classList[action](className));
}

// Toggle overlay visibility
function toggleHeroOverlay(show) {
  heroOverlay.classList[show ? "remove" : "add"]("hidden");
}

// Reset the styles to their initial state
function resetStyles() {
  toggleClasses(searchFields, "search-field-regular-mode", "remove");
  toggleClasses(inputFields, "input-background-regular-mode", "remove");
}

// Apply styles when a field is chosen
function applyChooseModeStyles() {
  toggleClasses(searchFields, "search-background-choosing-mode", "add");
  toggleClasses(inputFields, "input-background-in-choose-mode", "add");
  searchBar.classList.add("search-bar-choose-mode");
}

// Set the chosen search field and input field
function setChosenFields(clickedElement) {
  const fieldsMap = {
    where: [".where", ".where-input"],
    "arrive-by": [".arrive-by", ".arrive-by-input"],
    "check-out": [".check-out", ".check-out-input"],
    travelers: [".travelers", ".travelers-input"],
  };

  Object.keys(fieldsMap).forEach((key) => {
    if (
      clickedElement.classList.contains(key) ||
      clickedElement.classList.contains(`${key}-input`)
    ) {
      [chosenSearchField, chosenInputField] = fieldsMap[key].map((selector) =>
        document.querySelector(selector)
      );
    }
  });
}

// Handle search bar "choose mode"
function activateElement(event) {
  const clickedElement = event.target;

  if (
    clickedElement !== chosenInputField &&
    clickedElement !== chosenSearchField
  ) {
    if (!isSearchFieldChosen) {
      isSearchFieldChosen = true;
      setChosenFields(clickedElement);
      resetStyles();
      applyChooseModeStyles();
      chosenInputField.classList.add("choosing-input");
      chosenSearchField.classList.add("choosing-search-field");
      toggleHeroOverlay(true);
    } else {
      chosenInputField.classList.remove("choosing-input");
      chosenSearchField.classList.remove("choosing-search-field");
      applyChooseModeStyles();
      setChosenFields(clickedElement);
      chosenInputField.classList.add("choosing-input");
      chosenSearchField.classList.add("choosing-search-field");
    }
  }
}

// Add event listeners to all elements with the desired classes
document.querySelectorAll(".input, .search-field").forEach((element) => {
  element.addEventListener("click", activateElement);
});

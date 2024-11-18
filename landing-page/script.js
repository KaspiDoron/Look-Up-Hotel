"use strict";
/*****************************************************************************************/
/* HOTELS (DEMO) */
/*****************************************************************************************/
// title Helper Functions
const randomRating = () => Number((Math.random() + 4).toFixed(2));

const calculateDaysBetween = function (date1, date2) {
  const date1Ms = new Date(date1).getTime();
  const date2Ms = new Date(date2).getTime();
  const differenceMs = Math.abs(date2Ms - date1Ms);
  return Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
};

const initializeDynamicRoomAvailability = function (checkOutValue) {
  const today = new Date();
  const checkOutDate = new Date(checkOutValue);
  checkOutDate.setDate(checkOutDate.getDate() + 1);
  const daysUntilCheckout = calculateDaysBetween(today, checkOutDate);

  const days = daysUntilCheckout > 120 ? daysUntilCheckout : 120;

  return initializeRoomAvailability(days);
};

const initializeRoomAvailability = function (days = 120) {
  const today = new Date();
  const roomAvailability = [];
  let currentDate = new Date(today);

  let gapDuration = 0;
  let indexGapDuration = 0;

  // 30% chance to have a gap duration
  if (Math.random() < 0.3) {
    gapDuration = Math.floor(Math.random() * 1) + 3;
  }
  for (let i = 0; i < days; i++) {
    roomAvailability.push({
      date: currentDate.toISOString().split("T")[0],
      available: gapDuration > indexGapDuration ? false : true,
      maxTravelers:
        gapDuration > indexGapDuration ? 0 : Math.floor(Math.random() * 10),
    });

    if (roomAvailability[i].maxTravelers === 0)
      roomAvailability[i].available = false;

    if (indexGapDuration === gapDuration) {
      indexGapDuration = 0;
      gapDuration = 0;
    } else {
      indexGapDuration++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
    // 10% chance to have a new gap duration
    if (indexGapDuration === 0 && Math.random() < 0.1) {
      gapDuration = Math.floor(Math.random() * 1) + 3;
    }
  }
  return roomAvailability;
};

const RainforestRetreat = {
  type: "hotel",
  name: "Rainforest Retreat",
  location: "Iceland, Brazil",
  country: "Iceland",
  rating: randomRating(),
  description:
    "Hidden deep in the Amazon, Rainforest Retreat offers an immersive experience in nature. Explore jungle trails, spot exotic wildlife, and stay in eco-lodges surrounded by the lush beauty of the rainforest.",
  features: [
    { label: "Eco-Lodges", icon: "home-outline" },
    { label: "Wildlife Expeditions", icon: "paw-outline" },
    { label: "Jungle Trails", icon: "footsteps-outline" },
    { label: "Canoe Tours", icon: "boat-outline" },
    { label: "Cultural Experiences", icon: "earth-outline" },
  ],
  pricePerNight: 120,
  imgSrc: [
    "img/featured-hotels/Rainforest/rainforest-main.webp",
    "img/featured-hotels/Rainforest/rainforest-1.webp",
    "img/featured-hotels/Rainforest/rainforest-2.webp",
    "img/featured-hotels/Rainforest/rainforest-3.webp",
    "img/featured-hotels/Rainforest/rainforest-4.webp",
    "img/featured-hotels/Rainforest/rainforest-5.webp",
  ],
  hotelLoc: "Forest",
  roomAvailability: initializeRoomAvailability(),
};

const NorthernLightsInn = {
  type: "hotel",
  name: "Northern Lights Inn",
  location: "Iceland, Reykjavik",
  country: "Iceland",
  rating: randomRating(),
  description:
    "Northern Lights Inn offers a magical stay with breathtaking views of the Aurora Borealis. Warm up in hot springs, explore icy landscapes, and experience the natural beauty of Iceland from the comfort of glass igloos.",
  features: [
    { label: "Glass Igloos", icon: "home-outline" },
    { label: "Hot Springs", icon: "water-outline" },
    { label: "Aurora Viewing", icon: "moon-outline" },
    { label: "Snowmobile Rides", icon: "ice-cream-outline" },
    { label: "Ice Caves", icon: "snow-outline" },
  ],
  pricePerNight: 220,
  imgSrc: [
    "img/featured-hotels/NorthernLights/northern-main.webp",
    "img/featured-hotels/NorthernLights/northern-1.webp",
    "img/featured-hotels/NorthernLights/northern-2.webp",
    "img/featured-hotels/NorthernLights/northern-3.webp",
    "img/featured-hotels/NorthernLights/northern-4.webp",
    "img/featured-hotels/NorthernLights/northern-5.webp",
  ],
  hotelLoc: "Mountain",
  roomAvailability: initializeRoomAvailability(),
};

const coastalHavenHotel = {
  type: "hotel",
  name: "Coastal Haven Hotel",
  location: "Portugal, Lisbon",
  country: "Portugal",
  rating: randomRating(),
  description:
    "Coastal Haven Hotel offers luxurious seaside apartments with stunning ocean views. Enjoy the elegance of spacious, modern suites, premium amenities, and direct beach access for a perfect coastal escape.",
  features: [
    { label: "Ocean View", icon: "eye-outline" },
    { label: "Champagne Bar", icon: "wine-outline" },
    { label: "Heated Floors", icon: "thermometer-outline" },
    { label: "Private Terrace", icon: "home-outline" },
    { label: "Marble Bathroom", icon: "water-outline" },
  ],
  pricePerNight: 125,
  imgSrc: [
    "img/featured-hotels/Coastal Haven/coast-main.webp",
    "img/featured-hotels/Coastal Haven/coast-1.webp",
    "img/featured-hotels/Coastal Haven/coast-2.webp",
    "img/featured-hotels/Coastal Haven/coast-3.webp",
    "img/featured-hotels/Coastal Haven/coast-4.webp",
    "img/featured-hotels/Coastal Haven/coast-5.webp",
  ],
  hotelLoc: "City",
  roomAvailability: initializeRoomAvailability(),
};

const MarinaSandsResort = {
  type: "hotel",
  name: "Marina Sands Resort",
  location: "Portugal, Lisbon",
  country: "Portugal",
  rating: randomRating(),
  description:
    "Enjoy upscale beachfront living with breathtaking sea views and elegantly designed suites. Experience world-class amenities, private terraces, and direct access to pristine white-sand beaches for the ultimate tropical escape",
  features: [
    { label: "Sunset Yoga", icon: "body-outline" },
    { label: "Beachfront Cabanas", icon: "umbrella-outline" },
    { label: "In-Villa Dining", icon: "restaurant-outline" },
    { label: "Tropical Gardens", icon: "flower-outline" },
    { label: "Water Sports", icon: "bicycle-outline" },
  ],
  pricePerNight: 154,
  imgSrc: [
    "img/featured-hotels/Marina Sands/marina-main.webp",
    "img/featured-hotels/Marina Sands/marina-1.webp",
    "img/featured-hotels/Marina Sands/marina-2.webp",
    "img/featured-hotels/Marina Sands/marina-3.webp",
    "img/featured-hotels/Marina Sands/marina-4.webp",
    "img/featured-hotels/Marina Sands/marina-5.webp",
  ],
  hotelLoc: "Beach",
  roomAvailability: initializeRoomAvailability(),
};

const StarlightsHeaven = {
  type: "hotel",
  name: "Star Light Heaven",
  location: "Iceland, South Ari Atoll",
  country: "Iceland",
  rating: randomRating(),
  description:
    "Nestled in the serene Maldives, Star Light Heaven offers luxurious overwater bungalows with crystal-clear lagoon views. Immerse yourself in the beauty of tropical paradise with private pools, fine dining, and stunning starry skies.",
  features: [
    { label: "Overwater Bungalows", icon: "home-outline" },
    { label: "Private Pools", icon: "water-outline" },
    { label: "Fine Dining", icon: "restaurant-outline" },
    { label: "Star Gazing", icon: "moon-outline" },
    { label: "Diving Expeditions", icon: "water-outline" },
  ],
  pricePerNight: 113,
  imgSrc: [
    "img/featured-hotels/Starlights/star-main.webp",
    "img/featured-hotels/Starlights/star-1.webp",
    "img/featured-hotels/Starlights/star-2.webp",
    "img/featured-hotels/Starlights/star-3.webp",
    "img/featured-hotels/Starlights/star-4.webp",
    "img/featured-hotels/Starlights/star-5.webp",
  ],
  hotelLoc: "Beach",
  roomAvailability: initializeRoomAvailability(),
};

const OceanPearl = {
  type: "hotel",
  name: "Ocean Pearl Resort",
  location: "Morocco, French Polynesia",
  country: "Morocco",
  rating: randomRating(),
  description:
    "A dream escape awaits at Ocean Pearl Resort, offering stunning overwater suites with direct access to turquoise waters. Enjoy private jacuzzis, gourmet cuisine, and water sports in one of the world's most iconic destinations.",
  features: [
    { label: "Overwater Suites", icon: "home-outline" },
    { label: "Private Jacuzzi", icon: "water-outline" },
    { label: "Gourmet Cuisine", icon: "restaurant-outline" },
    { label: "Snorkeling", icon: "sunny-outline" },
    { label: "Sunset Cruises", icon: "boat-outline" },
  ],
  pricePerNight: 149,
  imgSrc: [
    "img/featured-hotels/OceanPearl/pearl-main.webp",
    "img/featured-hotels/OceanPearl/pearl-1.webp",
    "img/featured-hotels/OceanPearl/pearl-2.webp",
    "img/featured-hotels/OceanPearl/pearl-3.webp",
    "img/featured-hotels/OceanPearl/pearl-4.webp",
    "img/featured-hotels/OceanPearl/pearl-5.webp",
  ],
  hotelLoc: "Beach",
  roomAvailability: initializeRoomAvailability(),
};

const MountainWhispers = {
  type: "hotel",
  name: "Mountain Whispers Retreat",
  location: "Iceland, Colorado",
  country: "Iceland",
  rating: randomRating(),
  description:
    "A luxurious retreat in the heart of the Rockies, Mountain Whispers offers cozy cabins with breathtaking mountain views. Experience world-class skiing, spa treatments, and fine dining by a roaring fire.",
  features: [
    { label: "Mountain Cabins", icon: "home-outline" },
    { label: "Ski Access", icon: "snow-outline" },
    { label: "Spa & Wellness", icon: "accessibility-outline" },
    { label: "Fine Dining", icon: "restaurant-outline" },
    { label: "Hot Tubs", icon: "water-outline" },
  ],
  pricePerNight: 250,
  imgSrc: [
    "img/featured-hotels/MountainWhispers/mountain-main.webp",
    "img/featured-hotels/MountainWhispers/mountain-1.webp",
    "img/featured-hotels/MountainWhispers/mountain-2.webp",
    "img/featured-hotels/MountainWhispers/mountain-3.webp",
    "img/featured-hotels/MountainWhispers/mountain-4.webp",
    "img/featured-hotels/MountainWhispers/mountain-5.webp",
  ],
  hotelLoc: "Mountain",
  roomAvailability: initializeRoomAvailability(),
};

const CoralReefEscape = {
  type: "hotel",
  name: "Coral Reef Escape",
  location: "Japan, Australia",
  country: "Japan",
  rating: randomRating(),
  description:
    "Coral Reef Escape offers an eco-friendly haven for marine lovers. Stay in beachfront villas, dive into vibrant reefs, and experience wildlife tours in the heart of the world's largest coral reef system.",
  features: [
    { label: "Beachfront Villas", icon: "home-outline" },
    { label: "Reef Diving", icon: "sparkles-outline" },
    { label: "Wildlife Tours", icon: "paw-outline" },
    { label: "Eco-Friendly", icon: "leaf-outline" },
    { label: "Outdoor Pools", icon: "water-outline" },
  ],
  pricePerNight: 190,
  imgSrc: [
    "img/featured-hotels/CoralReef/coral-main.webp",
    "img/featured-hotels/CoralReef/coral-1.webp",
    "img/featured-hotels/CoralReef/coral-2.webp",
    "img/featured-hotels/CoralReef/coral-3.webp",
    "img/featured-hotels/CoralReef/coral-4.webp",
    "img/featured-hotels/CoralReef/coral-5.webp",
  ],
  hotelLoc: "Beach",
  roomAvailability: initializeRoomAvailability(),
};

const DesertDunesOasis = {
  type: "hotel",
  name: "Desert Dunes Oasis",
  location: "Japan, Tokyo",
  country: "Japan",
  rating: randomRating(),
  description:
    "An exotic desert getaway, Desert Dunes Oasis combines luxury with adventure. Enjoy lavish tents, camel rides, and unforgettable desert safaris under the stars in the heart of the Arabian desert.",
  features: [
    { label: "Luxury Tents", icon: "home-outline" },
    { label: "Camel Rides", icon: "walk-outline" },
    { label: "Desert Safaris", icon: "planet-outline" },
    { label: "Stargazing", icon: "moon-outline" },
    { label: "Sand Dunes", icon: "snow-outline" },
  ],
  pricePerNight: 210,
  imgSrc: [
    "img/featured-hotels/DesertDunes/desert-main.webp",
    "img/featured-hotels/DesertDunes/desert-1.webp",
    "img/featured-hotels/DesertDunes/desert-2.webp",
    "img/featured-hotels/DesertDunes/desert-3.webp",
    "img/featured-hotels/DesertDunes/desert-4.webp",
    "img/featured-hotels/DesertDunes/desert-5.webp",
  ],
  hotelLoc: "Desert",
  roomAvailability: initializeRoomAvailability(),
};

const hotels = [
  coastalHavenHotel,
  MarinaSandsResort,
  StarlightsHeaven,
  OceanPearl,
  MountainWhispers,
  CoralReefEscape,
  DesertDunesOasis,
  RainforestRetreat,
  NorthernLightsInn,
];

const hotelLocationSet = new Set(["Beach", "Mountain", "Desert"]);

const checkIfNewHotelLoc = (function (hotels) {
  hotels.forEach((hotel) => {
    hotelLocationSet.has(hotel.hotelLoc)
      ? ""
      : hotelLocationSet.add(hotel.hotelLoc);
  });
})(hotels);

const desMarkWords = [];
const desSpanWords = [];

const addUniqueWord = function (description, targetArr, otherArr) {
  const words = description.split(" ");

  for (let word of words) {
    word = word.replace(/[.,]/g, "").toLowerCase();

    if (
      !targetArr.includes(word) &&
      !otherArr.includes(word) &&
      word != "a" &&
      word != "an"
    ) {
      targetArr.push(word);
      return;
    }
  }
};

hotels.forEach((hotel) => {
  const description = hotel.description;

  addUniqueWord(description, desMarkWords, desSpanWords);
  addUniqueWord(description, desSpanWords, desMarkWords);
});

/*****************************************************************************************/
/* ACCOUNTS (DEMO) */
/*****************************************************************************************/
const account1 = {
  type: "acc",
  name: "Doron Kaspi",
  location: "Israel",
  email: "kaspidoron@gmail.com",
  password: "KASPIdoron",
  AIWishlist: [
    coastalHavenHotel,
    MarinaSandsResort,
    StarlightsHeaven,
    OceanPearl,
    MountainWhispers,
    CoralReefEscape,
    DesertDunesOasis,
    RainforestRetreat,
    NorthernLightsInn,
  ],
  likedPictures: [],
  searchHistory: [],
  likedLocations: new Set(),
  seenHotels: [],
};

const account2 = {
  type: "acc",
  name: "Looni Meir Kalaf",
  location: "Italy",
  email: "romikalaf@gmail.com",
  password: "MEIRlooni",
  AIWishlist: [
    coastalHavenHotel,
    MarinaSandsResort,
    StarlightsHeaven,
    OceanPearl,
    MountainWhispers,
    CoralReefEscape,
    DesertDunesOasis,
    RainforestRetreat,
    NorthernLightsInn,
  ],
  likedPictures: [],
  searchHistory: [],
  likedLocations: new Set(),
  seenHotels: [],
};

const account3 = {
  type: "acc",
  name: "Yair Kaspi",
  location: "USA",
  email: "yairkaspi@gmail.com",
  password: "GolaniSheli",
  AIWishlist: [
    coastalHavenHotel,
    MarinaSandsResort,
    StarlightsHeaven,
    OceanPearl,
    MountainWhispers,
    CoralReefEscape,
    DesertDunesOasis,
    RainforestRetreat,
    NorthernLightsInn,
  ],
  likedPictures: [],
  searchHistory: [],
  likedLocations: new Set(),
  seenHotels: [],
};

const account4 = {
  type: "acc",
  name: "Shalom Hanoch",
  location: "Canada",
  email: "shalomhanoch@gmail.com",
  password: "shabatShalom",
  AIWishlist: [
    coastalHavenHotel,
    MarinaSandsResort,
    StarlightsHeaven,
    OceanPearl,
    MountainWhispers,
    CoralReefEscape,
    DesertDunesOasis,
    RainforestRetreat,
    NorthernLightsInn,
  ],
  likedPictures: [],
  searchHistory: [],
  likedLocations: new Set(),
  seenHotels: [],
};

const accounts = [account1, account2, account3, account4];

// title Create Usernames
const checkType = function (arg) {
  if (Array.isArray(arg)) {
    return "arr";
  } else if (typeof arg === "object" && arg !== null) {
    return "obj";
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
  } else if (typeof accs === "string") {
    const username = accs
      .toLowerCase()
      .split(" ")
      .map((name) => name.at(0))
      .join("");
    return username;
  } else {
    console.log("it's not obj/arr nor a string");
  }
};
createUsernames(accounts);

/*****************************************************************************************/
/* FORM SIGN UP/IN SECTION */
/*****************************************************************************************/
// title Declaring Elements
const signBtn = document.getElementById("form-register");
const loginBtn = document.getElementById("form-login");
const closeFormBtn = document.querySelector(".close-form");
const openFormLogBtn = document.querySelector(".log-in-dropdown");
const openFormSignBtn = document.querySelector(".sign-in-dropdown");
const finalLogoutBtnOut = document.querySelector(".final-signout-out");
const finalLogoutBtnIn = document.querySelector(".final-signout-in");
const seePasswordBtns = document.querySelectorAll(".see-password");
const notSeePasswordBtns = document.querySelectorAll(".not-see-password");
const closeAlertBtn = document.querySelectorAll(".close-alert");
const submitLogBtn = document.querySelector(".login-sumbit");
const loginHotelFeaturedBtns = document.querySelectorAll(
  ".login-to-see, .login-through-modal"
);

const formInputs = document.querySelectorAll(".form-input");
const passwordInputs = document.querySelectorAll(".input-password");

const logUsernameInput = document.querySelector(".login-username_value");
const logEmailInput = document.querySelector(".login-email_value");
const logPasswordInput = document.querySelector(".login-password_value");

const submitCreateBtn = document.querySelector(".signup-sumbit");
const staySignedInput = document.querySelector(".stay-signed");
const createNameInput = document.querySelector(".signup-name_value");
const createEmailInput = document.querySelector(".signup-email_value");
const createPasswordInput = document.querySelector(".signup-password_value");
const createLocationInput = document.querySelector(".signup-location_value");

const greetUserLabel = document.querySelector(".greeting-user");
const logoutLabel = document.querySelector(".logout-label");
const blurOverlay = document.querySelector(".blur-overlay");
const formContainer = document.querySelector(".entire-form-container");
const formSectionContainer = document.querySelector(".section-form-sign");
const logoutModalContainer = document.querySelector(".warnning-logout-modal");
const sectionAlertsContainer = document.querySelector(".section-custom-alerts");
const userExistMessageContainer = document.querySelector(".user-exist-message");

let accountSigned = false,
  seePassword = false,
  currentAcc;

// title Handling Login (create currentAcc)
submitLogBtn.addEventListener("click", function (e) {
  e.preventDefault();

  currentAcc = accounts.find((acc) => acc.email === logEmailInput.value);

  if (
    currentAcc?.password === logPasswordInput.value &&
    currentAcc?.username === logUsernameInput.value &&
    currentAcc?.email === logEmailInput.value
  ) {
    accountSigned = true;
    console.log(currentAcc);
    greetUser(currentAcc);
    displayAIHotel(
      currentAcc.AIWishlist[
        Math.floor(Math.random() * currentAcc.AIWishlist.length)
      ]
    );
    logoutLabel.textContent = "Log Out";
    closeForm();
    loginHotelFeaturedBtns.forEach((btn) => {
      btn.style.display = "none";
    });
    newsletterExistAcc();
  }
});

// title Handling Create (create currentAcc)
const inputsInvalidMsg = document.querySelector(".inputs-error-alert");
const tryAgainCreate = document.getElementById("try-again-create-user");

const isValidPassword = function (password) {
  const strPass = password;

  const validLong = strPass.length >= 6;
  let validUpper = false,
    validSmall = false,
    hasNumber = false;

  for (let ch of strPass) {
    if (/\d/.test(ch)) {
      hasNumber = true;
      break;
    }

    if (/^[A-Z]$/.test(ch)) {
      validUpper = true;
      console.log("Valid Upper true");
    }

    if (/^[a-z]$/.test(ch)) {
      validSmall = true;
      console.log("Valid Small true");
    }
  }

  const final =
    validLong && validUpper && validSmall && !hasNumber ? true : false;

  return final;
};

const isValidEmail = function (email) {
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return emailPattern.test(email);
};

const isValidLocation = function (location) {
  const locList = document.getElementById("countryList");

  for (let option of locList.options)
    if (location === option.value) return true;

  return false;
};

const isValidName = function (name) {
  const words = name.trim().split(/\s+/);
  if (words.length < 2) return false;

  if (/\d/.test(name)) return false;

  return true;
};

const isValidInputs = function (validPass, validEmail, validLoc, validName) {
  return validPass && validEmail && validLoc && validName;
};

function closeInputsInvalidMsg() {
  inputsInvalidMsg.classList.add("hidden");

  closeOverlay();
}

function tryAgain() {
  inputsInvalidMsg.classList.add("hidden");
}

function openInputsInvalidMsg(name = "Comrade") {
  const [firstName] = name.split(" ");

  const formattedFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

  inputsInvalidMsg.classList.remove("hidden");

  document.querySelector(".user-name-inputs-error").textContent =
    formattedFirstName;

  openOverlay();
}

tryAgainCreate.addEventListener("click", tryAgain);

submitCreateBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const name = createNameInput.value;
  const location = createLocationInput.value;
  const email = createEmailInput.value;
  const password = createPasswordInput.value;
  const username = createUsernames(name);

  const type = "acc";
  const AIWishlist = [
    coastalHavenHotel,
    MarinaSandsResort,
    StarlightsHeaven,
    OceanPearl,
    MountainWhispers,
    CoralReefEscape,
    DesertDunesOasis,
    RainforestRetreat,
    NorthernLightsInn,
  ];
  const likedPictures = [];
  const searchHistory = [];
  const likedLocations = new Set();
  const seenHotels = [];

  const staySigned = staySignedInput.checked;

  if (!isValidInputs(password, email, location, name)) {
    openInputsInvalidMsg(name);
  } else {
    if (!checkIfUserExists(email)) {
      if (email !== "") {
        const newUser = createUser(
          name,
          location,
          email,
          password,
          username,
          type,
          AIWishlist,
          likedPictures,
          searchHistory,
          likedLocations,
          seenHotels
        );
        console.log("User Not exist");
        accounts.push(newUser);
        if (staySigned) {
          accountSigned = true;
          currentAcc = newUser;
          greetUser(currentAcc);
          displayAIHotel(
            currentAcc.AIWishlist[
              Math.floor(Math.random() * currentAcc.AIWishlist.length)
            ]
          );
          logoutLabel.textContent = "Log Out";
          loginHotelFeaturedBtns.forEach((btn) => {
            btn.style.display = "none";
          });
          newsletterExistAcc();
        }
        closeForm();
        console.log("User created:", newUser);
      }
    } else {
      openUserExistMessage();
      const chooseDifferentEmailBtn = document.querySelector(".diff-email");
      const userLabelName = document.querySelector(
        ".user-name-exist-message_value"
      );
      formSectionContainer.style.opacity = "0";
      userLabelName.textContent = makeOfficialName(name);
      chooseDifferentEmailBtn.addEventListener("click", () => {
        removeUserExistMessage();
        openOverlay();
        createEmailInput.value = "";
        formSectionContainer.style.opacity = "1";
      });
    }
  }
});

// title Helper Functions
// Starts in 'log in' state
const switchToSign = () => {
  formContainer.classList.remove("active-form");
  clearInputs();
  seePassword === true ? togglePasswordState() : "";
};

const switchToLog = () => {
  formContainer.classList.add("active-form");
  clearInputs();
  seePassword === true ? togglePasswordState() : "";
};

const openOverlay = () => {
  blurOverlay.classList.remove("hidden");
};

const closeOverlay = () => {
  blurOverlay.classList.add("hidden");
};

const openForm = () => {
  openOverlay();
  formSectionContainer.classList.remove("hidden");
};

const closeForm = () => {
  clearInputs();
  closeOverlay();
  formSectionContainer.classList.add("hidden");
};

const greetUser = (acc) => {
  greetUserLabel.textContent = `Welcome ${makeOfficialName(
    acc.name.split(" ")[0]
  )}!`;
};

const clearInputs = () => {
  formInputs.forEach((input) => {
    input.value = "";
  });
};

const showLogOutModal = () => {
  logoutModalContainer.classList.remove("hidden");
  openOverlay();
};

const removeLogOutModal = () => {
  logoutModalContainer.classList.add("hidden");
  closeOverlay();
};

const handleLogOutAction = (action) => {
  action === "logout" ? location.reload() : removeLogOutModal();
};
// comment
const togglePasswordState = (index) => {
  if (passwordInputs[index].getAttribute("type") === "password") {
    notSeePasswordBtns[index].style.opacity = "0";
    seePasswordBtns[index].style.opacity = "1";
    passwordInputs[index].setAttribute("type", "text");
  } else {
    notSeePasswordBtns[index].style.opacity = "1";
    seePasswordBtns[index].style.opacity = "0";
    passwordInputs[index].setAttribute("type", "password");
  }
};

const checkIfValidEmail = (email) => {
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  return emailPattern.test(email);
};

const checkIfUserExists = (email) => {
  if (!checkIfValidEmail(email)) {
    console.log("That's not an email!");
    return false;
  }
  return accounts.some((acc) => acc.email === email);
};

const makeOfficialName = (name = "Comrade") => {
  name = name.toLowerCase();
  const returnName = name[0].toUpperCase() + name.slice(1);
  return returnName;
};

const openUserExistMessage = () => {
  userExistMessageContainer.classList.remove("hidden");
  openOverlay();
};

const removeUserExistMessage = () => {
  userExistMessageContainer.classList.add("hidden");
  closeOverlay();
};

const closeAlert = (index) => {
  if (index === 0) {
    removeLogOutModal();
  } else if (index === 1) {
    removeUserExistMessage();
  } else if (index === 2) {
    tryAgain();
  }
};

const createUser = (
  name,
  location,
  email,
  password,
  username,
  type,
  AIWishlist,
  likedPictures,
  searchHistory,
  likedLocations,
  seenHotels
) => ({
  name,
  location,
  email,
  password,
  username,
  type,
  AIWishlist,
  likedPictures,
  searchHistory,
  likedLocations,
  seenHotels,
});

// title Handling Events
signBtn.addEventListener("click", switchToLog);

loginBtn.addEventListener("click", switchToSign);

openFormSignBtn.addEventListener("click", function () {
  if (openFormSignBtn.textContent === "Sign up") {
    openForm();
    switchToLog();
  }
});

openFormLogBtn.addEventListener("click", function () {
  if (openFormLogBtn.textContent === "Log in") {
    openForm();
    switchToSign();
  }
});

loginHotelFeaturedBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    if (openFormLogBtn.textContent === "Log in") {
      openForm();
      switchToSign();
    }
  })
);

closeFormBtn.addEventListener("click", closeForm);

blurOverlay.addEventListener("click", function () {
  closeForm();
  removeLogOutModal();
  removeUserExistMessage();
  removeHotelAppearMessage();
  closeInputsInvalidMsg();
});

logoutLabel.addEventListener("click", function (e) {
  e.preventDefault();
  if (accountSigned === true) {
    showLogOutModal();
  }
});

finalLogoutBtnOut.addEventListener("click", function () {
  accountSigned = false;
  handleLogOutAction("logout");
});

finalLogoutBtnIn.addEventListener("click", function () {
  handleLogOutAction("stayConnect");
});

seePasswordBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => togglePasswordState(index));
});

notSeePasswordBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => togglePasswordState(index));
});

closeAlertBtn.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    closeAlert(index);
  });
});

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

function addNavbarOverlayCntrl() {
  navBarOverlay.classList.remove("hidden");
}

function removeNavbarOverlayCntrl() {
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
    addNavbarOverlayCntrl();

    closeLan(); // Close popup if it's open
    closeMobileMenuFn(); // Close menuMobile if it's open
  }
  // Close dropdown if it's open
  else {
    closeDropdownUser();
    removeNavbarOverlayCntrl();
  }
});

iconGlobe.addEventListener("click", function () {
  // Activate popup if it's close
  if (!isLanPopupOpen) {
    openLan();
    addNavbarOverlayCntrl();

    closeDropdownUser(); // Close dropdown if it's open
    closeMobileMenuFn(); // Close menuMobile if it's open
  }
  // Close dropdown if it's open
  else {
    closeLan();
    removeNavbarOverlayCntrl();
  }
});

navBarOverlay.addEventListener("click", function () {
  // If we able to click overlay that means dropdown/popup/mobile menu are open and the overlay applies
  closeLan();
  closeDropdownUser();
  closeMobileMenuFn();

  removeNavbarOverlayCntrl();
});

// title Handling Mobile Menu
openMobileMenu.addEventListener("click", function () {
  // Clicking on the open menu btn, open only if it's closed
  if (!isMobileMenuOpen) {
    openMobileMenuFn();
    addNavbarOverlayCntrl();
  }
});

closeMobileMenu.addEventListener("click", function () {
  // Clicking on the close menu btn, close only if it's open
  if (isMobileMenuOpen) {
    closeMobileMenuFn();
    removeNavbarOverlayCntrl();
  }
});

const navbarObserve = document.getElementById("navbar");
const navbarHeightObserve = navbarObserve.offsetHeight;

const navbarBtns = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    const btn = document.querySelector(`[data-section="${entry.target.id}"]`);

    entry.isIntersecting
      ? btn?.classList.add("active")
      : btn?.classList.remove("active");
  });
};

const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: `-${navbarHeightObserve}px`,
};

// Create the Intersection Observer instance
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
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

const dataList = document.getElementById("location-suggestions");
const inputWhere = document.getElementById("where");

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
    clickedElement.classList.contains("travelers-input") ||
    clickedElement.classList.contains("guest-increment") ||
    clickedElement.classList.contains("guest-decrement")
  ) {
    chosenSearchField = document.querySelector(".travelers");
    chosenInputField = document.querySelector(".travelers-input");
  }
};

function determineChosenField(clickedElement) {
  changeInptElementStyle(clickedElement);
}

const searchbarClasses = document.querySelectorAll(
  ".input, .search-field, .label-field"
);

searchbarClasses.forEach((element) =>
  element.addEventListener("click", handleElementClick)
);

heroOverlay.addEventListener("click", function () {
  deactivateChoosingMode();
  resetStylesChooseMode();
  hideHeroOverlay();
});

function updateCheckoutMinDate() {
  const arriveByInput = document.getElementById("arrive-by");
  const checkoutInput = document.getElementById("check-out");

  const today = new Date();
  const todayFormatted = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(today);

  // Calculate the maximum date (today + 120 days)
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 120);
  const maxDateFormatted = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(maxDate);

  if (arriveByInput.value < todayFormatted) {
    // TODO: make a nice alert UI
    return;
  }

  if (arriveByInput.value > maxDateFormatted) {
    // TODO: make a nice alert UI for exceeding max date
    return;
  }

  checkoutInput.min = arriveByInput.value;

  if (
    checkoutInput.value < todayFormatted ||
    checkoutInput.value < arriveByInput.value
  ) {
    // TODO: make a nice alert UI
    return;
  }

  if (checkoutInput.value > maxDateFormatted) {
    // TODO: make a nice alert UI for exceeding max date
    return;
  }
}

document.querySelector(".guest-decrement").addEventListener("click", () => {
  const travelersInput = document.getElementById("who");
  if (travelersInput.value > 1) travelersInput.value--;
});

document.querySelector(".guest-increment").addEventListener("click", () => {
  const travelersInput = document.getElementById("who");
  if (travelersInput.value < 10) travelersInput.value++;
});

function updateDatalist() {
  dataList.innerHTML = "";
  hotelLocationSet.forEach((location, i) => {
    const option = document.createElement("option");
    option.value = location.charAt(0).toUpperCase() + location.slice(1);
    dataList.appendChild(option);
    i === 0
      ? (inputWhere.pattern = `${option.value}|`)
      : (inputWhere.pattern += `|${option.value}`);
  });
}
updateDatalist();

// title Handlaing Sumbit Searchbar
const searchbarBtn = document.querySelector(".search-button");
const messageHotelAppear = document.querySelector(".hotel-searched-displayed");

const whereValue = document.querySelector("#where");
const checkInValue = document.querySelector("#arrive-by");
const checkOutValue = document.querySelector("#check-out");
const travelersCountValue = document.querySelector("#who");

const originalMessageHotelAppearHTML = `
        <ion-icon name="sparkles-outline"></ion-icon>

        <h2>Hotel Appears Below</h2>
        <p>
          If that hotel doesn't meet your needs,
          <mark>simply tap</mark> the search icon again to view a different
          option!
        </p>
        <button class="hotel-appear">Great!</button>
`;

messageHotelAppear.innerHTML = originalMessageHotelAppearHTML;

const restoreOriginalHotelAppearMessage = function () {
  messageHotelAppear.innerHTML = originalMessageHotelAppearHTML;
  removeHotelAppearMessage();
};

const showHotelAppearMessage = function () {
  messageHotelAppear.classList.remove("hidden");

  const messageHotelAppearBtn = document.querySelector(".hotel-appear");
  messageHotelAppearBtn.addEventListener("click", removeHotelAppearMessage);
  openOverlay();
};

const removeHotelAppearMessage = function () {
  messageHotelAppear.classList.add("hidden");
  closeOverlay();
};

const showNoMoreHotel = function (finalFilteredHotels) {
  messageHotelAppear.innerHTML = "";

  const generateHotelMessage = function (finalFilteredHotels) {
    let message;

    if (finalFilteredHotels.length === 0) {
      message = `Unfortunately, there are no hotels matching your criteria. 
                 Please <mark>change your check-in dates</mark> or <mark>try a different location</mark> to find options.`;
    } else if (finalFilteredHotels.length === 1) {
      message = `Great news! There is only <mark>one hotel</mark> matching your needs. 
                 You can proceed to view the details or change your search criteria for more options.`;
    }
    return message;
  };

  const messageHotelAppearHTML = `      
        <ion-icon nae="alert-circle-outline"></ion-icon>        

        <h2>No Hotels Available!</h2>
        <p>
        ${generateHotelMessage(finalFilteredHotels)}
        </p>
        <button class="hotel-appear">Let's Try</button>`;

  messageHotelAppear.insertAdjacentHTML("beforeend", messageHotelAppearHTML);
  showHotelAppearMessage();
};

// Event listeners to restore the original message when inputs change
whereValue.addEventListener("input", restoreOriginalHotelAppearMessage);
checkInValue.addEventListener("input", restoreOriginalHotelAppearMessage);
checkOutValue.addEventListener("input", restoreOriginalHotelAppearMessage);
travelersCountValue.addEventListener(
  "input",
  restoreOriginalHotelAppearMessage
);

const getFilteredHotels = function (
  account,
  whereValue,
  checkInValue,
  checkOutValue,
  travelersCountValue
) {
  // 1. Filter hotels by location in AIWishlist
  let filteredLocHotels = account.AIWishlist.filter(
    (hotel) => hotel.hotelLoc === whereValue
  );

  console.log("--------------------------");
  console.log("1. Filtered locations hotels:");
  console.log(filteredLocHotels);

  // 2. Initialize room availability for each hotel
  filteredLocHotels.forEach((hotel) => {
    hotel.roomAvailability = initializeDynamicRoomAvailability(checkOutValue);
  });

  // 3. Calculate number of nights and find specific date range in roomAvailability
  const checkInDate = new Date(checkInValue);
  const checkOutDate = new Date(checkOutValue);
  const checkInStr = checkInDate.toISOString().split("T")[0];
  const checkOutStr = checkOutDate.toISOString().split("T")[0];

  const finalFilteredHotels = filteredLocHotels.filter((hotel) => {
    const startIndex = hotel.roomAvailability.findIndex(
      (room) => room.date === checkInStr
    );
    const endIndex = hotel.roomAvailability.findIndex(
      (room) => room.date === checkOutStr
    );

    if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
      return false;
    }

    return hotel.roomAvailability
      .slice(startIndex, endIndex)
      .every(
        (room) =>
          room.available && room.maxTravelers >= Number(travelersCountValue)
      );
  });
  console.log("--------------------------");
  console.log("3. Final filtered locations hotels:");
  console.log(finalFilteredHotels);

  // 4. Prioritize liked hotels but keep all available hotels for future searches
  const likedHotels = finalFilteredHotels.filter((hotel) =>
    account.likedLocations.has(hotel.country.toLowerCase())
  );
  const availableHotels = finalFilteredHotels;
  console.log("--------------------------");
  console.log("4. Liked hotels:");
  console.log(likedHotels);

  console.log("--------------------------");
  console.log("5. Available hotels:");
  console.log(availableHotels);

  // 5. Filter out previously seen hotels
  const unseenLikedHotels = likedHotels.filter(
    (hotel) => !account.seenHotels.includes(hotel.name)
  );
  const unseenAvailableHotels = availableHotels.filter(
    (hotel) => !account.seenHotels.includes(hotel.name)
  );

  console.log("--------------------------");
  console.log("6. Unseen Liked hotels:");
  console.log(unseenLikedHotels);

  console.log("--------------------------");
  console.log("7. Unseen Available hotels:");
  console.log(unseenAvailableHotels);

  // 6. Prioritize unseen liked hotels if available; otherwise, use all unseen available hotels
  const selectionPool =
    unseenLikedHotels.length > 0 ? unseenLikedHotels : unseenAvailableHotels;

  console.log("--------------------------");
  console.log("8. Selection pool hotels:");
  console.log(selectionPool);

  // 7. If no unseen hotels are available, allow re-showing all available hotels
  const finalSelection =
    selectionPool.length > 0 ? selectionPool : availableHotels;

  console.log("--------------------------");
  console.log("9. Final selection hotels:");
  console.log(finalSelection);

  // 8. If all hotels have been seen, reset `seenHotels` to only the currently selected hotel
  if (account.seenHotels.length >= availableHotels.length) {
    account.seenHotels = [];
  }

  // 9. Choose a random hotel from the final selection and mark it as "seen"
  const selectedHotel =
    finalSelection[Math.floor(Math.random() * finalSelection.length)];

  console.log("--------------------------");
  console.log("10. SELECTED HOTEL:");
  console.log(selectedHotel);

  !account.seenHotels.some((hotel) => hotel.name === selectedHotel.name)
    ? account.seenHotels.push(selectedHotel.name) // Track the hotel as seen by its name
    : "";

  console.log("--------------------------");
  console.log("11. Seen hotels Updated:");
  console.log(account.seenHotels);

  return selectedHotel; // Return a single selected hotel
};

const logicIfNoUserSign = function () {
  // 1. Filter hotels by location
  const filteredLocHotels = hotels.filter(
    (hotel) => hotel.hotelLoc === whereValue.value
  );

  // 2. Initialize room availability for each hotel in filteredLocHotels
  filteredLocHotels.forEach((hotel) => {
    hotel.roomAvailability = initializeDynamicRoomAvailability(
      checkOutValue.value
    );
  });

  // 3. Calculate number of nights and find specific date range in roomAvailability
  const checkInDate = new Date(checkInValue.value);
  const checkOutDate = new Date(checkOutValue.value);

  const finalFilteredHotels = filteredLocHotels.filter((hotel) => {
    // Parse check-in and check-out dates to match roomAvailability format
    const checkInStr = checkInDate.toISOString().split("T")[0];
    const checkOutStr = checkOutDate.toISOString().split("T")[0];

    const startIndex = hotel.roomAvailability.findIndex(
      (room) => room.date === checkInStr
    );
    const endIndex = hotel.roomAvailability.findIndex(
      (room) => room.date === checkOutStr
    );

    if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
      return false;
    }

    const roomAvailable = hotel.roomAvailability
      .slice(startIndex, endIndex)
      .every(
        (room) =>
          room.available &&
          room.maxTravelers >= Number(travelersCountValue.value)
      );

    return roomAvailable;
  });

  // 4. Display a random hotel if any match, else show an error message
  if (finalFilteredHotels.length > 1) {
    const randomHotel =
      finalFilteredHotels[
        Math.floor(Math.random() * finalFilteredHotels.length)
      ];

    displayAIHotel(randomHotel);
    showHotelAppearMessage();
  }
  // 4.1 Check if the selected hotel was already displayed
  else if (finalFilteredHotels.length === 1) {
    showNoMoreHotel(finalFilteredHotels);
    const randomHotel = finalFilteredHotels[0];
    console.log(finalFilteredHotels);

    displayAIHotel(randomHotel);
  } else if (finalFilteredHotels.length === 0) {
    showNoMoreHotel(finalFilteredHotels);
  }
};

const logicIfUserSign = function () {
  const selectedHotel = getFilteredHotels(
    currentAcc,
    whereValue.value,
    checkInValue.value,
    checkOutValue.value,
    travelersCountValue.value
  );

  displayAIHotel(selectedHotel);
  showHotelAppearMessage();
};

searchbarBtn.addEventListener("click", function (e) {
  e.preventDefault();
  accountSigned === true ? logicIfUserSign() : logicIfNoUserSign();
});

/*****************************************************************************************/
/* CAROUSEL FEATURED HOTEL SECTION */
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
// CAROUSEL FEATURED HOTEL SECTION (Changed by account) */
/*****************************************************************************************/
// title Declaring Elements
const imagesHotelList = document.querySelectorAll(".images-list img");

const hotelName = document.querySelector(".hotel-name");
const hotelLoc = document.querySelector(".location");
const hotelRating = document.querySelector(".rating");
const hotelDes = document.querySelector(".hotel-des");
const hotelFeaturesList = document.querySelector(".features-list");
const hotelPrice = document.querySelector(".price-number");

let hotel;

const displayDesHotel = (hotel) => {
  const descriptionSentences = hotel.description.split(/(?<=\.)\s+/);

  const updatedDescription = descriptionSentences
    .map((sentence, i) => {
      let sentenceWords = sentence.split(" ");
      sentenceWords = sentenceWords.map((word) => {
        if (desSpanWords.includes(word)) return `<span>${word}</span>`;
        else if (desMarkWords.includes(word)) return `<mark>${word}</mark>`;

        return word;
      });
      let updatedSentence = sentenceWords.join(" ");

      i === 0 ? (updatedSentence += "<br />") : "";
      return updatedSentence;
    })
    .join(" ");

  hotelDes.innerHTML = updatedDescription;
};

const updateHotelImages = (hotel) => {
  imagesHotelList.forEach((img, i) => {
    hotel.imgSrc[i] ? (img.src = hotel.imgSrc[i]) : "";
  });
};

const displayAIHotel = function (hotel) {
  hotelName.textContent = hotel.name;
  hotelLoc.textContent = hotel.location;
  hotelRating.innerHTML = `${hotel.rating}/5<ion-icon name="star"></ion-icon>`;

  displayDesHotel(hotel);

  hotelPrice.textContent = hotel.pricePerNight;

  hotelFeaturesList.innerHTML = "";
  hotel.features.forEach((feature) => {
    const featureItem = document.createElement("li");
    featureItem.innerHTML = `<ion-icon name="${feature.icon}"></ion-icon> ${feature.label}`;
    hotelFeaturesList.appendChild(featureItem);
  });

  updateHotelImages(hotel);

  const featuredSection = document.querySelector(".section-featured-hotels");
  const navbar = document.querySelector(".navbar");

  const navbarHeight = navbar.getBoundingClientRect().height;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const sectionRect = featuredSection.getBoundingClientRect();
        const scrollToPosition =
          sectionRect.top + window.scrollY - navbarHeight;

        window.scrollTo({
          top: scrollToPosition,
          behavior: "smooth",
        });

        observer.unobserve(featuredSection);
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(featuredSection);

  if (currentAcc)
    currentAcc.searchHistory.push({
      location: whereValue.value,
      checkIn: checkInValue.value,
      checkOut: checkOutValue.value,
      travelers: travelersCountValue.value,
    });
};

/*****************************************************************************************/
/* GALLERY SECTION */
/*****************************************************************************************/
// title Helper Function
const toggleLike = function (imgContainer) {
  const imgName = imgContainer.getAttribute("data-pic-name");
  const iconElement = imgContainer.querySelector(".ai-wishlist-icon");
  console.log(imgName);
  console.log(iconElement);

  if (accountSigned === true) {
    if (!currentAcc.likedPictures.includes(imgName)) {
      currentAcc.likedPictures.push(imgName);
      iconElement.setAttribute("name", "heart");
    } else {
      currentAcc.likedPictures = currentAcc.likedPictures.filter(
        (pic) => pic !== imgName
      );
      iconElement.setAttribute("name", "heart-outline");
    }
    console.log(currentAcc.likedPictures); // Logs updated likedPictures
  } else {
    openForm();
    switchToSign();
  }
};

// title Event Handlers
document.querySelectorAll(".img-container").forEach((imgContainer) => {
  imgContainer.addEventListener("click", function (e) {
    toggleLike(imgContainer);
  });
});

// title Clicking on "Explore More", then a popup modal with info about the location is shown

// title declaring Elements

const exploreMoreBtns = document.querySelectorAll(".gallery-explore-more");
const closeExploreModalsLocBtns = document.querySelectorAll(
  "#close-explore-loc-modal"
);
const modalFindHotelBtns = document.querySelectorAll("#top-hotels");

const exploreMoreModals = document.querySelectorAll(".modal-explore-loc");
const overlayExplore = document.querySelector(".overlay-explore-loc");

// title Helper Functions

const openOverlayModal = () => overlayExplore.classList.remove("hidden");
const closeOverlayModal = () => overlayExplore.classList.add("hidden");

const openModalExplore = (modal) => {
  modal?.classList.remove("hidden");
  openOverlayModal();
};

const closeModalExplore = (modal) => {
  modal?.classList.add("hidden");
  closeOverlayModal();
};

// title Event Handlers
exploreMoreBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const location = e.target.closest(".gallery-explore-more").dataset.loc;
    const modalLoc = document.getElementById(`${location}`);

    openModalExplore(modalLoc);
  });
});

closeExploreModalsLocBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const curModal = e.target.closest(".modal-explore-loc");
    curModal && closeModalExplore(curModal);
  })
);

overlayExplore.addEventListener("click", function () {
  exploreMoreModals.forEach((modal) => closeModalExplore(modal));
});

modalFindHotelBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const loc = e.target.closest(".modal-explore-loc").id;
    const filteredHotels = hotels.filter(
      (hotel) => hotel.country.toLocaleLowerCase() === loc
    );

    const randomHotel =
      filteredHotels[Math.floor(Math.random() * filteredHotels.length)];
    displayAIHotel(randomHotel);
    closeModalExplore(e.target.closest(".modal-explore-loc"));
  })
);

// title Clicking on "Add to AI Wishlist", then add this to a special property on the CurAccount "likedLocation"

const addAiWishlistBtns = document.querySelectorAll(".gallery-add-wishlist");

const toggleWishlistBtn = (btn) => {
  btn.name === "sparkles-outline"
    ? btn.setAttribute("name", "sparkles")
    : btn.setAttribute("name", "sparkles-outline");
};

const handleWishlistBtn = function (e) {
  e.preventDefault();

  if (accountSigned === true) {
    const loc = e.target.closest(".gallery-add-wishlist").dataset.loc;

    if (currentAcc.likedLocations.has(loc) === true)
      currentAcc.likedLocations.delete(loc);
    else currentAcc.likedLocations.add(loc);

    console.log("Current liked locations:");
    console.log(currentAcc.likedLocations);

    const wishlistIcon = e.target
      .closest(".gallery-add-wishlist")
      .querySelector(".wishlist-icon");
    toggleWishlistBtn(wishlistIcon);
  } else {
    if (openFormLogBtn.textContent === "Log in") {
      openForm();
      switchToSign();
    }
  }
};

addAiWishlistBtns.forEach((btn) => {
  btn.addEventListener("click", handleWishlistBtn);
});

/*****************************************************************************************/
/* WHY LOOKUP SECTION */
/*****************************************************************************************/
const modalsContainer = document.querySelector(".modals-container");
const modals = document.querySelectorAll(".modals-container .modal");

const modalFeatureList = document.querySelectorAll(".modal > div > ul");

const applyBlurEffect = function (exceptModal) {
  modals.forEach((modal) => {
    modal !== exceptModal ? modal.classList.add("blurred") : "";
  });
};

const removeBlurEffect = function () {
  modals.forEach((modal) => modal.classList.remove("blurred"));
};

modals.forEach((modal) => {
  modal.addEventListener("mouseenter", () => applyBlurEffect(modal));
  modal.addEventListener("mouseleave", removeBlurEffect);
});

modalFeatureList.forEach((ul) => {
  const listItems = ul.querySelectorAll("li");

  modalFeatureList.forEach((ul) => {
    const listItems = ul.querySelectorAll("li");

    listItems.forEach((li) => {
      li.addEventListener("mouseenter", function () {
        const icons = li.querySelectorAll("ion-icon");
        icons.forEach((icon) => {
          icon.setAttribute("name", "checkmark-done");

          icon.style.transform = "scale(1.2)";
          icon.style.opacity = "0.7";
        });
      });

      li.addEventListener("mouseleave", function () {
        const icons = li.querySelectorAll("ion-icon");
        icons.forEach((icon) => {
          icon.setAttribute("name", "checkmark");

          icon.style.transform = "scale(1)";
          icon.style.opacity = "1";
        });
      });
    });
  });
});

const scrollBtns = document.querySelectorAll(
  ".modals-container > .modal > div > a, .nav-links a, #top-hotels"
);
const navbar = document.getElementById("navbar");

scrollBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const targetSectionId = e.target.getAttribute("data-section");
    const targetSection = document.getElementById(targetSectionId);

    const navbarHeight = navbar.offsetHeight;

    const targetPosition = targetSection.offsetTop;

    window.scrollTo({
      top: targetPosition - navbarHeight,
      behavior: "smooth",
    });
  });
});

/*****************************************************************************************/
/* NEWSLETTER SECTION */
/*****************************************************************************************/
const emailNewsInput = document.getElementById("email-newsletter_input");
const emailNewsInputSubmit = document.getElementById(
  "email-newsletter_input-submit"
);
const formContainerNews = document.querySelector(".cta-form");

formContainerNews.addEventListener("click", (e) => {
  if (e.target.id === "email-newsletter_input-submit") {
    handleEmailNewsInputSubmit(e);
  }

  if (e.target.id === "email-newsletter_input") {
    handleEmailNewsInput();
  }
});

function createFirstName(name = "Comrade") {
  const nameStr = name;

  const [firstName, ...rest] = nameStr.split(" ");
  const firstNameCapital =
    firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();

  return firstNameCapital;
}

function newsletterExistAcc() {
  if (accountSigned === true) {
    const emailNewsInputSubmitHTML = `          
  <input
    type="email"
    name="email"
    id="email-newsletter_input"
    placeholder="${currentAcc.email}"
    value="${currentAcc.email}"
    required
    autocomplete="off"
  />
  <ion-icon
    id="email-newsletter_input-submit"
    name="send-outline"
  ></ion-icon>`;
    formContainerNews.style.padding = "0 var(--space-4-)";

    formContainerNews.innerHTML = emailNewsInputSubmitHTML;
  }
}

function handleInvalidEmail() {
  const originalPlaceholder = emailNewsInput.placeholder;
  const originalBackgroundColor = formContainerNews.style.backgroundColor;
  emailNewsInput.placeholder = "NOT A VALID EMAIL!";
  emailNewsInput.value = "";
  formContainerNews.style.backgroundColor = "#9e002f";

  setTimeout(() => {
    emailNewsInput.placeholder = originalPlaceholder;
    formContainerNews.style.backgroundColor = originalBackgroundColor || "";
  }, 1000);
}

function handleEmailNewsInput() {
  if (accountSigned === true) {
    emailNewsInput.value = currentAcc.email;
  }
}

function handleEmailNewsInputSubmit(e) {
  if (accountSigned === true && !emailNewsInput.value) {
    emailNewsInput.value = currentAcc.email;
  }

  if (
    isValidEmail(emailNewsInput.value) ||
    emailNewsInput.value === currentAcc?.email
  ) {
    const formContainer = e.target.closest(".cta-form");

    formContainer.innerHTML = "";
    const html = `
  <p class='msg-sent-email'>An email sent to you ${
    accountSigned === true
      ? createFirstName(currentAcc.name)
      : createFirstName()
  }!</p>
  <input
    style="display: none;"
    id="email-newsletter_input"
  />
    <ion-icon
    id="email-newsletter_input-submit"
    name="send-outline"
    style="display: none;"
  ></ion-icon>
`;
    formContainer.style.padding = "var(--space-3-) var(--space-5-)";

    formContainer.insertAdjacentHTML("afterbegin", html);
  } else {
    handleInvalidEmail();
  }
}

/*****************************************************************************************/
/* FOOTER SECTION */
/*****************************************************************************************/

const footerContainer = document.querySelector(".footer-container");

const handlingFooterEvent = function (e) {
  if (e.target.classList.contains("cta-btn-footer")) {
    handleFooterButtonClick(e.target);
  }
};

const handleFooterButtonClick = function (button) {
  openForm();
  switchToLog();
};

footerContainer.addEventListener("click", handlingFooterEvent);

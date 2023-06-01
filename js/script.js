const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleIconDark = document.getElementById("theme-toggle-icon-dark");
const themeToggleIconLight = document.getElementById("theme-toggle-icon-light");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleIconLight.classList.remove("hidden");
} else {
  themeToggleIconDark.classList.remove("hidden");
}

themeToggleBtn.addEventListener("click", toggleMode);

function toggleMode() {
  themeToggleIconDark.classList.toggle("hidden");
  themeToggleIconLight.classList.toggle("hidden");

  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}
/****  Tastes btns  *****/
const BtnPeach = document.getElementById("btn-peach");
const BtnCola = document.getElementById("btn-cola");
const BtnLemonade = document.getElementById("btn-lemonade");
const BtnRaspberry = document.getElementById("btn-raspberry");
const BtnOrange = document.getElementById("btn-orange");
const aqaPeach = document.querySelector(".aqa-peach");
const aqaCola = document.querySelector(".aqa-cola");
const aqaLemonade = document.querySelector(".aqa-lemonade");
const aqaRaspberry = document.querySelector(".aqa-raspberry");
const aqaOrange = document.querySelector(".aqa-orange");
const peachA = document.querySelector(".peach-a");
const colaA = document.querySelector(".cola-a");
const lemonadeA = document.querySelector(".lemonade-a");
const raspberryA = document.querySelector(".raspberry-a");
const orangeA = document.querySelector(".orange-a");
const BKG = document.querySelector(".bkg");
const peachText = document.querySelector(".peach-text");
const colaText = document.querySelector(".cola-text");
const lemonadeText = document.querySelector(".lemonade-text");
const raspberryText = document.querySelector(".raspberry-text");
const orangeText = document.querySelector(".orange-text");
const peachTextS = document.querySelector(".peach-text-s");
const colaTextS = document.querySelector(".cola-text-s");
const lemonadeTextS = document.querySelector(".lemonade-text-s");
const raspberryTextS = document.querySelector(".raspberry-text-s");
const orangeTextS = document.querySelector(".orange-text-s");
const countUpButton = document.getElementById("count-up");
const countDownButton = document.getElementById("count-down");
BtnPeach.addEventListener("click", peachFunction);
function peachFunction() {
  BtnPeach.classList.add("scale-150");
  BtnCola.classList.remove("scale-150");
  BtnLemonade.classList.remove("scale-150");
  BtnRaspberry.classList.remove("scale-150");
  BtnOrange.classList.remove("scale-150");
  aqaPeach.classList.remove("opacity-0");
  aqaPeach.classList.remove("-translate-x-[200%]");
  aqaPeach.classList.remove("pointer-events-none");
  aqaPeach.classList.remove("invisible");
  aqaCola.classList.add("opacity-0");
  aqaCola.classList.add("-translate-x-[200%]");
  aqaCola.classList.add("pointer-events-none");
  aqaCola.classList.add("invisible");
  aqaLemonade.classList.add("opacity-0");
  aqaLemonade.classList.add("-translate-x-[200%]");
  aqaLemonade.classList.add("pointer-events-none");
  aqaLemonade.classList.add("invisible");
  aqaRaspberry.classList.add("opacity-0");
  aqaRaspberry.classList.add("-translate-x-[200%]");
  aqaRaspberry.classList.add("pointer-events-none");
  aqaRaspberry.classList.add("invisible");
  aqaOrange.classList.add("opacity-0");
  aqaOrange.classList.add("-translate-x-[200%]");
  aqaOrange.classList.add("pointer-events-none");
  aqaOrange.classList.add("invisible");
  peachA.classList.remove("opacity-0");
  peachA.classList.remove("translate-y-full");
  peachA.classList.remove("pointer-events-none");
  colaA.classList.add("opacity-0");
  colaA.classList.add("translate-y-full");
  colaA.classList.add("pointer-events-none");
  lemonadeA.classList.add("opacity-0");
  lemonadeA.classList.add("translate-y-full");
  lemonadeA.classList.add("pointer-events-none");
  raspberryA.classList.add("opacity-0");
  raspberryA.classList.add("translate-y-full");
  raspberryA.classList.add("pointer-events-none");
  orangeA.classList.add("opacity-0");
  orangeA.classList.add("translate-y-full");
  orangeA.classList.add("pointer-events-none");
  BKG.classList.add("peach");
  BKG.classList.remove("cola");
  BKG.classList.remove("lemonade");
  BKG.classList.remove("raspberry");
  BKG.classList.remove("orange");
  peachText.classList.remove("opacity-0");
  peachText.classList.remove("pointer-events-none");
  peachText.classList.remove("invisible");
  colaText.classList.add("opacity-0");
  colaText.classList.add("pointer-events-none");
  colaText.classList.add("invisible");
  lemonadeText.classList.add("opacity-0");
  lemonadeText.classList.add("pointer-events-none");
  lemonadeText.classList.add("invisible");
  raspberryText.classList.add("opacity-0");
  raspberryText.classList.add("pointer-events-none");
  raspberryText.classList.add("invisible");
  orangeText.classList.add("opacity-0");
  orangeText.classList.add("pointer-events-none");
  orangeText.classList.add("invisible");
  peachTextS.classList.remove("opacity-0");
  peachTextS.classList.remove("pointer-events-none");
  peachTextS.classList.remove("invisible");
  colaTextS.classList.add("opacity-0");
  colaTextS.classList.add("pointer-events-none");
  colaTextS.classList.add("invisible");
  lemonadeTextS.classList.add("opacity-0");
  lemonadeTextS.classList.add("pointer-events-none");
  lemonadeTextS.classList.add("invisible");
  raspberryTextS.classList.add("opacity-0");
  raspberryTextS.classList.add("pointer-events-none");
  raspberryTextS.classList.add("invisible");
  orangeTextS.classList.add("opacity-0");
  orangeTextS.classList.add("pointer-events-none");
  orangeTextS.classList.add("invisible");
  countUpButton.classList.add("cursor-not-allowed");
  countUpButton.classList.add("opacity-50");
  countUpButton.classList.remove("cursor-pointer");
  countDownButton.classList.remove("cursor-not-allowed");
  countDownButton.classList.remove("opacity-50");
  countDownButton.classList.add("cursor-pointer");
}

BtnCola.addEventListener("click", colaFunction);
function colaFunction() {
  BtnPeach.classList.remove("scale-150");
  BtnCola.classList.add("scale-150");
  BtnLemonade.classList.remove("scale-150");
  BtnRaspberry.classList.remove("scale-150");
  BtnOrange.classList.remove("scale-150");
  aqaPeach.classList.add("opacity-0");
  aqaPeach.classList.add("-translate-x-[200%]");
  aqaPeach.classList.add("pointer-events-none");
  aqaPeach.classList.add("invisible");
  aqaCola.classList.remove("opacity-0");
  aqaCola.classList.remove("-translate-x-[200%]");
  aqaCola.classList.remove("pointer-events-none");
  aqaCola.classList.remove("invisible");
  aqaLemonade.classList.add("opacity-0");
  aqaLemonade.classList.add("-translate-x-[200%]");
  aqaLemonade.classList.add("pointer-events-none");
  aqaLemonade.classList.add("invisible");
  aqaRaspberry.classList.add("opacity-0");
  aqaRaspberry.classList.add("-translate-x-[200%]");
  aqaRaspberry.classList.add("pointer-events-none");
  aqaRaspberry.classList.add("invisible");
  aqaOrange.classList.add("opacity-0");
  aqaOrange.classList.add("-translate-x-[200%]");
  aqaOrange.classList.add("pointer-events-none");
  aqaOrange.classList.add("invisible");
  peachA.classList.add("opacity-0");
  peachA.classList.add("translate-y-full");
  peachA.classList.add("pointer-events-none");
  colaA.classList.remove("opacity-0");
  colaA.classList.remove("translate-y-full");
  colaA.classList.remove("pointer-events-none");
  lemonadeA.classList.add("opacity-0");
  lemonadeA.classList.add("translate-y-full");
  lemonadeA.classList.add("pointer-events-none");
  raspberryA.classList.add("opacity-0");
  raspberryA.classList.add("translate-y-full");
  raspberryA.classList.add("pointer-events-none");
  orangeA.classList.add("opacity-0");
  orangeA.classList.add("translate-y-full");
  orangeA.classList.add("pointer-events-none");
  BKG.classList.remove("peach");
  BKG.classList.add("cola");
  BKG.classList.remove("lemonade");
  BKG.classList.remove("raspberry");
  BKG.classList.remove("orange");
  peachText.classList.add("opacity-0");
  peachText.classList.add("pointer-events-none");
  peachText.classList.add("invisible");
  colaText.classList.remove("opacity-0");
  colaText.classList.remove("pointer-events-none");
  colaText.classList.remove("invisible");
  lemonadeText.classList.add("opacity-0");
  lemonadeText.classList.add("pointer-events-none");
  lemonadeText.classList.add("invisible");
  raspberryText.classList.add("opacity-0");
  raspberryText.classList.add("pointer-events-none");
  raspberryText.classList.add("invisible");
  orangeText.classList.add("opacity-0");
  orangeText.classList.add("pointer-events-none");
  orangeText.classList.add("invisible");
  peachTextS.classList.add("opacity-0");
  peachTextS.classList.add("pointer-events-none");
  peachTextS.classList.add("invisible");
  colaTextS.classList.remove("opacity-0");
  colaTextS.classList.remove("pointer-events-none");
  colaTextS.classList.remove("invisible");
  lemonadeTextS.classList.add("opacity-0");
  lemonadeTextS.classList.add("pointer-events-none");
  lemonadeTextS.classList.add("invisible");
  raspberryTextS.classList.add("opacity-0");
  raspberryTextS.classList.add("pointer-events-none");
  raspberryTextS.classList.add("invisible");
  orangeTextS.classList.add("opacity-0");
  orangeTextS.classList.add("pointer-events-none");
  orangeTextS.classList.add("invisible");
  countUpButton.classList.remove("cursor-not-allowed");
  countUpButton.classList.remove("opacity-50");
  countUpButton.classList.add("cursor-pointer");
  countDownButton.classList.remove("cursor-not-allowed");
  countDownButton.classList.remove("opacity-50");
  countDownButton.classList.add("cursor-pointer");
}

BtnLemonade.addEventListener("click", lemonadeFunction);
function lemonadeFunction() {
  BtnPeach.classList.remove("scale-150");
  BtnCola.classList.remove("scale-150");
  BtnLemonade.classList.add("scale-150");
  BtnRaspberry.classList.remove("scale-150");
  BtnOrange.classList.remove("scale-150");
  aqaPeach.classList.add("opacity-0");
  aqaPeach.classList.add("-translate-x-[200%]");
  aqaPeach.classList.add("pointer-events-none");
  aqaPeach.classList.add("invisible");
  aqaCola.classList.add("opacity-0");
  aqaCola.classList.add("-translate-x-[200%]");
  aqaCola.classList.add("pointer-events-none");
  aqaCola.classList.add("invisible");
  aqaLemonade.classList.remove("opacity-0");
  aqaLemonade.classList.remove("-translate-x-[200%]");
  aqaLemonade.classList.remove("pointer-events-none");
  aqaLemonade.classList.remove("invisible");
  aqaRaspberry.classList.add("opacity-0");
  aqaRaspberry.classList.add("-translate-x-[200%]");
  aqaRaspberry.classList.add("pointer-events-none");
  aqaRaspberry.classList.add("invisible");
  aqaOrange.classList.add("opacity-0");
  aqaOrange.classList.add("-translate-x-[200%]");
  aqaOrange.classList.add("pointer-events-none");
  aqaOrange.classList.add("invisible");
  peachA.classList.add("opacity-0");
  peachA.classList.add("translate-y-full");
  peachA.classList.add("pointer-events-none");
  colaA.classList.add("opacity-0");
  colaA.classList.add("translate-y-full");
  colaA.classList.add("pointer-events-none");
  lemonadeA.classList.remove("opacity-0");
  lemonadeA.classList.remove("translate-y-full");
  lemonadeA.classList.remove("pointer-events-none");
  raspberryA.classList.add("opacity-0");
  raspberryA.classList.add("translate-y-full");
  raspberryA.classList.add("pointer-events-none");
  orangeA.classList.add("opacity-0");
  orangeA.classList.add("translate-y-full");
  orangeA.classList.add("pointer-events-none");
  BKG.classList.remove("peach");
  BKG.classList.remove("cola");
  BKG.classList.add("lemonade");
  BKG.classList.remove("raspberry");
  BKG.classList.remove("orange");
  peachText.classList.add("opacity-0");
  peachText.classList.add("pointer-events-none");
  peachText.classList.add("invisible");
  colaText.classList.add("opacity-0");
  colaText.classList.add("pointer-events-none");
  colaText.classList.add("invisible");
  lemonadeText.classList.remove("opacity-0");
  lemonadeText.classList.remove("pointer-events-none");
  lemonadeText.classList.remove("invisible");
  raspberryText.classList.add("opacity-0");
  raspberryText.classList.add("pointer-events-none");
  raspberryText.classList.add("invisible");
  orangeText.classList.add("opacity-0");
  orangeText.classList.add("pointer-events-none");
  orangeText.classList.add("invisible");
  peachTextS.classList.add("opacity-0");
  peachTextS.classList.add("pointer-events-none");
  peachTextS.classList.add("invisible");
  colaTextS.classList.add("opacity-0");
  colaTextS.classList.add("pointer-events-none");
  colaTextS.classList.add("invisible");
  lemonadeTextS.classList.remove("opacity-0");
  lemonadeTextS.classList.remove("pointer-events-none");
  lemonadeTextS.classList.remove("invisible");
  raspberryTextS.classList.add("opacity-0");
  raspberryTextS.classList.add("pointer-events-none");
  raspberryTextS.classList.add("invisible");
  orangeTextS.classList.add("opacity-0");
  orangeTextS.classList.add("pointer-events-none");
  orangeTextS.classList.add("invisible");
  countUpButton.classList.remove("cursor-not-allowed");
  countUpButton.classList.remove("opacity-50");
  countUpButton.classList.add("cursor-pointer");
  countDownButton.classList.remove("cursor-not-allowed");
  countDownButton.classList.remove("opacity-50");
  countDownButton.classList.add("cursor-pointer");
}

BtnRaspberry.addEventListener("click", raspberryFunction);
function raspberryFunction() {
  BtnPeach.classList.remove("scale-150");
  BtnCola.classList.remove("scale-150");
  BtnLemonade.classList.remove("scale-150");
  BtnRaspberry.classList.add("scale-150");
  BtnOrange.classList.remove("scale-150");
  aqaPeach.classList.add("opacity-0");
  aqaPeach.classList.add("-translate-x-[200%]");
  aqaPeach.classList.add("pointer-events-none");
  aqaPeach.classList.add("invisible");
  aqaCola.classList.add("opacity-0");
  aqaCola.classList.add("-translate-x-[200%]");
  aqaCola.classList.add("pointer-events-none");
  aqaCola.classList.add("invisible");
  aqaLemonade.classList.add("opacity-0");
  aqaLemonade.classList.add("-translate-x-[200%]");
  aqaLemonade.classList.add("pointer-events-none");
  aqaLemonade.classList.add("invisible");
  aqaRaspberry.classList.remove("opacity-0");
  aqaRaspberry.classList.remove("-translate-x-[200%]");
  aqaRaspberry.classList.remove("pointer-events-none");
  aqaRaspberry.classList.remove("invisible");
  aqaOrange.classList.add("opacity-0");
  aqaOrange.classList.add("-translate-x-[200%]");
  aqaOrange.classList.add("pointer-events-none");
  aqaOrange.classList.add("invisible");
  peachA.classList.add("opacity-0");
  peachA.classList.add("translate-y-full");
  peachA.classList.add("pointer-events-none");
  colaA.classList.add("opacity-0");
  colaA.classList.add("translate-y-full");
  colaA.classList.add("pointer-events-none");
  lemonadeA.classList.add("opacity-0");
  lemonadeA.classList.add("translate-y-full");
  lemonadeA.classList.add("pointer-events-none");
  raspberryA.classList.remove("opacity-0");
  raspberryA.classList.remove("translate-y-full");
  raspberryA.classList.remove("pointer-events-none");
  orangeA.classList.add("opacity-0");
  orangeA.classList.add("translate-y-full");
  orangeA.classList.add("pointer-events-none");
  BKG.classList.remove("peach");
  BKG.classList.remove("cola");
  BKG.classList.remove("lemonade");
  BKG.classList.add("raspberry");
  BKG.classList.remove("orange");
  peachText.classList.add("opacity-0");
  peachText.classList.add("pointer-events-none");
  peachText.classList.add("invisible");
  colaText.classList.add("opacity-0");
  colaText.classList.add("pointer-events-none");
  colaText.classList.add("invisible");
  lemonadeText.classList.add("opacity-0");
  lemonadeText.classList.add("pointer-events-none");
  lemonadeText.classList.add("invisible");
  raspberryText.classList.remove("opacity-0");
  raspberryText.classList.remove("pointer-events-none");
  raspberryText.classList.remove("invisible");
  orangeText.classList.add("opacity-0");
  orangeText.classList.add("pointer-events-none");
  orangeText.classList.add("invisible");
  peachTextS.classList.add("opacity-0");
  peachTextS.classList.add("pointer-events-none");
  peachTextS.classList.add("invisible");
  colaTextS.classList.add("opacity-0");
  colaTextS.classList.add("pointer-events-none");
  colaTextS.classList.add("invisible");
  lemonadeTextS.classList.add("opacity-0");
  lemonadeTextS.classList.add("pointer-events-none");
  lemonadeTextS.classList.add("invisible");
  raspberryTextS.classList.remove("opacity-0");
  raspberryTextS.classList.remove("pointer-events-none");
  raspberryTextS.classList.remove("invisible");
  orangeTextS.classList.add("opacity-0");
  orangeTextS.classList.add("pointer-events-none");
  orangeTextS.classList.add("invisible");
  countUpButton.classList.remove("cursor-not-allowed");
  countUpButton.classList.remove("opacity-50");
  countUpButton.classList.add("cursor-pointer");
  countDownButton.classList.remove("cursor-not-allowed");
  countDownButton.classList.remove("opacity-50");
  countDownButton.classList.add("cursor-pointer");
}

BtnOrange.addEventListener("click", orangeFunction);
function orangeFunction() {
  BtnPeach.classList.remove("scale-150");
  BtnCola.classList.remove("scale-150");
  BtnLemonade.classList.remove("scale-150");
  BtnRaspberry.classList.remove("scale-150");
  BtnOrange.classList.add("scale-150");
  aqaPeach.classList.add("opacity-0");
  aqaPeach.classList.add("-translate-x-[200%]");
  aqaPeach.classList.add("pointer-events-none");
  aqaPeach.classList.add("invisible");
  aqaCola.classList.add("opacity-0");
  aqaCola.classList.add("-translate-x-[200%]");
  aqaCola.classList.add("pointer-events-none");
  aqaCola.classList.add("invisible");
  aqaLemonade.classList.add("opacity-0");
  aqaLemonade.classList.add("-translate-x-[200%]");
  aqaLemonade.classList.add("pointer-events-none");
  aqaLemonade.classList.add("invisible");
  aqaRaspberry.classList.add("opacity-0");
  aqaRaspberry.classList.add("-translate-x-[200%]");
  aqaRaspberry.classList.add("pointer-events-none");
  aqaRaspberry.classList.add("invisible");
  aqaOrange.classList.remove("opacity-0");
  aqaOrange.classList.remove("-translate-x-[200%]");
  aqaOrange.classList.remove("pointer-events-none");
  aqaOrange.classList.remove("invisible");
  peachA.classList.add("opacity-0");
  peachA.classList.add("translate-y-full");
  peachA.classList.add("pointer-events-none");
  colaA.classList.add("opacity-0");
  colaA.classList.add("translate-y-full");
  colaA.classList.add("pointer-events-none");
  lemonadeA.classList.add("opacity-0");
  lemonadeA.classList.add("translate-y-full");
  lemonadeA.classList.add("pointer-events-none");
  raspberryA.classList.add("opacity-0");
  raspberryA.classList.add("translate-y-full");
  raspberryA.classList.add("pointer-events-none");
  orangeA.classList.remove("opacity-0");
  orangeA.classList.remove("translate-y-full");
  orangeA.classList.remove("pointer-events-none");
  BKG.classList.remove("peach");
  BKG.classList.remove("cola");
  BKG.classList.remove("lemonade");
  BKG.classList.remove("raspberry");
  BKG.classList.add("orange");
  peachText.classList.add("opacity-0");
  peachText.classList.add("pointer-events-none");
  peachText.classList.add("invisible");
  colaText.classList.add("opacity-0");
  colaText.classList.add("pointer-events-none");
  colaText.classList.add("invisible");
  lemonadeText.classList.add("opacity-0");
  lemonadeText.classList.add("pointer-events-none");
  lemonadeText.classList.add("invisible");
  raspberryText.classList.add("opacity-0");
  raspberryText.classList.add("pointer-events-none");
  raspberryText.classList.add("invisible");
  orangeText.classList.remove("opacity-0");
  orangeText.classList.remove("pointer-events-none");
  orangeText.classList.remove("invisible");
  peachTextS.classList.add("opacity-0");
  peachTextS.classList.add("pointer-events-none");
  peachTextS.classList.add("invisible");
  colaTextS.classList.add("opacity-0");
  colaTextS.classList.add("pointer-events-none");
  colaTextS.classList.add("invisible");
  lemonadeTextS.classList.add("opacity-0");
  lemonadeTextS.classList.add("pointer-events-none");
  lemonadeTextS.classList.add("invisible");
  raspberryTextS.classList.add("opacity-0");
  raspberryTextS.classList.add("pointer-events-none");
  raspberryTextS.classList.add("invisible");
  orangeTextS.classList.remove("opacity-0");
  orangeTextS.classList.remove("pointer-events-none");
  orangeTextS.classList.remove("invisible");
  countUpButton.classList.remove("cursor-not-allowed");
  countUpButton.classList.remove("opacity-50");
  countUpButton.classList.add("cursor-pointer");
  countDownButton.classList.add("cursor-not-allowed");
  countDownButton.classList.remove("opacity-50");
  countDownButton.classList.remove("cursor-pointer");
}

/************* animition start look-section on scroll *********** */
const Aqa1 = document.querySelector(".aqa-1");
const Aqa2 = document.querySelector(".aqa-2");
const Aqa3 = document.querySelector(".aqa-3");
const Aqa4 = document.querySelector(".aqa-4");

const observer = new IntersectionObserver(
  (entries) => {
    // Check if all the observed elements are intersecting with the viewport
    const allIntersecting = entries.every((entry) => entry.isIntersecting);

    // If all the elements are intersecting, add the classes to the target elements
    if (allIntersecting) {
      Aqa1.classList.add("aq-1");
      Aqa2.classList.add("aq-2");
      Aqa3.classList.add("aq-3");
      Aqa4.classList.add("aq-4");
    } else {
      // Otherwise, remove the classes from the target elements
      Aqa1.classList.remove("aq-1");
      Aqa2.classList.remove("aq-2");
      Aqa3.classList.remove("aq-3");
      Aqa4.classList.remove("aq-4");
    }
  },
  {
    threshold: 0.3,
  }
);

// Observe all the elements at once
observer.observe(Aqa1);
observer.observe(Aqa2);
observer.observe(Aqa3);
observer.observe(Aqa4);

/*********** slide buttons *********** */
// Get references to the buttons

// Define the count and function mapping
const countFunctionMap = {
  0: peachFunction,
  1: colaFunction,
  2: lemonadeFunction,
  3: raspberryFunction,
  4: orangeFunction,
};

// Set the initial count to 0
let count = 0;

// Call the current function mapped to the initial count
countFunctionMap[count]();

// Add a click event listener to the count up button
countUpButton.addEventListener("click", () => {
  // If the count is less than 4, add 1 to the count
  if (count < 4) {
    count += 1;
  }

  // Disable the countUpButton when the count is 4
  if (count === 4) {
    countUpButton.disabled = true;
    countUpButton.classList.add("cursor-not-allowed");
    countUpButton.classList.add("opacity-50");
    countUpButton.classList.remove("cursor-pointer");
  }

  // Enable the countDownButton when the count is not 0
  if (count !== 0) {
    countDownButton.disabled = false;
    countDownButton.classList.remove("cursor-not-allowed");
    countDownButton.classList.remove("opacity-50");
    countDownButton.classList.add("cursor-pointer");
  }

  // Call the function mapped to the current count
  countFunctionMap[count]();
});

//Add a click event listener to the count down button
countDownButton.addEventListener("click", () => {
  // If the count is greater than 0, subtract 1 from the count
  if (count > 0) {
    count -= 1;
  }

  // Disable the countDownButton when the count is 0
  if (count === 0) {
    countDownButton.disabled = true;
    countDownButton.classList.add("cursor-not-allowed");
    countDownButton.classList.add("opacity-50");
    countDownButton.classList.remove("cursor-pointer");
  }

  // Enable the countUpButton when the count is not 4
  if (count !== 4) {
    countUpButton.disabled = false;
    countUpButton.classList.remove("cursor-not-allowed");
    countUpButton.classList.remove("opacity-50");
    countUpButton.classList.add("cursor-pointer");
  }

  // Call the function mapped to the current count
  countFunctionMap[count]();
});
// Define the peachFunction
function peachFunction() {
  BtnPeach.classList.add("scale-150");
  BtnCola.classList.remove("scale-150");
  BtnLemonade.classList.remove("scale-150");
  BtnRaspberry.classList.remove("scale-150");
  BtnOrange.classList.remove("scale-150");
  aqaPeach.classList.remove("opacity-0");
  aqaPeach.classList.remove("-translate-x-[200%]");
  aqaPeach.classList.remove("pointer-events-none");
  aqaPeach.classList.remove("invisible");
  aqaCola.classList.add("opacity-0");
  aqaCola.classList.add("-translate-x-[200%]");
  aqaCola.classList.add("pointer-events-none");
  aqaCola.classList.add("invisible");
  aqaLemonade.classList.add("opacity-0");
  aqaLemonade.classList.add("-translate-x-[200%]");
  aqaLemonade.classList.add("pointer-events-none");
  aqaLemonade.classList.add("invisible");
  aqaRaspberry.classList.add("opacity-0");
  aqaRaspberry.classList.add("-translate-x-[200%]");
  aqaRaspberry.classList.add("pointer-events-none");
  aqaRaspberry.classList.add("invisible");
  aqaOrange.classList.add("opacity-0");
  aqaOrange.classList.add("-translate-x-[200%]");
  aqaOrange.classList.add("pointer-events-none");
  aqaOrange.classList.add("invisible");
  peachA.classList.remove("opacity-0");
  peachA.classList.remove("translate-y-full");
  peachA.classList.remove("pointer-events-none");
  colaA.classList.add("opacity-0");
  colaA.classList.add("translate-y-full");
  colaA.classList.add("pointer-events-none");
  lemonadeA.classList.add("opacity-0");
  lemonadeA.classList.add("translate-y-full");
  lemonadeA.classList.add("pointer-events-none");
  raspberryA.classList.add("opacity-0");
  raspberryA.classList.add("translate-y-full");
  raspberryA.classList.add("pointer-events-none");
  orangeA.classList.add("opacity-0");
  orangeA.classList.add("translate-y-full");
  orangeA.classList.add("pointer-events-none");
  BKG.classList.add("peach");
  BKG.classList.remove("cola");
  BKG.classList.remove("lemonade");
  BKG.classList.remove("raspberry");
  BKG.classList.remove("orange");
  peachText.classList.remove("opacity-0");
  peachText.classList.remove("pointer-events-none");
  peachText.classList.remove("invisible");
  colaText.classList.add("opacity-0");
  colaText.classList.add("pointer-events-none");
  colaText.classList.add("invisible");
  lemonadeText.classList.add("opacity-0");
  lemonadeText.classList.add("pointer-events-none");
  lemonadeText.classList.add("invisible");
  raspberryText.classList.add("opacity-0");
  raspberryText.classList.add("pointer-events-none");
  raspberryText.classList.add("invisible");
  orangeText.classList.add("opacity-0");
  orangeText.classList.add("pointer-events-none");
  orangeText.classList.add("invisible");
  peachTextS.classList.remove("opacity-0");
  peachTextS.classList.remove("pointer-events-none");
  peachTextS.classList.remove("invisible");
  colaTextS.classList.add("opacity-0");
  colaTextS.classList.add("pointer-events-none");
  colaTextS.classList.add("invisible");
  lemonadeTextS.classList.add("opacity-0");
  lemonadeTextS.classList.add("pointer-events-none");
  lemonadeTextS.classList.add("invisible");
  raspberryTextS.classList.add("opacity-0");
  raspberryTextS.classList.add("pointer-events-none");
  raspberryTextS.classList.add("invisible");
  orangeTextS.classList.add("opacity-0");
  orangeTextS.classList.add("pointer-events-none");
  orangeTextS.classList.add("invisible");
}

// Define the colaFunction
function colaFunction() {
  BtnPeach.classList.remove("scale-150");
  BtnCola.classList.add("scale-150");
  BtnLemonade.classList.remove("scale-150");
  BtnRaspberry.classList.remove("scale-150");
  BtnOrange.classList.remove("scale-150");
  aqaPeach.classList.add("opacity-0");
  aqaPeach.classList.add("-translate-x-[200%]");
  aqaPeach.classList.add("pointer-events-none");
  aqaPeach.classList.add("invisible");
  aqaCola.classList.remove("opacity-0");
  aqaCola.classList.remove("-translate-x-[200%]");
  aqaCola.classList.remove("pointer-events-none");
  aqaCola.classList.remove("invisible");
  aqaLemonade.classList.add("opacity-0");
  aqaLemonade.classList.add("-translate-x-[200%]");
  aqaLemonade.classList.add("pointer-events-none");
  aqaLemonade.classList.add("invisible");
  aqaRaspberry.classList.add("opacity-0");
  aqaRaspberry.classList.add("-translate-x-[200%]");
  aqaRaspberry.classList.add("pointer-events-none");
  aqaRaspberry.classList.add("invisible");
  aqaOrange.classList.add("opacity-0");
  aqaOrange.classList.add("-translate-x-[200%]");
  aqaOrange.classList.add("pointer-events-none");
  aqaOrange.classList.add("invisible");
  peachA.classList.add("opacity-0");
  peachA.classList.add("translate-y-full");
  peachA.classList.add("pointer-events-none");
  colaA.classList.remove("opacity-0");
  colaA.classList.remove("translate-y-full");
  colaA.classList.remove("pointer-events-none");
  lemonadeA.classList.add("opacity-0");
  lemonadeA.classList.add("translate-y-full");
  lemonadeA.classList.add("pointer-events-none");
  raspberryA.classList.add("opacity-0");
  raspberryA.classList.add("translate-y-full");
  raspberryA.classList.add("pointer-events-none");
  orangeA.classList.add("opacity-0");
  orangeA.classList.add("translate-y-full");
  orangeA.classList.add("pointer-events-none");
  BKG.classList.remove("peach");
  BKG.classList.add("cola");
  BKG.classList.remove("lemonade");
  BKG.classList.remove("raspberry");
  BKG.classList.remove("orange");
  peachText.classList.add("opacity-0");
  peachText.classList.add("pointer-events-none");
  peachText.classList.add("invisible");
  colaText.classList.remove("opacity-0");
  colaText.classList.remove("pointer-events-none");
  colaText.classList.remove("invisible");
  lemonadeText.classList.add("opacity-0");
  lemonadeText.classList.add("pointer-events-none");
  lemonadeText.classList.add("invisible");
  raspberryText.classList.add("opacity-0");
  raspberryText.classList.add("pointer-events-none");
  raspberryText.classList.add("invisible");
  orangeText.classList.add("opacity-0");
  orangeText.classList.add("pointer-events-none");
  orangeText.classList.add("invisible");
  peachTextS.classList.add("opacity-0");
  peachTextS.classList.add("pointer-events-none");
  peachTextS.classList.add("invisible");
  colaTextS.classList.remove("opacity-0");
  colaTextS.classList.remove("pointer-events-none");
  colaTextS.classList.remove("invisible");
  lemonadeTextS.classList.add("opacity-0");
  lemonadeTextS.classList.add("pointer-events-none");
  lemonadeTextS.classList.add("invisible");
  raspberryTextS.classList.add("opacity-0");
  raspberryTextS.classList.add("pointer-events-none");
  raspberryTextS.classList.add("invisible");
  orangeTextS.classList.add("opacity-0");
  orangeTextS.classList.add("pointer-events-none");
  orangeTextS.classList.add("invisible");
}

// Define the lemonadeFunction
function lemonadeFunction() {
  BtnPeach.classList.remove("scale-150");
  BtnCola.classList.remove("scale-150");
  BtnLemonade.classList.add("scale-150");
  BtnRaspberry.classList.remove("scale-150");
  BtnOrange.classList.remove("scale-150");
  aqaPeach.classList.add("opacity-0");
  aqaPeach.classList.add("-translate-x-[200%]");
  aqaPeach.classList.add("pointer-events-none");
  aqaPeach.classList.add("invisible");
  aqaCola.classList.add("opacity-0");
  aqaCola.classList.add("-translate-x-[200%]");
  aqaCola.classList.add("pointer-events-none");
  aqaCola.classList.add("invisible");
  aqaLemonade.classList.remove("opacity-0");
  aqaLemonade.classList.remove("-translate-x-[200%]");
  aqaLemonade.classList.remove("pointer-events-none");
  aqaLemonade.classList.remove("invisible");
  aqaRaspberry.classList.add("opacity-0");
  aqaRaspberry.classList.add("-translate-x-[200%]");
  aqaRaspberry.classList.add("pointer-events-none");
  aqaRaspberry.classList.add("invisible");
  aqaOrange.classList.add("opacity-0");
  aqaOrange.classList.add("-translate-x-[200%]");
  aqaOrange.classList.add("pointer-events-none");
  aqaOrange.classList.add("invisible");
  peachA.classList.add("opacity-0");
  peachA.classList.add("translate-y-full");
  peachA.classList.add("pointer-events-none");
  colaA.classList.add("opacity-0");
  colaA.classList.add("translate-y-full");
  colaA.classList.add("pointer-events-none");
  lemonadeA.classList.remove("opacity-0");
  lemonadeA.classList.remove("translate-y-full");
  lemonadeA.classList.remove("pointer-events-none");
  raspberryA.classList.add("opacity-0");
  raspberryA.classList.add("translate-y-full");
  raspberryA.classList.add("pointer-events-none");
  orangeA.classList.add("opacity-0");
  orangeA.classList.add("translate-y-full");
  orangeA.classList.add("pointer-events-none");
  BKG.classList.remove("peach");
  BKG.classList.remove("cola");
  BKG.classList.add("lemonade");
  BKG.classList.remove("raspberry");
  BKG.classList.remove("orange");
  peachText.classList.add("opacity-0");
  peachText.classList.add("pointer-events-none");
  peachText.classList.add("invisible");
  colaText.classList.add("opacity-0");
  colaText.classList.add("pointer-events-none");
  colaText.classList.add("invisible");
  lemonadeText.classList.remove("opacity-0");
  lemonadeText.classList.remove("pointer-events-none");
  lemonadeText.classList.remove("invisible");
  raspberryText.classList.add("opacity-0");
  raspberryText.classList.add("pointer-events-none");
  raspberryText.classList.add("invisible");
  orangeText.classList.add("opacity-0");
  orangeText.classList.add("pointer-events-none");
  orangeText.classList.add("invisible");
  peachTextS.classList.add("opacity-0");
  peachTextS.classList.add("pointer-events-none");
  peachTextS.classList.add("invisible");
  colaTextS.classList.add("opacity-0");
  colaTextS.classList.add("pointer-events-none");
  colaTextS.classList.add("invisible");
  lemonadeTextS.classList.remove("opacity-0");
  lemonadeTextS.classList.remove("pointer-events-none");
  lemonadeTextS.classList.remove("invisible");
  raspberryTextS.classList.add("opacity-0");
  raspberryTextS.classList.add("pointer-events-none");
  raspberryTextS.classList.add("invisible");
  orangeTextS.classList.add("opacity-0");
  orangeTextS.classList.add("pointer-events-none");
  orangeTextS.classList.add("invisible");
}

// Define the raspberryFunction
function raspberryFunction() {
  BtnPeach.classList.remove("scale-150");
  BtnCola.classList.remove("scale-150");
  BtnLemonade.classList.remove("scale-150");
  BtnRaspberry.classList.add("scale-150");
  BtnOrange.classList.remove("scale-150");
  aqaPeach.classList.add("opacity-0");
  aqaPeach.classList.add("-translate-x-[200%]");
  aqaPeach.classList.add("pointer-events-none");
  aqaPeach.classList.add("invisible");
  aqaCola.classList.add("opacity-0");
  aqaCola.classList.add("-translate-x-[200%]");
  aqaCola.classList.add("pointer-events-none");
  aqaCola.classList.add("invisible");
  aqaLemonade.classList.add("opacity-0");
  aqaLemonade.classList.add("-translate-x-[200%]");
  aqaLemonade.classList.add("pointer-events-none");
  aqaLemonade.classList.add("invisible");
  aqaRaspberry.classList.remove("opacity-0");
  aqaRaspberry.classList.remove("-translate-x-[200%]");
  aqaRaspberry.classList.remove("pointer-events-none");
  aqaRaspberry.classList.remove("invisible");
  aqaOrange.classList.add("opacity-0");
  aqaOrange.classList.add("-translate-x-[200%]");
  aqaOrange.classList.add("pointer-events-none");
  aqaOrange.classList.add("invisible");
  peachA.classList.add("opacity-0");
  peachA.classList.add("translate-y-full");
  peachA.classList.add("pointer-events-none");
  colaA.classList.add("opacity-0");
  colaA.classList.add("translate-y-full");
  colaA.classList.add("pointer-events-none");
  lemonadeA.classList.add("opacity-0");
  lemonadeA.classList.add("translate-y-full");
  lemonadeA.classList.add("pointer-events-none");
  raspberryA.classList.remove("opacity-0");
  raspberryA.classList.remove("translate-y-full");
  raspberryA.classList.remove("pointer-events-none");
  orangeA.classList.add("opacity-0");
  orangeA.classList.add("translate-y-full");
  orangeA.classList.add("pointer-events-none");
  BKG.classList.remove("peach");
  BKG.classList.remove("cola");
  BKG.classList.remove("lemonade");
  BKG.classList.add("raspberry");
  BKG.classList.remove("orange");
  peachText.classList.add("opacity-0");
  peachText.classList.add("pointer-events-none");
  peachText.classList.add("invisible");
  colaText.classList.add("opacity-0");
  colaText.classList.add("pointer-events-none");
  colaText.classList.add("invisible");
  lemonadeText.classList.add("opacity-0");
  lemonadeText.classList.add("pointer-events-none");
  lemonadeText.classList.add("invisible");
  raspberryText.classList.remove("opacity-0");
  raspberryText.classList.remove("pointer-events-none");
  raspberryText.classList.remove("invisible");
  orangeText.classList.add("opacity-0");
  orangeText.classList.add("pointer-events-none");
  orangeText.classList.add("invisible");
  peachTextS.classList.add("opacity-0");
  peachTextS.classList.add("pointer-events-none");
  peachTextS.classList.add("invisible");
  colaTextS.classList.add("opacity-0");
  colaTextS.classList.add("pointer-events-none");
  colaTextS.classList.add("invisible");
  lemonadeTextS.classList.add("opacity-0");
  lemonadeTextS.classList.add("pointer-events-none");
  lemonadeTextS.classList.add("invisible");
  raspberryTextS.classList.remove("opacity-0");
  raspberryTextS.classList.remove("pointer-events-none");
  raspberryTextS.classList.remove("invisible");
  orangeTextS.classList.add("opacity-0");
  orangeTextS.classList.add("pointer-events-none");
  orangeTextS.classList.add("invisible");
}

// Define the orangeFunction
function orangeFunction() {
  BtnPeach.classList.remove("scale-150");
  BtnCola.classList.remove("scale-150");
  BtnLemonade.classList.remove("scale-150");
  BtnRaspberry.classList.remove("scale-150");
  BtnOrange.classList.add("scale-150");
  aqaPeach.classList.add("opacity-0");
  aqaPeach.classList.add("-translate-x-[200%]");
  aqaPeach.classList.add("pointer-events-none");
  aqaPeach.classList.add("invisible");
  aqaCola.classList.add("opacity-0");
  aqaCola.classList.add("-translate-x-[200%]");
  aqaCola.classList.add("pointer-events-none");
  aqaCola.classList.add("invisible");
  aqaLemonade.classList.add("opacity-0");
  aqaLemonade.classList.add("-translate-x-[200%]");
  aqaLemonade.classList.add("pointer-events-none");
  aqaLemonade.classList.add("invisible");
  aqaRaspberry.classList.add("opacity-0");
  aqaRaspberry.classList.add("-translate-x-[200%]");
  aqaRaspberry.classList.add("pointer-events-none");
  aqaRaspberry.classList.add("invisible");
  aqaOrange.classList.remove("opacity-0");
  aqaOrange.classList.remove("-translate-x-[200%]");
  aqaOrange.classList.remove("pointer-events-none");
  aqaOrange.classList.remove("invisible");
  peachA.classList.add("opacity-0");
  peachA.classList.add("translate-y-full");
  peachA.classList.add("pointer-events-none");
  colaA.classList.add("opacity-0");
  colaA.classList.add("translate-y-full");
  colaA.classList.add("pointer-events-none");
  lemonadeA.classList.add("opacity-0");
  lemonadeA.classList.add("translate-y-full");
  lemonadeA.classList.add("pointer-events-none");
  raspberryA.classList.add("opacity-0");
  raspberryA.classList.add("translate-y-full");
  raspberryA.classList.add("pointer-events-none");
  orangeA.classList.remove("opacity-0");
  orangeA.classList.remove("translate-y-full");
  orangeA.classList.remove("pointer-events-none");
  BKG.classList.remove("peach");
  BKG.classList.remove("cola");
  BKG.classList.remove("lemonade");
  BKG.classList.remove("raspberry");
  BKG.classList.add("orange");
  peachText.classList.add("opacity-0");
  peachText.classList.add("pointer-events-none");
  peachText.classList.add("invisible");
  colaText.classList.add("opacity-0");
  colaText.classList.add("pointer-events-none");
  colaText.classList.add("invisible");
  lemonadeText.classList.add("opacity-0");
  lemonadeText.classList.add("pointer-events-none");
  lemonadeText.classList.add("invisible");
  raspberryText.classList.add("opacity-0");
  raspberryText.classList.add("pointer-events-none");
  raspberryText.classList.add("invisible");
  orangeText.classList.remove("opacity-0");
  orangeText.classList.remove("pointer-events-none");
  orangeText.classList.remove("invisible");
  peachTextS.classList.add("opacity-0");
  peachTextS.classList.add("pointer-events-none");
  peachTextS.classList.add("invisible");
  colaTextS.classList.add("opacity-0");
  colaTextS.classList.add("pointer-events-none");
  colaTextS.classList.add("invisible");
  lemonadeTextS.classList.add("opacity-0");
  lemonadeTextS.classList.add("pointer-events-none");
  lemonadeTextS.classList.add("invisible");
  raspberryTextS.classList.add("opacity-0");
  raspberryTextS.classList.add("pointer-events-none");
  raspberryTextS.classList.add("invisible");
  orangeTextS.classList.remove("opacity-0");
  orangeTextS.classList.remove("pointer-events-none");
  orangeTextS.classList.remove("invisible");
}

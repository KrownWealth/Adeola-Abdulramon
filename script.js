
const navMenu = document.querySelector(".nav-items");
const btnToggleNav = document.querySelector(".menu-btn");
const mainEl = document.querySelector("main");


// Shiny hover effect on cards that follows mouse

const cards = document.querySelector(".cards");

cards.addEventListener("mousemove", (e) => {
  if (e.target.classList.contains("card")) {
    const { x, y } = e.target.getBoundingClientRect();
    e.target.style.setProperty("--x", `${e.clientX - x}px`);
    e.target.style.setProperty("--y", `${e.clientY - y}px`);
  }
});

// Toggle theme and store user preferred theme for future

const switchThemeEl = document.querySelector('input[type="checkbox"]');
const storedTheme = localStorage.getItem('theme')

switchThemeEl.checked = storedTheme === 'dark' || storedTheme === null

switchThemeEl.addEventListener("click", () => {
  const isChecked = switchThemeEl.checked;

  if (!isChecked) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
    switchThemeEl.checked = false
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  }

});

// Trap the tab when menu is opened

const lastFocusedEl = document.querySelector('a[aria-data="last-focused"]');

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Tab" && document.activeElement === lastFocusedEl) {
    e.preventDefault();
    btnToggleNav.focus();
  }
});

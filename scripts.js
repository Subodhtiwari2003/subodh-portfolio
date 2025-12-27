const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Initial theme setup based on user preference
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
  document.body.classList.add("light");
}

// Listen for changes in the user's color scheme preference
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
  if (e.matches) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
});

// Optional: Save user preference in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.toggle("light", savedTheme === "light");
}
toggle.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
} );

console.log("Theme toggle script loaded.");






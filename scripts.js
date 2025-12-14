const toggle = document.getElementById("theme-toggle");
let dark = true;

toggle.onclick = () => {
  document.body.style.background = dark ? "#f8fafc" : "#0f172a";
  document.body.style.color = dark ? "#020617" : "#e5e7eb";
  dark = !dark;
};

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

var dark = document.getElementById("dark");

dark.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    dark.src = "assets/sun.png";
  } else {
    dark.src = "assets/moon.png";
  }
};

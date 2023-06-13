const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// Sidebar Show
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
//sidebar close
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});


themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
if (localStorage.getItem("theme") === "light") {
  document.body.classList.remove("dark-theme-variables");
} else if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme-variables");
} else {
  localStorage.setItem("theme", "light");
}

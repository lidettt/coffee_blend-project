// Header
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });
});
// Menu Buttons
document.addEventListener("DOMContentLoaded", function () {
  let drinksBtn = document.querySelector(".drinks-btn");
  let dessertsBtn = document.querySelector(".desserts-btn");
  let drinks = document.querySelector(".drinks");
  let desserts = document.querySelector(".desserts");

  drinks.style.display = "flex";
  desserts.style.display = "none";
  drinksBtn.classList.add("clicked-btn");

  drinksBtn.addEventListener("click", function () {
    drinks.style.display = "flex";
    desserts.style.display = "none";

    drinksBtn.classList.add("clicked-btn");
    dessertsBtn.classList.remove("clicked-btn");
  });

  dessertsBtn.addEventListener("click", function () {
    desserts.style.display = "flex";
    drinks.style.display = "none";
    dessertsBtn.classList.add("clicked-btn");
    drinksBtn.classList.remove("clicked-btn");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    let heading = document.getElementById("header");

    if (heading) {
      // Prevents errors if header is missing
      if (scrollPosition > windowHeight * 0.5) {
        heading.style.backgroundColor = "black";
      } else {
        heading.style.backgroundColor = "transparent";
      }
    }
  });
});

const menuIcon = document.querySelector(".header__menu-icon");
const nav = document.querySelector(".nav");
nav.style.transform = "translateX(100%)";
nav.style.display = "flex";
const openNav = () => {
  if (nav.style.transform === "translateX(100%)") {
    nav.style.transform = "translateX(0px)";
  } else {
    nav.style.transform = "translateX(100%)";
  }
};

menuIcon.addEventListener("click", openNav);

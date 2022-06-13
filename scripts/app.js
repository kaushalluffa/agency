const menuIcon = document.querySelector(".header__navigation--icon");
const navMob = document.querySelector(".header__navigation");
const openNav = () => {
    navMob.classList.toggle('open')
}
menuIcon.addEventListener('click', openNav)
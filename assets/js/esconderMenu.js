const menuNav = document.querySelector('.menu-navbar');
const menuLateral = document.querySelector('.menu-lateral');

menuNav.addEventListener('click', () => {
    menuLateral.classList.toggle('menu-lateral-ativo');
})
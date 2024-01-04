const menu = document.getElementById("hamburger");
const sidebar = document.querySelector(".sidebar");
const navbar = document.getElementById('navbar')
const close_circle = document.getElementById("close-circle");
function handleMenuClick() {
    if (window.innerWidth < 550) {
        menu.innerHTML = `<ion-icon name="menu" id="icon"></ion-icon>`;
        menu.addEventListener('click', sidebarshow);
    } else {
        menu.innerHTML = `Hamburger`;
        menu.removeEventListener('click', sidebarshow);
    }
}

handleMenuClick();

window.addEventListener('resize', handleMenuClick)

close_circle.addEventListener('click', () => { closesidebar() });

function sidebarshow() {
    navbar.style.display = 'none';
    sidebar.style.display = 'flex';
}

function closesidebar() {
    sidebar.style.display = 'none';
    navbar.style.display = 'flex'
}

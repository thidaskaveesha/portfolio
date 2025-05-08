function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger');

    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
}

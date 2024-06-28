document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu_toggle');
    const openIcon = document.querySelector('.open_icon');
    const closeIcon = document.querySelector('.close_icon');
    const navItems = document.querySelector('.nav_items');

    menuToggle.addEventListener('click', function () {
        navItems.classList.toggle('show');
        openIcon.style.display = openIcon.style.display === 'none' ? 'block' : 'none';
        closeIcon.style.display = closeIcon.style.display === 'none' ? 'block' : 'none';
    });
});


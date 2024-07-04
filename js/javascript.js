// responsive nav bar starts

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

// responsive nav bar ends

// popup image js starts

document.querySelectorAll('.image_gallery img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup_image').style.display = 'block';
        document.querySelector('.popup_image img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup_image span').onclick = () => {
    document.querySelector('.popup_image').style.display = 'none';
}

// popup image js end


// carosol js starts

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1300: {
                items: 4
            }
        }
    });
});

// carosol js ends
let navbar = document.querySelector('.navbar');
let cartItemContainer = document.querySelector('.cart-item-container');

// fungsi ini digunakan untuk keep-track navigation bar dan cartItemContainer pada saat layar responsive
let menuBtn = document.querySelector('#menu-btn');
menuBtn.onclick = function() {
    navbar.classList.toggle('active'); // mengaktifkan navbar seesuai dengan layar (layar lebih kecil) pada saat menu-btn dipencet
    cartItemContainer.classList.remove('active'); // menghilangkan cart-item-container pada saat menuBtn sedang dipencet
};


// fungsi ini digunakan untuk keep-track navigation bar dan cartItemContainer pada saat cart-btn dipencet
let cartBtn = document.querySelector('#cart-btn');
cartBtn.onclick = function() {
    cartItemContainer.classList.toggle('active'); // mengaktifkan cartItemContainer pada saat cart-btn dipencet
    navbar.classList.remove('active'); // menghilangkan navbar pada saat cart-btn dipencet
};

// fungsi ini digunakan pada saat membuka cartItemContainer (saat layar kecil) agar items dapat discroll
window.onscroll = function() {
    navbar.classList.remove('active');
    cartItemContainer.classList.remove('active');
};
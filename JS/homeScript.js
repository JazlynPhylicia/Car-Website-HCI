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

let currentIndex = 0;
let slideContainer = document.querySelector('.slide-container');
// fungsi ini digunakan untuk mengatur posisi slider
function updateSlider() {
    let slideWidth = slides[0].clientWidth + 20; // menghitung lebar dari satu slide
    slideContainer.style.transform = 'translateX(-' + (currentIndex * slideWidth) + 'px)'; // memindahkan slider ke posisi yang sesuai
}

let nextButton = document.querySelector('.slider-button-next');
let slides = document.querySelectorAll('.card');
// fungsi ini digunakan untuk memperbarui posisi slider dengan memanggil fungsi updateSlider dan memencet tolmbol nextButton
nextButton.onclick = function() {
    if (currentIndex < slides.length - 1) { // jika indeks slide belum mencapai slide terakhir
        currentIndex++;
        updateSlider(); // update posisi
    }
};

// fungsi ini digunakan untuk memperbarui posisi slider dengan memanggil fungsi updateSlider dan memencet tombol prevButton
let prevButton = document.querySelector('.slider-button-prev');
prevButton.onclick = function() {
    if (currentIndex > 0) { // jika index slide > 0
        currentIndex--;
        updateSlider(); // update posisi
    }
};

window.addEventListener('resize', updateSlider);
updateSlider();
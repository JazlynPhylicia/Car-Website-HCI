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

const slides = document.querySelectorAll(".carousel img");
let slideIndex = 0; // Index awal adalah 0

function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1; // Mengatur ke logo terakhir jika kurang dari 0
    } else if (index >= slides.length) {
        slideIndex = 0; // Kembali ke awal jika index melebihi jumlah slides
    }
    const width = slides[0].clientWidth + (2 * 2 * 16); // Menambahkan margin (diubah ke px)
    const offset = slideIndex * width; // Menghitung offset
    document.querySelector(".slides").style.transform = `translateX(-${offset}px)`; // Menggeser slides
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex); // Menampilkan slide pertama saat halaman dimuat
    setInterval(nextSlide, 3000); // Mengganti slide setiap 3 detik
});

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

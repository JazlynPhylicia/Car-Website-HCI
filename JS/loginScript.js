document.getElementById('signUp').addEventListener('click', () => {
    document.getElementById('container').classList.add("right-panel-active");
});

document.getElementById('signIn').addEventListener('click', () => {
    document.getElementById('container').classList.remove("right-panel-active");
});

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

function validateAllSignUp(){
    const form = document.getElementById("signup-form");
    const email = document.getElementById("email");
    const phone = document.getElementById("phoneNumber");
    const password1 = document.getElementById("pass1");
    const password2 = document.getElementById("pass2");
    const username = document.getElementById("username");
    const termsCheckbox = document.getElementById("checkbox1");
    
    if(password1.value.trim() === "" || password2.value.trim() === "" || email.value.trim() === "" || username.value.trim() === "" || phoneNumber.value === ""){
        alert("All field must be filled!");

    } else if (!email.value.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com!");

    } else if(!phone.value.startsWith("0")){
        alert("Phone number must start with 0!");

    } else if(password1.value != password2.value){
        alert("Please recheck your password confirmation!");
    
    } else if (!termsCheckbox.checked){
        alert("You must agree to the terms and services to sign up.");

    } else {
        form.submit();
        window.location.href = 'homePage.html';
    }
}

function validateAllSignIn(){
    const form = document.getElementById("login-form");
    const email2 = document.getElementById("email2");
    const password3 = document.getElementById("pass3");
    
    if(password3.value.trim() === "" || email2.value.trim() === ""){
        alert("All field must be filled!");

    } else if (!email2.value.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com!");

    } else {
        form.submit();
        window.location.href = 'homePage.html';
    }
}
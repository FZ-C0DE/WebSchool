// Tombol Hamburger menu
const burgerMenu = document.querySelector('#burgerMenu');

burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("burger-active")
});

// Navbar Menu
const navbarMenu = document.querySelector('#navbarMenu');

burgerMenu.addEventListener("click", function () {
    navbarMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
    if (e.target != burgerMenu && e.target != navbarMenu) {
        burgerMenu.classList.remove('burger-active');
        navbarMenu.classList.add('hidden');
    }
});



// Dokumentasi versi yt sukangodingaja
// const galleryImage = document.querySelector('.galleryImage');

// let Mulaiimage = false, imagePagex, imageScrollKiri;

// galleryImage.addEventListener("mousedown", ImageDown = (e) => {
//     Mulaiimage = true;
//     imagePagex = e.pageX;
//     imageScrollKiri = galleryImage.scrollLeft;
// });

// galleryImage.addEventListener("mousemove", imageMove = (e) => {
//     if (!Mulaiimage) return;
//     e.preventDefault();
//     let posisi = e.pageX - imagePagex;
//     galleryImage.scrollLeft = imageScrollKiri - posisi;
// });

// galleryImage.addEventListener("mouseup", imageUp = () => {
//     Mulaiimage = false;
// });

// Dukementasi
const galleryImage = document.querySelector('.galleryImage');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

let Mulaiimage = false, imagePagex, imageScrollKiri;

galleryImage.addEventListener("mousedown", (e) => {
    Mulaiimage = true;
    imagePagex = e.pageX;
    imageScrollKiri = galleryImage.scrollLeft;
});

galleryImage.addEventListener("mousemove", (e) => {
    if (!Mulaiimage) return;
    e.preventDefault();
    let posisi = e.pageX - imagePagex;
    galleryImage.scrollLeft = imageScrollKiri - posisi;
});

galleryImage.addEventListener("mouseup", () => {
    Mulaiimage = false;
});

leftBtn.addEventListener('click', () => {
    galleryImage.scrollBy({
        left: -220,
        behavior: 'smooth'
    });
});

rightBtn.addEventListener('click', () => {
    galleryImage.scrollBy({
        left: 220,
        behavior: 'smooth'
    });
});


// To-top tombol
document.addEventListener('DOMContentLoaded', function () {
    const toTop = document.getElementById('to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            toTop.classList.remove('hidden');
        } else {
            toTop.classList.add('hidden');
        }
    });
});


// 
// YANG DIBAWAH INI ADALAH JS DARI AI JADI HARAP MAKLUM DAH PENING
// MASIH PEMULA GUESSSS

// js alasan kenapa start jika todak perlu jadikan coment saja
window.addEventListener('resize', function () {
    const container = document.getElementById('animasi1');
    if (window.innerWidth <= 390) {
        container.classList.add('flex-wrap');
    } else {
        container.classList.remove('flex-wrap');
    }
});

// Initial check
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('animasi1');
    if (window.innerWidth <= 390) {
        container.classList.add('flex-wrap');
    } else {
        container.classList.remove('flex-wrap');
    }
});

// end


// js jurusan start jika todak perlu jadikan coment saja
window.addEventListener('resize', function () {
    const cards = document.querySelectorAll('#Jurusan .col-span-1');
    if (window.innerWidth <= 390) {
        cards.forEach(card => {
            card.classList.add('col-span-1');
        });
    } else {
        cards.forEach(card => {
            card.classList.remove('col-span-1');
        });
    }
});

// Initial check
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('#Jurusan .col-span-1');
    if (window.innerWidth <= 390) {
        cards.forEach(card => {
            card.classList.add('col-span-1');
        });
    } else {
        cards.forEach(card => {
            card.classList.remove('col-span-1');
        });
    }
});
// end

// javascript Extrakulier jika todak perlu jadikan coment saja
window.addEventListener('resize', function () {
    const cards = document.querySelectorAll('#Extrakulikuler .col-span-1');
    if (window.innerWidth <= 390) {
        cards.forEach(card => {
            card.classList.add('col-span-1');
        });
    } else {
        cards.forEach(card => {
            card.classList.remove('col-span-1');
        });
    }
});

// Initial check
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('#Extrakulikuler .col-span-1');
    if (window.innerWidth <= 390) {
        cards.forEach(card => {
            card.classList.add('col-span-1');
        });
    } else {
        cards.forEach(card => {
            card.classList.remove('col-span-1');
        });
    }
});

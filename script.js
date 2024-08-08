document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider-item');

    let currentIndex = 2; // Start with the third image as the center

    function moveToIndex(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        slides.forEach((slide, idx) => {
            slide.classList.remove('active');
            if (idx === index) {
                slide.classList.add('active');
            }
        });
    }

    slides.forEach((slide, index) => {
        slide.addEventListener('click', function () {
            if (index !== currentIndex) {
                currentIndex = index;
                moveToIndex(currentIndex);
            }
        });
    });

    moveToIndex(currentIndex);
});
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');

    let currentIndex = 2; // Start with the third image as the center

    function moveToIndex(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        slides.forEach((slide, idx) => {
            slide.classList.remove('active');
            if (idx === index) {
                slide.classList.add('active');
            }
        });
    }

    slides.forEach((slide, index) => {
        slide.addEventListener('click', function () {
            if (index !== currentIndex) {
                currentIndex = index;
                moveToIndex(currentIndex);
            }
        });
    });

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToIndex(currentIndex);
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToIndex(currentIndex);
    });

    moveToIndex(currentIndex);
});


let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nava');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + hight){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })

}


menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');   
}

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
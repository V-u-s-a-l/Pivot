/* MENU */

const barBox = document.querySelector('.bar-box');
barBox.addEventListener('click',barBoxClick);
function barBoxClick() {
    document.querySelector('.navbar').classList.toggle('active');
}


/* HEADER */
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const headerSlider = document.querySelector('.header-slider');
const sliderLenght = document.querySelectorAll('.slider').length;
const sliderMax = (sliderLenght - 1) * document.querySelector('.slider').offsetWidth;
next.addEventListener('click', () => {
    if(headerSlider.scrollLeft < sliderMax){
        headerSlider.scrollLeft += document.querySelector('.slider').offsetWidth;
        last.style.backgroundColor='#FFF';
        first.style.backgroundColor='rgba(255, 255, 255, 0.5)';
    }else if(headerSlider.scrollLeft == sliderMax){
        headerSlider.scrollLeft = 0;
        first.style.backgroundColor='#FFF';
        last.style.backgroundColor='rgba(255, 255, 255, 0.5)';
    }
    
});
prev.addEventListener('click', () => {
    if(headerSlider.scrollLeft > 0){
        headerSlider.scrollLeft -= document.querySelector('.slider').offsetWidth;
        first.style.backgroundColor='#FFF';
        last.style.backgroundColor='rgba(255, 255, 255, 0.5)';
    }else if (headerSlider.scrollLeft == 0){
        headerSlider.scrollLeft = sliderMax;
        last.style.backgroundColor='#FFF';
        first.style.backgroundColor='rgba(255, 255, 255, 0.5)';
    };
    
});

const last = document.getElementById('last');
const first = document.getElementById('first');
last.addEventListener('click', () => {
    headerSlider.scrollLeft += document.querySelector('.slider').offsetWidth;
    last.style.backgroundColor='#FFF';
    first.style.backgroundColor='rgba(255, 255, 255, 0.5)';
});

first.addEventListener('click', () => {
    headerSlider.scrollLeft -= document.querySelector('.slider').offsetWidth;
    last.style.backgroundColor='rgba(255, 255, 255, 0.5)';
    first.style.backgroundColor='#fff';
});



/* Our */

const left = document.getElementById('left');
const right = document.getElementById('right');
const ourBoxes = document.querySelector('.our-boxes');
const ourBox = document.querySelector('.our-box');





right.addEventListener('click',() =>{
    ourBoxes.scrollLeft += ourBox.offsetWidth;   
});

left.addEventListener('click',() =>{
    ourBoxes.scrollLeft -= ourBox.offsetWidth;
});







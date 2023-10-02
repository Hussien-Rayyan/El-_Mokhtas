// Aside 
let Toggler =document.querySelector(".toggle");
let aside =document.querySelector(".aside nav");
let close =document.querySelector(".close");
// Add Class Open 
Toggler.onclick = function () {
    aside.classList.add("open");
};
// Remove Class Open 
close.onclick = function () {
    this.parentElement.classList.remove("open");
};
document.onkeyup = function (k) {
    if(k.key === "Escape") {
        aside.classList.remove("open");
    }
};
// End Aside 
//--Type Writer--//
let myText ="Welcome Everyone !";
i =0;
'use strict';
let typeWriter= setInterval (function (){
    document.getElementById ('type').textContent +=myText[i];
    i+= 1;
    if(i > myText.length - 1 ){
        clearInterval (typeWriter)
    }
} , 150);
let section = document.querySelector(".Skills");
let spans = document.querySelectorAll (".the-progress span");
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
    spans.forEach((span) => {
        span.style.width = span.dataset.width;
    });
} 
};
// Counter 
let countDate = new Date("Dec 31, 2025 23:59:59").getTime();
// console.log (countDate);
let counter =setInterval (()=>{
    // Get Date Now
    let dateNow = new Date().getTime();
    let dateDiff = countDate - dateNow;
    // Get Time Units 
    // Days 
    let days =Math.floor(dateDiff / (1000  * 60 * 60 * 24)) ;
    // Hours 
    let hours =Math.floor((dateDiff % (1000  * 60 * 60 * 24)) / (1000* 60 *60));
    // Minutes
    let minutes =Math.floor((dateDiff % (1000  * 60 * 60)) / (1000 * 60));
    // Seconds
    let seconds =Math.floor((dateDiff % (1000  * 60)) / (1000));
    document.querySelector(".days").innerHTML =days < 10 ? `0${days}` :days;
    document.querySelector(".hours").innerHTML =hours < 10 ? `0${hours}` :hours;
    document.querySelector(".minutes").innerHTML =minutes < 10 ? `0${minutes}` :minutes;
    document.querySelector(".seconds").innerHTML =seconds < 10 ? `0${seconds}` :seconds;
    if (dateDiff < 250) {
        clearInterval(counter);
    }
},1000)
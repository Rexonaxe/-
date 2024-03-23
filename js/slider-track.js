window.onload = function () {
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("track-1");
let sliderTwo = document.getElementById("track-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("track-1").max;
let sliderMinValue = document.getElementById("track-1").min;


displayValOne.addEventListener("blur", rangeOne)
displayValTwo.addEventListener("blur", rangeTwo)

function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.value = sliderOne.value;
    fillColor();
}

function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.value = sliderTwo.value;
    fillColor();
}

function rangeOne() {
    if (parseInt(displayValOne.value)<sliderMinValue){
        displayValOne.value = sliderMinValue
    }
    if (parseInt(displayValOne.value)>sliderMaxValue){
        displayValOne.value = sliderMaxValue
    }
    if (parseInt(displayValTwo.value) - parseInt(displayValOne.value) <= minGap) {
        displayValOne.value = parseInt(displayValTwo.value) - minGap;
    }
    sliderOne.value = displayValOne.value;
    fillColor();
}

function rangeTwo() {
    if (parseInt(displayValTwo.value)<sliderMinValue){
        displayValTwo.value = sliderMinValue
    }
    if (parseInt(displayValTwo.value)>sliderMaxValue){
        displayValTwo.value = sliderMaxValue
    }
    if (parseInt(displayValTwo.value) - parseInt(displayValOne.value) <= minGap) {
        displayValTwo.value = parseInt(displayValOne.value) - minGap;
    }
    sliderTwo.value = displayValTwo.value;
    fillColor();
}

function fillColor() {
    let percent1 = (sliderOne.value / sliderMaxValue) * 100;
    let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #2222224D ${percent1}% , #222222 ${percent1}% , #222222 ${percent2}%, #2222224D ${percent2}%)`;
}
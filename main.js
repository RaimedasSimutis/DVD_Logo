const logo = document.querySelector(".logo");
const container = document.querySelector(".container");
const logoW = logo.offsetWidth;
const logoH = logo.offsetHeight;
let logoX = logo.offsetLeft;
let logoY = logo.offsetTop;
const containerW = container.offsetWidth;
const containerH = container.offsetHeight;
const animSpeed = 1;
let filteredColor = "invert(48%) sepia(94%) saturate(1397%) brightness(90%) contrast(101%)"

// console.log(logo);
// console.log(logoW);
// console.log(logoH);
// console.log(logoX);
// console.log(logoY);
// console.log(container);
// console.log(containerW);
// console.log(containerH);

//logo.style.left = "255px"



let directionX;
let directionY;
let speedX = 1;
let speedY = 1;

var iteratorX = function (index) {
    if (index >= container.offsetWidth - logo.offsetWidth) {
        //index = 0;
        directionX = -1;
        let randomNumber = (Math.random() * 360);
        logo.style.filter = `${filteredColor} hue-rotate(${randomNumber}deg)`;

    } else if (index <= 0) {
        directionX = 1;
        let randomNumber = (Math.random() * 360);
        logo.style.filter = `${filteredColor} hue-rotate(${randomNumber}deg)`;

    }

    logo.style.left = `${index}px`;
    console.log(index);
    setTimeout(function () {
        iteratorX(index + directionX * speedX);
    }, 10);
};

var iteratorY = function (index) {
    if (index >= container.offsetHeight - logo.offsetHeight) {
        //index = 0;
        directionY = -1;
        let randomNumber = (Math.random() * 360);
        logo.style.filter = `${filteredColor} hue-rotate(${randomNumber}deg)`;
    } else if (index <= 0) {
        directionY = 1;
        let randomNumber = (Math.random() * 360);
        logo.style.filter = `${filteredColor} hue-rotate(${randomNumber}deg)`;

    }

    logo.style.top = `${index}px`;
    console.log(index);
    setTimeout(function () {
        iteratorY(index + directionY * speedY);
    }, 10);
};

iteratorX(0);
iteratorY(0);
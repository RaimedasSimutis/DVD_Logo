const logo = document.querySelector(".logo");
const container = document.querySelector(".container");
let filteredColor = "invert(48%) sepia(94%) saturate(1397%) brightness(90%) contrast(101%)";

let directionX;
let directionY;
const speedX = 1;
const speedY = 1;

let iteratorX = function (index) {
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

let iteratorY = function (index) {
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
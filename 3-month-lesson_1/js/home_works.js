const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");



const gmailRegExp = /^([A-Za-z0-9_\-])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{3,4})$/i;

gmailButton.onclick = function () {
    if (gmailRegExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK";
        gmailResult.style.color = "green"

    }else {
        gmailResult.innerHTML = "Not ok";
        gmailResult.style.color = "red"
    }

}



const  parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
let numX = 0
let numY = 0
let direction = "right"


const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;
const counter = () =>{
    if (numX < offsetWidth && numY === 0) {
        numX++;
    } else if (numX === offsetWidth && numY < offsetHeight) {
        numY++;
    } else if (numY === offsetHeight && numX > 0) {
        numX--;
    } else if (numX === 0 && numY > 0) {
        numY--;
    }

    childBlock.style.left = `${numX}px`;
    childBlock.style.top = `${numY}px`;

    requestAnimationFrame(counter);
}
counter()




let timer;
let second = 0;
let run = false;

const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function update() {
    secondsElement.textContent = second;
}

function startTimer() {
    if (!run) {
        run = true;
        timer = setInterval(() => {
            second++;
            update();
        }, 1000);
    }
}

function stopTimer() {
    if (run) {
        clearInterval(timer);
        run = false;
    }
}
function resetTimer() {
    stopTimer();
    second = 0;
    update();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

update()
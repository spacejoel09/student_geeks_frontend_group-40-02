// Gmail validation with async/await and simulated async operation

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const gmailRegExp = /^([A-Za-z0-9_\-])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{3,4})$/i;

gmailButton.onclick = async function () {
    const isValid = await validateEmail(gmailInput.value);
    if (isValid) {
        gmailResult.innerHTML = "OK";
        gmailResult.style.color = "green";
    } else {
        gmailResult.innerHTML = "Not ok";
        gmailResult.style.color = "red";
    }
}

async function validateEmail(email) {
    // Simulate an asynchronous operation (e.g., fetching from an API)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(gmailRegExp.test(email));
        }, 500); // Simulated delay
    });
}

// Block movement with async/await (no change needed as this is not asynchronous)

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
let numX = 0;
let numY = 0;

const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

const counter = () => {
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

counter();

// Timer functionality with async/await (simulated fetch)

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

async function startTimer() {
    if (!run) {
        run = true;
        timer = setInterval(async () => {
            second++;
            update();
            await saveTime(second); // Simulate an async save operation
        }, 1000);
    }
}

async function stopTimer() {
    if (run) {
        clearInterval(timer);
        run = false;
        await saveTime(second); // Simulate an async save operation
    }
}

async function resetTimer() {
    await stopTimer();
    second = 0;
    update();
    await saveTime(second); // Simulate an async save operation
}

async function saveTime(time) {
    // Simulate an asynchronous operation (e.g., saving to a server)
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Time saved: ${time} seconds`);
            resolve();
        }, 300); // Simulated delay
    });
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

update();

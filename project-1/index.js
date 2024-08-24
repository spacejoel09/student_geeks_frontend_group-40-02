const buttonsColor = document.querySelectorAll('.upcoming-button');
const javaScript = document.querySelector('#title');

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return '#' + color;
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        const randomColor = generateRandomColor();
        buttonColor.style.backgroundColor = randomColor;  // Устанавливаем цвет фона кнопки
        buttonColor.onclick = (event) => {
            javaScript.style.color = randomColor;  // Меняем цвет заголовка при нажатии
        }
    });
}

window.onload = () => setRandomColors();
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault();
        setRandomColors();
    }
}





let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;

nextDom.onclick = function(){
    showSlider('next');
}

prevDom.onclick = function(){
    showSlider('prev');
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    let next;
    // next.click();
})
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        let next;
        // next.click();
    })
}


document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll('.scroll-fade');

    elements.forEach((element) => {
        const position = element.getBoundingClientRect();

        // Проверяем, виден ли элемент в viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible');
        }
    });
});
const elements = document.querySelectorAll('.scroll-fade');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

elements.forEach(element => {
    observer.observe(element);
});


const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const euroInput = document.querySelector('#euro');

let exchangeRates = {};

const loadExchangeRates = async () => {
    try {
        const response = await fetch('../data/data.json', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        exchangeRates = {
            usd: data[0].usd,
            euro: data[0].euro
        };
        console.log(exchangeRates);
    } catch (error) {
        console.error('Error loading exchange rates:', error);
    }
};

const setInputValue = (inputElement, value) => {
    if (isNaN(value) || value === Infinity || value === -Infinity) {
        inputElement.value = '';
    } else {
        inputElement.value = value.toFixed(2);
    }
};

const convertCurrency = (element, targetElements) => {
    const value = parseFloat(element.value);
    if (isNaN(value)) {
        targetElements.forEach(target => target.value = '');
        return;
    }

    if (element.id === 'som') {
        setInputValue(usdInput, value / exchangeRates.usd);
        setInputValue(euroInput, value / exchangeRates.euro);
    } else if (element.id === 'usd') {
        setInputValue(somInput, value * exchangeRates.usd);
        setInputValue(euroInput, (value * exchangeRates.usd) / exchangeRates.euro);
    } else if (element.id === 'euro') {
        setInputValue(somInput, value * exchangeRates.euro);
        setInputValue(usdInput, (value * exchangeRates.euro) / exchangeRates.usd);
    }
};

somInput.addEventListener('input', () => convertCurrency(somInput, [usdInput, euroInput]));
usdInput.addEventListener('input', () => convertCurrency(usdInput, [somInput, euroInput]));
euroInput.addEventListener('input', () => convertCurrency(euroInput, [somInput, usdInput]));

loadExchangeRates();

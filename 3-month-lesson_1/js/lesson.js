// Phone Validation
const phoneInput = document.querySelector('#phone-input');
const phoneButton = document.querySelector('#phone_button');
const phoneSpan = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = "Ok";
        phoneSpan.style.color = "green";
    } else {
        phoneSpan.innerHTML = "Not OK";
        phoneSpan.style.color = "red";
    }
};

// Weather
const citySearchInput = document.querySelector('.cityName');
const cityName = document.querySelector('.city');
const cityTemp = document.querySelector('.temp');

const API_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "e417df62e04d3b1b111abeab19cea714";

citySearchInput.oninput = async () => {
    try {
        const res = await fetch(`${API_URL}?q=${citySearchInput.value}&appid=${API_KEY}`);
        const data = await res.json();
        cityName.innerHTML = data.name || "";
        cityTemp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + "&deg; С" : "";
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

// Address Example with Optional Chaining
const address = {
    id: 122,
    location: {
        street: "IBRAIMOVA",
        number: "13"
    }
};

console.log(address.location?.street);

// Tab Slider
const tabContentsBlocks = document.querySelectorAll(".tab_content_block");
const tabsParent = document.querySelector(".tab_content_items");
const tabs = document.querySelectorAll('.tab_content_item');

const hideTabContent = () => {
    tabContentsBlocks.forEach(item => item.style.display = "none");
    tabs.forEach(item => item.classList.remove("tab_content_item_active"));
};

const showTabContent = (index) => {
    tabContentsBlocks[index].style.display = "block";
    tabs[index].classList.add('tab_content_item_active');
};

hideTabContent();
showTabContent(0);

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent();
                showTabContent(index);
            }
        });
    }
};

// Currency Converter
const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const euroInput = document.querySelector('#euro');

let exchangeRates = {};

const loadExchangeRates = async () => {
    try {
        const res = await fetch("../data/data.json");
        const data = await res.json();
        exchangeRates = {
            usd: data[0].usd,
            euro: data[0].euro
        };
        console.log(exchangeRates);
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
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

    if (element.id === "som") {
        setInputValue(usdInput, value / exchangeRates.usd);
        setInputValue(euroInput, value / exchangeRates.euro);
    } else if (element.id === "usd") {
        setInputValue(somInput, value * exchangeRates.usd);
        setInputValue(euroInput, (value * exchangeRates.usd) / exchangeRates.euro);
    } else if (element.id === "euro") {
        setInputValue(somInput, value * exchangeRates.euro);
        setInputValue(usdInput, (value * exchangeRates.euro) / exchangeRates.usd);
    }
};

somInput.addEventListener('input', () => convertCurrency(somInput, [usdInput, euroInput]));
usdInput.addEventListener('input', () => convertCurrency(usdInput, [somInput, euroInput]));
euroInput.addEventListener('input', () => convertCurrency(euroInput, [somInput, usdInput]));

loadExchangeRates();

// Card Slider
const cardBlock = document.querySelector('.card');
const nextCard = document.querySelector('#btn-next');
const prevCard = document.querySelector('#btn-prev');
let cardId = 1;

async function loadCard(id) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await res.json();
        cardBlock.innerHTML = `
            <p>${data.title}</p> 
            <p style="color: ${data.completed ? "green" : "red"}">
                ${data.completed ? "True" : "False"}
            </p> 
            <span>${data.id}</span>`;
    } catch (error) {
        console.error('Error loading card data:', error);
    }
}

nextCard.onclick = () => {
    cardId++;
    if (cardId > 200) cardId = 1;
    loadCard(cardId);
};

prevCard.onclick = () => {
    cardId--;
    if (cardId < 1) cardId = 200;
    loadCard(cardId);
};

loadCard(cardId);

(async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
})();

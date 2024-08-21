const phoneInput = document.querySelector('#phone-input');
const phoneButton = document.querySelector('#phone_button');
const phoneSpan = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = "Ok"
        phoneSpan.style.color = "green"

    }else {
        phoneSpan.innerHTML = "Not OK"
        phoneSpan.style.color = "red"
    }

}






// Tab SLIDER


const tabContentsBlocks = document.querySelectorAll(".tab_content_block")
const tabsParent =   document.querySelector(".tab_content_items")
const  tabs = document.querySelectorAll('.tab_content_item');
const hideTabContent = () => {
    tabContentsBlocks.forEach((item) => {
        item.style.display = "none"

    })
    tabs.forEach(item => {
        item.classList.remove("tab_content_item_active")
    })
}

const showTabContent = (index) => {
    tabContentsBlocks[index].style.display = "block"
    tabs[index].classList.add('tab_content_item_active')


}
hideTabContent()

showTabContent(0)


tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item,index) => {
            if (event.target === item){
                if (event.target === item){
                    hideTabContent()
                    showTabContent(index)
                }
            }
        })
    }

}

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const euroInput = document.querySelector('#euro');

let exchangeRates = {};

const loadExchangeRates = () => {
    const request = new XMLHttpRequest();
    request.open('GET', "../data/data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = () => {
        const data = JSON.parse(request.response)[0];
        exchangeRates = {
            usd: data.usd,
            euro: data.euro
        };
        console.log(exchangeRates);
    };
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



// DRY - dont repeat yourself
// KISS - keep it simple, stupid -


const cardBlock = document.querySelector('.card');
const nextCard = document.querySelector('#btn-next');
const prevCard = document.querySelector('#btn-prev');
let cardId = 1;

function loadCard(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .then(data => {
            cardBlock.innerHTML = `
                <p>${data.title}</p> 
                <p style="color: ${data.completed ? "green" : "red"}">
                    ${data.completed ? "True" : "False"}
                </p> 
                <span>${data.id}</span>`;
        });
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

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });


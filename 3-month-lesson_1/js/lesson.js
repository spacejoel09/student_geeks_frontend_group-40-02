const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneSpan = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;


phoneButton.onclick = function () {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = "OK";
        phoneSpan.style.color = "green"

    }else {
        phoneSpan.innerHTML = "Not ok";
        phoneSpan.style.color = "red"
    }


}


const tabContentsBlocks = document.querySelectorAll(".tab_content_block")
const tabsParent =   document.querySelector(".tab_content_items")
let index = 0;
let intervaId;


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



const startSlide = () => {
    intervaId = setInterval(() => {
        index++;
        if (index > tabs.length - 1) {
            index = 0;
        }
        hideTabContent();
        showTabContent(index);
    }, 3000);
}


const resetAutoSlide = () => {
    clearInterval(intervaId);
    startSlide();
};





tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item,i) => {
            if (event.target === item){
                hideTabContent()
                index = i
                showTabContent(i)       
                resetAutoSlide()
            }
        })
    }
}


hideTabContent()
startSlide()
showTabContent(0)


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
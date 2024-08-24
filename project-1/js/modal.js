const modal = document.querySelector('.modal');
const modalTriggerBtn = document.getElementById('create');
const modalCloseBtn = document.querySelector('.modal_close');

let isOpen = false;
let hasClickedModalTriggerBtn = false;
let counter;

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    isOpen = true;
}

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = "";
    isOpen = false;
}

modalTriggerBtn.onclick = () => {
    hasClickedModalTriggerBtn = true;
    clearTimeout(counter);
    openModal();
}

modalCloseBtn.onclick = () => closeModal();

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
}

const modalsec = document.querySelector('#second');
const modalTriggerBtnSec = document.getElementById('Log');
const modalCloseBtnSec = document.querySelector('#close-second');

const openModalsec = () => {
    modalsec.style.display = 'block';
    document.body.style.overflow = 'hidden';
    isOpen = true;
}

const closeModalsec = () => {
    modalsec.style.display = 'none';
    document.body.style.overflow = "";
    isOpen = false;
}

modalTriggerBtnSec.onclick = () => {
    hasClickedModalTriggerBtn = true;
    clearTimeout(counter);
    openModalsec();
}

modalCloseBtnSec.onclick = () => closeModalsec();

modalsec.onclick = (event) => {
    if (event.target === modalsec) {
        closeModalsec();
    }
}

const modalthird = document.querySelector('#third');
const modalTriggerBtnthird = document.querySelectorAll('.subscription');
const modalCloseBtnthird = document.querySelector('#close-third');

const openModalthird = () => {
    modalthird.style.display = 'block';
    document.body.style.overflow = 'hidden';
    isOpen = true;
}

const closeModalthird = () => {
    modalthird.style.display = 'none';
    document.body.style.overflow = "";
    isOpen = false;
}

modalTriggerBtnthird.forEach(btn => {
    btn.onclick = () => {
        hasClickedModalTriggerBtn = true;
        clearTimeout(counter);
        openModalthird();
    };
});

modalCloseBtnthird.onclick = () => closeModalthird();

modalthird.onclick = (event) => {
    if (event.target === modalthird) {
        closeModalthird();
    }
}









const cityNameInput = document.querySelector('.cityName'),
    city = document.querySelector('.city'),
    temp = document.querySelector('.temp')

const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'e417df62e04d3b1b111abeab19cea714';

cityNameInput.oninput = async(event) => {
    try{
        const response = await fetch(`${WEATHER_API}?q=${event.target.value}&appid=${API_KEY}`)
        const data = await response.json()
        city.innerHTML = data?.name ? data?.name : "404";
        temp.innerHTML = data?.main?.temp ?  Math.round(data?.main?.temp - 273) + ' &deg;' : "";
    }
    catch(error){
        console.log( error);
    }
}




const phoneInput = document.querySelector('#number');
const validateButton = document.getElementById('validate-btn');

const gmailInput = document.querySelector('#gmail');

const regExpPhoneNumber = /^\+996[2579]\d{2}\d{2}\d{2}\d{2}$/;
const regExpGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

validateButton.addEventListener('click', () => {
    if(!regExpPhoneNumber.test(phoneInput.value)){
        phoneInput.classList.remove('__green')
        phoneInput.classList.add('__red');
    } else{
        phoneInput.classList.remove('__red');
        phoneInput.classList.add('__green')
    }
    if (!regExpGmail.test(gmailInput.value)) {
        gmailInput.classList.remove('__green')
        gmailInput.classList.add('__red');
    }else{
        gmailInput.classList.remove('__green');
        gmailInput.classList.add('__red')
    }
})
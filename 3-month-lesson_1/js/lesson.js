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
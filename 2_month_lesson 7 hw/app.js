let titleCalc = document.querySelector('.calc_title');
const inputCalc = document.querySelector('.calc_input');
const buttonCalc = document.querySelector('.calc_button');

function generateRandom(maxLimit = 10) {
    let rand = Math.random() * maxLimit + 1;
    rand = Math.floor(rand);
    return rand;

}

const num1 = generateRandom(10)
const num2 = generateRandom(10)
titleCalc.textContent = "Сколько будет " + num1+ " На " + num2 + "?";

buttonCalc.addEventListener('click', function (){
    let inputValue = parseInt(inputCalc.value);
    if (!isNaN(inputValue)){
     if (inputValue === num1 * num2){
         buttonCalc.textContent = "Верно"
     }else {
         buttonCalc.textContent = "Неверно"
     }
     }
})
//TODO TEST

let AutoNumber = prompt("Введите номер машины")

function validateNumberAuto(AutoNumber) {

    if (AutoNumber.length !== 10) return true;

    let lastThreeSymbols = AutoNumber.slice(-3)
    let noneSymbols = [
        "MVD",
        "MWD",
        "SEX",
        "AUE",
        "UZB",
        "TAJ",
        "ORG",
        "LOL",
        "HUY",
        "GAI",
    ];
    return !noneSymbols.includes(lastThreeSymbols);
}

console.log(validateNumberAuto("01KG123ABC"));
console.log(validateNumberAuto("01KG555MVD"));

//TODO HW

//2 ЗАДАЧА


function revNumber(Number) {
    let revNumber = '';

    for (let i = Number.length -1; i >= 0; i--) {
        revNumber += Number[i];

    }
    return revNumber;
}

console.log(revNumber  (  "123456789"));


//1x Задача

let phoneNumber = prompt("Enter your phone number");
// let phoneNumber = "+996 555 123 123"
function hideSymbols(Symbols){
    if (Symbols.length < 12){
        return Symbols;
    }
    return Symbols.slice(0,14) + "xx";


}
let hiddenSymbols = hideSymbols(phoneNumber);
console.log(phoneNumber + " " + "-->"+ " " + hiddenSymbols);




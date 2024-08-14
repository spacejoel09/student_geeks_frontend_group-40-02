// Regular Expressions


const numbers = "qwerty_QWERTY_123456789_^@$&!@(){}";


const  regExp = /[\W\w]/g;


console.log(numbers.replace(regExp, "*" ));

//console.log(numbers.match(regExp));


//Recursion

let num = 0

const counter = () => {
    num++
    console.log(num)
    if (num < 500){
        counter()
    }
}
counter()







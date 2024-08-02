const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");



const gmailRegExp = /^([A-Za-z0-9_\-])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{3,4})$/i;

gmailButton.onclick = function () {
    if (gmailRegExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK";
        gmailResult.style.color = "green"

    }else {
        gmailResult.innerHTML = "Not ok";
        gmailResult.style.color = "red"
    }

}



const  parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
let num = 0
const counter = () =>{
    num++
    if (num < 450) {
        childBlock.style.left = `${num}px`
        requestAnimationFrame(counter)
    }
    console.log(num)
}
counter()

// let regExp = /^\d+$/
//
// const containsOnlyDigits = (str) => {
//     return  regExp.test(str)
//
// }
// console.log(containsOnlyDigits("12345")); // Выведет true
// console.log(containsOnlyDigits("12a45")); // Выведет false




// const count =  () => {
//     const interval = setInterval(() => {
//         console.log("Прошла секунда")
//     }, 1000)
// }
// count()


// const count = () => {
//     let i = 0
//         const interval = setInterval(() => {
//             i++
//             console.log(i)
//         },1000)
//     const resetSlide = () => {
//         setInterval(() =>{
//             clearInterval(interval)
//         }, 10000)
//     }
//     resetSlide()
//
// }
//
// count()
// const button = document.querySelector('.btn_block');
// const block = document.querySelector(".block")
// button.onclick = () => {
//     const colors = '0123456789ABCDEF'
//     block.style.background = colors[Math.floor(Math.random() * colors.length)]
//     let color = ''
//     return "#" + color
// }



const testRequest = new XMLHttpRequest();
testRequest.open('GET', "/body.json");
testRequest.setRequestHeader("Content-Type","application/json")
testRequest.onload = () => {
    const testData = JSON.parse(testRequest.responseText);
    console.log(testData)
}
testRequest.send()
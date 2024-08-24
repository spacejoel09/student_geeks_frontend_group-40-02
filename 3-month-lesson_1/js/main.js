// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => {
            javaScript.style.color = event.target.innerHTML
        }
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)

// Основы асинхронности


// setTimeout(() => {
//     console.log(1)
// })



// const interval = setInterval(() => {
//     console.log("Ok")
// },1000)
//
//
// clearInterval(interval)
//
// setTimeout(() => {
//     clearInterval(interval)
// }, 5000)
//
//


//TODO Event Loop - Цикл Событий



const characters = [
    {
        name: "Cupper",
        age: 42
    },
    {
        name: "Rocky",
        age: 24
    },
    {
        name: "Gojo",
        age: 20
    },
    {
        name: "Rukia",
        age: 18
    },
    {
        name: "Murphy",
        age: 92
    },
    {
        name: "Harry Poter",
        age: 16
    },
    {
        name: "Naruto",
        age: 23
    },



]

const wrapper = document.querySelector('.wrapper')

const userPhoto = ""

characters.forEach(person => {
    const personBlock = document.createElement('div')
    personBlock.setAttribute('class', 'person_block')

    personBlock.innerHTML =
        ' <h2>${person.name}</h2> <p> ${person.age} </p> '

    console.log(personBlock)
    wrapper.append(personBlock)
})
;






// //HEL CALBACK
//
//
// console.log("Loading")
//
//
// const logger = (object) =>{
//     const {name, price} = object
//     console.log(`name: ${name}\nprice: ${price}`)
// }
//
// setTimeout(() => {
//     const product = {
//         name:"milk",
//         price:"4$"
//     }
//     setTimeout(() => {
//         product.name = "Redbull"
//         product.price = "2$"
//         logger(product)
//     },1900)
//     logger(product)
// },1500)
//
//
//
//
// // деструктуризация
//
//
//
// const object = {
//     key: "value",
//     key2:"value1"
// }
//
//
// console.log()
//
//
//
//
//
// //PROMISE
//
//
//
//
// const promise = new Promise((resolve, reject) => {
//     //throw new Error("") //Ручная ошибка
//     setTimeout(()=> {
//         const product = {
//             name:"Water",
//             price:"34 som"
//         }
//         logger(product)
//         resolve(product)
//         reject()
//     },1500)
// })
// promise.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.name = "PunCakes"
//             product.price = "145 som"
//             logger(product)
//         },1300)
//         resolve()
//         reject()
//     })
//
// }, () => {
//     console.log("Promise one is not resolved!")
// }).then((product)=>{
//     return new Promise(() => {
//         setTimeout(() => {
//             product.name = "Sultan Tea"
//             product.price = "50 som"
//             logger(product)
//         })
//     })
//
// }, () =>{
//     console.log("Promise two is not resolved!")
// }).then() => {
//
// }
//





// fetch() <--- PROMISE


// fetch("../data/dota.json", {method: 'GET'})
//     .then((response) =>(response.json()))
//     .then(data => {
//         console.log(data)
//     })

// API - application programming interface
// Интерфейс программного приложения

// https:// - protocol
// jsonplaceholder.typicode.com - domen
// /todos - endpoint
// query params -- параметры запроса


// const url = "https://jsonplaceholder.typicode.com/todos";
//
//
//
// fetch(url, {method: 'GET'})
//     .then((response) =>(response.json()))
//      .then(data => {
//          console.log(data)
//      })


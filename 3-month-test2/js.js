function extractNumbers(str) {
    return str.match(/\d/g).map(Number);
}

console.log(extractNumbers("a1fg5hj6")); // вернёт [1, 5, 6]



function fibonacciRecursion(a = 0, b = 1) {
    if (a > 144) return;

    console.log(a);

    setTimeout(() => {
        fibonacciRecursion(b, a + b);
    }, 1000);
}

fibonacciRecursion();




// const cards = document.querySelector('.cards');
//
// const API = "https://fakestoreapi.com/products";
//
// async function fetchCardsData() {
//     try {
//         const response = await fetch(`${API}?_limit=4`);
//         const data = await response.json();
//
//         data.forEach((card) => {
//             console.log(card.title)
//         });
//     } catch (error) {
//         console.log('Fetch error:', error);
//     }
// }
//
// fetchCardsData();




// const buttonsColor = document.querySelectorAll('.button')
// const body = document.querySelector('body')
// document.querySelector('div').addEventListener('click', function(event) {
//     if (event.target.tagName === 'BUTTON') {
//         document.body.style.backgroundColor = event.target.textContent;
//     }
// });


// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');
//
// let isOpen = false;
//
// const open = () => {
//     parent.style.display = 'block';
//     isOpen = true;
// }
//
// const close = () => {
//     parent.style.display = 'none';
//     isOpen = false;
// }
//
//
// let counter = 0;
//
// const intervalId = setInterval(() => {
//     console.log(counter);
//     counter++;
//
//     if (counter > 100) {
//         clearInterval(intervalId);
//     }
// }, 1);

// document.getElementById('fetch-data').addEventListener('click', async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//     }
// });
//

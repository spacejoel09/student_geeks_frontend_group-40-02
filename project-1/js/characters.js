//  =  () => {
//     const request = new XMLHttpRequest(); // 1. Создание запроса
//     //2. Указывание метода  и пути запроса
//     request.open("GET", "/data.json");
//     //3. Указывание заголовка запроса
//     request.setRequestHeader("Content-type", "application/json");
//     //4 Отправика запроса
//     request.send();
//     request.onload = () => {
//         const data = JSON.parse(request.response);
//         document.querySelector(".name").innerText = data.name;
//         document.querySelector(".age").innerText = data.age;
//
//     }
//
// }
const charactersBlock = document.querySelector('.section-wrap');
const secondCharactersBlock = document.querySelector('.second .section-wrap');

fetch('../data/character.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(characters => {
        // Обработка первых 5 элементов
        const limitedCharacters = characters.slice(0, 5);
        charactersBlock.innerHTML = "";
        limitedCharacters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('wrap-item');
            characterCard.innerHTML = `
                <img src="${character.Person_Photo}" alt="${character.name}">
                <div class="bottom-item">
                    <span class="number-list">${character.list}</span>
                    
                    <span class="list-name">${character.name}</span>
                </div>
            `;
            charactersBlock.appendChild(characterCard);
        });

        // Обработка следующих 5 элементов
        const secondLimitedCharacters = characters.slice(5,10);
        secondCharactersBlock.innerHTML = "";
        secondLimitedCharacters.forEach(character => {
            const secondCharacterCard = document.createElement('div');
            secondCharacterCard.classList.add('wrap-item'); // Не добавляйте 'second' здесь
            secondCharacterCard.innerHTML = `
                <img src="${character.Person_Photo}" alt="${character.name}">
                <div class="bottom-item"> <!-- Не добавляйте 'second' здесь -->
                    <span class="number-list">${character.list}</span>
                    <span>${character.name}</span>
                </div>
            `;
            secondCharactersBlock.appendChild(secondCharacterCard);
        });
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });


// const testRequest = new XMLHttpRequest();
// testRequest.open('GET', "../data/file.json");
// testRequest.setRequestHeader("Content-Type","application/json")
// testRequest.onload = () => {
//     const testData = JSON.parse(testRequest.responseText);
//     console.log(testData)
// }
// testRequest.send()
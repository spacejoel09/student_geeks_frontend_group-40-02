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
const charactersBlock = document.querySelector('.characters');
const request = new XMLHttpRequest();

request.open('GET', "../data/characters.json");
request.setRequestHeader('Content-type', 'application/json');

request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
                const characters = JSON.parse(request.responseText);

                characters.forEach(character => {
                        const characterCard = document.createElement('div');
                        characterCard.classList.add('character_list');

                        characterCard.innerHTML = `
                <h2 class="character__name">${character.name}</h2>
                <span class="character__date">${character.date}</span>
                <div class="character_Photo">
                    <img src="${character.Person_Photo}" alt="${character.name}">
                </div>
                <p class="character-bio">${character.BIO}</p>
                <hr class="character-HR">
                <span class="character__price">${character.Price}</span>
            `;

                        charactersBlock.appendChild(characterCard);
                });
        } else {
                console.error('Ошибка при загрузке данных:', request.status, request.statusText);
        }
};

request.onerror = () => {
        console.error('Ошибка соединения');
};

request.send();

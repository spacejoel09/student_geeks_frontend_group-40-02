
const cards = document.querySelector('.cards');

const API = 'https://jsonplaceholder.typicode.com/posts';

async function fetchCardsData() {
    try {
        const response = await fetch(`${API}?_limit=4`);
        const data = await response.json();

        data.forEach((card) => {
            const cardBlock = document.createElement('div');
            cardBlock.setAttribute('class', 'card');
            cardBlock.innerHTML = `
                <h2 class="title">${card.title}</h2>
                <p class="body">${card.body}</p>

                <div class="imagecard">
                    <img src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-600nw-1745180411.jpg" alt="">
                </div?
            `;
            cards.append(cardBlock);
        });
    } catch (error) {
        console.log('Fetch error:', error);
    }
}

fetchCardsData();




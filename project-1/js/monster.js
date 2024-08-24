let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})



const modalfes = document.querySelector('.modal');
const modalTriggerBtnfes = document.getElementById('get');
const modalCloseBtnfes = document.querySelector('.modal_close');
const openModalfes = () => {
    modalfes.style.display = 'block';
    document.body.style.overflow = 'hidden';
    isOpen = true;
}

const closeModalfes = () => {
    modalfes.style.display = 'none';
    document.body.style.overflow = "";
    isOpen = false;
}

modalTriggerBtnfes.onclick = () => {
    hasClickedModalTriggerBtn = true;
    clearTimeout(counter);
    openModal();
}

modalCloseBtnfes.onclick = () => closeModal();

modalfes.onclick = (event) => {
    if (event.target === modalfes) {
        closeModal();
    }
}
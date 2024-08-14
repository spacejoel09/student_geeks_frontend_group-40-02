const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneSpan = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;


phoneButton.onclick = function () {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = "OK";
        phoneSpan.style.color = "green"

    }else {
        phoneSpan.innerHTML = "Not ok";
        phoneSpan.style.color = "red"
    }


}


const tabContentsBlocks = document.querySelectorAll(".tab_content_block")
const tabsParent =   document.querySelector(".tab_content_items")
let index = 0;
let intervaId;


const  tabs = document.querySelectorAll('.tab_content_item');
const hideTabContent = () => {
    tabContentsBlocks.forEach((item) => {
        item.style.display = "none"

    })
    tabs.forEach(item => {
        item.classList.remove("tab_content_item_active")
    })
}

const showTabContent = (index) => {
    tabContentsBlocks[index].style.display = "block"
    tabs[index].classList.add('tab_content_item_active')


}



const startSlide = () => {
    intervaId = setInterval(() => {
        index++;
        if (index > tabs.length - 1) {
            index = 0;
        }
        hideTabContent();
        showTabContent(index);
    }, 3000);
}


const resetAutoSlide = () => {
    clearInterval(intervaId);
    startSlide();
};





tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item,i) => {
            if (event.target === item){
                hideTabContent()
                index = i
                showTabContent(i)       
                resetAutoSlide()
            }
        })
    }
}


hideTabContent()
startSlide()
showTabContent(0)
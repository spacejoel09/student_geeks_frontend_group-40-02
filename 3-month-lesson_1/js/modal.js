// MODAL


const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
let Scrolled = false
let isOpen = false
let hasClickedModalTriggerBtn = false;
let hasScrolled = false;

const closeButton = document.querySelector(".modal_close")

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    isOpen = true
    removeEventListener('scroll', onscroll)
}


const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}



// const onScrolled = () => {
//     if (!isOpen && !hasClickedModalTriggerBtn){
//         if (window.pageYOffset > 1000){
//             setTimeout(openModal, 1000)
//         }
//     }
// }
//
// modalTrigger.onclick = () =>{
//     hasClickedModalTriggerBtn = true
//     clearTimeout(counter)
//     openModal()
// }
// closeButton.onclick = () => closeModal()
// modal.onclick = (event) => {
//     if (event.target === modal) {
//         closeModal()
//     }
// }
// window.addEventListener('scroll', onscroll)
// window.addEventListener("scroll", () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !hasScrolled) {
//         hasScrolled = true;
//         clearTimeout(counter)
//         if (!hasClickedModalTriggerBtn && !isOpen) {
//             setTimeout(openModal, 10000)
//         }else if (!hasClickedModalTriggerBtn && !hasScrolled) {
//             clearTimeout(counter)
//         }
//
//     }
// })
//
// counter = setTimeout(() => {
//     if (!hasClickedModalTriggerBtn && !hasScrolled) {
//         openModal();
//     }
// }, 10000);
//
//
// DEAL

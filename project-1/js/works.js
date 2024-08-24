const tabs = document.querySelectorAll('[data-id]');

const contents = document.querySelectorAll('[data-content]');
let id = 0;

tabs.forEach(function(tab) {
    tab.addEventListener('click', function ()  {
        tabs[id].classList.remove('active');
        tab.classList.add('active');
        id = tab.getAttribute('data-id');
        contents.forEach(function(box) {
            box.classList.add("hide")
            if (box.getAttribute("data-content") === id){
                box.classList.remove("hide")
                box.classList.add("show")
            }
        })
    })
})

document.querySelectorAll('.tabs li').forEach(function(tab) {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.tabs li').forEach(function(t) {
            t.classList.remove('active');
        });
        // Add active class to clicked tab
        this.classList.add('active');

        // Hide all content boxes
        document.querySelectorAll('.contents .box').forEach(function(box) {
            box.classList.remove('show');
        });
        // Show the content box that corresponds to the clicked tab
        const contentId = this.getAttribute('data-id');
        document.querySelector(`.contents .box[data-content="${contentId}"]`).classList.add('show');
    });
});



let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('work-next');
let prev = document.getElementById('work-prev');
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

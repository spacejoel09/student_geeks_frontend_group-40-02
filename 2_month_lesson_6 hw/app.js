document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.lottery-generator__button');
    const circles = document.querySelectorAll('.lottery-generator__bottom-circle');

    button.addEventListener('click', function() {
        let numbers = generateLotteryNumbers(6, 1, 99);
        circles.forEach((circle, index) => {
            circle.textContent = numbers[index];
        });
    });

    function generateLotteryNumbers(count, min, max) {
        let numbers = [];
        for (let i = 0; i < count; i++) {
            let number = Math.floor(Math.random() * (max - min + 1)) + min;
            numbers.push(number);
        }
        return numbers;
    }
});

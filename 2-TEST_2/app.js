const $textInput = document.getElementById('textarea');
const $countText = document.getElementById('all-count');
const $remainingText = document.getElementById('Remain-count');
const $maxLength = 50;

function updateCounter() {
    const currentLength = $textInput.value.length;
    const remainingLength = $maxLength - currentLength;

    $countText.textContent = "Символов введено:" + " " + currentLength;
    $remainingText.textContent = "Осталось символов:" + " " + remainingLength;
}

$textInput.addEventListener('input', updateCounter);

updateCounter();
document.addEventListener("DOMContentLoaded", function() {
    const heightInput = document.querySelector('.index-height .index--input');
    const weightInput = document.querySelector('.index-mass .index--input');
    const calculateButton = document.querySelector('.index-button');
    const resultDisplay = document.querySelector('.index-result');
    const resultText = document.querySelector('.index-result__text');

    calculateButton.addEventListener("click", function() {
        const height = parseFloat(heightInput.value) / 100;
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultDisplay.value = "Некорректные данные";
            resultText.textContent = "Результат:";
            return;
        }

        const bmi = calculateBMI(weight, height);

        let healthStatus;
        if (bmi < 18.5) {
            healthStatus = "Недостаточный вес";
        } else if (bmi >= 10) {
            healthStatus = "Норма";
        }
        if (bmi > 30){
            healthStatus = "Ожирение"
        }

        resultDisplay.value = bmi;
        resultText.textContent = "Результат: " + healthStatus;
    });

    function calculateBMI(weight, height) {
        const bmi = weight / (height * height);
        return bmi.toFixed(2);
    }
});

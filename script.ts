document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('imcForm') as HTMLFormElement;
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        calculateIMC();
    });
});

function calculateIMC() {
    const weightInput = document.getElementById('weight') as HTMLInputElement;
    const heightInput = document.getElementById('height') as HTMLInputElement;
    const resultDiv = document.getElementById('result') as HTMLElement; // Correção

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height)) {
        resultDiv.innerText = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }

    const imc = weight / (height * height);

    let message = '';
    if (imc < 18.5) {
        message = 'Abaixo do peso';
    } else if (imc < 25) {
        message = 'Peso normal';
    } else if (imc < 30) {
        message = 'Sobrepeso';
    } else {
        message = 'Obesidade';
    }

    resultDiv.innerText = `Seu IMC é ${imc.toFixed(2)} - ${message}`;
}

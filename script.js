function showCode(questionNumber) {
    var code = document.getElementById('code' + questionNumber);
    if (code.style.display === 'none') {
        code.style.display = 'block';
    } else {
        code.style.display = 'none';
    }
}

function calculateSum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var soma = num1 + num2;
    document.getElementById('output2').innerText = 'A soma de ' + num1 + ' e ' + num2 + ' é: ' + soma;
}

function changeColorById() {
    var question = document.getElementById('alt_id').querySelector('h3');
    var selectedColor = getRandomColor(); // Obter cor aleatória
    question.style.transition = 'color 0.5s ease';
    question.style.color = selectedColor; // Alterar a cor diretamente
}

function changeColorByName() {
    var question = document.getElementsByName('alt_name')[0].querySelector('h3');
    var selectedColor = getRandomColor(); // Obter cor aleatória
    question.style.transition = 'color 0.5s ease';
    question.style.color = selectedColor; // Alterar a cor diretamente
}

function changeColorByClass() {
    var question = document.querySelector('.alt_class').querySelector('h3');
    var selectedColor = getRandomColor(); // Obter cor aleatória
    question.style.transition = 'color 0.5s ease';
    question.style.color = selectedColor; // Alterar a cor diretamente
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

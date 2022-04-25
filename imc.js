const imc = () => {
    const name = document.getElementById("name").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    if (name && height && weight !== ''){
        const valorImc = (weight / (height * height)).toFixed(2);

        var classification = '';
        if (valorImc < 18.5){
            classification = 'abaixo do peso ideal.';
        }else if (valorImc < 25){
            classification = 'no peso ideal.';
        }else if (valorImc < 30){
            classification = 'levemente acima do peso ideal.';
        }else if (valorImc < 35){
            classification = 'com obesidade de grau I'
        }else if (valorImc < 40){
            classification = 'com obesidade de grau II'
        }else {
            classification = 'com obesidade de grau III'
        }

        result.textContent = `${name} seu imc é ${valorImc} e está ${classification}`.toUpperCase();
    } else {
        result.textContent = 'Preencha todos os campos!!!'
    }
};
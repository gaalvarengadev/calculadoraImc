function calcularImc () {
//entrada de dados

    let valorPeso = parseFloat (document.getElementById('peso').value);
    let valorAltura = parseFloat(document.getElementById('altura').value);

//processamento

    const valorImc = valorPeso / (valorAltura * valorAltura)
    document.getElementById('valorImc').innerText =  + valorImc.toFixed(2);
//

//classicacao do peso

    let classicacaoPeso = '';
    if(valorImc < 18.5) {
        classicacaopeso = 'Abaixo do peso';
    }else  if (valorImc >=18.5 && valorImc <=24.9) {
        classicacaoPeso = 'Peso normal';
    }else if (valorImc >= 25.0 && valorImc <= 29.9){
        classicacaoPeso = 'Sobrepeso';
    }

    document.getElementById('classificacao').innerText = classicacaoPeso;
}

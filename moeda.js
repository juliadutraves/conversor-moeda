document.getElementById('currency-form').addEventListener('submit', function(event){

    event.preventDefault();

    // Obter valores de entrada do formulario
    const valor = parseFloat(document.getElementById)('amount').value);const daMoeda = document.getElementById('paraMoeda').value;

    // Definir taxa de cambio fixa com ultilização de objeto 

    const exchangeRates = {
        USD: {EUR:0.93, BRL: 5.71},
        BRL: {EUR:0.16, USD: 0.18},
        EUR: { BRL:6.17, USD: 0.16}
    };

    if(daMoeda === paraMoeda){
        valorConvertido = valor;
        } else{
            valorConvertido = valor * exchangeRates[daMoeda][paraMoeda];
    }

    let conversao = document.getElementById('conversao'); 
    conversao.textContent = 'Resultado ${valorConvertido.toFixed(2)} ${paraMoeda}';

});
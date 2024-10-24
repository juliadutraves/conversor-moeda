const exchangeRates = {
    USD: { EUR: 0.85, BRL: 5.30, USD: 1 },
    EUR: { USD: 1.18, BRL: 6.24, EUR: 1 },
    BRL: { USD: 0.19, EUR: 0.16, BRL: 1 },
};

document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = 'Por favor, selecione moedas diferentes.';
        return;
    }

    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById('result').innerText = 
        `${amount} ${fromCurrency} é igual a ${convertedAmount.toFixed(2)} ${toCurrency}`;
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('result').innerText = '';
});

document.getElementById('currency-form').addEventListener('submit', function(event){
    // Obter valores de entrada do formulario
    const valor = parseFloat(document.getElementById)('amount').value);const daMoeda = document.getElementById('paraMoeda').value;

    // Definir taxa de cambio fixa com ultilização de objeto 

    const exchangeRates = {
        USD: {EUR:0.93, BRL: 5.71},
        BRL: {EUR:0.16, USD: 0.18},
        EUR: { BRL:6.17, USD: 0.16}
    };

});
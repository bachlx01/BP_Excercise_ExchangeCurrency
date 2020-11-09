
function convert() {
    var amount = document.getElementById('amount').value;
    var fromc = document.getElementById('FromCurrency').value;
    var toc = document.getElementById('ToCurrency').value;
    var convert = amount*toc/fromc;
    // var currency = document.getElementById('ToCurrency').innerHTML;

    var currency = document.getElementById('ToCurrency');

    // if (currency.selectedIndex == -1) {
    //     return null;
    // }

    document.getElementById('result').innerText= 'Result: ' + convert + ' ' + currency.options[currency.selectedIndex].text ;

}

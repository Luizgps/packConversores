function Select(valor){
    var selectBotao = document.getElementById("select")
    if (valor == "dolar"){
        ConverterDolar();
    }else if (valor == "euro"){
        ConverterEuro();
    }else if (valor == "libra"){
        ConverterLibra();
    }
    //alert(valor);
}
function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorDolar = parseFloat(valor);
    var multReal = valorDolar * 5.08;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Real é R$ " + multReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterEuro(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEuro = parseFloat(valor);
    var multReal = valorEuro * 5.54;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Real é R$ " + multReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterLibra(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorDolar = parseFloat(valor);
    var multReal = valorDolar * 6.62;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Real é R$ " + multReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}
function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorKm = parseFloat(valor);
    var valorMs = valorKm * 3.6;
    var valorResult = valorMs / 299792458;
    parseFloat(valorResult);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Para percorrer " + valorKm + " KM vc demoraria " + (valorResult).toFixed(5) + " Anos Luz";
    elementoValorConvertido.innerHTML = valorConvertido;
  }
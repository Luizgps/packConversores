class MobileNavbar { //referenciando propriedades da classe
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);//seleciona mobileMenu
      this.navList = document.querySelector(navList);//seleciona navList
      this.navLinks = document.querySelectorAll(navLinks);//seleciona navLinks
      this.activeClass = "active";//
  
      this.handleClick = this.handleClick.bind(this);//referenciando handleClick a classe
    }
  
    animateLinks() {//animação
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {//evento de click no botão do menu
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
/*==========================================================FUNCIONAL-SITE===================================================*/
  const botao = document.getElementById('botao'); //pega o valor de botão;

botao.addEventListener('click', executarConversao); //adc eventListenner quando clica chama func executarConversao;

function executarConversao(e) { //func recebe parametro "e";
    e.preventDefault(); //não faz o comportamento padrão;
    let moeda = document.getElementById('moeda').value;//cria var privada, coleta o valor do campo com id "moeda";
    let valor = parseFloat(document.getElementById('valor').value);//cira var privada, coleta valor do campo com id "valor" e transforma para Flutuante (decimal);

    //valida o valor inserido;
    if (valor <= 0 || isNaN(valor)) { //valida se var valor é menor ou igual a 0 e também se é um NaN - Not a Number;
        window.alert('Valor deve ser maior que 1!');//alerta de erro quando descumprir os requisitos;
        document.getElementById('valor').value = '';//limpa o campo com id valor;
        return;//sai do if
    }

    let valorConvertido = converter(moeda, valor);//cria variavel e seta o valor da mesma como o resultado da func converter, passando como parametros let moeda e let valor.
    let elementoValorConvertido = document.getElementById("valorConvertido");//cria variavel e coleta os dados do h2 com id valorConvertido;

    elementoValorConvertido.innerHTML = valor.toFixed(2) /*fixa 2 casas decimais*/ + " em " + moeda + " equivale a é R$" + valorConvertido.toFixed(2);// seta uma mensagem na tela quando finaliza o processo por completo;
}

function converter(moeda, valor) {//função converter recebendo let moeda e let valor da função executarConversao;
    switch(moeda){//switch com parametro moeda
        case 'dolar':// caso em moeda o valor seja 'dolar', valorConvertido o resultado entre valor * cotação da moeda;
            return valor * 5.08;
        case 'euro':// caso em moeda o valor seja 'euro', valorConvertido o resultado entre valor * cotação da moeda;
            return valor * 5.54;
        case 'libra':// caso em moeda o valor seja 'libra', valorConvertido o resultado entre valor * cotação da moeda;
            return valor * 6.62;
        case 'rublo':// caso em moeda o valor seja 'rublo', valorConvertido o resultado entre valor * cotação da moeda;
            return valor * 0.038;
    }
}
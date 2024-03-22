var jogador;
let aposta;
var ganhador;

function increverJogador(){
  const saldo = prompt('coloque saldo:');

  const jogador = {
    saldo: saldo    
  }
  var visor = document.getElementById("saldo").innerHTML = saldo;
}

function checkAposta(aposta){
  if(aposta == ganhador){
    atualizaSaldo(aposta);
  }
}

function ap(){
  var valorAposta = prompt('Insira o valor da aposta:');
}


function atualizaSaldo(aposta){
  jogador.saldo += aposta * 5;
}

let myInterval1;
let myInterval2;
let myInterval3;
let myInterval4;
let myInterval5;

let posX1 = 0;
let posX2 = 0;
let posX3 = 0;
let posX4 = 0;
let posX5 = 0;

function timer1(){
  posX1 += Math.ceil(Math.random() * 50);
  const c1 = document.getElementById("car1");
  if(posX1 > 1150){
    posX1 = 1150;
    c1.style.transform = "translateX(" + posX1 + "px )";
    ganhador();
  }
  c1.style.transform = "translateX(" + posX1 + "px )";
}

function timer2(){
  posX2 += Math.ceil(Math.random() * 50);
  const c2 = document.getElementById("car2");
  if(posX2 > 1150){
    posX2 = 1150;
    c2.style.transform = "translateX(" + posX2 + "px )";
    ganhador();
  }
  c2.style.transform = "translateX(" + posX2 + "px )";
}

function timer3(){
  posX3 += Math.ceil(Math.random() * 50);
  const c3 = document.getElementById("car3");
  if(posX3 > 1150){
    posX3 = 1150;
    c3.style.transform = "translateX(" + posX3 + "px )";
    ganhador();
  }
  c3.style.transform = "translateX(" + posX3 + "px )";
}

function timer4(){
  posX4 += Math.ceil(Math.random() * 50);
  const c4 = document.getElementById("car4");
  if(posX4 > 1150){
    posX4 = 1150;
    c4.style.transform = "translateX(" + posX4 + "px )";
    ganhador();
  }
  c4.style.transform = "translateX(" + posX4 + "px )";
}

function timer5(){
  posX5 += Math.ceil(Math.random() * 50);
  const c5 = document.getElementById("car5");
  if(posX5 > 1150){
    posX5 = 1150;
    c5.style.transform = "translateX(" + posX5 + "px )";
    ganhador();
  }
  c5.style.transform = "translateX(" + posX5 + "px )";
}

function myStop() {
  clearInterval(myInterval1);
  clearInterval(myInterval2);
  clearInterval(myInterval3);
  clearInterval(myInterval4);
  clearInterval(myInterval5);
}

function ganhador(){
  myStop();
  if(posX1 == 1150){
    ganhador = 1;
    alert("1")
  }
  if(posX2 == 1150){
    ganhador = 2;
    alert("2")
  }
  if(posX3 == 1150){
    ganhador = 3;
    alert("3")
  }
  if(posX4 == 1150){
    ganhador = 4;
    alert("4")
  }
  if(posX5 == 1150){
    ganhador = 5;
    alert("5")
  }
  
}

function init() {
  //alert("faca sua aposta !")

  if(comecar = true){
    myInterval1 = setInterval(timer1, 50);
    myInterval2 = setInterval(timer2, 50);
    myInterval3 = setInterval(timer3, 50);
    myInterval4 = setInterval(timer4, 50);
    myInterval5 = setInterval(timer5, 50);
  }
 
}  


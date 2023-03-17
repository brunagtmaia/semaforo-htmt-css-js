const botao_vermelho = document.getElementById('botao_vermelho');
const botao_amarelo = document.getElementById('botao_amarelo');
const botao_verde = document.getElementById('botao_verde'); //pega o elemento html 
const botao_voltar = document.getElementById('botao_voltar')
const vermelho = document.querySelector('.vermelho'); //peda o seletor do css
const amarelo = document.querySelector('.amarelo');
const verde = document.querySelector('.verde');
const semaforo = document.querySelector('.semaforo');


function ligar_vermelho() {
  vermelho.style.opacity = 1; //adiciona a propriedade opacity no seletor vermelho do css
  amarelo.style.opacity = 0.2;
  verde.style.opacity = 0.2;
  semaforo.style.boxShadow = "5px 2px 20px 10px red";
}

function ligar_amarelo() {
  vermelho.style.opacity = 0.2;
  amarelo.style.opacity = 1;
  verde.style.opacity = 0.2;
  semaforo.style.boxShadow = "5px 2px 20px 10px yellow";
}

function ligar_verde() {
  vermelho.style.opacity = 0.2;
  amarelo.style.opacity = 0.2;
  verde.style.opacity = 1;
  semaforo.style.boxShadow = "5px 2px 20px 10px green";
}
function voltar(){
  vermelho.style.opacity = 1;
  amarelo.style.opacity = 1;
  verde.style.opacity = 1;
  semaforo.style.boxShadow = "none";
}


botao_vermelho.addEventListener('click', ligar_vermelho); //cria tipo um leitor de eventos click e chama a função
botao_amarelo.addEventListener('click', ligar_amarelo);
botao_verde.addEventListener('click', ligar_verde);
botao_voltar.addEventListener('click', voltar)
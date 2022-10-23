/* pegando a classe mario*/
const mario = document.querySelector('.mario');
/* pegando a classe pipe*/
const pipe = document.querySelector('.pipe');
/*pegando a classe clouds */
const clouds = document.querySelector('.clouds');
/* pegando a classe pont*/
const point = document.querySelector('.point');

const text = document.querySelector('.text');

const text_2 = document.querySelector('.text-2');

const background = document.querySelector('.background');

const butao = document.querySelector('.bot');

var points = 0;

function jump_mario() {
  mario.classList.add('jump-mario');
  /* Digamos que é o tempo em que a função vai terminar*/
  setTimeout(() => {

    mario.classList.remove('jump-mario');

  }, 500);

}

const loop = setInterval(() => {
  
  const pipePosition = pipe.offsetLeft;
    
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

  const cloudsPosition = clouds.offsetLeft;

    /*Condições de perda*/
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
      /*Parar a animação do pipe*/
    pipe.style.animation = 'none';
    pipe.style.left = pipePosition+'px';

      /*Parar a animação do mario*/
    mario.style.animation = 'none';
    mario.style.bottom = marioPosition+'px';

      /*Parar a animação das nuvens*/
    clouds.style.animation = 'none';
    clouds.style.left = cloudsPosition+'px';

      /*Trocando a imagem do mario */
    mario.src = './imagens/game-over.png';
    mario.style.width= '75px';
    mario.style.marginLeft = '44px';

    clearInterval(loop);

  }
  
}, 10);

/*Contado pontos*/
const contPoints = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
    
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

  const cloudsPosition = clouds.offsetLeft;

  /*Contando*/
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

    /*Tela de game over*/

    text.innerHTML = "Game Over";

    text_2.innerHTML = "Sua Pontuação foi "+points;

    background.style.background = '#e71f16';

    background.style.border = '5px solid black';

    /*Botao*/
    butao.style.backgroundColor = '#1621e7';

    butao.style.border = '4px solid black';

    butao.innerHTML = 'Retry';

    clearInterval(contPoints);
  }
  else{
    points++;
    point.innerHTML = "Pontuação "+points;
  }

}, 1500);

  /* Botão para o pulo do mario*/  
document.addEventListener('keydown', (e) => {
  if((e.code === "ArrowUp") | (e.code === "Space")){
    jump_mario();
  }
});

/*Função recarregar pagina*/
function reload(){
  location.reload();
}
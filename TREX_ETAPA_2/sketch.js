//PASSO 1 CRIAR AS VARIÁVEIS
var trex_correndo, trex;
var solo, soloImagem, soloInvisivel;


//CARREGAR ARQUIVOS DE MÍDIA
function preload() {
    soloImagem = loadImage("solo.png");
    trex_correndo = loadAnimation("trex1.png", "trex2.png", "trex3.png");
}

function setup() {
    createCanvas(600, 200);
    //trex
    trex = createSprite(50, 180, 50, 50);
    trex.addAnimation("correndo", trex_correndo);
    trex.scale = 0.5;

    //solo
    solo = createSprite(300, 190, 600, 20);
    solo.addImage(soloImagem);
    solo.velocityX = -3;


}

function draw() {
    background("white");

    if (solo.x < 0) {
        solo.x = solo.width / 1.99;
    }

    if (keyDown("space") ) {
        trex.velocityY = -10;
    }

    trex.velocityY += 0.8;

    trex.collide(solo);

    drawSprites();

}
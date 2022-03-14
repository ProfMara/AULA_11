var jogador, rua;
var jogadorImg, ruaImg;
var borda1, borda2;


function preload() {
    //imagens pré-carregadas
    ruaImg = loadImage("rua.png");
    jogadorImg = loadAnimation("corredor1.png", "corredor2.png");
}

function setup() {
    createCanvas(400, 400);
    //crie sprite aqui
    rua = createSprite(200, 100, 100, 100);
    rua.addImage(ruaImg);
    rua.scale = 1.2
    rua.velocityY = 8

    borda1 = createSprite(34, 200, 40, 400);
    // borda1.invisible = false;
    // borda1.visible = true;
    // borda1.invisible = true;
    // borda1.visible = false;


    borda2 = createSprite(375, 200, 40, 400);
    borda2.visible = false;

    jogador = createSprite(200, 300, 100, 100);
    jogador.addAnimation("correndo", jogadorImg);
    jogador.scale = 0.07


}

function draw() {
    jogador.position.x = mouseX;
    background("green");

    /*if (rua.x > 400) {
        rua.x = height / 2;
    }
*/

    /* if (rua.y > 400) {
        rua.y = width / 4;
    }
    */

    /* if (rua.y < 400) {
        rua.x = height / 4;
    }
    */
    if (rua.y > 400) {
        rua.y = height / 4;
    }


    jogador.bounceOff(borda1);
    jogador.bounceOff(borda2);


    drawSprites();

}
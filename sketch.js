var gardenImg, mouseImage1, mouseImage2, mouseImage3, mouseImage4, catImage1, catImage2, catImage3, catImage4;
var cat, mouse, canvas;



function preload() {
    //carregue as imagens aqui
    gardenImg = loadImage("images/garden.png");
    mouseImage1 = loadAnimation("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImage3 = loadAnimation("images/mouse4.png");
    catImage1 = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catImage3 = loadAnimation("images/cat4.png");
}
function setup(){
    canvas = createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    cat = createSprite (870, 600);
    cat.addAnimation("gatoSentado", catImage1);
    cat.scale = 0.2;
    mouse = createSprite (200, 600);
    mouse.addAnimation("ratoSentado", mouseImage1);
    mouse.scale = 0.15;
}

function draw() {

    background(255);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("UltimaImagemGato", catImage3);
        cat.changeAnimation("UltimaImagemGato");
        cat.x = 300;
        cat.scale = 0.2;

        mouse.velocityX = 0
        mouse.addAnimation("UltimaImagemRato", mouseImage3);
        mouse.addAnimation("UltimaImagemRato", mouseImage3);
        mouse.changeAnimation("UltimaImagemRato");
        mouse.scale = 0.2;
    }
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("ratoProvocando", mouseImage2);
        mouse.changeAnimation("ratoProvocando");
        mouse.FrameDelay = 25;

        cat.velocityX = -5;

        cat.addAnimation("gatoProvocando", catImage2);
        cat.changeAnimation("gatoProvocando");
    }

}

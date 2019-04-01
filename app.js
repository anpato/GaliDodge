

let player
let playerImage
let enemy
let enemyImage
let enemy2
let enemy2Image

function preload(){
    playerImage = loadImage('./icons/player.png');
    enemyImage = loadImage('./icons/red.png');
    enemy2Image = loadImage('icons/leader.png');
}

function setup() {
    createCanvas(600,600);
    player = createSprite(width / 2, height - 25, 50, 50)
    player.addImage(playerImage)
    enemy = createSprite(width / 2, height/ 50,50);
    enemy.addImage(enemyImage);
    enemy2 = createSprite(width / 2, height/ 50,50);
    enemy2.addImage(enemy2Image);
    //  player.addImage(img);
}

function draw() {
    background(0,0,0, 0)
    drawSprites();
}

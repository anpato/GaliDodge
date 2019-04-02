let scoreBoard = document.querySelector('.scoreboard');
// console.log(scoreBoard);
//P5 Methods
let player
let playerImage
let enemy
let enemy2

let score = 0;

function preload() {
    playerImage = loadImage('../icons/player.png');
}

function setup() {
    createCanvas(600, 600);
    frameRate(60);
    isGameOver = false
    player = createSprite(width / 2, height - 30, 20, 20)
    player.addImage(playerImage)
    enemy = createSprite(width / 20, 20, height / 2, 10);
    enemy2 = createSprite(width / 10, 5, height / 2, 5);
    enemy3 = createSprite(width / 5, 5, height / 6, 2);
    console.log(enemy3);
    console.log(player);
}

function draw() {

    background(33, 33, 33)
    clear()
    if (keyDown(RIGHT_ARROW) && player.position.x < width - 30) {
        player.position.x = player.position.x + 10
    }
    if (keyDown(LEFT_ARROW) && player.position.x > 30) {
        player.position.x = player.position.x - 10
    }
    enemy.position.y = enemy.position.y + 6;
    enemy2.position.y = enemy2.position.y + 4;
    enemy3.position.y = enemy3.position.y + 8;
    if (enemy.position.y > height + 100 && enemy2.position.y > height + 100 && enemy3.position.y > 100) {
        enemy.position.y = 0
        enemy.position.x = random(10, width - 5)
        enemy2.position.y = 0
        enemy2.position.x = random(10, width - 5)
        enemy3.position.y = 0
        enemy3.position.x = random(10, width - 5)
    }
    if (isGameOver) {
        gameOver()
    }
    if (enemy.overlap(player) || enemy2.overlap(player) || enemy3.overlap(player)) {
        isGameOver = true
    }
    drawSprites();
}

function gameStart() {
    started = true

}

function gameOver() {

}




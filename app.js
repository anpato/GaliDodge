let player
let playerImage
let enemy
let enemyImage
let enemy2
let enemy2Image
let enemy3
let enemy3Image
let enemy4
let enemy4Image

function preload() {
    playerImage = loadImage('./icons/player.png');
    enemyImage = loadImage('./icons/red.png');
    enemy2Image = loadImage('icons/teal.png');
    enemy3Image = loadImage('icons/purple.png');
    enemy4Image = loadImage('icons/leader.png');
}

function setup() {
    createCanvas(600, 600);
    player = createSprite(width / 2, height - 30, 20, 20)
    player.addImage(playerImage)
    enemy = createSprite(20, 10, 10);
    enemy.addImage(enemyImage);
    enemy2 = createSprite(width / 2, height - 30, 0, 0);
    enemy2.addImage(enemy2Image);
    enemy3 = createSprite(width / 2, height - 30, 0, 0);
    enemy3.addImage(enemy3Image);
    enemy4 = createSprite(width / 2, height - 30, 0, 0);
    enemy4.addImage(enemy4Image);
    frameRate(60);
}4
function draw() {
    background(255, 255, 255)
    if (keyDown(RIGHT_ARROW) && player.position.x < width - 25) {
        player.position.x = player.position.x + 7
    }
    if (keyDown(LEFT_ARROW) && player.position.x > 25) {
        player.position.x = player.position.x - 7
    }
    enemy.position.y = enemy.position.y + 5;
    enemy2.position.y = enemy2.position.y + 5;
    enemy3.position.y = enemy3.position.y + 5;
    enemy4.position.y = enemy4.position.y + 5;
    if (enemy.position.y > height + 20) {
        enemy.position.y = 0
        enemy.position.x = random(8, width - 5)
    }
    if (enemy2.position.y > height + 30) {
        enemy2.position.y = 0
        enemy2.position.x = random(8, width - 5)
    }
    if (enemy3.position.y > height + 20) {
        enemy3.position.y = 0
        enemy3.position.x = random(8, width - 5)
    }
    if (enemy4.position.y > height + 20) {
        enemy4.position.y = 0
        enemy4.position.x = random(8, width - 5)
    }
    drawSprites();
}
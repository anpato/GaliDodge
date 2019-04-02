


//P5 Methods
let player
let playerImage
let enemy
let enemy2

let score =0;

function preload() {
    playerImage = loadImage('../icons/player.png');
}

function setup() {
    createCanvas(600, 600);
    isGameOver = false
    player = createSprite(width / 2, height - 30, 20, 20)
    player.addImage(playerImage)
    enemy = createSprite(random(width), random(height),random(10,300), random(50-200));
    enemy2 = createSprite(random(width), random(height),random(10,100), random(1-60));
    enemy3 = createSprite(random(width), random(height),random(10,250), random(5-100));
    frameRate(60);

}
    function draw() {
        background(33, 33, 33)
        clear()
        //random enemy sizes

        if (keyDown(RIGHT_ARROW) && player.position.x < width - 25) {
            player.position.x = player.position.x + 7
        }
        if (keyDown(LEFT_ARROW) && player.position.x > 25) {
            player.position.x = player.position.x - 7
        }
        enemy.position.y = enemy.position.y + 7;
        enemy2.position.y = enemy2.position.y + 5;
        enemy3.position.y = enemy3.position.y + 8;
        if (enemy.position.y > height + 100 && enemy2.position.y > height + 100 && enemy3.position.y > 100) {
            enemy.position.y = 0
            enemy.position.x = random(5, width - 5)
            enemy2.position.y = 0
            enemy2.position.x = random(5, width - 5)
            enemy3.position.y = 0
            enemy3.position.x = random(5, width - 5)
        }
    
        if(isGameOver){
            gameOver()
        }
        if(enemy.overlap(player)||enemy2.overlap(player)||enemy3.overlap(player)){
            isGameOver = true
        }
        drawSprites();
    }


function gameOver(){
    background(255)
    textAlign(CENTER)
    fill('white')
    text('Game Over')
}
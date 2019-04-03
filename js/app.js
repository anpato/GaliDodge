let scoreBoard = document.querySelector('.scoreboard');
let modal = document.querySelector('.modal');
let btn = document.createElement('button');
let ptag = document.createElement('p');

//P5 Methods
let player
let playerImage
let enemy
let enemy2
let enemy3;
let enemy4;
let enemy5;
let enemy6;
let score = 0;
let isGameOver;
let time = 0;


function preload() {
    playerImage = loadImage('../icons/player.png');
}

function setup() {
    isGameOver = false
    createCanvas(600, 600);
    frameRate(120);
    player = createSprite(width / 2, height - 30, 20, 20)
    player.addImage(playerImage)
    enemy = createSprite(width / 20, 20, height / 2, 10);
    enemy2 = createSprite(width / 10, 5, height / 2, 5);
    enemy3 = createSprite(width / 5, 5, height / 6, 2); 
    // enemy4=createSprite(width / 5, 5, height / 6, 2); 

}



function draw() {
    timeCounter()
    console.log(time)
    if (isGameOver) {
        gameOver()
    }
    else {
    // if (enemy.overlap(player) || enemy2.overlap(player) || enemy3.overlap(player) || createEnemy.overlap(player)) {
    //     isGameOver = true
    // }

    if (keyDown(RIGHT_ARROW) && player.position.x < width - 30) {
        player.position.x = player.position.x + 10
    }
    if (keyDown(LEFT_ARROW) && player.position.x > 30) {
        player.position.x = player.position.x - 10
    }
    enemy.position.y = enemy.position.y + 6;
    enemy2.position.y = enemy2.position.y + 4;
    enemy3.position.y = enemy3.position.y + 8;
    enemy4.position.y = enemy4.position.y += random(4,9)
    
    if (enemy.position.y > height + 100 && enemy2.position.y > height + 100 && enemy3.position.y > 100 && enemy4.position.y > 100) {
        incrementScore();
        // console.log(score);
        enemy.position.y = 0
        enemy.position.x = random(10, width - 5)
        enemy2.position.y = 0
        enemy2.position.x = random(10, width - 5)
        enemy3.position.y = 0
        enemy3.position.x = random(10, width - 5)
        enemy4.position.y = 0
        enemy4.position.x = random(10, width - 5)
    } if(score===500){
        enemy5 = createSprite(width/5,3, height/6,2);
    }
}
    background(33,33,33);
    clear()
    drawSprites();
};

function restart(){
    if(isGameOver){
    isGameOver = false;
    player.position.x = width /2;
    player.position.y = height - 30;
    enemy.position.y = 0;
    enemy2.position.y = 0;
    enemy3.position.y = 0;
    score=0
    }
    modal.classList.remove('active');
    loop();
}

function gameOver() {
    modal.classList.add('active');
    modal.appendChild(ptag);
    modal.appendChild(btn);   
    ptag.innerText = score;
    btn.innerText = 'Restart'
    background(0);
    noLoop()
}
function incrementScore() {
    score += 50
    scoreBoard.innerText = score;
}
function timeCounter(){
    return setInterval(time+=1, 3000);
}
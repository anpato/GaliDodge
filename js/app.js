let scoreBoard = document.querySelector('.scoreboard');
let modal = document.querySelector('.modal');
let btn = document.createElement('button');
let ptag = document.createElement('p');

//P5 Methods
let player
let playerImage
let isGameOver;
let time = 0;
let score = 0;
let wallsArr = [];


function preload() {
    playerImage = loadImage('../icons/player.png');
}

function setup() {
    isGameOver = false
    createCanvas(600, 600);
    frameRate(120);
    player = createSprite(width / 2, height - 30, 20, 20)
    player.addImage(playerImage)
    for (let i = 0; i < 3; i++) {
        wallsArr.push(new Walls())
    }
    setInterval(()=> {
        if(score > 500){
            for(let i=0; i< 2; i++){
                wallsArr.push(new Walls);
            }
        }
    }, 5000)
}

function draw() {
    background(33, 33, 33);
    drawSprites();
    for (let i = 0; i < wallsArr.length; i++) {
        obstacle = wallsArr[i]
        wallsArr[i].move();
        wallsArr[i].display();
        wallsArr[i].checkCollision();
        // wallsArr[i].create();
        wallsArr[i].reset();
    }
    if (isGameOver) {
        gameOver()
    } else {
        if (keyDown(RIGHT_ARROW) && player.position.x < width - 30) {
            player.position.x = player.position.x + 10
        }
        if (keyDown(LEFT_ARROW) && player.position.x > 30) {
            player.position.x = player.position.x - 10
        }
    }
    console.log(wallsArr.length)
};

function restart() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width / 2;
        player.position.y = height - 30;
        score = 0
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
class Walls {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.w = random(width / 20, 180)
        this.h = random(height / 50);
        this.speed = random(1, 3);
    }
    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(+this.speed, this.speed);
        if (this.y > height + 100) {
            this.y = 0;
            incrementScore();
        }
    }
    reset() {
        isGameOver === true ? this.y = 0 : null
    }
    display() {
        rect(this.x, this.y, this.w, this.h);
        fill('#4dd0e1')
    }

    checkCollision() {
        let rectX = this.x;
        let rectY = Math.floor(this.y);
        let rectW = Math.floor(this.w);
        let rectH = Math.floor(this.h);
        let playerX = player.position.x;
        let playerY = player.position.y;
        if (playerX > rectX && playerX < rectX + rectW) {
            if (player.position.y > rectY && playerY < rectY + rectH) {
                isGameOver = true;
            }
        }
    }
}
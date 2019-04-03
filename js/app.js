let scoreBoard = document.querySelector('.scoreboard');
let modal = document.querySelector('.modal');
let btn = document.createElement('button');
let ptag = document.createElement('p');

//P5 Methods
let player
let playerImage
let enemy
let score = 0;
let isGameOver;
let time = 0;

let wallsArr = [];
let obstacle;
let index;


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
    setInterval(() => {
        for (let i = 0; i < 3; i++) {
            wallsArr.push(new Walls())
        }
    }, 6000);
}


function draw() {
    background(33, 33, 33);
    drawSprites();
    for (let i = 0; i < wallsArr.length; i++) {
        obstacle = wallsArr[i]
        wallsArr[i].move();
        wallsArr[i].display();
        // wallsArr[i].collision()
        // console.log(wallsArr[i]);
        // console.log(obstacle);
    }
    if (isGameOver) {
        gameOver()
    } else {
        if (wallsArr.overlap(player)) {
            isGameOver = true;
        }
        if (keyDown(RIGHT_ARROW) && player.position.x < width - 30) {
            player.position.x = player.position.x + 10
        }
        if (keyDown(LEFT_ARROW) && player.position.x > 30) {
            player.position.x = player.position.x - 10
        }
        // if (obstacle.position.y > height + 100) {}
    }
};

function restart() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width / 2;
        player.position.y = height - 30;
        index.position.y = 0;
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
        this.speed = 1;
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(+this.speed, this.speed);
        if (this.y > height + 100) {
            this.y = 0;
            // incrementScore();
            // console.log(score);
        }
    }

    display() {
        rect(this.x, this.y, this.w, this.h);
    }
    // collision() {
    //     if (Walls.overlap(player)){
    //         isGameOver=true;
    //     }
    // }
}
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

let wallArr = [];
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
    for (let i = 0; i < 10; i++) {
        obstacle = createSprite(width / 10, 5, height / 2, 5);
        wallArr.push(obstacle);
        index = wallArr[i]
        console.log(index);
    }
}


function draw() {
    // timeCounter()
    // console.log(time)

    if (isGameOver) {
        gameOver()
    } else {
        if (index.overlap(player)) {
            // isGameOver = true;
        }

        if (keyDown(RIGHT_ARROW) && player.position.x < width - 30) {
            player.position.x = player.position.x + 10
        }
        if (keyDown(LEFT_ARROW) && player.position.x > 30) {
            player.position.x = player.position.x - 10
        }
        index.position.y = index.position.y + 6;

        if (index.position.y > height + 100) {
            incrementScore();
            console.log(score);
            index.position.y = 0;
            index.position.x = random(10, width - 5);
        }
    }
    background(33, 33, 33);
    // clear()
    drawSprites();
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

function timeCounter() {
    return setInterval(time += 1, 3000);
}
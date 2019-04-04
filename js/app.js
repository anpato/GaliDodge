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
let speed = 3;


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
            for(let i=0; i< 1; i++){
                this.y = 0;
                wallsArr.push(new Walls);
                setInterval(()=> {
                    speed++
                }, 10000)                
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
};

function restart() {
    if (isGameOver) {
        this.y =0
        score = 0;
        scoreBoard.innerText = 0
        isGameOver = false;
        player.position.x = width / 2;
        player.position.y = height - 30;
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
    for(let i=3; i < wallsArr.length; i++){
        if (wallsArr.length > 3){
            wallsArr.splice(3, wallsArr.length);
        }
    }
    
    background(0);
    noLoop()
}

const toggleMenu = () => {
    menu.classList.toggle('slide');
    if(menu.classList == 'menu slide'){
        // console.log('menu-open');
        noLoop()
    }else{
        loop();
    }
}
function incrementScore() {
    score += 50
    scoreBoard.innerText = score;
}
class Walls {
    constructor() {
        this.x = Math.floor(random(width));
        this.y = random(height > 0);
        this.w = Math.floor(random(width / 60, 180))
        this.h = Math.floor(random(height / 90,50));
        this.speed = random(speed)
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
        isGameOver === true ? this.y = 0 : null ;
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
        
        if (playerX + 32 > rectX && playerX - 32 < rectX + rectW) {
            if (player.position.y + 32 > rectY && playerY -32 < rectY + rectH) {
                isGameOver = true;
            }if(isGameOver == true){
                this.y = 0;
            }
        }
    }
}
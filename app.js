let body = document.getElementsByName('body');

let player = document.querySelector('.player');
let minion = document.querySelector('.minion');
let leader = document.querySelector('.leader');

for(let i=0; i< 5; i++){
        let newMin = document.createElement('img');
        newMin.src = './galiga icons/red.png';
        console.log(newMin);
        body.appendChild =newMin;
        console.log(newMin)
        newMin.classList.add('minion');
        newMin.style.gridColumn = '6';
    
}

let openInst = document.querySelector('.open-instr');
let instructions = document.querySelector('.instructions');
let closeInst = document.querySelector('.exit');
let menu = document.querySelector('.menu');


const toggleMenu = () => {
    menu.classList.toggle('slide');
    if(menu.classList == 'menu slide'){
        // console.log('menu-open');
        noLoop()
    }else{
        loop();
    }
}
const toggleInstructions = () => {
    instructions.classList.toggle('show');
}

btn.addEventListener('click', (event)=> {
    event.preventDefault;
    restart()
});
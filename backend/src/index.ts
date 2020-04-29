import { Game } from "./teste";
import { DINOSAUR } from "./characters";

let frame: number = 0;
class Jogo extends Game { }
let dino = new Jogo();
// console.log(DINOSAUR);
// console.log(DINOSAUR.CLOSED_EYE);
// console.log(DINOSAUR.LEFT_LEG_UP);
let jogo = new Jogo();

console.log('test');
let sprite = new Image();
sprite.src = './dino_chrome.png';

function checkFormat(format) {
    if (format == DINOSAUR.RIGHT_LEG_UP) {
        return DINOSAUR.LEFT_LEG_UP
    }
    return DINOSAUR.RIGHT_LEG_UP
}

let format = DINOSAUR.LEFT_LEG_UP;
function loop() {
    dino.clear();
    //drawImage(sX, sY, sWidth, sHeight, x, y, width, height)
    frame += 1;

    jogo.draw().drawImage(sprite, 2, 2, 74, 74, 10, 10, 74, 74); //Try Again 
    //Dino (Initial)
    if (frame % 10 == 0) {
        format = checkFormat(format);
    }
    

    dino.draw().drawImage(
        sprite,
        format,
        2,
        DINOSAUR.DEFAULT_HEIGHT,
        DINOSAUR.DEFAULT_WIDTH,
        10,
        200,
        DINOSAUR.DEFAULT_HEIGHT,
        DINOSAUR.DEFAULT_WIDTH
    );

    requestAnimationFrame(loop)
}

loop();
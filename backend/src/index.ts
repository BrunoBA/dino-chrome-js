import * as GAME from "./game";


let sprites: Array<GAME.StateSprite> = [
    // GAME.ICON_TRY_AGAIN,
    // GAME.MSG_GAME_OVER,
    // GAME.MSG_HIGH_SCORE,
    // GAME.NUM_0,
    // GAME.NUM_1,
    // GAME.NUM_2,
    // GAME.NUM_3,
    // GAME.NUM_4,
    // GAME.NUM_5,
    // GAME.NUM_6,
    // GAME.NUM_7,
    // GAME.NUM_8,
    // GAME.NUM_9,
    // GAME.CLOUD,
    // GAME.CACTUS_1,
    // GAME.CACTUS_2,
    // GAME.CACTUS_3,
    // GAME.CACTUS_4,
    // GAME.CACTUS_5,
    // GAME.CACTUS_6,
    // GAME.CACTUS_7,
    // GAME.CACTUS_8,
    // GAME.CACTUS_9,
    // GAME.CACTUS_BIG,
    // GAME.PTERODACTYL_DOWN,
    // GAME.PTERODACTYL_UP,
    // GAME.DINO_INITIAL,
    // GAME.DINO_NORMAL,
    // GAME.DINO_CLOSED_EYE,
    GAME.DINO_LEFT,
    GAME.DINO_RIGHT,
    // GAME.DINO_BIG_EYE,
    // GAME.DINO_NO_BORDER,
    // GAME.DINO_DOWN_LEFT,
    // GAME.DINO_DOWN_RIGHT,
    // GAME.FLOOR,
];

let frame: number = 0;
const REFRESH_RATE: number = 5;
const QTD_SPRITES: number = sprites.length;
let spriteIndex = 0;

// let jogo = new GAME.Game();

let floor = GAME.FLOOR;
floor.setPosition(100, 200);
let floorPosition = 0;

function loop() {
    floorPosition = -(frame % floor.getWidth());
    frame += 1;

    if (frame % REFRESH_RATE == 0) {
        sprites[spriteIndex].clear();
        spriteIndex = (spriteIndex + 1 == QTD_SPRITES) ? 0 : spriteIndex + 1;
    }

    // jogo.fillBackground();
    
    console.log(floorPosition);
    floor.setX(floorPosition);
    floor.draw();
    sprites[spriteIndex].setPosition(10, 114).clear().draw();
    requestAnimationFrame(loop)
}

loop();
System.register(["./game"], function (exports_1, context_1) {
    "use strict";
    var GAME, sprites, frame, REFRESH_RATE, QTD_SPRITES, spriteIndex, floor, floorPosition;
    var __moduleName = context_1 && context_1.id;
    function loop() {
        floorPosition = -(frame % floor.getWidth());
        frame += 1;
        if (frame % REFRESH_RATE == 0) {
            sprites[spriteIndex].clear();
            spriteIndex = (spriteIndex + 1 == QTD_SPRITES) ? 0 : spriteIndex + 1;
        }
        console.log(floorPosition);
        floor.setX(floorPosition);
        floor.draw();
        sprites[spriteIndex].setPosition(10, 114).clear().draw();
        requestAnimationFrame(loop);
    }
    return {
        setters: [
            function (GAME_1) {
                GAME = GAME_1;
            }
        ],
        execute: function () {
            sprites = [
                GAME.DINO_LEFT,
                GAME.DINO_RIGHT,
            ];
            frame = 0;
            REFRESH_RATE = 5;
            QTD_SPRITES = sprites.length;
            spriteIndex = 0;
            floor = GAME.FLOOR;
            floor.setPosition(100, 200);
            floorPosition = 0;
            loop();
        }
    };
});
//# sourceMappingURL=index.js.map
System.register(["./teste", "./characters"], function (exports_1, context_1) {
    "use strict";
    var teste_1, characters_1, frame, Jogo, dino, jogo, sprite, format;
    var __moduleName = context_1 && context_1.id;
    function checkFormat(format) {
        if (format == characters_1.DINOSAUR.RIGHT_LEG_UP) {
            return characters_1.DINOSAUR.LEFT_LEG_UP;
        }
        return characters_1.DINOSAUR.RIGHT_LEG_UP;
    }
    function loop() {
        dino.clear();
        frame += 1;
        jogo.draw().drawImage(sprite, 2, 2, 74, 74, 10, 10, 74, 74);
        if (frame % 10 == 0) {
            format = checkFormat(format);
        }
        dino.draw().drawImage(sprite, format, 2, characters_1.DINOSAUR.DEFAULT_HEIGHT, characters_1.DINOSAUR.DEFAULT_WIDTH, 10, 200, characters_1.DINOSAUR.DEFAULT_HEIGHT, characters_1.DINOSAUR.DEFAULT_WIDTH);
        requestAnimationFrame(loop);
    }
    return {
        setters: [
            function (teste_1_1) {
                teste_1 = teste_1_1;
            },
            function (characters_1_1) {
                characters_1 = characters_1_1;
            }
        ],
        execute: function () {
            frame = 0;
            Jogo = class Jogo extends teste_1.Game {
            };
            dino = new Jogo();
            jogo = new Jogo();
            console.log('test');
            sprite = new Image();
            sprite.src = './dino_chrome.png';
            format = characters_1.DINOSAUR.LEFT_LEG_UP;
            loop();
        }
    };
});

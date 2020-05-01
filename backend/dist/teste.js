System.register([], function (exports_1, context_1) {
    "use strict";
    var Game;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Game = class Game {
                constructor(element = document.getElementById('canvas-game')) {
                    this.element = element;
                    this.canvas = this.element.getContext('2d');
                    this.canvas.fillStyle = "blue";
                    this.canvas.fillRect(0, 0, this.element.width, this.element.height);
                }
                draw() {
                    return this.canvas;
                }
                getCanvasHeight() {
                    return this.element.height;
                }
                getCanvasWidth() {
                    return this.element.width;
                }
                clear() {
                    this.canvas.clearRect(0, 0, this.element.width, this.element.height);
                }
            };
            exports_1("Game", Game);
        }
    };
});
//# sourceMappingURL=teste.js.map
System.register([], function (exports_1, context_1) {
    "use strict";
    var Game, SPRITE_PATH, CANVAS_ID, SPRITE, StateSprite, ICON_TRY_AGAIN, MSG_GAME_OVER, MSG_HIGH_SCORE, NUM_0, NUM_1, NUM_2, NUM_3, NUM_4, NUM_5, NUM_6, NUM_7, NUM_8, NUM_9, CLOUD, CACTUS_1, CACTUS_2, CACTUS_3, CACTUS_4, CACTUS_5, CACTUS_6, CACTUS_7, CACTUS_8, CACTUS_9, CACTUS_BIG, FLOOR, PTERODACTYL_DOWN, PTERODACTYL_UP, DINO_INITIAL, DINO_NORMAL, DINO_CLOSED_EYE, DINO_LEFT, DINO_RIGHT, DINO_BIG_EYE, DINO_NO_BORDER, DINO_DOWN_LEFT, DINO_DOWN_RIGHT;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Game = class Game {
                constructor(element = document.getElementById(CANVAS_ID)) {
                    this.element = element;
                    this.canvas = this.element.getContext('2d');
                    this.canvas.fillStyle = "blue";
                    this.canvas.fillRect(0, 0, this.element.width, this.element.height);
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
                fillBackground() {
                    this.canvas.fillStyle = "blue";
                    this.canvas.fillRect(0, 0, this.element.width, this.element.height);
                }
            };
            exports_1("Game", Game);
            exports_1("SPRITE_PATH", SPRITE_PATH = './dino_chrome.png');
            exports_1("CANVAS_ID", CANVAS_ID = 'canvas-game');
            exports_1("SPRITE", SPRITE = new Image());
            SPRITE.src = SPRITE_PATH;
            StateSprite = class StateSprite {
                constructor(_sX, _sY, _sWidth, _sHeight) {
                    this._spriteSource = SPRITE;
                    this._element = document.getElementById(CANVAS_ID);
                    this._sX = _sX;
                    this._sY = _sY;
                    this._sWidth = _sWidth;
                    this._sHeight = _sHeight;
                    this.canvas = this._element.getContext('2d');
                }
                getHeight() {
                    return this._sHeight;
                }
                getWidth() {
                    return this._sWidth;
                }
                draw() {
                    this.clear();
                    this.canvas.drawImage(this._spriteSource, this._sX, this._sY, this._sWidth, this._sHeight, this._dX, this._dY, this._sWidth, this._sHeight);
                }
                clear() {
                    this.canvas.clearRect(this._dX, this._dY, this._sWidth, this._sHeight);
                    return this;
                }
                setX(x = 0) {
                    this.clear();
                    this._dX = x;
                }
                setY(y = 0) {
                    this.clear();
                    this._dY = y;
                }
                setPosition(dX, dY) {
                    this._dX = dX;
                    this._dY = dY;
                    return this;
                }
            };
            exports_1("StateSprite", StateSprite);
            exports_1("ICON_TRY_AGAIN", ICON_TRY_AGAIN = new StateSprite(2, 2, 72, 64));
            exports_1("MSG_GAME_OVER", MSG_GAME_OVER = new StateSprite(954, 29, 381, 21));
            exports_1("MSG_HIGH_SCORE", MSG_HIGH_SCORE = new StateSprite(1154, 2, 38, 21));
            exports_1("NUM_0", NUM_0 = new StateSprite(954, 2, 18, 21));
            exports_1("NUM_1", NUM_1 = new StateSprite(976, 2, 16, 21));
            exports_1("NUM_2", NUM_2 = new StateSprite(994, 2, 18, 21));
            exports_1("NUM_3", NUM_3 = new StateSprite(1014, 2, 18, 21));
            exports_1("NUM_4", NUM_4 = new StateSprite(1034, 2, 18, 21));
            exports_1("NUM_5", NUM_5 = new StateSprite(1054, 2, 18, 21));
            exports_1("NUM_6", NUM_6 = new StateSprite(1074, 2, 18, 21));
            exports_1("NUM_7", NUM_7 = new StateSprite(1094, 2, 18, 21));
            exports_1("NUM_8", NUM_8 = new StateSprite(1114, 2, 18, 21));
            exports_1("NUM_9", NUM_9 = new StateSprite(1134, 2, 18, 21));
            exports_1("CLOUD", CLOUD = new StateSprite(166, 2, 92, 27));
            exports_1("CACTUS_1", CACTUS_1 = new StateSprite(446, 2, 34, 70));
            exports_1("CACTUS_2", CACTUS_2 = new StateSprite(480, 2, 34, 70));
            exports_1("CACTUS_3", CACTUS_3 = new StateSprite(514, 2, 34, 70));
            exports_1("CACTUS_4", CACTUS_4 = new StateSprite(548, 2, 34, 70));
            exports_1("CACTUS_5", CACTUS_5 = new StateSprite(582, 2, 34, 70));
            exports_1("CACTUS_6", CACTUS_6 = new StateSprite(616, 2, 34, 70));
            exports_1("CACTUS_7", CACTUS_7 = new StateSprite(652, 2, 50, 100));
            exports_1("CACTUS_8", CACTUS_8 = new StateSprite(702, 2, 48, 100));
            exports_1("CACTUS_9", CACTUS_9 = new StateSprite(752, 2, 50, 100));
            exports_1("CACTUS_BIG", CACTUS_BIG = new StateSprite(802, 2, 150, 100));
            exports_1("FLOOR", FLOOR = new StateSprite(2, 104, 2398, 24));
            exports_1("PTERODACTYL_DOWN", PTERODACTYL_DOWN = new StateSprite(260, 14, 92, 68));
            exports_1("PTERODACTYL_UP", PTERODACTYL_UP = new StateSprite(352, 2, 92, 60));
            exports_1("DINO_INITIAL", DINO_INITIAL = new StateSprite(75, 5, 92, 92));
            exports_1("DINO_NORMAL", DINO_NORMAL = new StateSprite(1338, 2, 88, 94));
            exports_1("DINO_CLOSED_EYE", DINO_CLOSED_EYE = new StateSprite(1425, 2, 88, 94));
            exports_1("DINO_LEFT", DINO_LEFT = new StateSprite(1514, 2, 88, 94));
            exports_1("DINO_RIGHT", DINO_RIGHT = new StateSprite(1602, 2, 88, 94));
            exports_1("DINO_BIG_EYE", DINO_BIG_EYE = new StateSprite(1690, 2, 88, 94));
            exports_1("DINO_NO_BORDER", DINO_NO_BORDER = new StateSprite(1777, 2, 88, 94));
            exports_1("DINO_DOWN_LEFT", DINO_DOWN_LEFT = new StateSprite(1866, 36, 119, 60));
            exports_1("DINO_DOWN_RIGHT", DINO_DOWN_RIGHT = new StateSprite(1983, 36, 119, 60));
        }
    };
});
//# sourceMappingURL=game.js.map
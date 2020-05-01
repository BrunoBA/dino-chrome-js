export class Game {
    public canvas: CanvasRenderingContext2D;

    constructor(
        public element = <HTMLCanvasElement>document.getElementById(CANVAS_ID),
    ) {
        this.canvas = this.element.getContext('2d');
        this.canvas.fillStyle = "white";
        this.canvas.globalAlpha = 0.5;
        this.canvas.fillRect(0, 0, this.element.width, this.element.height);
    }

    getCanvasHeight(): number {
        return this.element.height;
    }

    getCanvasWidth(): number {
        return this.element.width
    }

    clear(): void {
        this.canvas.clearRect(0, 0, this.element.width, this.element.height);
    }

    fillBackground(): void {
        this.canvas.fillStyle = "blue";
        this.canvas.fillRect(0, 0, this.element.width, this.element.height);
    }
}

export const SPRITE_PATH = './transparent_file.png'
export const CANVAS_ID = 'canvas-game'
export const SPRITE: CanvasImageSource = new Image();
SPRITE.src = SPRITE_PATH;

export interface Drawable {
    draw(): void;
    clear(): void;
    getHeight(): number;
    getWidth(): number;
    setPosition(dX: number, dY: number): Drawable;
}

export class StateSprite implements Drawable {
    private _sX: number;
    private _sY: number;
    private _sHeight: number;
    private _sWidth: number;
    private _dX: number;
    private _dY: number;
    private _spriteSource: CanvasImageSource = SPRITE;
    private _element = <HTMLCanvasElement>document.getElementById(CANVAS_ID);
    public canvas: CanvasRenderingContext2D;

    constructor(
        _sX: number,
        _sY: number,
        _sWidth: number,
        _sHeight: number
    ) {
        this._sX = _sX;
        this._sY = _sY;
        this._sWidth = _sWidth;
        this._sHeight = _sHeight;
        this.canvas = this._element.getContext('2d');
    }
    getHeight(): number {
        return this._sHeight;
    }
    getWidth(): number {
        return this._sWidth;
    }

    draw(): void {
        this.clear();
        this.canvas.drawImage(
            this._spriteSource,
            this._sX,
            this._sY,
            this._sWidth,
            this._sHeight,
            this._dX,
            this._dY,
            this._sWidth,
            this._sHeight
        );
    }

    clear(): StateSprite {
        this.canvas.clearRect(this._dX,
            this._dY,
            this._sWidth,
            this._sHeight
        );

        return this;
    }

    setX(x = 0): void {
        this.clear();
        this._dX = x;
    }
    
    setY(y = 0): void {
        this.clear();
        this._dY = y;
    }

    setPosition(dX: number, dY: number): StateSprite {
        this._dX = dX;
        this._dY = dY;

        return this;
    }
}

/**
 * Icons and Messages
 */
export const ICON_TRY_AGAIN: StateSprite = new StateSprite(2, 2, 72, 64);
export const MSG_GAME_OVER: StateSprite = new StateSprite(954, 29, 381, 21);
export const MSG_HIGH_SCORE: StateSprite = new StateSprite(1154, 2, 38, 21);

export const NUM_0: StateSprite = new StateSprite(954, 2, 18, 21);
export const NUM_1: StateSprite = new StateSprite(976, 2, 16, 21);
export const NUM_2: StateSprite = new StateSprite(994, 2, 18, 21);
export const NUM_3: StateSprite = new StateSprite(1014, 2, 18, 21);
export const NUM_4: StateSprite = new StateSprite(1034, 2, 18, 21);
export const NUM_5: StateSprite = new StateSprite(1054, 2, 18, 21);
export const NUM_6: StateSprite = new StateSprite(1074, 2, 18, 21);
export const NUM_7: StateSprite = new StateSprite(1094, 2, 18, 21);
export const NUM_8: StateSprite = new StateSprite(1114, 2, 18, 21);
export const NUM_9: StateSprite = new StateSprite(1134, 2, 18, 21);


/**
 * Elements
 */
export const CLOUD: StateSprite = new StateSprite(166, 2, 92, 27);
export const CACTUS_1: StateSprite = new StateSprite(446, 2, 34, 70);
export const CACTUS_2: StateSprite = new StateSprite(480, 2, 34, 70);
export const CACTUS_3: StateSprite = new StateSprite(514, 2, 34, 70);
export const CACTUS_4: StateSprite = new StateSprite(548, 2, 34, 70);
export const CACTUS_5: StateSprite = new StateSprite(582, 2, 34, 70);
export const CACTUS_6: StateSprite = new StateSprite(616, 2, 34, 70);
export const CACTUS_7: StateSprite = new StateSprite(652, 2, 50, 100);
export const CACTUS_8: StateSprite = new StateSprite(702, 2, 48, 100);
export const CACTUS_9: StateSprite = new StateSprite(752, 2, 50, 100);
export const CACTUS_BIG: StateSprite = new StateSprite(802, 2, 150, 100);
export const FLOOR: StateSprite = new StateSprite(2, 104, 2398, 24);

/**
 * Pterodactyl
 */
export const PTERODACTYL_DOWN: StateSprite = new StateSprite(260, 14, 92, 68);
export const PTERODACTYL_UP: StateSprite = new StateSprite(352, 2, 92, 60);

/**
 * Dino
 */
export const DINO_INITIAL: StateSprite = new StateSprite(75, 5, 92, 92);
export const DINO_NORMAL: StateSprite = new StateSprite(1338, 2, 88, 94);
export const DINO_CLOSED_EYE: StateSprite = new StateSprite(1425, 2, 88, 94);
export const DINO_LEFT: StateSprite = new StateSprite(1514, 2, 88, 94);
export const DINO_RIGHT: StateSprite = new StateSprite(1602, 2, 88, 94);
export const DINO_BIG_EYE: StateSprite = new StateSprite(1690, 2, 88, 94);
export const DINO_NO_BORDER: StateSprite = new StateSprite(1777, 2, 88, 94);
export const DINO_DOWN_LEFT: StateSprite = new StateSprite(1866, 36, 119, 60);
export const DINO_DOWN_RIGHT: StateSprite = new StateSprite(1983, 36, 119, 60);

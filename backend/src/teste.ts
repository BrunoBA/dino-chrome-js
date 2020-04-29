export abstract class Game {
    public canvas: CanvasRenderingContext2D;

    constructor(
        public element = <HTMLCanvasElement>document.getElementById('myCanvas'),
    ) {
        this.canvas = this.element.getContext('2d');
        this.canvas.fillStyle = "blue";
        this.canvas.fillRect(0, 0, this.element.width, this.element.height);

    }

    draw(): CanvasRenderingContext2D {
        return this.canvas;
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
}

// let sprite = new Image();
// sprite.src = './dino_chrome.png';

// class Dino extends Draw { }
// let greeter = new Dino("world");
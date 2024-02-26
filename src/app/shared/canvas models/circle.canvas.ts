
const colors: string[] = ['#85FFBD'];

function getDistance(x1: number, y1: number, x2: number, y2: number) {
    const xDistance = x2 - x1;
    const yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function drawLine(context: any, x1: number, y1: number, x2: number, y2: number, color: string) {
    if (context !== null) {
        context.beginPath();
        context.lineWidth = '1'
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = color;
        context.stroke();
        context.closePath();
    }
}

function drawRandomCurve(context: any, canvas: any,x1: number, y1: number, x2: number, y2: number, color: string) {
    if (context !== null) {
        // Đặt màu cho đường vẽ
        context.strokeStyle = color; // Đen

        // Bắt đầu vẽ đường cong
        context.beginPath();

        // Đặt điểm bắt đầu
        context.moveTo(x1, y1);

        // Điểm kiểm soát ngẫu nhiên ở giữa
        var controlX = Math.random() * canvas.nativeElement.width;
        var controlY = Math.random() * canvas.nativeElement.height;

        // Điểm kết thúc
        context.quadraticCurveTo(controlX, controlY, x2, y2);

        // Kết thúc vẽ đường cong
        context.stroke();
    }
}

export class Circle {
    x: number;
    y: number;
    radius: number;
    fillColor: string;
    dx: number;
    dy: number;

    constructor(x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.fillColor = colors[Math.floor(Math.random() * colors.length)];

        this.dx = Math.random() - 0.5;
        this.dy = Math.random() - 0.5;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.closePath();
    }

    update(ctx: any, mouse: any): void {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        // if (getDistance(this.x, this.y, mouse.x, mouse.y) <= 300) {
        //     drawLine(ctx, this.x, this.y, mouse.x, mouse.y, this.fillColor);
        //     this.draw(ctx);
        // } else {
        //     this.draw(ctx);
        // }

        this.draw(ctx);
    }
}

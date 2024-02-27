import { Component, ElementRef, ViewChild } from '@angular/core';
import { Circle } from '../../shared/canvas models/circle.canvas';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	// its important myCanvas matches the variable name in the template
	@ViewChild('myCanvas') canvas!: ElementRef<HTMLCanvasElement>;

	context!: CanvasRenderingContext2D | null;

	circles: Circle[] = [];
	length = 100;
	width = innerWidth - 16;
	height = innerHeight;
	mouse: any = {
		x: undefined,
		y: undefined,
	};

	ngOnInit() {
		for (let i = 0; i < this.length; i++) {
			const radius = 1;
			let x = this.randomIntFromRange(radius, this.width);
			let y = this.randomIntFromRange(radius, this.height);
			let check = true;
			while (check === true) {
				check = false;
				for (let j = 0; j < this.circles.length; j++) {
					if (
						this.getDistance(this.circles[j].x, this.circles[j].y, x, y) >
						this.circles[j].radius + radius
					) {
						continue;
					}

					x = this.randomIntFromRange(radius, this.width);
					y = this.randomIntFromRange(radius, this.height);
					check = true;
				}
			}

			let c1 = new Circle(x, y, radius);
			this.circles.push(c1);
		}
	}

	ngAfterViewInit(): void {
		// this.canvas.nativeElement.width = this.width;
		// this.canvas.nativeElement.height = 210;

		this.canvas.nativeElement.width = this.canvas.nativeElement.offsetWidth;
		this.canvas.nativeElement.height = this.canvas.nativeElement.offsetHeight;


		this.context = this.canvas.nativeElement.getContext('2d');
		this.mouse.x = this.width / 2;
		this.mouse.y = this.height / 2;

		window.addEventListener('resize', (e: any) => {
			// this.canvas.nativeElement.width = e.currentTarget.innerWidth - 16;
			// this.canvas.nativeElement.height = e.currentTarget.innerHeight - 15;
		});

		// window.addEventListener('mousemove', e => {
		// 	this.mouse.x = e.x;
		// 	this.mouse.y = e.y;
		// });

		this.animate();
	}

	randomIntFromRange(min: number, max: number) {
		// Sử dụng Math.floor để làm tròn xuống và chuyển thành số nguyên
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	getDistance(x1: number, y1: number, x2: number, y2: number) {
		const xDistance = x2 - x1;
		const yDistance = y2 - y1;
		return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
	}

	animate() {
		requestAnimationFrame(() => this.animate());
		if (this.context !== null) {
			this.context.fillStyle = 'rgba(0,0,0,0.1)';
			// this.context.clearRect(0, 0, this.width, this.height);

			this.context.fillRect(
				0,
				0,
				this.canvas.nativeElement.width,
				this.canvas.nativeElement.height
			);

			for (let i = 0; i < this.length; i++) {
				this.circles[i].update(this.context, this.mouse);
			}
		}
	}
}

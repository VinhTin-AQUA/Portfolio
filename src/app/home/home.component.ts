import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Circle } from '../shared/canvas models/circle.canvas';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
	path: string = '/assets';
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

	projects: any[] = [];

	ngOnInit() {
		this.initCircles();
		this.projects = [
			{
				name: 'Booking travel',
				type: 'Asp Net Core MVC',
				description: '',
				link: 'https://github.com/VinhTin-AQUA/Booking_Du_lich_HocKy5',
				image: this.path + '/project-images/booking.png',
			},
			{
				name: 'Reminder App',
				type: 'WPF',
				description: '',
				link: 'https://github.com/VinhTin-AQUA/Reminder-App',
				image: this.path + '/project-images/reminder-app.png',
			},
			{
				name: 'UTC2 Student Desktop',
				type: 'WPF',
				description: '',
				link: 'https://github.com/VinhTin-AQUA/UTC2-Student-Desktop',
				image: this.path + '/project-images/student-desktop.png',
			},
			{
				name: 'Chat App',
				type: 'Asp Net API',
				description: '',
				link: 'https://github.com/VinhTin-AQUA/Chat-App',
				image: this.path + '/project-images/chat-app.png',
			},
		];
	}

	ngAfterViewInit(): void {
		this.canvas.nativeElement.width = this.width;
		this.canvas.nativeElement.height = this.height;
		this.context = this.canvas.nativeElement.getContext('2d');
		this.mouse.x = this.width / 2;
		this.mouse.y = this.height / 2;

		window.addEventListener('resize', (e: any) => {
			this.canvas.nativeElement.width = e.currentTarget.innerWidth - 16;
			this.canvas.nativeElement.height = e.currentTarget.innerHeight - 16;

			if (this.context !== null) {
				this.context.fillStyle = 'rgba(0,0,0,0.1)';
			}

			if (e.currentTarget.innerWidth < 768) {
				this.length = 100;
			} else if (e.currentTarget.innerWidth < 1280) {
				this.length = 300;
			} else {
				this.length = 500;
			}

			this.initCircles();
		});

		// window.addEventListener('mousemove', e => {
		// 	this.mouse.x = e.x;
		// 	this.mouse.y = e.y;
		// });

		this.animate();
	}

	private initCircles() {
		this.circles = [];
		for (let i = 0; i < this.length; i++) {
			const radius = 1;
			let x = this.randomIntFromRange(radius, innerWidth);
			let y = this.randomIntFromRange(radius, innerHeight);
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

					x = this.randomIntFromRange(radius, innerWidth);
					y = this.randomIntFromRange(radius, innerHeight);
					check = true;
				}
			}
			let c1 = new Circle(x, y, radius);
			this.circles.push(c1);
		}
	}

	private randomIntFromRange(min: number, max: number) {
		// Sử dụng Math.floor để làm tròn xuống và chuyển thành số nguyên
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	private getDistance(x1: number, y1: number, x2: number, y2: number) {
		const xDistance = x2 - x1;
		const yDistance = y2 - y1;
		return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
	}

	private animate() {
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

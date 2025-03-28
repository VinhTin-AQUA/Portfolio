import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

class Particle {
	x: number;
	y: number;
	radius: number;
	dx: number;
	dy: number;
	alpha: number;
	fading: boolean;

	constructor(
		private canvas: HTMLCanvasElement,
		x?: number,
		y?: number,
		fading: boolean = false
	) {
		this.x = x ?? Math.random() * canvas.width;
		this.y = y ?? Math.random() * canvas.height;
		this.radius = Math.random() * 3 + 1;
		this.dx = (Math.random() - 0.5) * 2;
		this.dy = (Math.random() - 0.5) * 2;
		this.alpha = fading ? 1 : Math.random() * 0.5 + 0.5; // Hạt từ chuột sẽ sáng hơn
		this.fading = fading;
	}

	update(ctx: CanvasRenderingContext2D | null) {
		this.x += this.dx;
		this.y += this.dy;

		if (this.x - this.radius < 0 || this.x + this.radius > this.canvas.width) {
			this.dx = -this.dx;
		}
		if (this.y - this.radius < 0 || this.y + this.radius > this.canvas.height) {
			this.dy = -this.dy;
		}

		// Giảm độ mờ dần nếu là hạt xuất hiện từ chuột
		if (this.fading) {
			this.alpha -= 0.02;
		}

		this.draw(ctx);
	}

	draw(ctx: CanvasRenderingContext2D | null) {
        if(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

            ctx.shadowBlur = 20; // Độ mờ của ánh sáng
            ctx.shadowColor = `rgba(0, 245, 24, ${this.alpha})`; // Màu phát sáng
            ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.fill();
            ctx.closePath();

            // Reset lại shadow để không ảnh hưởng đến các phần tử khác
            ctx.shadowBlur = 0;
        }
	}
}

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, HeaderComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	private canvas!: HTMLCanvasElement;
	private ctx!: CanvasRenderingContext2D | null;
	private particles: Particle[] = [];

	constructor(private elementRef: ElementRef) {}

	ngOnInit(): void {
		this.setupCanvas();
		this.initParticles();
		this.animate();
	}

	private setupCanvas() {
		this.canvas = document.getElementById('background') as HTMLCanvasElement;
		this.ctx = this.canvas.getContext('2d');

		this.resizeCanvas();
	}

	private resizeCanvas() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}

	private initParticles() {
		this.particles = [];
		for (let i = 0; i < 50; i++) {
			this.particles.push(new Particle(this.canvas));
		}
	}

	private animate = () => {
		if (!this.ctx) return;

		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.particles.forEach((particle, index) => {
			particle.update(this.ctx);

			// Xóa những hạt đã mờ đi hoàn toàn
			if (particle.alpha <= 0) {
				this.particles.splice(index, 1);
			}
		});

		requestAnimationFrame(this.animate);
	};

	@HostListener('window:resize')
	onResize() {
		this.resizeCanvas();
		this.initParticles();
	}

	@HostListener('mousemove', ['$event'])
	onMouseMove(event: MouseEvent) {
		// Sinh ra hạt tại vị trí chuột với số lượng ngẫu nhiên từ 2 - 5
		const numParticles = Math.floor(Math.random() * 3) + 2;
		for (let i = 0; i < numParticles; i++) {
			this.particles.push(new Particle(this.canvas, event.clientX, event.clientY, true));
		}
	}
}

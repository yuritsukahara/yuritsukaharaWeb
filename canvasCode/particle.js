class Particle {
	constructor(
		posX,
		posY,
		width = 5,
		height = 5,
		alpha = 255,
		r = 255,
		g = 255,
		b = 255,
		frameCount
	) {
		this.posX = posX;
		this.posY = posY;
		this.width = width;
		this.height = height;
		this.alpha = alpha;
		this.frameCount = frameCount;
		this.r = r;
		this.g = g;
		this.b = b;
	}

	show() {
		fill(this.r, this.g, this.b, this.alpha);
		star(this.posX, this.posY, this.width, this.height, 2);
	}

	move(x, y) {
		this.posX += x;
		this.posY += y;
	}

	destroy() {
		if (this.age() % 1 == 0) {
			this.alpha -= 1;
			fill(255, 255, 255, this.alpha);
		}
		if (this.alpha <= 0) {
			particles.shift();
		}
	}

	age() {
		return frameCount - this.frameCount;
	}

	attract() {
		if (this.posX <= width / 2) {
			this.posX += 10;
		}
		if (this.posX >= width / 2) {
			this.posX -= 10;
		}
		if (this.posY <= height / 2) {
			this.posY += 10;
		}
		if (this.posY >= height / 2) {
			this.posY -= 10;
		}
	}
}

function star(x, y, radius1, radius2, npoints) {
	let angle = (Math.PI * 2) / npoints;
	let halfAngle = angle / 2;
	beginShape();
	for (let a = 0; a < Math.PI * 2; a += angle) {
		let sx = x + cos(a) * radius2;
		let sy = y + sin(a) * radius2;
		vertex(sx, sy);
		sx = x + cos(a + halfAngle) * radius1;
		sy = y + sin(a + halfAngle) * radius1;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}

class TextParticle {
	constructor(
		key,
		posX,
		posY,
		size = 20,
		alpha = 255,
		r = 255,
		g = 255,
		b = 255,
		frameCount
	) {
		this.key = key;
		this.posX = posX;
		this.posY = posY;
		this.size = size;
		this.alpha = alpha;
		this.frameCount = frameCount;
		this.r = r;
		this.g = g;
		this.b = b;
	}

	show() {
		textoConvertido = keyboardMap[this.key];
		textSize(textoConvertido.toString());
		fill(this.r, this.g, this.b, this.alpha);
		text(this.key, this.posX, this.posY);
	}

	move(x, y) {
		this.posX += x;
		this.posY += y;
	}

	destroy() {
		if (this.age() % 1 == 0) {
			this.alpha -= 1;
		}

		if (this.alpha <= 0) {
			textParticles.shift();
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

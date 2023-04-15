class Singularity {
	constructor(arcoS = 1) {
		this.arcoS = arcoS;
	}
	show() {
		let translatePosX = width / 2;
		let translatePosY = height / 2;

		push();

		translate(translatePosX, translatePosY);
		anel();
		pop();

		fill(random(255), random(255), random(255));
		ellipse(translatePosX, translatePosY, 100);

		fill(0);
		ellipse(translatePosX, translatePosY, 95);

		push();
		translate(translatePosX, translatePosY);
		rotate(frameCount);
		scale(this.arcoS);
		arco(110, 0, 10, 2);
		arco(90, 0, 10, 2);
		arco(120, 0, 2, 2);
		pop();
	}
}

class ParticleRotatingCircle extends Particle {
	constructor(posX, posY, width = 5, height = 5, alpha = 255, frameCount) {
		this.posX = posX;
		this.posY = posY;
		this.width = width;
		this.height = height;
		this.alpha = alpha;
		this.frameCount = frameCount;
	}
}

function arco(size, start, end, weight) {
	noFill();
	strokeWeight(weight);
	stroke(random(255), random(255), random(255));
	arc(0, 0, size, size, start, end);
}

function anel() {
	let rotateValue = 0;

	rotateValue += (PI / 1000) * frameCount;

	noFill();
	strokeWeight(2);
	stroke(random(255), random(255), random(255));
	rotate(rotateValue);
	ellipse(0, 0, 280, 2);
}

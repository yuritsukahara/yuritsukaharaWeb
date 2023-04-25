let colors = [];
let moveX = 0;
let circlesAngles = [1 / 2, 1 / 6, 1 / 3, 1 / 2, 7 / 4];
let randomConst = [];
let speed = 3;
let sizeBall;
let linearLenght;

function setup() {
	// pixelDensity(1);
	frameRate(30);
	let renderer = createCanvas(windowWidth, windowHeight);
	renderer.parent('canvasContainer');

	colorMode(HSB);
	for (let i = 0; i < 360; i++) {
		colors[i] = color(i, 100, 100);
	}

	for (let i = 0; i <= circlesAngles.length; i++) {
		randomConst[i] = random(0, i * PI);
	}

	sizeBall = width;
	linearLenght = width / 2.53;

	if (width < 500) {
		speed = 5;
		sizeBall = width * 3;
		linearLenght = windowHeight;
	}
}

function draw() {
	background('rgba(0,0,0, 0.1)');
	moveX += 0.01;

	for (let i = 1; i <= circlesAngles.length; i++) {
		ellipseC(
			0,
			linearLenght * cos(speed * moveX + (PI / 2) * randomConst[i]),
			PI + randomConst[i],
			PI * circlesAngles[i]
		);
	}

	if (speed * moveX >= PI * 2) {
		moveX = 0;
		moveY = 0;
	}

	// console.log(moveX, PI);
	fill('#000');
	rect(0, 0, 100, 50);
	fill('#fff');
	// text('teste2' + width.toFixed(2), 30, 30);
}

function ellipseC(x, y, rotation, rotation2) {
	push();
	translate(width / 2, height / 2);
	rotate(rotation2);
	translate(x, y);
	beginShape();
	rotate(rotation);
	scale(0.1);
	for (let i = 0; i < 360; i++) {
		noFill();
		stroke(colors[i]);
		strokeWeight(10);
		let angle = map(i, 0, 360, 0, TWO_PI);
		arc(0, 0, sizeBall, sizeBall, angle, angle + TWO_PI / 180);
	}
	endShape();
	pop();
}

function mousePressed() {
	moveX = random(0, PI * 2);
}

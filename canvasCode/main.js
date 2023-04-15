let particles = [];
let textParticles = [];
let hiddenInput;
let monoSynth;
let arcoTamanho = 1;

function setup() {
	hiddenInput = createInput('');
	monoSynth = new p5.MonoSynth();
}

function draw() {
	let renderer = createCanvas(windowWidth * 0.9, windowHeight);
	renderer.parent('canvasContainer');
	background(0, 0, 0);
	noStroke();
	let singularity = new Singularity(arcoTamanho);

	if (frameCount % 25 == 0) {
		particles.push(
			new Particle(
				random(0, width),
				random(0, height),
				...[, ,],
				random(255),
				random(50, 255),
				random(50, 255),
				255,
				frameCount
			)
		);
	}

	for (particle of particles) {
		particle.show();
		particle.move(random(-1, 1) / 3, random(-1, 1) / 3);
		if (particle.age() >= 100) {
			particle.destroy();
			particle.attract();
		}
	}

	for (textParticle of textParticles) {
		textParticle.show();
		textParticle.move(random(-1, 1) / 3, random(-1, 1) / 3);
		if (textParticle.age() >= 200) {
			textParticle.attract();
			textParticle.destroy();
		}
	}

	try {
		// console.log(particles[1].age());
		// console.log(particles[1].alpha);
	} catch (e) {}

	singularity.show();
}

function mousePressed() {
	particles.push(
		new Particle(
			mouseX,
			mouseY,
			...[, ,],
			random(0, 255),
			random(0, 255),
			random(0, 255),
			frameCount
		)
	);
}

function keyPressed() {
	console.log(keyCode);
	textParticles.push(
		new TextParticle(
			keyCode,
			random(0, windowWidth),
			random(0, windowHeight),
			random(20, 50),
			255,
			random(0, 255),
			random(0, 255),
			random(0, 255),
			frameCount
		)
	);
}

// function touchStarted() {
// 	hiddenInput.elt.focus();
// }

function playSynth() {
	userStartAudio();

	let note = random(['C3', 'F3']);
	// note velocity (volume, from 0 to 1)
	let velocity = random();
	// time from now (in seconds)
	let time = 0;
	// note duration (in seconds)
	let dur = 1 / 2;
	monoSynth.amp(0.1);
	monoSynth.play(note, velocity, time, dur);
}

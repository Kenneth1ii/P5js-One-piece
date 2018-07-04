let bubbles = [];

let luffy;
let zoro;

function preload () {
	luffy = loadImage("image/luffy3.jpg");
	zoro = loadImage("image/zoro.jpg");
}

function setup() {
	createCanvas(600, 400);
	for (i=0; i< 5; i++) {
	let x = random(width);
	let y = random(height);
	
	let b = new Bubble(x,y);
	bubbles.push(b);
	}

}

// function mousePressed() {
// 	for (let bubble of bubbles) {
// 		bubble.clicked(mouseX, mouseY);
// 	}
// }

function mousePressed() {
	for (i=bubbles.length -1 ; i >= 0 ; i--) {
		bubbles[i].contains();
	}
}

// IMPORTANT Keynote: If You are manipulating an array and while illerating over it. Probably becareful.

function draw() {
	background(0);
				// for every element of in the Array. Almost like for each.
	for(let bubble of bubbles) {
		bubble.move();
		bubble.display();
		}
}

class Bubble {
	constructor(x,y,r = 150) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.img = luffy;
	}
	move () {
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
	}
	display() {
		image(this.img, this.x, this.y, this.r, this.r);
	}

	contains() {
		if(mouseX > this.x && mouseX < this.x + this.r && mouseY < this.y+this.r && mouseY > this.y-this.r) {
			this.img = zoro;
		}
	}
}


// function display() {
// 	stroke(255);
// 	strokeWeight(4);
// 	noFill();
// 	ellipse(bubble.x, bubble.y, 24,24);
// }

// function move() {
// 	bubble.x = bubble.x + random(-5,5);
// 	bubble.y = bubble.y + random(-5,5);
// }



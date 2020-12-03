var player;
var gunshoot, boss;

function preload() {
  gunshoot = loadSound('gunshoot.mp3');
  boss = loadSound('boss.m4a');
}

function setup() {
  // angleMode(DEGREES);
  rectMode(CENTER);
  createCanvas(document.body.clientWidth, 541);
  player = new Player(width / 2, height / 2);
  // boss.loop();
}

function draw() {
  background(0);
  player.widthGun();
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.rotate = 0;

    this.last_shoot = 0;
    this.delay_shoot = 5;
  }

  turn_around() {
    let v = createVector(mouseX - this.x, mouseY - this.y);
    this.rotate = v.heading();
  }

  move() {
    if(keyIsDown(87)) {
      this.y -= this.speed;
    }
    if(keyIsDown(83)) {
      this.y += this.speed;
    }
    if(keyIsDown(65)) {
      this.x -= this.speed;
    }
    if(keyIsDown(68)) {
      this.x += this.speed;
    }
  }

  widthGun() {
    this.turn_around()
    this.move();

    push();
    translate(this.x, this.y);
    rotate(this.rotate);

    //gun
    noStroke();
    fill('#455A64');
    rect(30, 0, 60, 8);
    beginShape();
    vertex(60, 4);
    quadraticVertex(70, 0, 60, -4);
    endShape(CLOSE);

    // body
    stroke('#a5a576');
    strokeWeight(5);
    fill('#d5d589');
    ellipse(0, 0, 40);

    //hand
    stroke('#F44336');
    strokeWeight(2);
    fill('#E91E63');
    ellipse(22, 2, 10);
    ellipse(45, 6, 10);

    pop();
  }

  withKnife() {

  }
}
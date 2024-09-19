/// <reference path="lib/p5.global.d.ts" />

class Game {
  points = 0;
  lives = 3;
  width = window.innerWidth;
  height = window.innerHeight - 5;
  targetColumns = 8;
  targetRows = 4;
}

class Ball {
  constructor() {
    this.x = game.width / 2;
    this.y = game.height - 100;
    this.vx = 5;
    this.vy = -5;
    this.size = 25;
  }
  draw() {
    stroke("black");
    strokeWeight(4);
    fill("red");
    square(this.x, this.y, this.size);
    this.x += this.vx;
    this.y += this.vy;

    this.bounceOffWalls();
    this.bounceOffPaddle();
    this.bounceOffTargets();
  }

  bounceOffWalls() {
    if (this.x < 0 || this.x + this.size > game.width) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y + this.size > game.height) {
      this.vy = -this.vy;
    }
    if (this.y + this.size > game.height) {
      game.lives--;
      ball = new Ball();
    }
  }

  bounceOffPaddle() {
    if (
      this.x > paddle.x &&
      this.x < paddle.x + paddle.width &&
      this.y + this.size > paddle.y &&
      this.y <= paddle.y + paddle.height
    ) {
      this.vy = -Math.abs(this.vy);
    }
  }

  bounceOffTargets() {
    for (let i = 0; i < targets.length; i++) {
      const target = targets[i];
      if (
        this.x > target.x &&
        this.x < target.x + target.width &&
        this.y + this.size > target.y &&
        this.y < target.y + target.height
      ) {
        this.vy = -this.vy;
        game.points += 3;
        targets.splice(i, 1);
        this.vx *= 1.3;
        this.vy *= 1.3;
      }
    }
  }
}

class Paddle {
  constructor() {
    this.y = game.height - 50;
    this.x = 0;
    this.width = 150;
    this.height = 10;
  }
  draw() {
    fill("white");
    noStroke();
    this.x = mouseX - this.width / 2;
    rect(this.x, this.y, this.width, this.height);
  }
}
class Target {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw() {
    fill("blue");
    stroke(50);
    strokeWeight(1);
    rect(this.x, this.y, this.width, this.height);
  }
}

let game = new Game();
let targets = [];
let ball;
let paddle;

var setup = function () {
  createCanvas(game.width, game.height);
  background(150);
  ball = new Ball();
  paddle = new Paddle();

  // targets
  let targetWidth = game.width / game.targetColumns;
  let targetHeight = 15;
  let targetGap = 15;
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < game.targetColumns; x++) {
      targets.push(
        new Target(
          x * targetWidth,
          y * targetHeight + y * targetGap,
          targetWidth,
          targetHeight
        )
      );
    }
  }
};

var draw = function () {
  background(200);
  ball.draw();
  paddle.draw();
  for (const target of targets) {
    target.draw();
  }
};

///<reference path="lib/p5.global.d.ts" />

class Circle {
  constructor(vx, vy, color) {
    this.x = 250;
    this.y = 250;
    this.vx = vx;
    this.vy = vy;
    this.size = 50;
    this.color = color;
  }
  draw() {
    fill(this.color);
    circle(this.x, this.y, this.size);
    this.x += this.vx;
    this.y += this.vy;
    if (this.x - 50 < 0 || this.x + 50 > 1250) {
      this.vx = -this.vx;
    }
    if (this.y - 50 < 0 || this.y + 50 > 600) {
      this.vy = -this.vy;
    }
  }
}

let circle1;
let circle2;

var setup = function () {
  createCanvas(1250, 600);
  circle1 = new Circle(3, 4, "red");
  circle2 = new Circle(4, 3, "red");
};

var draw = function () {
  background("#ABE32B");
  circle1.draw();
  circle2.draw();
};

///<reference path="lib/p5.global.d.ts" />

var setup = function () {
  createCanvas(1250, 600);
  frameRate(2.5);
};

var draw = function () {
  background(random(0, 255), random(0, 255), random(0, 255));
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(random(0, 50));
  fill(random(0, 255), random(0, 255), random(0, 255));
  square(random(50, 1000), random(50, 500), 60);
};

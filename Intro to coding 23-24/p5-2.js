///<reference path="lib/p5.global.d.ts" />

let shape = {
  x: 0,
  y: 0,
  color1: 0,
  color2: 0,
  color3: 0,
};
var setup = function () {
  createCanvas(1250, 600);
};

var draw = function () {
  background("blue");
  fill(
    (shape.color1 += random(-50, 50)),
    (shape.color2 += random(-50, 50)),
    (shape.color3 += random(-50, 50))
  );
  circle(
    (shape.x += random(-7, 10)),
    (shape.y += random(-7, 10)),
    random(0, 200)
  );
};

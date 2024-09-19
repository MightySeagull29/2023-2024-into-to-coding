let cl = console.log;

let tree = "#";
let christmasTree = function (height) {
  for (let i = 0; i <= height; i++) {
    cl(tree.repeat(i));
  }
  cl("#");
};
for (index = 1; index <= 25; index++) {
  christmasTree(index);
  cl(" ");
}

// let treeSpace = " ";
// let spaceCount = 10;
// let treeCount = 1;
// for (let i = 0; i < spaceCount; i++) {
//   cl(treeSpace.repeat(spaceCount) + tree.repeat(treeCount));
//   spaceCount -= 1;
//   treeCount += 2;
// }
// cl(treeSpace.repeat(treeCount / 2) + "#");

// let fun = function () {
//   cl("Function says hello");
// };

// fun();

// let greet = function (name, timeOfDay) {
//   return "Good " + timeOfDay + ", " + name;
// };

// cl(greet("Ethan", "evening"));
// cl(greet("nobody", "afternoon"));

// let a = [1, 2, 3];
// let b = ["x", "y", "z"];
// let c = [a, b];
// cl(a, b, c);

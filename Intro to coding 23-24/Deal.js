cl = console.log;
let totalPercent = function (loops) {
  let a = 0;

  let montyHall = function (loops) {
    let doors = [0, 1, 2];
    let carDoor = Math.floor(Math.random() * 3);
    let switchDoors = Math.round(Math.random());
    let guess1 = Math.floor(Math.random() * 3);
    let goatDoor = doors.find((v) => v != guess1 && v != carDoor);
    if (switchDoors) {
      return guess1 === carDoor;
    } else {
      let guess2 = doors.find((v) => v != guess1 && v != goatDoor);
      return guess2 === carDoor;
    }
  };

  for (let i = 0; i < loops; i++) {
    if (montyHall(loops)) {
      a++;
      winPercentage = (a / loops) * 100;
    }
  }
};

result = 0;
loops = 20000;
for (let i = 0; i < loops; i++) {
  totalPercent(loops);
  result += winPercentage;
}
result /= loops;
cl(result);

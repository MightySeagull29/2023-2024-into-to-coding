cl = console.log;

for (let i = 1; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    cl("FIZZBUZZ");
  } else if (i % 3 == 0) {
    cl("FIZZ");
  } else if (i % 5 == 0) {
    cl("BUZZ");
  } else {
    cl(i);
  }
}

cl(" ");

i = 1;
while (i < 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    cl("FIZZBUZZ");
  } else if (i % 3 === 0) {
    cl("FIZZ");
  } else if (i % 5 === 0) {
    cl("BUZZ");
  } else {
    cl(i);
  }
  i++;
}

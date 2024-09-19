let cl = console.log;

let a = [];
let i = 0;

while (i <= 100) {
  a.push(Math.round(Math.random() * 100));
  i++;
}

cl(a);

let n = 0;

for (let i = 0; i < a.length; i++) {
  n += a.indexOf(i);
}

cl(n);

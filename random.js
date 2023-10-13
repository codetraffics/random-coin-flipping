let repeats = 10000;
let sum = 0;

for(i = 0; i < repeats; i++) {
    sum += Math.random()
}

let average = sum / repeats;
console.log(average);
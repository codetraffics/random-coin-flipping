let coins = 10;
let heads = 0;
let tails = 0;

for(let i = 0; i < coins; i++) {
    if(Math.random() >= 0.5) {
        heads += 1;
    }
    else {
        tails += 1;
    }
}

console.log(heads, "heads", tails, "tails");
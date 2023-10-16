/* Flip 10 coins multiple times and determine the %  
   of getting exactly 8 heads and 2 tails.
*/

const flip_coin = () => {
    let coins = 10;
    let heads = 0;
    let tails = 0;

    for(let i = 0; i < coins; i++) {
        if(Math.random() < 0.5) {
            heads += 1;
        }
        else {
            tails += 1;
        }
    }

    if(heads == 8) {
        return true;
    }
    else {
        return false;
    }
}

let repeats = 10000;
let counter = 0;

for(let i = 0; i < repeats; i++) {
    let desired_outcome = flip_coin()
    if(desired_outcome) {
        counter += 1;
    }
}

console.log("Getting 8 heads and 2 tails is", (counter / repeats) * 100, "% of the time")
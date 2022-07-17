//fibonacci series 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 

const fib = [];

let temp1 = 0;
let temp2 = 1;

for ( let i = 0; i <= 20; i++ ){
    fib.push(temp1)
    let nextNumber = temp1 + temp2;
    temp1 = temp2;
    temp2 = nextNumber;
}

console.log(fib);


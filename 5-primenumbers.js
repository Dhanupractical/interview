const primeNumber = [];

for ( let i = 1; i <= 20; i++ ){
    let isPrime = true; 

  for ( let j = 2; j < i; j++ ){ // rem
      if( i%j === 0 ){
        isPrime = false;
      }
  }

  if( i>1  && isPrime === true){
    primeNumber.push(i);
  }
}

console.log(primeNumber);
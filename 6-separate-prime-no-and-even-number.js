let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const separatrePrimeAndEven=(arr)=>{
    let prime=[];
    let even=[];
    let odd=[];
    for(let i = 0; i<=arr.length; i++){
        if( i%2 ===0 ){
           even.push(i);
        } else {
            odd.push(i);
        }
        
        let isPrime = true;
        for( let j = 2; j < i; j++){
            if( i % j === 0){
                isPrime = false;
                break;
            }
        }

        if( i > 1 && isPrime){
           prime.push(i);
        }
    }

    return prime;
}
console.log(separatrePrimeAndEven(array))
let number = 92727;
let temp = number 
let sum = 0;
while( temp > 0 ){
   let unitDigit = temp % 10;
   console.log(unitDigit);
   sum += unitDigit ** number.toString().length  //rem toString,  because length property is not there on the number
  
   temp = parseInt( temp /10 )
}
console.log(sum)
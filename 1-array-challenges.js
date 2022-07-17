// 1)- remove duplicates from array
// var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// const newArray = arr.filter( (item, i)=>{
//     console.log(arr.indexOf(item)) 
//    if (arr.indexOf(item) === i){
//        return true;
//    }
// } )

// console.log(newArray)

//useing set method
// const newArray = [ ...new Set(arr) ]
// console.log(newArray)



// 2) - find the first item which is higher than 18

// const ages = [3, 10, 18, 20];
// console.log(ages.findIndex( (a) => a > 18 ))


// 3) - find sum of elements of array
// const numbers = [65, 44, 12, 4];
// for (let i=0; i<=numbers.length-1; i++){
//   sum += numbers[i]
// }
// console.log(sum)



// 4) multiply all the items of array with value
// const ages1 = [32, 33, 16, 40];
// let sampleArray = [];
// ages1.forEach((item)=>sampleArray.push(item*10));
// console.log(sampleArray);



// 5) do square root of every element of the array
// const ages1Mul2 = ages1.map(Math.sqrt)
// console.log(ages1Mul2)




// 6) convert array items into capital letters
// const fruitsNow1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log( fruitsNow1.map( (value)=>value.toUpperCase() ) )





// 7) remove element from array useing for loop
// let fruits123 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let fruitNewArray = [] 
// for ( let i=0; i<fruits123.length; i++ ){
//     if (fruits123[i] !== "Lemon"){
//         fruitNewArray.push(fruits123[i])
//     }
// }
// fruits123 = fruitNewArray
// console.log('removed array', fruits123)


// 8) multiply every element of array useing forEach
// numbersabc = [65, 44, 12, 4];
// numbersabc.forEach((item, index,arr)=>{
//     arr[index]= item*10
// })
// console.log('numbersabcMul',numbersabc)


// 9) useing map
// numbersMap = [65, 44, 12, 4];
// numbersMapNew = numbersMap.map((item, index,arr)=>{
//    return item*10
// })
// console.log('numbersMapMul',numbersMapNew)


// 10) check weather the array contains elements of the other array
// const studentId = [3, 5, 45, 10, 11, 456, 23];
// const passedId = [110,34, 3]
// console.log( studentId.some( item => passedId.includes(item) ) )


// 11) print the first duplicate element in array
// const arr = [1, 2, 3, 5, 6, 3, 2, 8, 7, 5]
// const sortedArray = arr.sort( (a,b)=> a-b );
//  let temp = null;
//  let element;
// for ( let i = 0; i <= sortedArray.length; i++) {
//    if(temp === null){
//       temp = sortedArray[i]
//       continue;
//    }
//    if( temp === sortedArray[i] ){
//     element = sortedArray[i]
//     break
//    }
//    temp = sortedArray[i]
// }
// console.log(element)

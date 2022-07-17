// const arr = [2,4,6,7,4,5,7,5,4];

// const sum = arr.reduce((a,b)=>a+b, 0 );
// console.log('sum', sum)

// const mul =arr.reduce((a,b)=>a*b,1);
// console.log('mul', mul)

//reversing the array
// const reversedArray = arr.reverse();
// console.log('reversedArray', reversedArray);

//sorting an array
// const fruits = ["Banana", "Orange", "Apple", "Man", 'gr', 'apea'];
// const sortedFruits = fruits.sort();
// console.log('sorted array', sortedFruits);
// console.log('sort in assending order of lrngth of words', fruits.sort((a,b)=>a.length-b.length))


// const points = [40, 100, 1, 5, 25, -10];
// console.log('sorted in accending order', points.sort((a, b)=>a-b))
// console.log('sorted in an decending order', points.sort((a,b)=>b-a))
// console.log('remove negative numbers', points.filter(a=>a>0))

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin"];
// console.log('concactinated array', arr1.concat(arr2,arr3))




// const fruitsNow = ["Banana", "Orange", "Apple", "Mango"];
// const fruitsNowIterator = fruitsNow.entries()
// for(let value of fruitsNowIterator ){
//     console.log(value)
// }



// const fruitIterableObjectWithKeys = fruitsNow.keys();
// console.log(fruitIterableObjectWithKeys);
// for (let value of fruitIterableObjectWithKeys){
//     console.log(value)
// }



// const fruitsNow = ["Banana", "Orange", "Apple", "Mango"];
// console.log('fill at5 specified location',fruitsNow.fill('dhanu',1,3) )
// console.log('fill at every location',fruitsNow.fill('dhanu')) 
// console.log('find index of', fruitsNow.findIndex((a)=>a=="Apple"))




// const ages = [32, 33, 16, 40];
// console.log('find index of', ages.findIndex((a)=>a==16))
// console.log(ages.every((a)=>a>=10))



// let text = "ABCDEFG"
// let newArray = Array.from(text)
// console.log(newArray);




// const fruitsNow1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruitsNow1.includes("Apple"));


// const numbers = [15.5, 2.3, 1.1, 4.7];
// console.log('add all items of array useing reduce',numbers.reduce((sum,value)=>sum+value))
// console.log('reduce array from right', numbers.reduceRight((sum, value)=>sum-value))
// console.log('reverse the array',numbers.reverse())
// console.log('take one item from specific index', numbers.slice(2,3))
// console.log('removes items at specific index from the main array', numbers.splice(2,3))
// console.log(numbers)
// console.log('remove one item from array', numbers.shift())


// let arrayForSplice = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// arrayForSplice.splice(1,3)
// console.log('after splice', arrayForSplice.splice(2,1))
// console.log(arrayForSplice)
// delete arrayForSplice[2];
// console.log('delete', arrayForSplice)


//loop through the block of array and skip when the value is 3
// for (let i = 0; i<10; i++){
//     if ( i === 3 ) continue;

//     console.log(i)
// }
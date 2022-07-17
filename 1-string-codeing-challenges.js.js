
// 1) reverse the string 
// let bigWord = 'let it rain over me';
// const splittedBigWord = bigWord.split(' ');
// const wordReversedArray = [];
// for ( let i = 0; i <= splittedBigWord.length-1; i++){
//     let singleReversedWord = '';
//     for (let j = splittedBigWord[i].length-1; j >=0; j-- ){
//        singleReversedWord += splittedBigWord[i][j]
//     }
//     wordReversedArray.push(singleReversedWord)
// }
// console.log(wordReversedArray.join(' '))

//reverse the string useing loop
// let string = 'dhananjaya';
// let reversedString = '';
// for ( let i = string.length-1; i >= 0; i-- ){
//     console.log(string[i])
//     reversedString += string[i]
// }
// console.log(reversedString)




// 2) confirm the ending of the string

// let string = 'setting today viewport observer';
// let target = 'erver';

// let lastString = string.substr(-target.length);
// console.log(lastString === target);




// 3) count duplicate elements in array

// let string = 'adsjfdsfsfjsdjfhacabcsbajda';

// const duplicatesCount = {};

// for( let i = 0; i < string.length; i++ ){
//     if( Object.keys( duplicatesCount ).includes(string[i]) ){
//         duplicatesCount[string[i]] += 1; 
//     } else {
//         duplicatesCount[ string[i] ] = 1;
//     }
// }

// for ( let index in duplicatesCount) {
//     if( duplicatesCount[index] === 1 ){
//          delete duplicatesCount[index]
//     }
// }

// console.log(duplicatesCount)



// 4) check if two strings are anagram to each other
// const string1 = 'Mary'
// const string2 = 'Army'

// const sortedString1 = string1.toLowerCase().split('').sort().join('');
// const sortedString2 = string2.toLowerCase().split('').sort().join('');
// console.log(sortedString1 == sortedString2)




// 5) truncate a string to some length
// const string = 'truncate a string to some length'
// const noChangeString = 'truncate a'

// console.log(string.slice(0,10))
// console.log(noChangeString.slice(0,10))





// 6) Problem Explanation
//You will create a program that takes a sentence, then search 
//for a word in it and replaces it for a new one while 
//preserving the uppercase if there is one.

// const string = 'truncate a string to some Length'
// const wordToReplace = 'Length'
// console.log(string.search(wordToReplace));
// const changedString = string.replace(wordToReplace, 'replaced')
// console.log(changedString)



// 7) function myReplace(str, before, after) {
//   var index = str.indexOf(before);
//   if (str[index] === str[index].toUpperCase()) {
//     after = after.charAt(0).toUpperCase() + after.slice(1);
//   } else {
//     after = after.charAt(0).toLowerCase() + after.slice(1);
//   }
//   str = str.replace(before, after);
//   return str;
// }
// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");



// 8) const chunkyMonkey=(array, limit)=>{
//   let groups = []
//   while (array.length > 0){
//     groups.push(array.slice(0, limit))  //rem multiple elements push at a time
//     array = array.slice(limit)
//   }
//   return groups
// }

// chunkyMonkey(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)



// 9) slasher
// function slasher(arr, howMany) {
//   arr.splice(0, howMany);
//   return arr;
// }
// console.log(slasher([1, 2, 3], 2));



// 10) freecodecamp
// function mutation(arr) {
//   let test = arr[1].toLowerCase();
//   let target = arr[0].toLowerCase();
//   for (let i = 0; i < test.length; i++) {
//     if (target.indexOf(test[i]) < 0) return false;  // bcz indexOf will give -ve value when there is no match
//   }
//   return true;
// }
// console.log(mutation(['ramesh', 'aes', 'c', 'd', 'e', 'f', 'g']));



// 11) falsy bouncer
//useing loop
// const falsyBouncer = (arr)=>{
//   const newArray = [];
//   for (let i=0; i<arr.length; i++){
//     if(arr[i]) {
//        newArray.push(arr[i])
//        } 
//   }
//   return newArray
// }

//useing filter
// const falsyBouncer=(arr)=>{
//   return arr.filter((v)=>{
//     if(v){
//       return v
//     }
//   })
// }

// console.log(falsyBouncer([7, "ate", "", false, 9]) )







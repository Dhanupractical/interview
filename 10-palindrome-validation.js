let word = 'madam';
let boolArray = [];

for (let i = 0; i<word.length/2; i++){
  if(word[i] === word[word.length-1-i]){ // rem this line
      boolArray.push(true)
  }  else {
      boolArray.push(false)
  }
}

console.log(boolArray.every((v)=>v===true))
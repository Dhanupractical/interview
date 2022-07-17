const letters = new Set(["a","b","c"]);
letters.add("d")
let value = "";
letters.forEach (function(value){
    value += value+ "<br>";
})
console.log(value);
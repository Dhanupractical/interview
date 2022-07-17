// var animal = "lion";
// var favoriteAnimal = function () {
//    console.log("Original favourite animal: " + animal); 
//    // undefined because var animal gets hoised with initialization as undefined in the favoriteAnimal function scope
//    var animal = "giraffe";
//    console.log("New favourite animal: " + animal);
// };
// favoriteAnimal()

// let animal1 = "lion";
// let favsni = function () {
//    console.log("Original favourite animal1: " + animal1); 
//    // Cannot access 'animal1' before initialization,,   will throw this error so to avoid hoisting we have to use let or const
//    let animal1 = "giraffe";
//    console.log("New favourite animal1: " + animal1);
// };
// favsni()



// function declaration 

// console.log(printRandom());
// function printRandom() {
//    return "Print Random";
// }


//function expression
// compile only in oneCompiler
// no hoisting happens and gives error
//TypeError: printRandom is not a function
// use function expressions insted of function declaration,, in function expression var also works fine and gives error
// console.log(printRandom());
// var printRandom = function () {   
//    return "Print Random";
// }
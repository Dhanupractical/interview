// console.log(undefined === null)
// console.log(undefined == null)


// console.log(Number(true))
// console.log(Number(false))
// console.log(Number([1,2,3]))
// console.log(Number({a:1,b:2,c:3}))
// console.log(Number('hello'))

// console.log(5.67676.toFixed(2)) // show only two digits after decimal
// console.log(0.001658853.toPrecision(2))// show two digits after zeros and last digit rounding to near int

// console.log([...'ramesh'])
// console.log({} === {})
// console.log({} == {})


// console.log(typeof null)
// run in  https://onecompiler.com/javascript/3y2dhbbzf



// var x;
// console.log(x);  // undefined
// x=23;



// a= 30;
// console.log(a)  // 30
// var a;



// var x = 0;
// var y = 4;

// if(x){
//  console.log(x)
// } else {
//   console.log('nope')
// }

// if(y){
//   console.log(y)
// }




// for (let i =0; i<10; i++) {
//  setTimeout(function() {
//    console.log('the number is'+i)
//  }, 1000); 
// }

// the number is0
// the number is1
// the number is2
// the number is3
// the number is4
// the number is5
// the number is6
// the number is7
// the number is8
// the number is9



// for (var i =0; i<10; i++) {
//   setTimeout(function() {
//     console.log('the number is'+i)
//   }); 
// }

// the number is10
// the number is10
// the number is10
// the number is10
// the number is10
// the number is10
// the number is10
// the number is10
// the number is10
// the number is10



// let a = [1,2,3]
// let b = [1,2,3]
// let c = a

// console.log(a===b)  //false
// console.log(a==b)   //false
// console.log(a===c)  // true  because a and c refer to object at same location



// let a = {x:1, y:2, z:3}
// let b = {x:1, y:2, z:3}
// let c = a

// console.log(a===b)  //false
// console.log(a==b)   //false
// console.log(a===c)  // true  because a and c refer to object at same location



//start

// var x;
// x = 10;

// function test (){
//   var x;
//   if(x>20){
//     x=50;
//   }
//   console.log(x)
// }
// test();

//end




//start
// function helloWorld(){
//   console.log(1);
//   setTimeout(()=>{
//     console.log(3)
//   },0);
//   console.log(2);
// }
// helloWorld(); // 1    2   and 3 at last
//end 



// start
// const x = NaN;
// console.log(x !==x)   // true
// console.log(Number.isNaN(x))  //true

// console.log(NaN === NaN)
// console.log(!isNaN(x) && x!==x)
//end


//start
// console.log(Number.MAX_SAFE_INTEGER)
// const x = Number.MAX_SAFE_INTEGER + 1;
// console.log(x === x+1)
//end



//start  
// value = Number.MIN_SAFE_INTEGER;

// value_minus_1 = value - 1;
// value_minus_2 = value - 2;
// console.log(value_minus_1 == value_minus_2);
//end


//start
// const x = document.all 
// console.log('typeof x', typeof x)
// console.log('x.length',x.length)
// if(typeof x === 'undefined' && x.length > 0) {
//   console.log('hello fatfish')
// }
//end

// start
// console.log([]+[]);  //gives empty string
// end



//start
// function a(prop){
//     return prop;
// }

// const sentence = a `hi`;
// console.log(sentence);
//end



//start
// function y(){
//     console.log(this.length);
// }
//    var x = {
//          length : 5,
//          method : function(y){
//              arguments[0]();
//        }
//     }

// x.method(y, 1, 5, 3);
//end



//start   // DOU
// const a = 'constructor'
// console.log(a[a](12));
//end


//start
// console.log( ('hi').__proto__.__proto__ );  // object
// console.log( ('hi').__proto__.__proto__.__proto__ );  // null
//end


//start
// function args (){
//     console.log(arguments.length)
// }

// args(1,2,3,10)
//end


//start
// var A = {
//     x: function(){
//         console.log('x');
//     return A;
//     },
//     y: function(){
//         console.log('y');
//     return A;
//     },
//     z: function(){
//         console.log('z');
//     return A;
//     }
// }
// A.x().y().z();

//  or


// var A = {
//     x: function(){
//         console.log('x');
//     return this;
//     },
//     y: function(){
//         console.log('y');
//     return this;
//     },
//     z: function(){
//         console.log('z');
//     return this;
//     }
// }
// A.x().y().z();
//end



//start
// const x = [1,2,3];
// x[-1] = -1;
// console.log( x[x.indexOf(10000)]);
// x[-1]
//end


//start
// const ary = [1, 2, 15, 30, 5, 45, 7];
// console.log(ary.sort());
//end



//start
// let i = Number.MIN_VALUE;
// console.log(i/i);
//end


//start
// let d = [1, 2, 3] + [4, 5, 6];
// console.log(d) // converts into string and performs adding  1,2,34,5,6
//end

//start
// (function(){
//     let a = b = 100;
// })();
// console.log('b', b); // let doesnt apply for b , so b value will be 100
// console.log('a', a);
//end

//start
// function babu(){
//     let a = b = 200;
// }
// console.log(b);
// console.log(a);
//end


//start
// var abc = 4 + "3" + 2 + 6;
// console.log(abc)
//end


//start
// int i =0;  //syntax error
// for(i<5; i++){
    
// }
// Printf(i);
//end


//start
// if( 0.1 + 0.2 == 0.3 ){
//     console.log('yes')
// } else {
//     console.log('no')
// }
// console.log( 0.1 + 0.2 )
// console.log(0.1 + 0.01)
//end




//start
// print 1 to 10 with THREE second interval 
// for ( let i = 0; i <= 10; i++){
//     setTimeout( ( ()=>console.log(a) ) , i * 3000 )
// }
//end


//start
 // for (let i=0; i<=10; i++){
 //   setTimeout( ()=>{console.log(i)}, i*3000 )
 // }
//end



// start
// var mark1 = function(){ return ('100')}; // has a unique object reference
// var mark2 = function(){ return('100')}; // has a unique object reference
// mark1 == mark2; // false
// mark1 === mark2; // false
//end


//start
// console.log(2-'2')
//end
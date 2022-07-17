let num1 = 5.6;
let num2 = 10.7;
let num3 = 15.3;
console.log('Math.max',Math.max(num1, num2, num3))
console.log('Math.min',Math.min(num1, num2, num3))
console.log('Math.random()', Math.random())
console.log('Math.round', Math.round(num2))
console.log('Math.round', Math.round(num3))
console.log('Math.celi', Math.ceil(num3))
console.log('Math.floor', Math.floor(num3))
console.log('Math.trunc', Math.trunc(num3)) // returns integer part excluding decimal 
console.log('Math.sign', Math.sign(-35.6))
console.log('Math.pow', Math.pow(10,2))
console.log('Math.sqrt', Math.sqrt(64))
console.log('Math.abs', Math.abs(-5.7))




let a = Math.abs(7.25);
console.log('a', a)
let b = Math.abs(-7.25);
console.log('b', b)
let c = Math.abs(null);
console.log('c', c)
let d = Math.abs("Hello");
console.log('d', d)
let e = Math.abs(2-3);
console.log('e', e)
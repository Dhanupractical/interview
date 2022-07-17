// const multiplyDemo = function (x){
//      return function (y){
//         return function (z){
//               console.log(x*y*z)
//         }
//      }
// } 

multiplyDemo = (x)=>(y)=>(z)=>console.log(x*y*z)



multiplyDemo(5)(3)(7)
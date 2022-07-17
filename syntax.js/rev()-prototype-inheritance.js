// let arr = ["akshay", "aditya"];
// let object = {
//     name: "akshay",
//     city: "Dehradun",
//     getIntro: function(){
//         console.log(this.name + "from" + this.city);
//     }
// }

// console.log(object.__proto__)
//end







//start

var x = function(j){
    this.i = 0;
    this.j = j;

    this.getJ = function(){
        return this.j;
    }
}

x.prototype.getJ = function() {
    return this.j;
}

// x.prototype.getI = function() {
//     return this.i;
// }

var x3 = new x.getJ();
console.log("i", x3)

var x1 = new x(1);
var x2 = new x(2);

console.log( x2.getJ() )

//end



//start
// let objectProto = {
//     name: "dhanu",
//     city:'srinivasapura'
// }

// let objectProto1 = {
//     name: 'ramesh'
// }

// objectProto1.__proto__=objectProto;

// console.log(objectProto1.city)
//end
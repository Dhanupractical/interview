// class employee {
//     constructor(givenName, givenExperience, givenDivision){
//         this.name = givenName;
//         this.experience = givenExperience;
//         this.division = givenDivision;
//     }
//     slogan=()=>{
//         return `I am ${this.name} and this company is the best`;
//     }
// }

// harry = new employee("harry", 56, "division");
// console.log(harry.slogan());





// class Employee {
//      constructor(name, age, color){
//          this.name = name;
//          this.age = age;
//          this.color = color;
//      }
//     showAge(){
//         console.log(this.age)
//     }
//     static displayAge(x){
//         console.log(x)
//     }
// }

// console.log(Employee.displayAge(31))
// console.log(new Employee('ramesh', 56, 'black').showAge())

// class Model extends Employee {
//     constructor(name, age, color, id){
//         super(name, age, color);
//         this.id = id;
//         this.height=5;
//     }
//     showAgeAndId(){
//         this.showAge();
//         console.log(this.id)
//     }
//     get getNAmeWithAge(){
//         return `${this.name} and age is ${this.age}`
//     }
//     set setHeight(x){
//         this.name = x
//     }
// }
// const newModel = new Model()
// newModel.setHeight = 80;
// console.log(newModel.name)
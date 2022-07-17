const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  let x=''
  for (let index in myObj.cars) {
      x = myObj.cars[index].name;
      // console.log(x);
  }
  console.log(x)




  // const person = {
  //   fname:"John",
  //   lname:"Doe",
  //   age:25
  // }; 
  
  // let txt = "";
  // for (let x in person) {
  //   txt += person[x] + " ";
  // }
  // console.log(txt)
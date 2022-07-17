let name = {
    firstName: "Akshay",
    lastName: "Saini",
    printFullName: function () {
        console.log(this.firstName+" "+this.lastName);
    }
}

const printFirstName = function (homeTown, state) {
    console.log(this.firstName+" "+ homeTown+" "+state)
}

let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
}

// name.printFullName.call(name2); 
// printFirstName.call(name2, "mumbai", "maharastra");

// printFirstName.apply(name2, ["mumbai", "maharastra"] );
var bindedVar = printFirstName.bind(name2, 'mumbai')

bindedVar('maharastra')
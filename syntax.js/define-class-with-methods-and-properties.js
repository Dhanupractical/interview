class User {
    constructor(name, place){
        this.name = name;
        this.place = place;
    }

    printName () {
        console.log(this.name)
    }
    printPlace () {
        console.log(this.place)
    }
}

const newUser = new User('ramesh', 'srinivasapura');

newUser.printName();
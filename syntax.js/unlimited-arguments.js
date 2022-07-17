const value = function (...arg) {
    console.log(...arg)
    console.log(arg[0])
    console.log(this.name)
}

const user = {
    name: 'dhanu',
    age: 27
}

const value1 = value.bind(user,2);
value1(3,4,5);
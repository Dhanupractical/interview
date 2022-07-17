const multiply=(x,y)=>{
    console.log(x*y);
}

const multiplyByTwo = multiply.bind(this,3);
multiplyByTwo(5)

const multiplyByThree = multiply.bind(this,10);
multiplyByThree(3)
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  const MyFather = new Person("ramachandrappa", "reddy", 60, "blue")
  const MyMother = new Person("geethamma", "bachavarahalli", 50, "black")
  
  alert(MyMother.age);
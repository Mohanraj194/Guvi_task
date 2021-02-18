// Major ES6 Features
// let,const keyword allows you to declare a block scope variable.
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10


var y = 10;
// Here x is 10
{
  const y = 2;
  // Here x is 2
}
// Here x is 10

//Arrow function
const foo = (x, y) => x * y;

// or
const myfoo = (x, y) => { return x * y };


//class

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
// inheritance class

class a{
getid(){

}
}
class b extends a{
 //using this key word (this.getid()) we can access the getid in class a
}

//promise
let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise).
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );

// objects 
var obj=10
let objvar={
    obj, // in es6 we can give directly give variable name if object key = variable name
    x:"dfdf"
}


//default parameter values
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
  }
  myFunction(5); // will return 15

//rest parameter  
  function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let result = sum(4, 9, 16, 25, 29, 100, 66, 77);
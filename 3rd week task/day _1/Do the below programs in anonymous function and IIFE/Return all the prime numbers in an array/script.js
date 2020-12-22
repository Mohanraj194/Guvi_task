var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]


 var iife=(function(number){
      return  number.filter((num) => {
            
            for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
            }
            return true;
            
      });
  })(numArray)

  console.log('By iife function: ',iife) 

  
let anonymous = function (number){
     
        return  number.filter((num) => {
      
        for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
        }
        return true;
      });
  
}
console.log('By anonymous function: ',anonymous(numArray))



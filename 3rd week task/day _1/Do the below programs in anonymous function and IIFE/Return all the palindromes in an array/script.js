let palindrome =['madam','guvi','level']

let iife= (function(p){
  return  p.filter((element)=>element==element.split("").reverse().join(""))
  })(palindrome)

  
console.log('By iife function: ',iife)



let anonymous = function (p){

  return  p.filter((element)=>element==element.split("").reverse().join(""))

}
console.log('By anonymous function: ',anonymous(palindrome))



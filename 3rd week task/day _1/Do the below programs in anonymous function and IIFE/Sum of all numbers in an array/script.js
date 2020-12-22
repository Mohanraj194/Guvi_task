let arr  = [1,2,3,4,5];
(function(a){
    
     let result = a.reduce((total,num)=>{
       return total+num
     })
      console.log('By iife function: '+result);
  })(arr)


  
let anonymous = function (a){
  let result = a.reduce((total,num)=>{
    return total+num
  })
  return result
}
console.log('By anonymous function: '+anonymous(arr))



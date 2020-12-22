let arr =[1,2,3,8,9,10]
let k=3
let iife= (function(a,k){
  a=[...a]
  for(i=0;i<k;i++)
  {
     let val = a.splice(-1)
     a.splice(0,0,val[0])
  } 
  return a
  })(arr,k)

  
console.log('By iife function: ',iife)



let anonymous = function (a,k){

  for(i=0;i<k;i++)
  {
     let val = a.splice(-1)
     a.splice(0,0,val[0])
  } 
  return a

}
console.log('By anonymous function: ',anonymous(arr,k))



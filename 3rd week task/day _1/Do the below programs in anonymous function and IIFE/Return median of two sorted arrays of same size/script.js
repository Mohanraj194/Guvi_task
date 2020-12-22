let arr1 = [1, 12, 15, 26, 38]
let arr2 = [2, 13, 17, 30, 45]

 let iife= (function(a1,a2){
  
    if(a1.length != a2.length) return 'both array length is not same'
    let arr = a1.concat(a2).sort((a,b)=>(a-b));
    let mid = Math.floor(arr.length / 2);
    return (arr[mid] + arr[mid - 1]) / 2;  
  })(arr1,arr2)

  
console.log('By iife function: '+iife) 



let anonymous = function (a1,a2){

  
  if(a1.length != a2.length) return 'both array length is not same'
  let arr = a1.concat(a2).sort((a,b)=>(a-b));
  let mid = Math.floor(arr.length / 2);
  return (arr[mid] + arr[mid - 1]) / 2;
  
}
console.log('By anonymous function: '+anonymous(arr1,arr2))



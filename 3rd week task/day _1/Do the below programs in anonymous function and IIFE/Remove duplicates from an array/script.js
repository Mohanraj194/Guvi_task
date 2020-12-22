let arr =[10,20,50,35,40,35,50]

let iife= (function(a){
  let uniquearray =[]

   a.filter((element)=>{
     if(uniquearray.indexOf(element)==-1) uniquearray.push(element)
    })
    return uniquearray
  })(arr)

  
console.log('By iife function: ',iife)



let anonymous = function (a){

  let uniquearray =[]

   a.filter((element)=>{
     if(uniquearray.indexOf(element)==-1) uniquearray.push(element)
    })
    return uniquearray
}
console.log('By anonymous function: ',anonymous(arr))



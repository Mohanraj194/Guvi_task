let arr  = [1,2,3,4,5];

 (function(a){
    
    let result=[]
    for(i=0;i<a.length;i++)
    {
        
       if(a[i]%2!=0)result.push(arr[i])
    }
    console.log('By iife function: ',result);
  })(arr)


  
let anonymous = function (a){
  let result=[]
    for(i=0;i<a.length;i++)
    {
        
        if(a[i]%2!=0)result.push(arr[i])
           
        
    }
    return result
}
console.log('By anonymous function: ',anonymous(arr))



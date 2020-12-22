let str  = ['guvi','mohan','web','developer'];
  

  (function(s){
      
     for(var i = 0; i<s.length; i++){
      s[i] = s[i][0].toUpperCase() + s[i].slice(1);
      }
  console.log('By iife function: ',s) 
    })(str)



let anonymous = function (s){
  
    for(var i = 0; i<s.length; i++){
      s[i] = s[i][0].toUpperCase() + s[i].slice(1);
  }
  console.log('By anonymous function: ',s)

}
anonymous(str)



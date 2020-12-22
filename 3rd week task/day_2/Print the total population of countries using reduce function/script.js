var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send()
request.onload =function (){
var data = JSON.parse(this.response)
 let populationArray = []

 data.forEach(element => {
    populationArray.push(element['population'])
 });
 let totalPopoulation =populationArray.reduce((total,num)=>{
     return total+num
 })
 console.log(`Total population of Countries: ${totalPopoulation}`)
}
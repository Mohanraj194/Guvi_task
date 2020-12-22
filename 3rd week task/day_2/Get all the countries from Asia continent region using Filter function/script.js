var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send()
request.onload =function (){
var data = JSON.parse(this.response)
 let result = data.filter((element)=> element['region']=='Asia')
 console.log(result)
}
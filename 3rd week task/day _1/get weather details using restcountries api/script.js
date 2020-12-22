var api = 'de77d4e6f572e38509f815c8bd561461'
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/name/india?fullText=true',true)
request.send()
request.onload =function (){
var data = JSON.parse(this.response)
var lat =data[0]['latlng'][0]
var lng =data[0]['latlng'][1]
var city = data[0]['name']
getweatherByLatLng(lat,lng,api)
getweatherByCity(city,api)
}

function getweatherByLatLng(lat,lng,api)
{
  var request = new XMLHttpRequest();
  request.open('GET','http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid='+api,true)
  request.send()
  request.onload =function (){
    var data = JSON.parse(this.response)
    console.log('By lat and lng', data)
    
    }
    
}
function getweatherByCity(city,api)
{
  var request = new XMLHttpRequest();
  request.open('GET','http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+api,true)
  request.send()
  request.onload =function (){
    var data = JSON.parse(this.response)
    console.log('By city' ,data)
  }
    
}
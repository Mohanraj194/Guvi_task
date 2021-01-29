let container =  document.createElement("div")
container.setAttribute("class","container py-3")

let header_row = document.createElement("div")
header_row.setAttribute("class","row text-center")

let h3 = document.createElement("h3")
h3.setAttribute("class","w-100")
h3.innerText="IP Api"

let h5 = document.createElement("h4")
h5.setAttribute("class","w-100")
h5.innerText="Search any IP addressIP Api" 

let input_row = document.createElement("div")
input_row.setAttribute("class","row my-4")

let input_col_7 = document.createElement("div")
input_col_7.setAttribute("class","col-md-7 offset-md-2")

let input_row_input = document.createElement("input")
input_row_input.id="ipAddress"
input_row_input.setAttribute("type","text")
input_row_input.setAttribute("class","form-control")

let input_col_1 = document.createElement("div")
input_col_1.setAttribute("class","col-md-1")

let input_button = document.createElement("button")
input_button.setAttribute("type","button")
input_button.setAttribute("class","btn btn-primary w-100")
input_button.innerText = "Search"
input_button.addEventListener("click",search)

let main_row = document.createElement("div")
main_row.setAttribute("class","row")


input_col_7.append(input_row_input)
input_col_1.append(input_button)
input_row.append(input_col_7,input_col_1)
header_row.append(h3,h5)
container.append(header_row,input_row,main_row)
document.body.append(container)

function search()
{
    let val = document.getElementById("ipAddress").value
    if(val == null || val == "")
    {
        alert("Please Enter Ip Address")
        return false
    }
    let valdation = ValidateIPaddress(val)
    if(valdation== false)
    {
        alert("You have entered an invalid IP address!")  
        return false
    }

    fetch(`http://ip-api.com/json/${val}`)
    .then(async response=>{
        let data =  await response.json()
        if(data["status"]=="success")
        {
            main_row.innerHTML=``

            let left_div = document.createElement("div")
            left_div.setAttribute("class","col-md-6 d-flex align-items-center")
            left_div.innerHTML=`<h2><b>Country / CountryCode : </b> ${data['country']} / ${data['countryCode']} <br> <b>Region / RegionName : </b> ${data['region']} / ${data['regionName']} <br> <b> City : </b> ${data['city']} <br> <b> Isp : </b> ${data['isp']}<br> <b> ORG : </b> ${data['org']}<br> <b>Latitude : </b>${data['lat']} <br> <b>Longitude : </b> ${data['lon']}<br> <b> TimeZone : </b>${data['timeZone']} </h2>`

            let right_div = document.createElement("div")
            right_div.setAttribute("class","col-md-6")
            right_div.setAttribute("style",`background-image: url(https://cache.ip-api.com/${data['lon']},${data['lat']},10);min-height: 580px;`)

            
            main_row.append(left_div,right_div)

        }
        else{
            alert("something wrong with api fetch kindly check it ")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

function ValidateIPaddress(ipaddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
      return true  
    }  
    return false  
  } 




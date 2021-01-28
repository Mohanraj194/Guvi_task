const api_list = ['home','world','politics','magazine','technology','science','health','sports','arts','fashion','food','travel']

let api_key = "TMGNSRGUek6qKxf6lG4pulQkhYSGGBkx"

let container = document.createElement("div")
container.setAttribute("class","container")

let header_div = document.createElement("div")
header_div.setAttribute("class","row text-center")


let header = document.createElement("h1")
header.setAttribute("style","color:black;font-family:times-new-roman;margin-top:20px;font-size:50px;margin:auto")
header.innerText = "THE New York TIMES";

let nav=document.createElement('nav')
nav.setAttribute('class',"navbar navbar-expand-md navbar-light bg-light")
nav.setAttribute("style","border-top:1px solid black;border-bottom:1px solid black;")


let navbar_button = document.createElement("button")
navbar_button.setAttribute("class","navbar-toggler")
navbar_button.setAttribute("style","margin:0 0 0 auto")
navbar_button.setAttribute("type","button")
navbar_button.setAttribute("data-toggle","collapse")
navbar_button.setAttribute("data-target","#collapsibleNavbar")

let navbar_button_span = document.createElement("span")
navbar_button_span.setAttribute("class","navbar-toggler-icon") 

let nav_bar_div = document.createElement("div")
nav_bar_div.setAttribute("class","collapse navbar-collapse justify-content-center")
nav_bar_div.setAttribute("id","collapsibleNavbar")

let nav_ul = document.createElement("ul")
nav_ul.setAttribute("class","navbar-nav")


for(i=0;i<api_list.length;i++)
{
    let nav_li = document.createElement("li")
    nav_li.setAttribute("class","nav-item")
    let a = document.createElement("a")
    a.setAttribute("class","nav-link btn hvr-underline-from-center")
    a.setAttribute("style","color:black;")
    a.innerText = `${api_list[i].toUpperCase()}`
    a.id=`${api_list[i]}`
    a.setAttribute("onclick",`processData('${api_list[i]}')`)
    nav_li.appendChild(a)
    nav_ul.appendChild(nav_li)
}


let content_div = document.createElement("div")
content_div.setAttribute("class","container")



document.body.append(container)
container.append(header_div,nav,content_div)
header_div.append(header)
nav.append(navbar_button,nav_bar_div)
navbar_button.append(navbar_button_span)
nav_bar_div.append(nav_ul)

async function processData(section){
	content_div.innerHTML = ""
    let response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${api_key}`)
    let data = await response.json()
    data=data['results']
    for(i of data){
        var row = document.createElement("div");
        row.setAttribute("class","row mt-4 stl");

        var left = document.createElement("div");
        left.setAttribute("class","col-md-8 ");

        var sec_card = document.createElement("div");
        sec_card.setAttribute("class","sectioncard");
        sec_card.innerHTML = `${section.toUpperCase()} News`;

        var titlecard = document.createElement("div");
        titlecard.setAttribute("class","titlecard");
        titlecard.innerHTML = i["title"]

        var datecard = document.createElement("div");
        datecard.setAttribute("class","datecard");
        datecard.innerHTML = i["published_date"]

        var abstractcard = document.createElement("div");
        abstractcard.setAttribute("class","abstractcard");
        abstractcard.innerHTML = i["abstract"];

        var continuereading = document.createElement("a");
        continuereading.setAttribute("class","continuereading");
        continuereading.setAttribute("href",`${i["url"]}`)
        continuereading.setAttribute("target",`_blank`)
        continuereading.innerHTML = "Continue reading";

        

        var right = document.createElement("div");
        right.setAttribute("class","col-md-4 ");
        right.setAttribute("style","text-align:center");

        if(i["multimedia"]==null)
        {
        var thumb_image = document.createElement("img");
        thumb_image.setAttribute("class","img-thumbnail");
        thumb_image.setAttribute("src",``);
        thumb_image.setAttribute("alt",`no img`);
        }
        else
        {
            var thumb_image = document.createElement("img");
            thumb_image.setAttribute("class","img-thumbnail");
            thumb_image.setAttribute("src",`${i["multimedia"][2]["url"]}`);
        }
        
       

        content_div.append(row);
        row.append(left,right)
        left.append(sec_card,titlecard, datecard, abstractcard, continuereading);
        right.append(thumb_image);
       
    }

}

 document.addEventListener("DOMContentLoaded", function(event) {
   document.getElementById("home").click()
  });


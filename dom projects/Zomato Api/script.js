var search, lat, long, alldata;
window.addEventListener('load', (event) => {
    get_location();
   });

function get_location(){
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
 lat = position.coords.latitude;
 long = position.coords.longitude;
}


let jumbo = document.createElement("div")
jumbo.setAttribute("class","jumbotron")


let zomato_logo = document.createElement("img")
zomato_logo.src="img/logo.png"
zomato_logo.alt="logo"
zomato_logo.setAttribute("class","img-fluid pb-4 m-auto")

let form = document.createElement("form")
form.id="search_form"
form.classList.add("w-100");


let input_div = document.createElement("div")
input_div.classList.add("input-group","col-md-4","m-auto")

let input = document.createElement("input")
input.classList.add("form-control","py-2")
input.id="search-input"
input.setAttribute("type","text")
input.setAttribute("placeholder","Search for restaurant, cusines, dishes..")
input.name="search"

let span = document.createElement("span")
span.classList.add("input-group-append")

let span_button = document.createElement("button")
span_button.classList.add("btn","btn-clr","btn-outline-secondary")
span_button.setAttribute("type","submit")
span_button.setAttribute("onclick","searchData(event)")

let icon= document.createElement("i")
icon.classList.add("fa","fa-search")



let modal_main_div = document.createElement("div")
modal_main_div.setAttribute("id","myModal")
modal_main_div.classList.add("modal","fade")
modal_main_div.setAttribute("role","dialog")


let modal_sub_div = document.createElement("div")
modal_sub_div.setAttribute("class","modal-dialog modal-lg")

let modal_content_div = document.createElement("div")
modal_content_div.classList.add("modal-content")

let modal_header = document.createElement("div")
modal_header.classList.add("modal-header")

let modal_header_button = document.createElement("button")
modal_header_button.setAttribute("type","button")
modal_header_button.setAttribute("class","close")
modal_header_button.setAttribute("data-dismiss","modal")
modal_header_button.innerHTML=`&times;`

let modal_header_h1 = document.createElement("h3")
modal_header_h1.id="modal-title"
modal_header_h1.setAttribute("class","modal-title")

modal_header.append(modal_header_h1,modal_header_button)

let modal_body = document.createElement("div")
modal_body.setAttribute("class","modal-body")

let modal_body_div = document.createElement("div")

let modal_body_img = document.createElement("img")
modal_body_img.setAttribute("style","max-height:330px; width:100%;")
modal_body_img.setAttribute("id","featured_img")
modal_body_img.setAttribute("src","")
modal_body_img.setAttribute("class","img-responsive")

let modal_body_row = document.createElement("div")
modal_body_row.setAttribute("class","row")

let modal_body_row_div1 = document.createElement("div")
modal_body_row_div1.setAttribute("style","border-right: 1px dotted #ccc")
modal_body_row_div1.setAttribute("class","col-md-6")

let modal_body_h41 = document.createElement("h4")
modal_body_h41.innerHTML=`<i class="fa fa-map-marker"></i> Address`

let modal_body_p1 = document.createElement("p")
modal_body_p1.id="modal-address"

let modal_body_h42 = document.createElement("h4")
modal_body_h42.innerHTML=`<i class="fa fa-phone"></i> Phone`

let modal_body_p2 = document.createElement("p")
modal_body_p2.id="modal-phone"


let modal_body_row_div2 = document.createElement("div")
modal_body_row_div2.setAttribute("style","border-right: 1px dotted #ccc")
modal_body_row_div2.setAttribute("class","col-md-6")

let modal_body_h43 = document.createElement("h4")
modal_body_h43.innerHTML=`<i class="fa fa-calendar"></i> Timing`

let modal_body_p3 = document.createElement("p")
modal_body_p3.id="modal-timings"

let modal_body_h44 = document.createElement("h4")
modal_body_h44.innerHTML=`<i class="fa fa-inr"></i> Cost for two`

let modal_body_p4 = document.createElement("p")
modal_body_p4.id="modal-cost"





modal_body.append(modal_body_div,modal_body_row)
modal_body_div.append(modal_body_img)


modal_body_row.append(modal_body_row_div1,modal_body_row_div2)
modal_body_row_div1.append(modal_body_h41,modal_body_p1,modal_body_h42,modal_body_p2)
modal_body_row_div2.append(modal_body_h43,modal_body_p3,modal_body_h44,modal_body_p4)



let modal_footer = document.createElement("div")
modal_footer.setAttribute("class","modal-footer")

let modal_footer_button = document.createElement("button")
modal_footer_button.setAttribute("type","button")
modal_footer_button.setAttribute("class","btn btn-default")
modal_footer_button.setAttribute("data-dismiss","modal")
modal_footer_button.innerText="Close"

modal_footer.append(modal_footer_button)



modal_main_div.append(modal_sub_div)
modal_sub_div.append(modal_content_div)
modal_content_div.append(modal_header,modal_body,modal_footer)




jumbo.append(zomato_logo,form)
form.append(input_div)
input_div.append(input,span)
span.append(span_button)
span_button.append(icon)


let container = document.createElement("div")
container.setAttribute("class","container")


let row = document.createElement("div")
row.id="main_content"
row.setAttribute("class","row")


document.body.append(jumbo,modal_main_div,container)
container.append(row)


function searchData(event){
    event.preventDefault();
    search = document.getElementById("search-input").value;
    if(!search){
        alert("Enter keywords to search");
        return false;
    }
    else{
        getData();
    }
}




  async function getData(){
      let url = 'https://developers.zomato.com/api/v2.1/search?q='+search+'&count=100&lat='+lat+'&lon='+long;
      let response = await fetch(url,{
            headers: {
            'user-key': '4fe61996c77b63198f30284d828c2277'
            }
        })
        .then(async(response)=>{
            let data = await response.json()
            alldata=data['restaurants']
            if(data['results_shown'] > 0){

              let row = document.querySelector('#main_content');
              row.innerHTML = '';
              let h2 = document.createElement("h2");
              h2.setAttribute("class","w-100 text-center py-2")
              h2.innerHTML = "Search Result";
              row.append(h2);

              for(i=0; i < alldata.length; i++){

                let col= document.createElement("div")
                col.setAttribute("class","col-md-4 p-2")

                let card = document.createElement("div")
                card.setAttribute("class","card w-100 hvr-float-shadow")

                let card_img = document.createElement("img")
                card_img.setAttribute("class","card-img-top img-fluid")
                if(alldata[i]['restaurant']['thumb']){
                  card_img.setAttribute("src",alldata[i]['restaurant']['thumb']);
                  card_img.setAttribute("alt","card-img ");
                  }else{
                    card_img.setAttribute("src","img/no_image.png");
                    card_img.setAttribute("alt","card-default-img");
                  }

                let card_body = document.createElement("div")
                card_body.setAttribute("class","card-body")  

                let card_h4 = document.createElement("h4")
                card_h4.setAttribute("class","card-title")
                card_h4.innerText = alldata[i]['restaurant']['name'] 

                let card_p = document.createElement("p")
                card_p.setAttribute("class","card-text")
                card_p.innerText=`Rating: ${alldata[i]['restaurant']['user_rating']['aggregate_rating']} (${alldata[i]['restaurant']['user_rating']['votes']} votes)`

                let card_button = document.createElement("button")
                card_button.setAttribute("class","btn btn-danger")
                card_button.setAttribute("onclick",`details(${alldata[i]['restaurant']['id']})`)
                card_button.innerText="For More Details"  
                
                card_body.append(card_h4,card_p,card_button)  
                card.append(card_img,card_body)  
                col.append(card)
                row.append(col)

                  
               }
            }else{
              let row = document.querySelector('#main_content');
              row.innerHTML = '';
      
              let h2 = document.createElement("h2");
              h2.setAttribute("class","w-100 text-center py-2")
              h2.innerHTML = "Search Result";
      
              let h3 = document.createElement("h3");
              h3.setAttribute("class","w-100 text-center py-2 text-danger")
              h3.innerHTML = "Sorry no results found !!";
      
              row.append(h2, h3);
            } 
        })
      }
function details(id){
    
    let modal_popup= alldata.filter((element)=>element['restaurant']['id']==id)
    
    let name= modal_popup[0]['restaurant']['name']
    let image= modal_popup[0]['restaurant']['featured_image']
    let cost= modal_popup[0]['restaurant']['average_cost_for_two']
    let phone = modal_popup[0]['restaurant']['phone_numbers']; 
    let address = modal_popup[0]['restaurant']['location']['address']
    let timings = modal_popup[0]['restaurant']['timings'];
    
    document.getElementById("modal-title").innerText = name;
    document.getElementById("featured_img").setAttribute("src", image)
    document.getElementById("modal-address").innerText = address
    document.getElementById("modal-phone").innerText = phone;
    document.getElementById("modal-timings").innerText = timings; 
    document.getElementById("modal-cost").innerText = `Rs.${cost}`; 
    $('#myModal').modal('show');
}




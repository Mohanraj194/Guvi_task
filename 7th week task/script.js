var tab=document.createElement("table")
tab.setAttribute("class","tabmargin")
tab.setAttribute("id","display")
var tr1=document.createElement("tr")
var tr1th1=document.createElement("td")
tr1th1.setAttribute("colspan","4")
tr1.appendChild(tr1th1)
tab.appendChild(tr1)
document.body.append(tab)
var tb=document.createElement("input")
tb.setAttribute("type","text")
tb.setAttribute("id","result")
tb.setAttribute("class","textbox")
tr1th1.appendChild(tb)
//.....................................................
var tr2=document.createElement("tr")

var tr2th1=document.createElement("td")

var but1=document.createElement("input")
but1.setAttribute('type',"button")
but1.setAttribute("class","but")
but1.setAttribute("onclick","display(1)")
but1.setAttribute("value","1")
tr2th1.appendChild(but1)
tr2.appendChild(tr2th1)

var tr2th2=document.createElement("td")

var but2=document.createElement("input")
but2.setAttribute("type","button")
but2.setAttribute("class","but")
but2.setAttribute("onclick","display(2)")
but2.setAttribute("value","2")
tr2th2.appendChild(but2)
tr2.appendChild(tr2th2)

var tr2th3=document.createElement("td")

var but3=document.createElement("input")
but3.setAttribute("type","button")
but3.setAttribute("class","but")
but3.setAttribute("onClick","display(3)")
but3.setAttribute("value","3")
tr2th3.appendChild(but3)
tr2.appendChild(tr2th3)

var tr2th4=document.createElement("td")
tr2th4.setAttribute("class","optr")

var but4=document.createElement("input")
but4.setAttribute("type","button")
but4.setAttribute("class","but")
but4.setAttribute("onClick","display('+')")
but4.setAttribute("value","+")
tr2th4.appendChild(but4)
tr2.appendChild(tr2th4)
tab.appendChild(tr2)
//..................................................
var tr3=document.createElement("tr")

var tr3th1=document.createElement("td")

var but5=document.createElement("input")
but5.setAttribute("type","button")
but5.setAttribute("class","but")
but5.setAttribute("value","4")
but5.setAttribute("onClick","display(4)")
tr3th1.appendChild(but5)
tr3.appendChild(tr3th1)

var tr3th2=document.createElement("td")

var but6=document.createElement("input")
but6.setAttribute("type","button")
but6.setAttribute("class","but")
but6.setAttribute("onClick","display(5)")
but6.setAttribute("value","5")
tr3th2.appendChild(but6)
tr3.appendChild(tr3th2)

var tr3th3=document.createElement("td")

var but7=document.createElement("input")
but7.setAttribute("type","button")
but7.setAttribute("class","but")
but7.setAttribute("onClick","display(6)")
but7.setAttribute("value","6")
tr3th3.appendChild(but7)
tr3.appendChild(tr3th3)

var tr3th4=document.createElement("td")

var but8=document.createElement("input")
but8.setAttribute("type","button")
but8.setAttribute("class","but")
but8.setAttribute("onClick","display('-')")
but8.setAttribute("value","-")
tr3th4.appendChild(but8)
tr3.appendChild(tr3th4)
tab.appendChild(tr3)
//..........................................................
var tr4=document.createElement("tr")

var tr4th1=document.createElement("td")

var but9=document.createElement("input")
but9.setAttribute("type","button")
but9.setAttribute("class","but")
but9.setAttribute("onClick","display(7)")
but9.setAttribute("value","7")
tr4th1.appendChild(but9)
tr4.appendChild(tr4th1)

var tr4th2=document.createElement("td")

var but10=document.createElement("input")
but10.setAttribute("type","button")
but10.setAttribute("class","but")
but10.setAttribute("onClick","display(8)")
but10.setAttribute("value","8")
tr4th2.appendChild(but10)
tr4.appendChild(tr4th2)

var tr4th3=document.createElement("td")

var but11=document.createElement("input")
but11.setAttribute("type","button")
but11.setAttribute("class","but")
but11.setAttribute("onClick","display(9)")
but11.setAttribute("value","9")
tr4th3.appendChild(but11)
tr4.appendChild(tr4th3)

var tr4th4=document.createElement("td")

var but12=document.createElement("input")
but12.setAttribute("type","button")
but12.setAttribute("class","but")
but12.setAttribute("onClick","display('/')")
but12.setAttribute("value","/")
tr4th4.appendChild(but12)
tr4.appendChild(tr4th4)
tab.appendChild(tr4)
//........................................................
var tr4=document.createElement("tr")

var tr4th1=document.createElement("td")

var but9=document.createElement("input")
but9.setAttribute("type","button")
but9.setAttribute("class","but")
but9.setAttribute("onClick","display(0)")
but9.setAttribute("value","0")
tr4th1.appendChild(but9)
tr4.appendChild(tr4th1)

var tr4th2=document.createElement("td")

var but10=document.createElement("input")
but10.setAttribute("type","button")
but10.setAttribute("class","but")
but10.setAttribute("onClick","solve()")
but10.setAttribute("value","=")
tr4th2.appendChild(but10)
tr4.appendChild(tr4th2)

var tr4th3=document.createElement("td")

var but11=document.createElement("input")
but11.setAttribute("type","button")
but11.setAttribute("class","but")
but11.setAttribute("onClick","clear_val()")
but11.setAttribute("value","C")
tr4th3.appendChild(but11)
tr4.appendChild(tr4th3)

var tr4th4=document.createElement("td")

var but12=document.createElement("input")
but12.setAttribute("type","button")
but12.setAttribute("class","but")
but12.setAttribute("onClick","display('*')")
but12.setAttribute("value","x")
tr4th4.appendChild(but12)
tr4.appendChild(tr4th4)
tab.appendChild(tr4)
//..................................................

document.getElementById("result").focus();


		
		function display(val) 
		{ 
           document.getElementById("result").value+=val 
		   document.getElementById("result").focus();
		} 
		function solve() 
		{ 
			let x = document.getElementById("result").value;
			if(x)
			{
			let y = eval(x) ;
			document.getElementById("result").value = y 
			document.getElementById("result").focus();
			}
			else
			{
			alert("Enter some values for computation");
			}
		
		} 
		
		
		function clear_val() 
		{ 
			document.getElementById("result").value = "" 
			document.getElementById("result").focus();
		} 
		
		document.getElementById("result").addEventListener("keypress", checkalpha);

function checkalpha(event) {

if((event.keyCode >= 64) && (event.keyCode <= 90) || (event.keyCode >= 97) && (event.keyCode <= 122)||(event.keyCode <=41))
{
    alert("Only numbers are allowed");
 event.returnValue = false;
  return; 
}
else if(event.code == 'Equal')
  {
  solve();
  event.returnValue = false;
  return;
  }
     
}
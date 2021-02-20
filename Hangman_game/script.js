
const correctLetters = [];
const wrongLetters = [];
let winnings=0
let figureParts = 0
const alphabet = "abcdefghijklmnopqrstuvwxyz"
let h1= document.createElement("h1")
h1.innerHTML=`Hangman Game`

let container	= document.createElement('div')
container.setAttribute("class","container")
let row1 = document.createElement("div")
row1.setAttribute("class","row text-center")

row1.innerHTML=`
<div class="d-flex m-auto" style="flex-wrap: wrap;justify-content: center;">
  <div class="first_row">
  No of Correct Letters<br/>  ${correctLetters.length}
  </div>
  <div class="first_row">
  No of Wrong Letters<br> ${wrongLetters.length}
  </div>
  <div class="first_row">
  No of victories<br> ${winnings}
  </div>
  </div>`


let row = document.createElement('div')
row.setAttribute("class","row justify-content-center")

let col_7=document.createElement("div")
col_7.setAttribute("class","col-md-7")

let insCol_7Row = document.createElement("div")
insCol_7Row.setAttribute("class","row")

let col_5_1 = document.createElement("div")
col_5_1.setAttribute("class","col-md-5")

let img=document.createElement("img")
img.src="img/Hangman-0.png"
img.id="hangimg"


let worddiv=document.createElement("div")
worddiv.id="word"




let col_5_2 = document.createElement("div")
col_5_2.setAttribute("class","col-md-5")

let wrngLetCon= document.createElement("div")
wrngLetCon.setAttribute("class","wrong-letters-container")

let wrngLet= document.createElement("div")
wrngLet.setAttribute("id","wrong-letters")



let alphRow = document.createElement('div')
alphRow.id='alphrow'
alphRow.setAttribute("class","row my-2 d-sm-block d-md-none")

let alphCol_4 = document.createElement("div")
alphCol_4.setAttribute("class","col-md-4")
alphCol_4.innerHTML=`${alphabet.split("").map(element=> `<button type="button" class="btn btn-secondary" onclick=workcheck('${element}')>${element}</button>`).join('')}`

let popContainer = document.createElement("div")
popContainer.setAttribute("class","popup-container")
popContainer.id="popup-container"

let popContainerdiv=document.createElement("div")
popContainerdiv.setAttribute("class","popup")

let popupH2 = document.createElement("h2")
popupH2.id="final-message"

let popupH3 = document.createElement("h3")
popupH3.id="final-message-reveal-word"

let popupButton = document.createElement("button")
popupButton.id="play-button"
popupButton.innerText=`Play Again`

let notificationContent=document.createElement("div")
notificationContent.id="notification-container"
notificationContent.setAttribute("class","notification-container")
notificationContent.innerHTML=`<p>You have already entered this letter</p>`

alphRow.append(alphCol_4)
popContainerdiv.append(popupH2,popupH3,popupButton)
popContainer.append(popContainerdiv)
wrngLetCon.append(wrngLet)
col_5_2.append(wrngLetCon)
col_5_1.append(img,worddiv)
insCol_7Row.append(col_5_2,col_5_1)
col_7.append(insCol_7Row)
row.append(col_7)
container.append(row1,row,alphRow)


container.style.display="none";

let gameStart= document.createElement('button')
gameStart.setAttribute("class","btn btn-success")
gameStart.innerHTML=`Start Game`
gameStart.id=`startgame`
gameStart.addEventListener('click',()=>{
	
	gameStart.style.display="none";
	container.style.display="block";

displayWord();
})

document.body.append(h1,gameStart,container,popContainer,notificationContent)



 const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');



const words1 = ['developer', 'programming', 'interface', 'designer'];
const words2 = ['jazz', 'squush', 'zugzwang', 'yclept'];
let selectedWord
if(winnings===0)
{
	selectedWord = words1[Math.floor(Math.random() * words1.length)];
}
else{
	selectedWord = words2[Math.floor(Math.random() * words2.length)];
}


let playable = true;


// Show hidden word
function displayWord() {
	wordEl.innerHTML = `
    ${selectedWord
			.split('')
			.map(
				letter => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
          </span>
        `
			)
			.join('')}
  `;
  row1.innerHTML=`<div class="d-flex m-auto" style="flex-wrap: wrap;justify-content: center;">
  <div class="first_row">
  No of Correct Letters<br/>  ${correctLetters.length}
  </div>
  <div class="first_row">
  No of Wrong Letters<br> ${wrongLetters.length}
  </div>
  <div class="first_row">
  No of victories<br> ${winnings}
  </div>
  </div>`

	const innerWord = wordEl.innerText.replace(/[ \n]/g, '');

	if (innerWord === selectedWord) {
		finalMessage.innerText = 'Congratulations! You won! 😃';
		popup.style.display = 'flex';
		winnings++
		playable = false;
	}
}


function updateWrongLettersEl() {
	
	
	wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;

  row1.innerHTML=`<div class="d-flex m-auto" style="flex-wrap: wrap;justify-content: center;">
  <div class="first_row">
  No of Correct Letters<br/>  ${correctLetters.length}
  </div>
  <div class="first_row">
  No of Wrong Letters<br> ${wrongLetters.length}
  </div>
  <div class="first_row">
  No of victories<br> ${winnings}
  </div>
  </div>`
	figureParts++
	let src=document.getElementById("hangimg").src=`img/Hangman-${figureParts}.png`
	
	
	
	if (wrongLetters.length === 6) {
		finalMessage.innerText = 'Unfortunately you lost. 😕';
		finalMessageRevealWord.innerText = `...the word was: ${selectedWord}`;
		popup.style.display = 'flex';
		winnings=0
		playable = false;
	}
}


function showNotification() {
	notification.style.display='flex'

	setTimeout(() => {
		notification.style.display='none'
	}, 2000);
}


window.addEventListener('keydown', e => {
	//debugger
	if (playable) {
		if (e.keyCode >= 65 && e.keyCode <= 90) {
			const letter = e.key.toLowerCase();

			if (selectedWord.includes(letter)) {
				if (!correctLetters.includes(letter)) {
					correctLetters.push(letter);

					displayWord();
				} else {
					showNotification();
				}
			} else {
				if (!wrongLetters.includes(letter)) {
					wrongLetters.push(letter);

					updateWrongLettersEl();
				} else {
					showNotification();
				}
			}
		}
	}
});


let workcheck=(e)=>{
	//debugger
	if (playable) {
		
			const letter = e;

			if (selectedWord.includes(letter)) {
				if (!correctLetters.includes(letter)) {
					correctLetters.push(letter);

					displayWord();
				} else {
					showNotification();
				}
			} else {
				if (!wrongLetters.includes(letter)) {
					wrongLetters.push(letter);

					updateWrongLettersEl();
				} else {
					showNotification();
				}
			}
		
	}
}


playAgainBtn.addEventListener('click', () => {
	playable = true;
	
	


	correctLetters.splice(0);
	wrongLetters.splice(0);

	if(winnings===0)
	{
		selectedWord = words1[Math.floor(Math.random() * words1.length)];
		
	}
	else{
		selectedWord = words2[Math.floor(Math.random() * words2.length)];
		
	}
	

	displayWord();

	updateWrongLettersEl();
	figureParts=0
	document.getElementById("hangimg").src=`img/Hangman-0.png`
	popup.style.display = 'none';
});


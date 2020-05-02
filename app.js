//alert('hello')
// var test = {};
var outcome;
var name2 = {};
var character = {};
var choice = {};

const addName = (ev) => {
  ev.preventDefault(); //to stop the form submitting 
  name2 = {
    testName: document.getElementById('name').value.toLowerCase()
  }
  if(!name2.testName){
    name2.testName = " Buffy"
  }
  console.log(name2.testName);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnName').addEventListener('click', addName);
});

const addCharacter = (ev) => {
  ev.preventDefault(); //to stop the form submitting 
  character = {
    health: 5,
    strength: 0,
    stealth: 0,
    // name: document.getElementById('name').value.toLowerCase(),
    charClass: document.getElementById('userCharacter').value.toLowerCase()
  }
  console.log(character.charClass);
  powerUp();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnChar').addEventListener('click', addCharacter);
});


const addChoice = (ev) => {
  ev.preventDefault();
  choice = {

    testChoice: document.getElementById('uChoice').value.toLowerCase()
  }
  console.log(choice.testChoice);
  //run a function here --
  game();

  }


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('attack').addEventListener('click', addChoice);
});

function game(){
  if (character.charClass === 'debugger') {
    debuggerProfile()
  }
}

function debuggerProfile (){
  if (choice.testChoice === 'attack') {
    document.getElementById('charMsg').textContent = "Using  your laptop "+ name2.testName +", you smashed that zombie with it! Success! you loot the store for goods and find a better, a pack of batteries and five can of Diet cokes.";
    outcome ='win';
    character.strength++;
  } else if (choice.playerChoice === "sneak" ||choice.playerChoice === "sneak by the zombie"){
    document.getElementById('charMsg').textContent = "As a awesome debugger which you are " + name2.testName + " , you calmly crawling under the table and slowly sneaking from the shop. Now you are in the empty street and can see a car in coming towards you...";
    outcome ='win';
    character.strength++;
  }
}
function powerUp (){
  if (character.charClass === "soldier") {
  character.strength = 5;
}
if (character.charClass === "doctor") {
  character.health = 7;
}
if (character.charClass === "artist") {
  character.stealth = 5;
}
if (character.charClass === "debugger"){
  character.stealth = 7;
  character.strength = 5;
}
}
function result (){
  setTimeout( function () {
  if (outcome === "lose") {
    
    document.getElementById('charMsg').textContent = "You lose!.....";
    } else if (outcome === "win") {
      document.getElementById('charMsg').textContent = "You win, HOORAY!!!";
      document.getElementById('userChoice').style.display = 'none';
  document.getElementById('uChoice').style.display = 'none';
    }
  }, 3000);
}


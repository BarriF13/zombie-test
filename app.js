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
    if (choice.testChoice === 'attack') {
      document.getElementById('text').textContent = "Using only your bear hands "+ name2.testName +", you slay that zombie! Success! you loot the store for goods and find an axe, a pack of batteries and five can of Diet cokes.";
      outcome ='win';
      character.strength++;
    }
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
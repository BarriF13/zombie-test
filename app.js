//alert('hello')
// var test = {};
var outcome;
var playerName = {};
var character = {};
var choice = {};

const addName = (ev) => {
  ev.preventDefault(); //to stop the form submitting 
  playerName = {
    pName: document.getElementById('name').value.toLowerCase()
  }
  if(!playerName.pName){
    playerName.pName = " Buffy"
  }
  console.log(playerName.pName);
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

    playerChoice: document.getElementById('uChoice').value.toLowerCase()
  }
  console.log(choice.playerChoice);
  //run a function here --
  game();

  }


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('attack').addEventListener('click', addChoice);
});

function game(){
  if (character.charClass === 'debugger') {
    debuggerProfile()
  } else if (character.charClass === 'soldier') {
    soldierProfile()
  } else if (character.charClass === 'artist') {
    artistProfile()
  } else if (character.charClass === 'doctor') {
    doctorProfile()
  }
}

function debuggerProfile (){
  if (choice.playerChoice === 'attack') {
    document.getElementById('charMsg').textContent = "Using  your laptop "+ playerName.pName +", you smashed that zombie with it! Success! you loot the store for goods and find a better, a pack of batteries and five can of Diet cokes.";
    outcome ='win';
    character.strength++;

    document.getElementById('showPoints').textContent = "your health : "+character.health+"your strength : " +character.strength;

  } else if (choice.playerChoice === "sneak" ||choice.playerChoice === "sneak by the zombie"){
    document.getElementById('charMsg').textContent = "As an awesome debugger which you are " + playerName.pName + " , you calmly crawling under the table and slowly sneaking from the shop. Now you are in a empty street and can see a car in coming towards you...";
    outcome ='win';
    character.stealth++;

    document.getElementById('showPoints').textContent = "your health : "+character.health+"your strength : " +character.strength;
  }
}

function soldierProfile (){
  if (choice.playerChoice === 'attack') {
    document.getElementById('charMsg').textContent = "Attacking the zombie with your bare hand "+ playerName.pName +", you slay that zombie!Victory! you just picked up a big axe and  off to kill them all.";
    outcome ='win';
    character.strength++;

    document.getElementById('showPoints').textContent = "your health : "+character.health+"your strength : " +character.strength;

  } else if (choice.playerChoice === "sneak" ||choice.playerChoice === "sneak by the zombie"){
    document.getElementById('charMsg').textContent = "No no no " + playerName.pName + " , while you where sneaking out behind the zombie, accidentally dropped a can of diet coke...OH DEAR";
    setTimeout(() => {
      document.getElementById('charMsg').textContent = "And now zombie is jumping on you and bit your head off";
    }, 2000);
    outcome ='lose';
    character.stealth++;

    document.getElementById('showPoints').textContent = "your health : "+character.health+"your strength : " +character.strength;
  }
}
function artistProfile (){
  if (choice.playerChoice === 'attack') {
    document.getElementById('charMsg').textContent = "Attacking the zombie with your bare hand "+ playerName.pName +", you slay that zombie!Victory! you just picked up a big axe and  off to kill them all.";
    outcome ='win';
    character.strength++;

    document.getElementById('showPoints').textContent = "your health : "+character.health+"your strength : " +character.strength;

  } else if (choice.playerChoice === "sneak" ||choice.playerChoice === "sneak by the zombie"){
    document.getElementById('charMsg').textContent = "No no no " + playerName.pName + " , while you where sneaking out behind the zombie, accidentally dropped a can of diet coke...OH DEAR";
    setTimeout(() => {
      document.getElementById('charMsg').textContent = "And now zombie is jumping on you and bit your head off";
    }, 2000);
    outcome ='lose';
    character.stealth++;

    document.getElementById('showPoints').textContent = "your health : "+character.health+"your strength : " +character.strength;
  }
}
function doctorProfile (){
  if (choice.playerChoice === 'attack') {
    document.getElementById('charMsg').textContent = "Attacking the zombie with your bare hand "+ playerName.pName +", you slay that zombie!Victory! you just picked up a big axe and  off to kill them all.";
    outcome ='win';
    character.strength++;

    document.getElementById('showPoints').textContent = "your health : "+character.health+"your strength : " +character.strength;

  } else if (choice.playerChoice === "sneak" ||choice.playerChoice === "sneak by the zombie"){
    document.getElementById('charMsg').textContent = "No no no " + playerName.pName + " , while you where sneaking out behind the zombie, accidentally dropped a can of diet coke...OH DEAR";
    setTimeout(() => {
      document.getElementById('charMsg').textContent = "And now zombie is jumping on you and bit your head off";
    }, 2000);
    outcome ='lose';
    character.stealth++;

    document.getElementById('showPoints').textContent = "your health : "+character.health+"your strength : " +character.strength;
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


//alert('hello')
// var test = {};
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
  if (character.charClass === 'debugger') {
    if (choice.testChoice === 'attack') {
      document.getElementById('text').textContent = " It is working"
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('attack').addEventListener('click', addChoice);
});


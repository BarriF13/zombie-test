//alert('hello')
var character = {}

const addCharacter = (ev) => {
  ev.preventDefault(); //to stop the form submitting 
   character = {
    health: 5,
    strength: 0,
    stealth: 0,
    name: document.getElementById('name').value.toLowerCase(),
    charClass: document.getElementById('userCharacter').value.toLowerCase()
  }
 
  console.log(character.name);
  console.log(character.charClass);
  //document.forms[0].reset();


}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('but').addEventListener('click', addCharacter);
});

const addChoice = (ev) => {
  ev.preventDefault();
  let test = {
    
   choice: document.getElementById('uChoice').value.toLowerCase()
  }
  console.log(test.choice);
  console.log(character.name);
  if (character.charClass === 'debugger' ){
    if( test.choice === 'attack') {
  document.getElementById('text').textContent =" It is working"}
}
}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('attack').addEventListener('click', addChoice);
});

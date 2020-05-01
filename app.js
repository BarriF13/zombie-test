//alert('hello')


const addCharacter = (ev) => {
  ev.preventDefault(); //to stop the form submitting 
  let character = {
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



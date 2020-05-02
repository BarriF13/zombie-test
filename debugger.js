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

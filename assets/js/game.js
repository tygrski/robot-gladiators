

console.log(enemyInfo.names);
console.log(enemyInfo.length);
console.log(enemyInfo.names[0]);
console.log(enemyInfo.names[3]);

// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
 
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerInfo.money = Math.max (0, playerInfo.money - 10);
        console.log("playerMoney", playerInfo.money);
        break;
      }
    }

    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemyInfo.Name + '. ' + enemyInfo.name + ' now has ' + enemyinfo.health + ' health remaining.'
    );

    // check enemy's health
    if (enemyinfo.Health <= 0) {
      window.alert(enemyInfo.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    var damage = randomNumber(enemyAttack -3, enemyAttack);
    playerInfo.health = Math.max(0,  playerInfo.health - damage);
    console.log(
      enemyInfo.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};
// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max -min -1) + min);

  return value;
};

// function to start a new game
var startGame = function()  {
  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;
// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyInfo.length; i++) {
  // if player is still alive, keep fighting
  if (playerInfo.health > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyObj = enemyInfo[i];

    // reset enemyHealth before starting new fight
    pickedEnemyObj.health = randomNumber(40,60);

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyObj);
  }
  // if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
}
// after loop ends, player is either out of health or enemies to fight, so run the end game function
endGame();
};
// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max -min -1) + min);

  return value;
};

// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if(playerInfo.health > 0)  {
    window.alert("Great job, you've survived  the game! You now have a score of" + playerInfo.money + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they want to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if(playAgainConfirm) {
    // restart game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};
// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max -min -1) + min);

  return value;
};
var playerInfo = {
  name: window.prompt("What is your name?"),
  health: 100,
  attack: 10,
  money: 10
};

var enemyInfo = [
{
  name: "Roborto",
  attack: randomNumber(10,14)
},
{
name: "Amy Android",
attack: randomNumber(10,14)
},
{
  name: "Robo trumble",
  attack: randomNumber(10,14)
}
];
// start the game when the page relaods
startGame();

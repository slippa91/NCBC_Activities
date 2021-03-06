const inquirer = require('inquirer');

let starters = [];
let subs = [];
let team = [];


function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;

  this.goodGame = function () {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense++;
      console.log(`Great offense. ${this.name}'s offensive rating is now ${this.offense}.`);
    } else {
      this.defense++;
      console.log(`Great defense. ${this.name}'s defensive rating is now ${this.defense}.`);
    }
  };

  this.badGame = function () {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense--;
      console.log(`Horrible offense. ${this.name}'s offensive rating is now ${this.offense}.`);
    } else {
      this.defense--;
      console.log(`Horrible defense. ${this.name}'s defensive rating is now ${this.defense}.`);
    }
  };

  this.printStats = function () {
    console.log(`Player ${this.name}'s stats are as follows:\nPosition: ${this.position}\nOffensive Rating: ${this.offense}\nDefensive Rating: ${this.defense}\n\n\b`)
  };

};  //close Player constructor



let createPlayers = function () {

  if (team.length < 3) {

    inquirer.prompt([
      {
        name: 'name',
        message: 'What is the players name?'
      },
      {
        name: 'position',
        message: 'What is the players position?'
      },
      {
        name: 'offense',
        message: 'How does the player rank on offense (1-10)?'
      },
      {
        name: 'defense',
        message: 'How does the player rank on defense(1-10)?'
      }

    ]).then(function (answers) {

      //console.log("answers", answers);

      let player = new Player(answers.name, answers.position, +answers.offense, +answers.defense);

      //console.log("newPlayer", player);

      if (starters.length < 2) {
        starters.push(player);
        team.push(player);
        console.log(`${answers.name} is a starter!\n\n`)
      } else {
        subs.push(player);
        team.push(player);
        console.log(`${answers.name} is a sub!\n\n`)
      }
      createPlayers();
    }); //close answers

  } else {
    for (var i = 0; i < team.length; i++) {
      team[i].printStats();
    }
    playGame();
  }
}; // close createPlayers

createPlayers();


let gameCount = 1;
let score = 0


let playGame = function () {
  var opntOff = Math.ceil(Math.random(0) * 20);
  let opntDef = Math.ceil(Math.random(0) * 20);

  let startersOffTotal = 0;
  let startersDefTotal = 0;

  for (let i = 0; i < starters.length; i++) {
    startersOffTotal += starters[i].offense;
  }

  for (let j = 0; j < starters.length; j++) {
    startersDefTotal += starters[j].defense;
  }


  if (gameCount < 6) {
    //play game
    console.log(`Playing game number ${gameCount}.\nMy team's numbers:\nOffense: ${startersOffTotal}  Defense: ${startersDefTotal}\nThe opponent's numbers:\nOffense: ${opntOff}  Defense: ${opntDef}\n`);

    if (startersOffTotal >= opntOff) {
      score++;
      console.log(`Great Offense! We scored. The net score is ${score}.\n\n`)
    }

    if (startersDefTotal < opntDef) {
      score--;
      console.log(`Bad defense! They scored. The net score is ${score}.`)
    }
    gameCount++;
    //makeSubstitution();
    playGame();

  } else {
    endGame();
  }

}//close playGame


// let makeSubstitution = function () {
//   inquirer.prompt([
//     {
//       name: 'swap',
//       type: 'rawlist',
//       choices: starters.map(player => player.name),
//       message: 'Would you like to make a substitution?'
//     }
//   ]).then(function (answers) {
//     console.log(answers.swap);
//     playGame();
//   })

// } //close makeSubstitution


let endGame = function () {
  if (score >= 1) {
    console.log(`Great game. We win. The net score was ${score}`);
    starters.forEach(player => player.goodGame());
    playAgain();

  } else if (score = 0) {
    console.log(`We tied! The net score was ${score}`);
    playAgain();
  }
  else {
    console.log(`Bad game. We lose. The net score was ${score}`);
    starters.forEach(player => player.badGame());
    playAgain();
  }

}//close endGame





let playAgain = function () {
  inquirer.prompt([
    {
      name: 'again',
      type: 'confirm',
      message: 'Would you like to play again?',
      default: true
    }
  ]).then(function (answers) {
    if (answers.again) {
      starters = [];
      subs = [];
      team = [];
      gameCount = 1;
      score = 0;
      createPlayers();
    } else {
      console.log("Thanks for playing!")
    }
  })
} //close playGain







//PHASE 1

// let playGame = function () {
  //   var opntOff = Math.ceil(Math.random(0) * 20);
  //   let opntDef = Math.ceil(Math.random(0) * 20);

  //   if (gameCount < 6) {
    //     //play game
    //     console.log(`Playing game number ${gameCount}.\nThe opponent's numbers:\nOffense: ${opntOff}\nDefense: ${opntDef}`);
    //     gameCount++;
    //     playGame();

    //   } else {
      //     console.log("Game Over");
      //   }

      // }//close playGame

      // playGame();
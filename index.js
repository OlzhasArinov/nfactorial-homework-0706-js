const TOURNAMENT_OWNER = 'Dalida';
const TOURNAMENT_NAME = `${TOURNAMENT_OWNER}'s tournament`
const TOURNAMENT_DAY = "11.06.2022";

let tournamentType = 'football';

let firstTeamName = 'Mentors';
let secondTeamName = 'Students';

let captain = 'Aidar';
captain = 'Beknar';

let numberOfTeams = 2;

let isTeamWinner = true;

let score = null;

let player = {
    name: 'Madi',
    age: 20,
    origin: 'Semey',
    position: 'forward'
};

alert(player.name);
alert(player.position);

player.team = 'Students';
delete player.origin;

let key = 'foot-size';
player[key] = 42;

player.print = function() {
    console.log(this.name + this.position);
};
player.print();

for (key in player) {
  console.log(key);
}


let firstTeam = ['Aidar', 'Mura', 'Beka', 'Aruzhan', 'Aidana'];
let secondTeam = ['Madi', 'Bassar', 'Olzhas', 'Alibi'];

console.log(firstTeam.length); 

secondTeam.push('Kristina');
secondTeam.pop();

firstTeam.unshift('Yeskhat');
firstTeam.shift();

let teams = firstTeam.concat(secondTeam);

let food = ['pizza', 'burger', 'pizza', 'salad', 'soup'];
let pizzas = food.filter((food) => food === 'pizza');
let bittenFood = food.map((food) => marker(food));

function announce(captain, firstTeamName, ...firstTeam) {
  return `${captain} of the ${firstTeamName}, the players: ${firstTeam}`  
};

const {firstName, lastName, ...otherInfo} = {
    firstName: 'Olzhas',
    lastName: 'Arinov',
    age: 25,
    country: Kazakhstan, 
    gender: 'Male'
};
console.log(otherInfo);

const phoneNumber = 87775679373;
function repeatPhoneNumber(a, b, c) {
    return a + b + c;
}
console.log(repeatPhoneNumber(...phoneNumber));

let result = 1 === "1" ? "true" : "false";
console.log(result);

let grid;
let finalGrid = grid ?? 'First team VS second team';
console.log(finalGrid)

let selectedPlayer = 'Madi';
if (selectedPlayer) {
  console.log('Replace' + selectedPlayer);
} else {
  console.log('Still play');
}

switch (injury) {
    case 'leg':
    case 'arm':
    case 'head':
        console.log('The player should be replaced');
    break;
    default:
        console.log('Everything is okay');
}

function show(player) {
    console.log(`${player.name} plays as ${player.position}`)
};


let countPlayers = function () {
  return teams.length;
};

let countPlayer = () => {
  return teams.length;
};
let findPlayer = (teams) => {
  return teams.includes('Madi');
};


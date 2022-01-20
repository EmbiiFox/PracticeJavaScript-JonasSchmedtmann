'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const openingHours={
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex,
    mainIndex,
    time,
    address
  }) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicous pasta with ${ing1}, ${ing2} and ${ing3}`)
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients)

  }
};
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'TMT17',
//   mainIndex: 2,
//   starterIndex: 1,
// });

// const arr = [7, 9, 11];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr)

// const newArr = [1, 2, ...arr]
// console.log(newArr)

// const ingredients = [prompt("Let's make pasta with Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
// console.log(ingredients);
// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2], ingredients[3])
// restaurant.orderPasta(...ingredients);

//Objects 
// const newRestaurant = {
//   ...restaurant,
//   founder: "embi",
//   foundedIn: 2023
// }
// console.log(newRestaurant)

// const add = function (...numbers) {
//   // console.log(numbers)
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum)
// }
// add(2, 3);
// add(2, 4, 4, 1, 5, 23, 5);

// const x = [23, 5, 7]
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'peas');
// restaurant.orderPizza('mushrooms');

// //DESTRUCTURING OBJECT
// const {
//   name,
//   openingHours,
//   categories
// } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //default values
// const {
//   menu = [], starterMenu: starters = []
// } = restaurant;
// console.log(menu, starters);

//mutating variables
// let a = 111;
// let b = 222;
// const obj = {
//   a: 13,
//   b: 12,
//   c: 2000
// };
// ({
//   a,
//   b
// } = obj);
// console.log(a, b);
// //nested object 
// const {
//   fri: {
//     open: o,
//     close: c
//   },
// } = openingHours;
// console.log(o, c)



// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

//Destructuring
// const [x, y, z] = arr;
// console.log(a, b, c)
// console.log(x, y, z)

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);


// const [starter, main] = restaurant.order(1, 2);
// console.log(starter, main)
// console.log(restaurant.order(1, 2));

// const nestedArr = [8, 4, [5, 6], 8];
// const [i, , j] = nestedArr
// console.log(i, j)
// const [l, , [m, n]] = nestedArr
// console.log(l, m, n)



//SHORT CIRCUITING
// OR
// console.log("_______OR____________")
// restaurant.numGuests = 0;
// console.log(3 || 'Jonas')
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1)
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2)
//And
// console.log("_______AND____________")
// console.log(0 && 'Jonas')
// console.log(7 && 'Jonas')
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushroom", "tomatoes")
// }
// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'tomatoes');


// console.log("___________LOGICAL ASSIGNMENT OPERATORS_________________")
// const res1 = {
//   name: 'Nairbi',
//   numGuests: 0,
// }
// const res2 = {
//   name: 'Cam Tu',
//   owner: "Le Nguyen",
// }
// res1.numGuests = res1.numGuests || 10;
// res2.numGuests = res2.numGuests || 10;
//OR
// res1.numGuests ||= 10;
// res2.numGuests ||= 10;
//??//
// res1.numGuests ??= 10;
// res2.numGuests ??= 10;
//AND
// res1.name &&='NOBODY';
// res2.name &&='NOBODY';
// console.log(res2.numGuests)
// console.log(res1)
// console.log(res2)


//////////////////////////////////////////////////////////////////
//CHALLENGE#1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀
//1.
// const [players1,players2] = game.players;
// console.log(players1,players2);
//2. 
// const [gk,...fieldPlayers]=players1;
// console.log(gk,fieldPlayers);
//3. 
// const fullPlayers=[...players1,...players2];
// console.log(fullPlayers)
//4. 
// const players1Final=[...players1,'Thiago', 'Coutinho','Perisic'];
// console.log(players1Final)
//5. 
// const {odds:{team1,x:draw,team2}}=game;
// console.log(team1,draw,team2);
//6. 
// const printGoals=function(...players){
//   console.log(players)
//   console.log(`${players.length} goal were scored`)
// }
// printGoals('Nairubi','embi','camtu');
// printGoals(...game.scored);

//7. 
// const winner=team1>team2?console.log('Team 2 is more likely to win '):console.log('Team 1 is more likely to win ');
// team1<team2&&console.log('Team 1 is more likely to win')
// team1>team2&&console.log('Team 2 is more likely to win')



// console.log("________________LOOPING ARRAY______________")
// const menu=[...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// for(const item of menu){
//   console.log('const item of menu',item)
// }
// for(const [i,el] of menu.entries()){
//   // console.log('entries()',i)
//   console.log(`${i+1}:${el}`);
// }
// console.log(menu.entries());
// console.log([...menu.entries()]);


// console.log("___________LOOPING OBJECT________________")
// console.log('Properties name')
// const properties=Object.keys(openingHours)
// console.log(properties)
// let openStr=`We are open on ${properties.length} days: `;
// for(const day of Object.keys(openingHours)){
//   openStr+=`${day} `;
// }
// console.log(openStr)
// console.log('Properties values')
// const values=Object.values(openingHours);
// console.log(values);

//Entire object
// const entries=Object.entries(openingHours);
// console.log('Entries object', entries);
//[key,value]
// for(const [key, {open,close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

/////////////////////////////////////////////////////
console.log("__________CHALLENGE #2_____________");

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
//1. 
// for(const player of game.scored){
//   console.log(player)
// }
for(const [i,player] of game.scored.entries()) {
  console.log(`Goal ${i}: ${player}`)
}
//2. 
const numbersValue=Object.values(game.odds);
let average;
let sum=0;
for(const num of numbersValue){
  console.log(num);
  sum+=num;
  average=sum/numbersValue.length;
}
console.log(`Average odds is ${average}`)
//3. 
for(const [team, odd] of Object.entries(game.odds)) {
  console.log(team,odd)
  const teamStr=team==='x'?'draw':`victory ${game[team]}`;
  console.log(`Odd of ${teamStr} :${odd}`)
  // console.log(`Off of victory`)
}

console.log('__________________SET___________________')
const ordersSet= new Set(['Pasta','Pizza','Milk tea','Pizza','Green tea']);
console.log(new Set('1312'));
console.log(ordersSet.size);
console.log(ordersSet.has('Bread'));
console.log(ordersSet.add('Tomatoes'))
// console.log(ordersSet.delete('Pizza'))
// console.log(ordersSet.clear())
// console.log(ordersSet);
// for(const order of ordersSet) {
//   console.log(order);
// }
// //Example: 
// const staff=['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique= [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size)


// console.log('____________________________MAP_________________');
// const rest =new Map();
// rest.set('name','Nairubi cẩm tú');
// rest.set(1,'Vietnam, Thailand');
// console.log(rest.set(2,'China, Korea'));
// const test=rest
//   .set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open',11).set('close',23)
//   .set(true,'OPEN')
//   .set(false,'CLOSE');
// console.log(test);
// console.log(rest.get(true))


// const time=21;
// console.log( rest.get(time>rest.get('open')&&time<rest.get('close')?false:true));
// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);

// const arr=[1,2];
// rest.set(arr,"Test");
// rest.set(document.querySelector('h1'),'Heading')
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));

const question= new Map([
  ['question',"Cô gái nào dễ thương hiền lành tốt bụng baby so ciu nhất quả đất?"],
  [1,'Cô gái bàn bên'],
  [2,'Cô gái nhà người ta'],
  [3,'Hông có cô nào hết'],
  [4,'Nairubi Cẩm Tú chứ còn ai vào đây nữa'],
  ['correct',4],
  [true,'Correct ❤'],
  [false,"Try again!"]
]);
console.log(question);
//convert object to map
console.log(Object.entries(openingHours))
const hoursMap= new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz application
console.log(question.get('question'));
for(const [key,value] of question){
  if(typeof key==='number'){
    console.log(`Answer ${key}: ${value}`);
  }4
}
// const answer=+prompt("Your answer is");
const answer=4;
console.log(answer);
console.log(question.get(question.get('correct')===answer));
//convert map to array
console.log([...question])
console.log('ENTRIES',[...question.entries()])
console.log('KEY',[...question.keys()])
console.log('VALUE',[...question.values()]);

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
//1.
// console.log(gameEvents.values())
const events =[...new Set(gameEvents.values())] 
console.log(events);
//2.
console.log(gameEvents.delete(64))
console.log(gameEvents)
//3.
const time=[...gameEvents.keys()].pop();
console.log(time);
console.log(`"An event happened, on average, every ${time/gameEvents.size} minutes"`);
//4.[FIRST HALF] 17: ⚽️ GOAL
for(const [min,event] of gameEvents){
  const half=min<=45?`[FIRST HALF]`:`[SECOND HALF]`
  console.log(`${half} ${min}: ${event}`);
}

// console.log("________________WORKING IN STRING____________");
// const airline="Vietnam airliner";
// const plane="A79";
// console.log(plane[0])
// console.log(plane[1])
// console.log( typeof plane[2])
// console.log(airline.length)

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.slice(4))

// console.log('Lower case:',airline.toLowerCase());
// console.log('Upper case:',airline.toUpperCase());

//Fix capitalization in name
// const passenger='naIRuBi';
// const passengerLower=passenger.toLowerCase();
// const passengerCorrect=passengerLower[0].toUpperCase()+ passengerLower.slice(1);
// console.log(passengerCorrect);

//Comparing emails
// const email='nairubi@gmail.com';
// const loginEmail='Nairubi@Gmail.Com \n';
// const emailLower=loginEmail.toLowerCase();
// const trimmedEmail=emailLower.trim();
// console.log(trimmedEmail);

// const normalizedEmail =loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// replacing
// const priceVN='23.000vnd';
// const priceUS=priceVN.replace('vnd','$').replace('.',',');
// console.log(priceUS);

// const announcement ='All passengers come to barding door 21. Boarding door 21!';
// console.log(announcement.replace('door','gate'));
// console.log(announcement.replace(/door/g,'gate'));

//Booleans
// const planet='A320embi';
// console.log(planet.includes('embi'));
//practice exercise
// const checkBaggage=function(items){
//   const baggage=items.toLowerCase();
//   if(baggage.includes('knife')|| baggage.includes('gun')){
//     console.log('You are not allowed on board');
//   }else{
//     console.log('Welcome aboard'); 
//   } 
// }
// checkBaggage('I have a laptop, some foof and a pocket knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

const capitalizeName=function(name){
  console.log(name);
  const names=name.split(' ');
  const namesUpper=[]
  for(const n of names){
    // namesUpper.push(n[0].toUpperCase()+n.slice(1)); 
    namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
  }
  console.log(namesUpper.join(' ')); 
  
}
capitalizeName('jessica and smith davis');
capitalizeName('nairubi cam tu');

//Padding b
const message='Go to gate 21'
console.log(message.padStart(21,'+').padEnd(35,'+'));
console.log(message.padStart(29,'+'));

const maskCreditCard=function(number){
  const str=number+'';
  const last =str.slice(-4);
  return last.padStart(str.length,'*')
}
console.log(maskCreditCard(434721847623847));
console.log(maskCreditCard('64347263487242'));
//repeat
const message2='Bad weather ...All departues delayed...'
console.log(message2.repeat(2));

const planeInLine=function(n){
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}
planeInLine(5);
planeInLine(13);


console.log('_____________________CODE CHALLENGE #4');

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
// console.log(eval(testArr));
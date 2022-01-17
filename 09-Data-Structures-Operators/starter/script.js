'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
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
restaurant.orderDelivery({
  time: '22:30',
  address: 'TMT17',
  mainIndex: 2,
  starterIndex: 1,
});

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
const newRestaurant = {
  ...restaurant,
  founder: "embi",
  foundedIn: 2023
}
console.log(newRestaurant)

const add = function (...numbers) {
  // console.log(numbers)
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum)
}
add(2, 3);
add(2, 4, 4, 1, 5, 23, 5);

const x = [23, 5, 7]
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'peas');
restaurant.orderPizza('mushrooms');

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
'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

console.log('COMPUTING USERNAME');
// const user='Nairubi Kha Tu';

// const createUsernames=function(user){
//   const username=user.toLowerCase().split(' ').map(name=>name[0]).join('');
//   // console.log('Username',username);
//   return username;
// }
// console.log(createUsernames('Nairubi Kha Tu'));
const createUsernames =function(accs){
  accs.forEach(function(acc){
    acc.username=acc.owner.toLowerCase().split(' ').map(name=>name[0]).join('');
  })
}
console.log(accounts);
createUsernames(accounts)

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



///////////////////////////////////////////////////
console.log('__________BANKIST____________');
const displayMoments=function(movements) {
  movements.forEach(function(mov,i,) {
    const type=mov>0?'deposit':'withdrawal'
    
    const http=`
      <div class="movements__row">
        <div class="movements__type movements__type--deposit">${i+1} deposit</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;
  })
}
displayMoments(account1.movements)



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//////////////////////////////////
// let arr=['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2)); 
// console.log([...arr]);
// console.log(arr.splice(-1));
// console.log(arr.splice(1,3));

//REVERSE
// console.log('REVERSE');
// arr=['a', 'b', 'c', 'd', 'e'];
// const arr2=['j','k','l','m','n'];
// console.log(arr2.reverse());

// console.log("CONCAT");
// const letters=arr.concat(arr2);
// console.log(letters);
// console.log([...arr,...arr2]);

// console.log('JOIN');
// console.log(letters.join('-'));

// console.log('THE NEW OF METHOD');
// const array=[23,11,64];
// console.log(array[0]);
// console.log(array.at(0));

// console.log('NORMAL FOR LOOP');
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for(const [i,movement] of movements.entries()) {
//   if(movement>0){
//     console.log(`Movement ${i+1} You deposited ${movement}`);
//   }else{
//     console.log(`Movement ${i+1} You withdraw ${Math.abs(movement)}`);
//   }
// }
// console.log('FOREACH');
// movements.forEach(function(mov,i,arr){
//   if(mov>0){
//     console.log(`Movement ${i+1} You deposited ${mov}`);
//   }else{
//     console.log( `Movement ${i+1} You withdraw ${Math.abs(mov)}`);
//   }
// })

// console.log('FOREACH WITH MAPS AND SETS');
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function(value,key,map) {
//   console.log(`${key}: ${value}`);
// })

//Set 
// console.log('SET FOREACH ');
// const currenciesUnique= new Set(['USD', 'EUR', 'GBP', 'Pound']);
// console.log(currenciesUnique);
// // currenciesUnique.forEach(function(value, key,map) {
// currenciesUnique.forEach(function(value, _,map) {
//   console.log(`${value}: ${value}`);
// })


// let currentAccount;
// btnLogin.addEventListener('click', function (e) {
//   // Prevent form from submitting
//   e.preventDefault();

//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     // Display UI and message
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(' ')[0]
//     }`;
//     containerApp.style.opacity = 100;

//     // Clear input fields
//     inputLoginUsername.value = inputLoginPin.value = '';
//     inputLoginPin.blur();

//     // Update UI
//     updateUI(currentAccount);
//   }
// });



console.log('FILTER');

//// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits=movements.filter(function(mov){
//   return mov>0
// })
// const deposits=movements.filter(mov=>mov>0);
// // console.log(movements);
// // console.log(deposits);

// const depositsFor=[];
// const withdrawsFor = [];
// for(const mov of movements){
//   mov>0?depositsFor.push(mov):withdrawsFor.push(mov)
// }
// console.log('Other way');
// const withdraw=movements.filter(mov=>mov<0)
// console.log(withdraw);
// console.log(depositsFor);
// console.log(withdrawsFor);


// console.log('REDUCE');
// console.log(movements);
// const balance=movements.reduce((acc,cur,i)=> acc + cur,0);
// console.log(balance);

// let balance2=0;
// for(const mov of movements){
//   balance2+=mov;
// }
// console.log(balance2);
// console.log('max value');
// const max=movements.reduce((acc,mov)=>{
//   return acc>mov?acc:mov
// },movements[0])
// console.log(max);

console.log('CHALLENGE #2');
// const calcAverageHumanAge=function(ages){
//   const humanAge=ages.map(age=>age<=2?2*age:16+age*4);
//   console.log(humanAge);
//   const adults=humanAge.filter(age=>age>=18)
//   console.log('adults',adults);
//   // const average=adults.reduce((acc,age)=>age+acc)/adults.length;
//   const average=adults.reduce((acc,age,i,arr)=>age+acc/arr.length,0);
//   console.log('Average',average);
//   return average
// }
// const avg1= calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// const avg2=calcAverageHumanAge([16,6,10,5,6,1,4]);
// console.log(avg1,avg2);


console.log('____________CHAINING METHOD_______');
const eurToUsd=1.1;
//PIPELINE
const totalDepositsUSD=movements.filter(mov=>mov>0).map(mov=>mov*eurToUsd).reduce((acc,mov)=>acc+mov,0);
console.log(totalDepositsUSD);

console.log('_________CHALLENGE 3________-');
const calcAverageHumanAge=ages=>
  ages.map(age=>(age<=2?2*age:16+age*4))
  .filter(age=> age>=18)
  .reduce((acc,age,i,arr)=>acc+age/arr.length,0);;
const avg1= calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2=calcAverageHumanAge([16,6,10,5,6,1,4]);
console.log(avg1,avg2);

console.log('FIND METHOD');
const firstWithdrawal=movements.find(mov=>mov<0);
console.log(firstWithdrawal);
console.log(accounts);
const account =accounts.find(acc=>acc.owner==='Jessica Davis');
console.log(account);

console.log('IMPLEMENT LOGIN');
let currentAccount;
btnLogin.addEventListener('click',function(e){
  //Prevent form from submitting again
  e.preventDefault();
  // console.log('LOGIN');
  currentAccount=accounts.find(acc=>acc.owner===inputLoginUsername.value)
  console.log('current account',currentAccount);
  // currentAccount?.pin===+inputLoginPin.value?console.log('LOGIN'):console.log('FAIL');
  if(currentAccount?.pin===Number(inputLoginPin.value)){
    console.log('LOGIN');
    labelWelcome.textContent =`Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity =1;
  }
})

console.log('FLAT');
console.log('FILL');
console.log(1,2,3,4,5,6,7);
console.log(new Array(1,2,3,4,5,6,7));
const x = new Array(7);
console.log(x);
console.log(x.map(()=>5));
console.log(x.fill(1,3,5));
console.log(x.map(()=>5));

console.log('FROM');
const y= Array.from({length:7},()=>1);
console.log(y);

const z=Array.from({length:7}, (_,i)=>i+1);
console.log(z);

labelBalance.addEventListener('click', function(){
  const movementsUI=Array.from(document.querySelectorAll('.movements__value'),
  el=>+el.textContent.replace('€', ''));
  // console.log(movementsUI.map(el=>el.textContent.replace('€','')));
  console.log(movementsUI);
  const movementsUI2=[...document.querySelectorAll('.movements__value')];
})

console.log('ARRAY METHOD PRACTICE___________________');
// const bankDepositSum=accounts.map(acc=>acc.movements).flat();
const bankDepositSum=accounts
  .flatMap(acc=>acc.movements)
  .filter(mov=>mov>0)
  .reduce((sum,cur)=> sum+cur,0 );
console.log(bankDepositSum);

// 2
// const numDeposits1000=accounts.flatMap(acc=>acc.movements).filter(mov=>mov===1000).length;
// console.log(numDeposits1000);
//3
const numDeposits1000 = accounts.flatMap(acc=>acc.movements).reduce((count,cur)=> (cur===1000?count+1:count),0)
console.log(numDeposits1000);

console.log('CHALLENGE 4');

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
console.log(dogs);
//1
// const recommendedFood = weight ** 0.75 * 28
dogs.forEach(dog => (dog.recFood=Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
const dogSarah= dogs.find(dog =>dog.owners.includes('Sarah'));
console.log(dogSarah);
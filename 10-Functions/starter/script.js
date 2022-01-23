'use strict';
// const bookings=[];
// const createBooking =function(flightNum, numPassengers=1,price=99*numPassengers){
//     // numPassengers = numPassengers ||1;
//     // price=price||199;
//     console.log('numPassenger', numPassengers);
//     const booking ={
//         flightNum,
//         numPassengers,
//         price,
//     }
//     console.log(booking );
//     bookings.push(booking);
// }
// createBooking('NAIRUBI1312',2);
// createBooking('NAIRUBI1312',undefined,2);

// //////////////////////////////////////////////
// console.log('_EXAMPLE2__');
// const flight = 'Nairubi1312'
// const nairubi={
//     name:'Nairubi Cam Tu',
//     passport:5541868712
// };
// const checkIn=function(flightNum,passenger){
//     flightNum='Nairubi2107',
//     passenger.name='Mrs. '+passenger.name
//     if(passenger.passport===5541868712){
//         alert('CHECKIN');
//     }else{
//         alert('WRONG PASSPORT')
//     }
// };
// checkIn(flight,nairubi)
// console.log(flight);
// console.log(nairubi);

// const flightNum=flight;
// const passenger=nairubi.passenger;
// const newPassport=function(person){
//     person.passport=Math.trunc(Math.random()*10000000)
// }
// newPassport(nairubi);
// checkIn(flight,nairubi)

// console.log('____________CALLBACK FUNCTION_____');
// const oneWord =function(str){
//     return str.replace(/ /g,'').toLowerCase();
// }
// const upperFirstWord=function(str){
//     console.log(str.split(' '));
//     const [first,...others]=str.split(' ');
//     console.log([first.toUpperCase(), ...others].join(' '));
//     return [first.toUpperCase(), ...others].join(' ')
// }
// //HOC
// const transformer=function(str,fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
    
// }
// transformer('Javascript is the best!',upperFirstWord)
// transformer('Nairubi is the best!',oneWord)

// const high5=function(){
//     console.log('🧤');
// }
// document.body.addEventListener('click',high5);

// ['Jonas','Martha','Ada'].forEach(high5);



console.log('__________FUNCTION RETURN FUNCTION___________');
const greet=function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}
const greeterHi=greet('Hi');
greeterHi('Nairubi')
greet('HI')('Nairubi')

//Challenge 
const greetArr=greeting => name => console.log(`${greeting} ${name}`);
greetArr('hello')('EMbi')

const lufthansa={
    airline:'Lufthansa',
    iataCode:'LH',
    bookings:[],
    book(flightNum,name){
        console.log(`${name} booked at seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    }
}
lufthansa.book(239,'Nairubi Cam Tu')
console.log(lufthansa);
const eurowing ={
    airline:'Embi xinh đẹp',
    iataCode:'EW',
    bookings:[],
}
const book=lufthansa.book;
// book(23,'Sarah')
// DOESNT WORK 
book.call(eurowing,23,'Sarah');
console.log(eurowing);
book.call(lufthansa,23,'Sarah Dante');
console.log(lufthansa);


const swiss={
    airline:'Swiss Air Lines',
    iataCode: 'LX',
    bookings:[]
}
book.call(swiss,583,"Marrie");
console.log(swiss);

//Apply method 
console.log("____APPLY METHOD____");
const flightData=[583,'George Cooper'];
book.apply(swiss,flightData);
console.log(swiss);
book.call(swiss,...flightData);

console.log('___BIND METHOD__');
const bookEW=book.bind(eurowing);
const bookLU=book.bind(lufthansa);
const bookLX=book.bind(swiss);
bookEW(23,'Stefan curry');
const bookEW23=book.bind(eurowing,23);
bookEW23('Bixinhdep');

//With event listeners
lufthansa.planes=13;
lufthansa.buyPlane=function(){
    console.log('This',this);
    this.planes++;
    console.log('This plane',this.planes);
}

document.querySelector('.buy ').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax=(rate,value)=>value+value*rate;
console.log(addTax(10,200));

const addVAT=addTax.bind(null,0.23);
// const addVAT=value=>value+value*0.23;
console.log(addVAT(200));

const addTaxRate=function(rate){
    return function(value){
        return value+value*rate;
    }
}
const addVAT2=addTaxRate(0.23)
console.log(addVAT2(200));

console.log('________CHALLENGE #1___________');
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
      // Get answer
      const answer = Number(
        prompt(
          `${this.question}\n${this.options.join('\n')}\n(Write option number)`
        )
      );
      console.log(answer);
  
      // Register answer
      typeof answer === 'number' &&
        answer < this.answers.length &&
        this.answers[answer]++;
  
      this.displayResults();
      this.displayResults('string');
    },
  
    displayResults(type = 'array') {
      if (type === 'array') {
        console.log(this.answers);
      } else if (type === 'string') {
        // Poll results are 13, 2, 4, 1
        console.log(`Poll results are ${this.answers.join(', ')}`);
      }
    },
  };
  
  document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));
  
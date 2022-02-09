'use strict';
const Person= function(firstName, birthYear){
    // console.log(this)
    this.firstName=firstName;
    this.birthYear=birthYear;

    //Never to this
    this.calcAge=function(){
        console.log(2022-this.birthYear)
    }
}
const nairubi=new Person('Nairubi',2000);
console.log(nairubi)
const embi= new Person('EMBI',2000);
const camtu= new Person('Cam Tu',2000);
console.log(embi,camtu)
console.log(nairubi instanceof Person)
console.log('PROTOTYPE')

console.log('Prototype',Person.prototype);
Person.prototype.calcAge=function(){
    console.log(2022-this.birthYear)
}
nairubi.calcAge();
embi.calcAge();
// console.log(nairubi.__proto__)
console.log('Way1',nairubi.__proto__ ===Person.prototype)
console.log('Way2',Person.prototype.isPrototypeOf(nairubi))
console.log('Way3',Person.prototype.isPrototypeOf(Person))

Person.prototype.species="Homo Sapiens";
console.log(nairubi.species,embi.species)
console.log(nairubi.hasOwnProperty('species'));


console.log('ES6')
class PersonCl{
    constructor(fullName, birthYear) {
        this.fullName=fullName;
        this.birthYear=birthYear;
    }
    calcAge(){
        console.log(2022-this.birthYear)
    }
    greeting(){
        console.log(`Hi ${this.fullName}.`)
    }
}
const taman= new PersonCl('Tâm An',2019);
console.log(taman)
taman.calcAge();
taman.greeting();

// console.log('GETTER AND SETTER');
// const account= {
//     owner: 'Nairubi tâm sáng',
//     movement:[200,300,790,1000],
//     get latest(){
//         return this.movement.slice(-1).pop();
//     },
//     set latest(){
//         this.movement.push(mov)
//     }
// }
// console.log(account.latest)
// account.latest=[40]
// console.log(account.latest)

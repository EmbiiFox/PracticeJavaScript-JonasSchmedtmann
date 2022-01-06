// 'use strict';

// let hasCert=false;
// const passTest=true;
// if(passTest) {hasCert=true};
// if(hasCert) {console.log("You can drive");}

const info={
    firstName:'Nairubi',
    lastName:'Cẩm Tú',
    birthYear:2000,
    job:'teacher',
    hasDriversLicense:false,

    // calcAge:function () {
    //     console.log(this);
    //     return 2022-this.birthYear;
    // }
    calcAge:function () {
        this.age=2022-this.birthYear;
        return this.age;
    },
    // calcAge:function (birthYear) {
    //     return 2022-birthYear;
    // }

    getSummary:function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} and she has ${this.hasDriversLicense? 'a':'no'} driver's license`
    }
}
console.log(info.calcAge())
// console.log(info.calcAge(2000))

console.log(info.getSummary())


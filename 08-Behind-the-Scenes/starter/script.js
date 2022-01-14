'use strict';
// console.log(this);
// const calcAge = function (birthYear) {
//     console.log(2022 - birthYear);
//     // console.log(this);
// }
// calcAge(2000);

// const calcAgeArrow = birthYear => {
//     console.log(2022 - birthYear);
//     // console.log(this)
// }
// calcAgeArrow(2000)

// const nairubi = {
//     year: 2000,
//     calcAge: function () {
//         console.log(this);
//         console.log(2023 - this.year);
//     }
// }
// nairubi.calcAge();

// const embii = {
//     year: 2003,
// }
// embii.calcAge = nairubi.calcAge;
// embii.calcAge();
var firstName = 'Embii'
const nairubi = {
    firstName: 'Nairubi',
    year: 2000,
    calcAge: function () {
        // console.log(this);
        console.log(2022 - this.year);

        // const isEmbii = function () {
        //     console.log(this.year >= 1981 && this.year <= 2010)
        // }
        // isEmbii();

        const isEmbii = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 2010)
        }
        isEmbii();

    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
    greeting: function () {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
}
nairubi.calcAge();
// console.log(this.firstName)
// nairubi.greet();
// nairubi.greeting();
'use strict';
var getEle = function (selector) {
    return document.querySelector(selector);
}
const modal = getEle('.modal');
const overlay = getEle('.overlay');
const btnCloseModal = getEle('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal)

const openModal = function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for (let i = 0; i < btnsOpenModal.length; i++) {
    // console.log(btnsOpenModal[i].textContent)
    btnsOpenModal[i].addEventListener('click', openModal);
}

// btnCloseModal.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });
btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', function () {
//     modal.classList.add('hidden');
// overlay.classList.add('hidden');
// });
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        // console.log('Esc is pressed')
        closeModal();

    }
})
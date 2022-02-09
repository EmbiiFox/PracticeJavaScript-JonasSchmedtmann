'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;
console.log(navigator.geolocation)
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        console.log('Position ',position);
        const {latitude, longitude}=position.coords;
        console.log(latitude,longitude)
        console.log(`https://www.google.com/maps/@${latitude}.${longitude},16z?hl=vi-VN`);
        const coords=[latitude,longitude];

        //L.map('map') thì map là id tên là map nha
        // const map = L.map('map').setView([51.505, -0.09], 13);
        map = L.map('map').setView(coords, 23);
        console.log(map);
        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        map.on('click', function(mapE){
            mapEvent=mapE;
            form.classList.remove('hidden');
            inputDistance.focus();
            // console.log(mapEvent);
            // const {lat,lng} = mapEvent.latlng;

            // L.marker([lat,lng]).addTo(map)
            // .bindPopup(L.popup({
            //     maxWidth:250,
            //     minWidth:100,
            //     autoClose:false,
            //     closeOnClick:false,
            //     className:'running-popup',
            // }))
            // .setPopupContent('Tâm Sáng')
            // .openPopup();

        })
    }, function(){
        alert('Could not get your position');
    })
    
};
// console.log('Name',firstName);
form.addEventListener('submit', function(){
    console.log('Display marker');
    const {lat,lng} = mapEvent.latlng;
    L.marker([lat,lng]).addTo(map)
    .bindPopup(L.popup({
        maxWidth:250,
        minWidth:100,
        autoClose:false,
        closeOnClick:false,
        className:'running-popup',
    }))
    .setPopupContent('Tâm Sáng')
    .openPopup();
})
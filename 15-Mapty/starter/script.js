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

class Workout{
    date=new Date();
    id=(new Date()+'').slice(-10)
    constructor(coords, distance,duration){
        this.coords=coords;
        this.distance=distance;//in km 
        this.duration=duration;//in min
    }
}
class App{
    #map;
    #mapEvent;
    constructor(){
        this._getPosition();
        form.addEventListener('submit',this._newWorkout.bind(this));

    }
    _getPosition(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){
                alert('Could not get your position');
            })    
        };
    };
    _loadMap(position){
        const {latitude, longitude}=position.coords;
        console.log(`https://www.google.com/maps/@${latitude}.${longitude},16z?hl=vi-VN`);
        const coords=[latitude,longitude];
        this.#map = L.map('map').setView(coords, 23);
        console.log(map);
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        
        this.#map.on('click', this._showForm.bind(this));
    };

    _showForm(mapE){
        this.#mapEvent=mapE;
            form.classList.remove('hidden');
            inputDistance.focus();
    }

    _toggleElevationField(){}
    _newWorkout(e){
        e.preventDefault();
        //Clear input Fields
        inputDistance.value=inputDuration.value=inputCadence.value=inputElevation.value='';
        console.log('Display marker');
        console.log('Map event',this.#mapEvent)
        const {lat,lng} = this.#mapEvent.latlng;
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
    }
};
const app=new App();
// app._getPosition();

// console.log(navigator.geolocation)
// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(function(position){
//         console.log('Position ',position);
//         const {latitude, longitude}=position.coords;
//         console.log(latitude,longitude)
//         console.log(`https://www.google.com/maps/@${latitude}.${longitude},16z?hl=vi-VN`);
//         const coords=[latitude,longitude];

//         //L.map('map') thì map là id tên là map nha
//         // const map = L.map('map').setView([51.505, -0.09], 13);
//         map = L.map('map').setView(coords, 23);
//         console.log(map);
//         // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);
        
//         map.on('click', function(mapE){
//             mapEvent=mapE;
//             form.classList.remove('hidden');
//             inputDistance.focus();
//             // console.log(mapEvent);
//             // const {lat,lng} = mapEvent.latlng;

//             // L.marker([lat,lng]).addTo(map)
//             // .bindPopup(L.popup({
//             //     maxWidth:250,
//             //     minWidth:100,
//             //     autoClose:false,
//             //     closeOnClick:false,
//             //     className:'running-popup',
//             // }))
//             // .setPopupContent('Tâm Sáng')
//             // .openPopup();

//         })
//     }, function(){
//         alert('Could not get your position');
//     })
    
// };
// // console.log('Name',firstName);
// form.addEventListener('submit', function(e){
    // e.preventDefault();
    ////Clear input Fields
    //inputDistance.value=inputDuration.value=inputCadence.value=inputElevation.value='';
//     console.log('Display marker');
//     const {lat,lng} = mapEvent.latlng;
//     L.marker([lat,lng]).addTo(map)
//     .bindPopup(L.popup({
//         maxWidth:250,
//         minWidth:100,
//         autoClose:false,
//         closeOnClick:false,
//         className:'running-popup',
//     }))
//     .setPopupContent('Tâm Sáng')
//     .openPopup();
// });

inputType.addEventListener('click', function(){
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
})

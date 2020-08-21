'use strict';
console.log('connected')

/*
Unicorn Ranch

They would like to be able to see which unicorns are where at a glance.


Properties:

color
location


3 locations


barn
pasture
trails

locations change

no real set interval

*/

let barn = [];
let pasture = [];
let trails = [];

let unicornList = [];
let barnAppend = document.getElementById('barn');
let pastureAppend = document.getElementById('pasture');
let trailsAppend = document.getElementById('trail');

function Unicorn(name, color, favoriteFood) {
  this.name = name;
  this.color = color;
  this.favoriteFood = favoriteFood;
  unicornList.push(this);
  barn.push(this)
}

new Unicorn('Sparkles', 'purple', 'carrots');
new Unicorn('Sally', 'pink', 'peaches');
new Unicorn('Sam', 'blue', 'candy');
new Unicorn('Ben', 'purple', 'ceral');
new Unicorn('Spark', 'plum', 'crackers');
new Unicorn('Tom', 'green', 'cherries');
new Unicorn('Spot', 'light-blue', 'cantoloupe');
new Unicorn('Adam', 'green', 'steak');
new Unicorn('Brook', 'chartruse', 'lucky-charms');
new Unicorn('Lena', 'purple', 'almonds');
new Unicorn('Brad', 'sky-blue', 'ramen');
new Unicorn('Uni', 'gray', 'swiss-chocolate');



for (let i = 0; i < barn.length; i++) {
  let barnUnicorn = document.createElement('li')
  barnUnicorn.setAttribute('id', `${barn[i].name}`)
  barnUnicorn.textContent = `${barn[i].name} ${barn[i].color} ${barn[i].favoriteFood}`;
  barnAppend.appendChild(barnUnicorn);
}
//need to grab form id to add listener to

let formListner = document.getElementById('move-form')
formListner.addEventListener('submit', handleMove);

function handleMove(event) {
  event.preventDefault();

  let eventName = event.target.unicorn_name.value;
  let eventLocation = event.target.location.value;

  if (eventLocation === 'barn') {
    moveToBarn(eventName)
  }
  if (eventLocation === 'pasture') {
    moveToPasture(eventName);
  }
  if (eventLocation === 'trails') {
    moveToTrails(eventName);
  }
}

function moveToTrails(name) {
  let child = document.getElementById(name);
  child.remove();
  for (let i = 0; i < unicornList.length; i++) {
    if (unicornList[i].name === name) {
      let trailsUnicorn = document.createElement('li')
      trailsUnicorn.setAttribute('id', `${name}`)
      trailsUnicorn.textContent = `${unicornList[i].name} ${unicornList[i].color} ${unicornList[i].favoriteFood}`;
      trailsAppend.appendChild(trailsUnicorn)
    }
  }
}

function moveToPasture(name) {
  console.log(name)
  let child = document.getElementById(name);
  child.remove();
  for (let i = 0; i < unicornList.length; i++) {
    console.log('move to past', unicornList[i], name)
    if (unicornList[i].name === name) {
      let pastureUnicorn = document.createElement('li')
      pastureUnicorn.setAttribute('id', `${name}`)
      pastureUnicorn.textContent = `${unicornList[i].name} ${unicornList[i].color} ${unicornList[i].favoriteFood}`;
      pastureAppend.appendChild(pastureUnicorn)
    }
  }
}
function moveToBarn(name) {
  let child = document.getElementById(name);
  child.remove();
  for (let i = 0; i < unicornList.length; i++) {
    if (unicornList[i].name === name) {
      let barnUnicorn = document.createElement('li')
      barnUnicorn.setAttribute('id', `${name}`)
      barnUnicorn.textContent = `${unicornList[i].name} ${unicornList[i].color} ${unicornList[i].favoriteFood}`;
      barnAppend.appendChild(barnUnicorn)
    }
  }
}



/*
Finish the basic concept

need to work on typing speed

practice break points vs console.log




Stretch
Ranch to be able to use from differnt locations

Database, possible server



Make it look like you care


*/
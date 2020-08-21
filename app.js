'use strict';
console.log('connected')

/*
Unicorn Ranch

As ranch hands, we would like to be able to see which unicorns are where at a glance.


Properties:

color
location
favorite food
*optional* current location. Not required, but I feel like the prop will help when we get to databases.


3 locations


barn
pasture
trails

locations change

no real set interval

*/

let unicornList = [];
let barnAppend = document.getElementById('barn');
let pastureAppend = document.getElementById('pasture');
let trailsAppend = document.getElementById('trail');

function Unicorn(name, color, favoriteFood) {
  this.name = name;
  this.color = color;
  this.favoriteFood = favoriteFood;
  this.currentLocation = 'barn'
  unicornList.push(this);
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

function onStart() {
  for (let i = 0; i < unicornList.length; i++) {
    let barnUnicorn = document.createElement('li')
    barnUnicorn.setAttribute('id', `${unicornList[i].name}`)
    barnUnicorn.textContent = `${unicornList[i].name} ${unicornList[i].color} ${unicornList[i].favoriteFood}`;
    barnAppend.appendChild(barnUnicorn);
  }
  populateUniList();
  populateLocationList();
  let formListner = document.getElementById('move-form')
  formListner.addEventListener('submit', handleMove);
}

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
      unicornList[i].currentLocation = 'trails'
      let trailsUnicorn = document.createElement('li')
      trailsUnicorn.setAttribute('id', `${name}`)
      trailsUnicorn.textContent = `${unicornList[i].name} ${unicornList[i].color} ${unicornList[i].favoriteFood}`;
      trailsAppend.appendChild(trailsUnicorn)
    }
  }
}

function moveToPasture(name) {
  let child = document.getElementById(name);
  child.remove();
  for (let i = 0; i < unicornList.length; i++) {
    if (unicornList[i].name === name) {
      unicornList[i].currentLocation = 'pasture'
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
      unicornList[i].currentLocation = 'barn'
      let barnUnicorn = document.createElement('li')
      barnUnicorn.setAttribute('id', `${name}`)
      barnUnicorn.textContent = `${unicornList[i].name} ${unicornList[i].color} ${unicornList[i].favoriteFood}`;
      barnAppend.appendChild(barnUnicorn)
    }
  }
}

function populateUniList() {
  unicornList.forEach(name => {
    let newOption = `<option value="${name.name}">${name.name}</option>`
    $('#uni_list').append(newOption)
  })
}

function populateLocationList() {
  $('#location_list').append('<option value="barn">Barn</option>')
  $('#location_list').append('<option value="pasture">The Pasture</option>')
  $('#location_list').append('<option value="trails">Out on the Trails!</option>')
}

onStart();

/*
Finish the basic concept....    DONE

need to work on typing speed

practice break points vs console.log




Stretch
Ranch to be able to use from differnt locations

Database, possible server



Make it look like you care


*/
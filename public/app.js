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

const onStart = () => {
  for (let i = 0; i < unicornList.length; i++) {
    $('#barn').append(`<li id="${unicornList[i].name}">${unicornList[i].name} ${unicornList[i].color} ${unicornList[i].favoriteFood}</li>`)
  }
  populateUniList();
  populateLocationList();
  $('#move-form').on('submit', handleMove);
}

const handleMove = event => {
  event.preventDefault()
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
  talkToServer(event);
}

const moveToTrails = name => {
  $(`#${name}`).remove();
  for (let i = 0; i < unicornList.length; i++) {
    if (unicornList[i].name === name) {
      unicornList[i].currentLocation = 'trails'
      $('#trail').append(`<li id="${unicornList[i].name}">${unicornList[i].name} ${unicornList[i].color} ${unicornList[i].favoriteFood}</li>`)
    }
  }
}

const moveToPasture = name => {
  $(`#${name}`).remove();
  for (let i = 0; i < unicornList.length; i++) {
    if (unicornList[i].name === name) {
      unicornList[i].currentLocation = 'pasture'
      $('#pasture').append(`<li id="${unicornList[i].name}">${unicornList[i].name} ${unicornList[i].color} ${unicornList[i].favoriteFood}</li>`)
    }
  }
}

const moveToBarn = name => {
  $(`#${name}`).remove();
  for (let i = 0; i < unicornList.length; i++) {
    if (unicornList[i].name === name) {
      unicornList[i].currentLocation = 'barn'
      $('#barn').append(`<li id="${unicornList[i].name}">${unicornList[i].name} ${unicornList[i].color} ${unicornList[i].favoriteFood}</li>`)
    }
  }
}

const populateUniList = () => {
  unicornList.forEach(name => {
    $('#uni_list').append(`<option value="${name.name}">${name.name}</option>`)
  })
}

const populateLocationList = () => {
  $('#location_list').append('<option value="barn">Barn</option>')
  $('#location_list').append('<option value="pasture">The Pasture</option>')
  $('#location_list').append('<option value="trails">Out on the Trails!</option>')
}

const talkToServer = (event) => {
  event.preventDefault();
  let uniMoving = $('#uni_list').val();
  let uniHome = $('#location_list').val();
  console.log(uniMoving)
  const params = {
    method: 'GET',
    data: {
      name: uniMoving,
      location: uniHome
    },
  };
  $.ajax('http://localhost:3000/update', params)
    .then(() => {
      console.log('we hit the server')
      //console.log(result)
    })
    .catch(error => {
      console.log(error)
    })
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
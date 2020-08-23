'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const pg = require('pg')
const fs = require('fs');
const methodOverride = require('method-override');
const path = require('path');

const PORT = process.env.PORT;

const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', error => console.error(error));

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));




app.get('/', (request, response) => {
  //console.log('home route', request)
  const SQL = 'SELECT * FROM stable;';
  client.query(SQL)
    .then(result => {
      //console.log(result.rows);
      response.render('index', { result: result.rows });
    })
    .catch('error', error => {
      console.error(error)
    })
})

app.put('/update/:id', (request, response) => {
  let { name, location, color, favorite_food } = request.body;
  let id = request.params.id;
  let SQL = `UPDATE stable SET name=$1, color=$2, favorite_food=$3, current_location=$4 WHERE id=$5;`;
  let safeValues = [name, color, favorite_food, location, id]
  client.query(SQL, safeValues)
    .then(() => {
      // console.log(result.rows);
      response.redirect('/')
    })
    .catch('error', error => {
      console.error(error)
    })

})

// Lets make some clean functions for these routes

//Ideally I would like the home route to query the database and populate the lists
//I would like the update route to set the current location of the unicorn to the query location and redirect to home route, which should rerender an updated list of locations on load



client.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Unicorns are on ${PORT} clouds...`)
    })
  });

  //Pretty good work, learning ajax and node without a template is different but I am getting there. Pay attention 151, that is the next hurdle
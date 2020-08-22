'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const pg = require('pg')
const methodOverride = require('method-override');

const PORT = process.env.PORT;

const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', error => console.error(error));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));




app.get('/', (request, response) => {
  console.log('home route')
  const SQL = 'SELECT * FROM stable;';
  client.query(SQL)
    .then(result => {
      console.log(result.rows);
      //response.send({ currentLocations: result.rows });
    })
    .catch('error', error => {
      console.error(error)
    })
})

app.get('/update', (request, response) => {
  console.log(request.query)
  let { name, location } = request.query;
  console.log(name)
  //const SQL = `SELECT name FROM stable WHERE name='${name}';`;
  const SQL = 'SELECT * FROM stable;';
  client.query(SQL)
    .then(result => {
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
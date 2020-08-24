'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const pg = require('pg')
const fs = require('fs');
const methodOverride = require('method-override');
const path = require('path');
const { response } = require('express');

const PORT = process.env.PORT;

const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', error => console.error(error));

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const homeRoute = (request, response) => {
  const SQL = 'SELECT * FROM stable;';
  client.query(SQL)
    .then(result => {
      console.log(result)
      response.render('index', { result: result.rows });
    })
    .catch('error', error => {
      console.error(error)
    })
}

const updateLocation = (request, response) => {
  let { name, location, color, favorite_food } = request.body;
  let id = request.params.id;
  let SQL = `UPDATE stable SET name=$1, color=$2, favorite_food=$3, current_location=$4 WHERE id=$5;`;
  let safeValues = [name, color, favorite_food, location, id]
  client.query(SQL, safeValues)
    .then(() => {
      response.redirect('/')
    })
    .catch('error', error => {
      console.error(error)
    })
}


const backInTheBarn = () => {
  let SQL = 'SELECT * FROM stable;';
  client.query(SQL)
    .then(data => {
      data.rows.forEach(unicorn => {
        let backInTheBarnSQL = 'UPDATE stable SET name=$1, color=$2, favorite_food=$3, current_location=$4 WHERE id=$5;';
        let safeValues = [unicorn.name, unicorn.color, unicorn.favorite_food, 'barn', unicorn.id];
        client.query(backInTheBarnSQL, safeValues)
      })
    }).catch('error', error => {
      console.error(error)
    })
}


setInterval(() => {
  backInTheBarn();
}, 86400000);


app.get('/', homeRoute);
app.put('/update/:id', updateLocation)


client.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Unicorns are on ${PORT} clouds...`)
    })
  });

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
  response.render('index');
})





client.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Unicorns are on ${PORT} clouds...`)
    })
  });
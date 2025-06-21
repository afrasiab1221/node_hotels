const express = require('express')
const app = express()
const port = 3000
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());  //req.body


app.get('/', (req, res) => {
  res.send('WELCOME TO OUR HOTELLLL!')
})

//Import router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

//use the Router
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

const PORT =  process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const app = express()
const port = 3000
const db = require('./db');


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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

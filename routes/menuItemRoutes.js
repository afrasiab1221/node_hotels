const express = require('express');
const menuItem = require('./../models/menuItem');
const router = express.Router();


//GET method to get the person from dataBase:

router.get('/', async (req, res) => {
  try {
    const data = await menuItem.find();
    console.log('data fetched')
    res.status(200).json(data);

  } catch (error) {
    console.log("ERRORR!! ");
    res.status(500).json({ error: "Internal Server error!!" })
  }
})

//Post method to send menu data to database:

router.post('/', async (req, res) => {
  try {
    const data = req.body;

    //Create a new menu document using mongoose model;
    const newMenu = new menuItem(data);

    //save new menu to database
    const response = await newMenu.save();
    console.log("data saved!");
    res.status(200).json(response);

  } catch (error) {
    console.log('error!! ')
    res.status(500).json({ error: 'internal server error' });
  }
})
//comments added
module.exports = router;

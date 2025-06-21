const express = require('express')
const router = express.Router();
const Person = require('./../models/person');

//POST route to add a person
router.post('/', async (req, res) => {

  try {
    const data = req.body;

    //Create a new Person document using mongoose model;
    const newPerson = new Person(data);

    //save new person to datrabase
    const response = await newPerson.save()
    console.log('data saved');
    res.status(200).json(response);

  } catch (err) {
    console.log('error!! ')
    res.status(500).json({ error: 'internal server error' });

  }

});

//GET method to get the person
router.get('/', async (req, res) => {
  try {
    const data = await Person.find();
    console.log('data fetched')
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

//Get method for workType
router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
      const response = await Person.find({ work: workType });
      console.log('data fetched!! ');
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (error) {
    console.log("Error!!");
    res.status(500).json({ error: "Internal server Error!! " })
  }
});


//Update
router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedData = req.body;

    const response = await Person.findByIdAndUpdate(personId, updatedData, {
      new: true,  //Return the updated document
      runValidators: true  //Run Mongoose validation 
    });
    if (!response) {
      return res.status(404).json({ error: 'person not found!! ' })
    }

    console.log("Data Updated!! ");
    res.status(200).json(response);

  } catch (error) {
    console.log("Error!!");
    res.status(500).json({ error: "Internal server Error!! " })

  }
})

// DELETE Function: 
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    //Assuming we have a person model: 
    if (!response) {
      return res.status(404).json({ error: 'person not found!! ' })
    }
    console.log("Data Delted!! ");
    res.status(200).json({ message: 'person Deleted Successfully' });
  } catch (error) {
    console.log("Error!!");
    res.status(500).json({ error: "Internal server Error!! " })

  }
})


module.exports = router;


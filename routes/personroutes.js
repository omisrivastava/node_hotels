const express = require("express");
const router = express.Router();
const Person = require("../Models/Person");

router.post("/", async (req, res) => {
  try {
    //assuming the request body contain the person data received from body parser
    const data = req.body;

    //creaing a new person document using the mongoose model
    const newPerson = new Person(data);

    //save the new person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});
router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;
    if (worktype == "chef" || worktype == "manager" || worktype == "waiter") {
      const response = await Person.find({ work: worktype });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.put("/:id", async (req,res) => {
  try {
    const personId = req.params.id;
    const updatedPersondata = req.body;
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersondata,
      {
        new: true,
        runValidators: true,
      }
    );
    //if id doesn't exist
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    //in case of fail
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});
router.delete('/:id',async(req,res)=>{
  try{
const personId=req.params.id;
const response=await Person.findByIdAndDelete(personId);
if(!response){
  return res.status(404).json({error:'person not found'});
}
console.log("data deleted");
    res.status(200).json({message:'person deleted success'});
  }
  catch(err){
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
})
module.exports = router;

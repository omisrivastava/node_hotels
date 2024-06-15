const express = require("express");
const app = express();

const db = require("./db");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const Person = require("./Models/Person");
const Menuitem = require("./Models/Menuitem");

app.get("/", function (req, res) {
  res.send("welcome to our hotel");
});

const personRoutes = require("./routes/personroutes");
const menuRoutes = require("./routes/menuroutes");

app.use("/person", personRoutes);

app.use("/menu", menuRoutes);



// app.post("/person", async (req, res) => {
//   try {
//     //assuming the request body contain the person data received from body parser
//     const data = req.body;

//     //creaing a new person document using the mongoose model
//     const newPerson = new Person(data);

//     //save the new person to the database
//     const response = await newPerson.save();
//     console.log("data saved");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "internal server error" });
//   }
// });
//get method to get the person

// app.get('/person',async(req,res)=>{
// try{
// const data=await Person.find();
// console.log('data fetched');
// res.status(200).json(data);
// }
// catch(err){
//     console.log(err);
//     res.status(500).json({ error: "internal server error" });
// }
// })

// app.post('/menu',async(req,res)=>{
//   try{
//     const data=req.body
//     const newMenu=new Menuitem(data);
//     const response=await newMenu.save();
//     console.log('data saved');
//     res.status(200).json(response);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error:'internal server error'});
//   }
// })

// app.get('/menu',async(req,res)=>{
//   try{
//     const data=await Menuitem.find();
//     console.log('data fetched');
//     res.status(200).json(data);
//   }
//   catch(err){
//   console.log(err);
//   res.status(500).json({error:'internal server error'});
//   }
// })

// app.get('/person/:worktype',async(req,res)=>{
//   try{
//     const worktype=req.params.worktype;
//     if(worktype=='chef' || worktype=='manager' || worktype=='waiter'){
//       const response=await Person.find({work:worktype});
//       console.log('response fetched');
//       res.status(200).json(response);
//     }
//     else{
//       res.status(404).json({error:'invalid work type'});
//     }
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error:'internal server error'});
//   }
// })

app.listen(3000, () => {
  console.log("listening on port 3000");
});
// const PORT = process.env.PORT || 5000;
// const dotenv = require("dotenv");
// dotenv.config();
// const connectDB = require("./db");
// const Note = require("./Models/notes");

// connectDB();
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.post( "/new",async(req, res) => {
//   const { title, body } = req.body;
//   try{
//     const newNote = new Note({ title,body });
//     const data = await newNote.save();
//     res.status(200).json(data);
// }catch(error){
//     res.status(501).json({
//         msg:error.message,
//         error: error
//     })
// }
// });

// app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

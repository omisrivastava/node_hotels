const mongoose = require('mongoose');
const mongoURL='mongodb://localhost:27017/hotel' 
mongoose.connect(mongoURL);
const db=mongoose.connection;
db.on('connected',()=>{
  console.log('connected to mongodb server');
});
db.on('error',()=>{
  console.log(' mongodb connection error');
});
db.on('disconnected',()=>{
  console.log('server disconnected');
});
module.exports=db;






// const mongoose = require('mongoose');


// const MONGO_URI = process.env.MONGODB_URI;

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(MONGO_URI);
//         console.log(`MongoDB connected: ${conn.connection.host} .`);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         process.exit(1);
//     }
// }

// module.exports = connectDB;
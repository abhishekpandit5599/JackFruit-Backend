const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/jackFruitDB?readPreference=primary&appname=MongoDB%20Compass&ssl=false";


const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Success");
    }).then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((e) => {
        console.log('not connected');
      });
}

module.exports = connectToMongo;
const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const mongoURI = "mongodb+srv://abhishekpandit5599:Avisoni@cluster0.lte6i.mongodb.net/inotebook";

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
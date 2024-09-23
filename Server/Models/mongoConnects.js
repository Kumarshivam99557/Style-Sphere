const mongoose = require('mongoose');

const Connection = ()=>{
mongoose.connect('mongodb://127.0.0.1:27017/India-Mart')
.then(()=>{
    console.log("Database has been connected");
})
.catch((err)=>{
    console.log(err);
})
}

module.exports = Connection;

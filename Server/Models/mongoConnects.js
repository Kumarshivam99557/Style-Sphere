const mongoose = require('mongoose');

const Connection = () => {
  mongoose.connect('mongodb://thecodeshivam:j3XbJsdAkEQGWwRC@cluster0-shard-00-00.mz4os.mongodb.net:27017,cluster0-shard-00-01.mz4os.mongodb.net:27017,cluster0-shard-00-02.mz4os.mongodb.net:27017/myDatabase?ssl=true&replicaSet=atlas-3wis13-shard-0&authSource=admin&retryWrites=true&w=majority', {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("Database has been connected");
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });
}

module.exports = Connection;


// const mongoose = require('mongoose');    



// const Connection = () => {
//   mongoose.connect('mongodb://thecodeshivam:j3XbJsdAkEQGWwRC@cluster0-shard-00-00.mz4os.mongodb.net:27017,cluster0-shard-00-01.mz4os.mongodb.net:27017,cluster0-shard-00-02.mz4os.mongodb.net:27017/myDatabase?ssl=true&replicaSet=atlas-3wis13-shard-0&authSource=admin&retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 10000,  // Adjust timeout
//   })
//   .then(() => {
//     console.log("Database has been connected");
//   })
//   .catch((err) => {
//     console.log("Database connection error:", err);
//   });
// }

// module.exports = Connection;

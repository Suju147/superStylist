// const mongoURI = "mongodb://localhost:27017/super-stylist";
const mongoURI = "mongodb+srv://suju:suju123@superstylist.vtpsh.mongodb.net/super-stylist?retryWrites=true&w=majority"

let mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;

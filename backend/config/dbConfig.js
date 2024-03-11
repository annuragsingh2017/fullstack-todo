const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATA_BASE);
    console.log("Mongo DB Connection Successfull");
  } catch (error) {
    console.log("Mongo DB Connection Failed");
    console.log(error);
  }
};

dbConnect();

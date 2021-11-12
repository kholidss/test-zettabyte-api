import mongoose from "mongoose";

const connectMongo = async () => {
  await mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING ||
      "mongodb://localhost:27017/db_test_memoora",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("Connected to MongoDB!");
    }
  );
};

export default connectMongo;

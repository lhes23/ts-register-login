import mongoose from "mongoose";

const dbConnect = () => {
  if (!process.env.MONGODB_URI)
    return console.log(
      `No Database Connected! Please add MONGODB_URI to .env file`
    );
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log(`Connected to the Database`))
    .catch((err) => console.log(`Error : ${err}`));
};

export default dbConnect;

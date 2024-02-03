import mongoose from "mongoose";

const subscription = new mongoose.Schema(
  {
    email: {
        type: String
    },
    time:{
        type: Date
    }
  }
);

export default mongoose.model("subscription", subscription);
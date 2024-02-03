import mongoose from "mongoose";

const rating = new mongoose.Schema(
  {
    email: {
        type: String
    },
    rating:{
        type: Number
    },
    time:{
        type: Date
    }
  }
);

export default mongoose.model("rating", rating);
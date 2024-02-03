import mongoose from "mongoose";

const interests = new mongoose.Schema(
  {
    likeCnt:{
      type : Number
    },
    time:{
        type: Date
    }
  }
);

export default mongoose.model("interests", interests);
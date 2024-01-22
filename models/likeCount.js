import mongoose from "mongoose";

const likeCount = new mongoose.Schema(
  {
    likes:{
      type : String
    },
    likeCnt:{
      type : Number
    }
  }
);

export default mongoose.model("likeCount", likeCount);
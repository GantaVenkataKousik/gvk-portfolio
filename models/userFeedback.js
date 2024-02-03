import mongoose from "mongoose";

const userfeedback = new mongoose.Schema(
  {
    name:{
        type: String
    },
    email: {
        type: String
    },
    feedback:{
        type: String
    },
    time:{
        type : Date
    }
  }
);

export default mongoose.model("userfeedback", userfeedback);
import mongoose from "mongoose";

const subjectSchema = mongoose.Schema({
  sub_code: {type:String, required: true},
  subject:String,
  grade:String

});

const Subject = mongoose.model("subject", subjectSchema);

export default Subject;
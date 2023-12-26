import mongoose from "mongoose";

const markSchema = mongoose.Schema({
    studentRegNO: {type:String, required: true},
    subjectCode:{type:String, required: true},
    mark:{type:String, required: true}

});

const Mark = mongoose.model("mark", markSchema);

export default Mark;
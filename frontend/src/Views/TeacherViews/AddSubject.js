import axios from "axios";
import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

function AddSubject (){
const navigate = useNavigate();
const [sub_code, setSubCode] = useState("");
const [subject, setSubject] = useState("");
const [grade, setGrade] = useState("");

const handleSubmit = async (event) => {
  
    // event.preventDefault();
    const newSubject={ sub_code, subject, grade}

    axios.post("http://localhost:5000/Teacher/AddSubject",newSubject).then(()=>{
        console.log("Subject Added")
    }).catch((err)=>{
        console.log(err)
    })


    navigate(`/Teacher/SubjectList`);
};
    

return(
        <>
        <h1>Add a subject</h1>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>
                Subject Code:
                <input 
                    type="text"
                    name="sub_code" 
                    value={sub_code}
                    onChange={(event) => setSubCode(event.target.value)}
                />
            </label>
            <br />

            <label>
            Subject:
                <input 
                    type="text" 
                    name="subject" 
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                />
            </label>
            <br />
            <label>
                Grade:
                <input 
                    type="text" 
                    name="grade" 
                    value={grade}
                    onChange={(event) => setGrade(event.target.value)}
                />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
        </div>
    

        </>
        
    )
}

export default AddSubject
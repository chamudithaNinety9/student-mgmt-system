import axios from "axios";
import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

function AddTeacher (){
const navigate = useNavigate();
const [reg_no, setRegNo] = useState("");
const [name, setName] = useState("");
const [subject, setSubject] = useState("");


const handleSubmit = (event) => {
  
    event.preventDefault();
    const newTeacher={ reg_no, name, subject}

    axios.post("http://localhost:5000/Teacher/AddTeacher",newTeacher).then(()=>{
        console.log("Teacher Added")
    }).catch((err)=>{
        console.log(err)
    })

    navigate(`/Teacher/TeacherList`);
};


return(
        <>
        <h1>Add a Teacher</h1>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>
                Reg NO:
                <input 
                    type="text"
                    name="reg_no" 
                    value={reg_no}
                    onChange={(event) => setRegNo(event.target.value)}
                />
            </label>
            <br />

            <label>
            Name:
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
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
            <input type="submit" value="Submit" />
        </form>
        </div>
      

        </>
        
    )
}

export default AddTeacher;
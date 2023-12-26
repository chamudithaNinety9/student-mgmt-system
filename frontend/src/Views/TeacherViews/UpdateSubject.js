import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

function UpdateSubject (){
const navigate = useNavigate();
const [id,setSubjectID] = useState()
const [sub_code, setSubCode] = useState("");
const [subject, setSubject] = useState("");
const [grade, setGrade] = useState("");


useEffect(() => {
    const URL_path = window.location.pathname;
    const subjectID = URL_path.substring(URL_path.length - 24);
    console.log("subject:::",subjectID)
    setSubjectID(subjectID)
}, []);

useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/teacher/getsubjectdetails/${id}`)
        .then(response => {
          console.log("response",response.data)
          setSubCode(response.data.sub_code)
          setSubject(response.data.subject)
          setGrade(response.data.grade)
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [id]);

const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedSubject = { subject, grade };
      console.log("updatedSubject:::",updatedSubject)
    try {
      await axios.put(`http://localhost:5000/teacher/updateSubject/${id}`, updatedSubject);
      console.log("Subject Updated");
    } catch (error) {
      console.log(error);
    }
    navigate(`/Teacher/SubjectList`);
  };
    

return(
        <>
        <h1>Update a subject</h1>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>
                Subject Code:
                <input 
                    type="text"
                    name="sub_code" 
                    value={sub_code}
                    //onChange={(event) => setSubCode(event.target.value)}
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
            <input type="submit" value="Update" />
        </form>
        </div>
    

        </>
        
    )
}

export default UpdateSubject
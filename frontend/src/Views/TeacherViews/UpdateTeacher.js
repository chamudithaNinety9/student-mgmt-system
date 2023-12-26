import axios from "axios";
import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function UpdateTeacher (){
const navigate = useNavigate();
const [id, setTeacherID] = useState();
const [reg_no, setRegNo] = useState("");
const [name, setName] = useState("");
const [subject, setSubject] = useState("");


useEffect(() => {
    const URL_path = window.location.pathname;
    const teacherID = URL_path.substring(URL_path.length - 24);
    setTeacherID(teacherID)
}, []);

useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/teacher/getteacherdetails/${id}`)
        .then(response => {
          //console.log("response",response.data)
          setRegNo(response.data.reg_no)
          setName(response.data.name)
          setSubject(response.data.subject)
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [id]);


const handleSubmit = async (event) => {
  event.preventDefault();
  const updatedTeacher = { reg_no, name, subject };
    //console.log("updatedTeacher:",updatedTeacher)
  try {
    await axios.put(`http://localhost:5000/teacher/updateTeacher/${id}`, updatedTeacher);
    console.log("Teacher Updated");
  } catch (error) {
    console.log(error);
  }
  navigate(`/Teacher/TeacherList`);
};

return(
        <>
        <h1>Update a Teacher</h1>
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
            <input type="submit" value="Update" />
        </form>
        </div>
      

        </>
        
    )
}

export default UpdateTeacher;
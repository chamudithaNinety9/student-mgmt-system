import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

function UpdateStudent (){
    const navigate = useNavigate();
    const [id,setStudentID] = useState()
    const [reg_no, setRegNo] = useState("");
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
  
    useEffect(() => {
        const URL_path = window.location.pathname;
        const studentID = URL_path.substring(URL_path.length - 24);
        console.log("student:::",studentID)
        setStudentID(studentID)
    }, []);

    useEffect(() => {
        if (id) {
          axios.get(`http://localhost:5000/teacher/getstudentdetails/${id}`)
            .then(response => {
              //console.log("response",response.data)
              setRegNo(response.data.reg_no)
              setName(response.data.name)
              setGrade(response.data.grade)
            })
            .catch(error => {
              console.log(error);
            });
        }
      }, [id]);


    const handleSubmit = async (event) => {
      event.preventDefault();
      const updatedStudent = { reg_no, name, grade };
        console.log("updatedStudent:::",updatedStudent)
      try {
        await axios.put(`http://localhost:5000/teacher/updateStudent/${id}`, updatedStudent);
        console.log("Student Updated");
      } catch (error) {
        console.log(error);
      }
      navigate(`/Teacher/StudentList`);
    };

return(
        <>
        <h1>Update a student</h1>
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
      

            {/* {searchResults.map((result,index) => (
                <div key={index}>
                <a href={result.link}>{result.title}</a>
                <p>{result.snippet}</p>
                </div>
            ))} */}

        </>
        
    )
}

export default UpdateStudent
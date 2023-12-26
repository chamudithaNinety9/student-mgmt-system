import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

function UpdateMark (){

    const navigate = useNavigate();
    const [id,setMarkID] = useState()
    

    const [studentRegNO, setRegNo] = useState("");
    const [subjectCode, setsubject] = useState("");
    const [mark, setMark] = useState("");

useEffect(() => {
    const URL_path = window.location.pathname;
    const markID = URL_path.substring(URL_path.length - 24);
    console.log("mark:",markID)
    setMarkID(markID)
}, []);


useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/teacher/getmarkdetails/${id}`)
        .then(response => {
          //console.log("response",response.data)
          setRegNo(response.data.studentRegNO)
          setsubject(response.data.subjectCode)
          setMark(response.data.mark)
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [id]);


const handleSubmit = async (event) => {
  event.preventDefault();
  const updatedMark = { studentRegNO, subjectCode, mark };
    console.log("updatedMark:::",updatedMark)
  try {
    await axios.put(`http://localhost:5000/teacher/updateMark/${id}`, updatedMark);
    // console.log("Mark Updated");
  } catch (error) {
    console.log(error);
  }
  navigate(`/Teacher/MarkList`);
};
    

return(
        <>
        <h1>Update a Mark</h1>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>
                Student Registration number:
                <input 
                    type="text"
                    name="studentRegNO" 
                    value={studentRegNO}
                    onChange={(event) => setRegNo(event.target.value)}
                />
            </label>
            <br />

            <label>
            Subject Code:
                <input 
                    type="text" 
                    name="subjectCode" 
                    value={subjectCode}
                    onChange={(event) => setsubject(event.target.value)}
                />
            </label>
            <br />
            <label>
                Mark:
                <input 
                    type="text" 
                    name="mark" 
                    value={mark}
                    onChange={(event) => setMark(event.target.value)}
                />
            </label>
            <br />
            <input type="submit" value="Update" />
        </form>
        </div>
    

        </>
        
    )
}

export default UpdateMark
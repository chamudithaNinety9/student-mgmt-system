import React, { useEffect, useState } from "react";
import  "../TeacherViews/Table.css";
import { Button , Paper, IconButton, Grid ,InputBase } from "@mui/material";
import axios from "axios";

function StudentReport() {

  const [sid ,setSID] = useState()

  useEffect(() => {

    const URL_path = window.location.pathname;
    const studentID = URL_path.substring(9);
    console.log("id:",studentID)
    setSID(studentID)
}, []);

useEffect(() => {
  if (sid) {
    axios.get(`http://localhost:5000/student/getmarkBySID/${sid}`)
      .then(response => {
        //console.log("response",response.data)
        // setStudent(response.data.studentRegNO)
        // setsubject(response.data.subjectCode)
        // setMark(response.data.mark)
      })
      .catch(error => {
        console.log(error);
      });
  }
}, [sid]);

return(

    <>
    <h2>Student Report</h2>
   
      <div className="table-container">

      <Grid container spacing={1} justifyContent="center"  marginBottom={"10px"}>
    
    </Grid>
        <table className="table">
            <thead>
            <tr>
                <th>Student Name</th>
                <th>Subject Name</th>
                <th>Mark</th>
                <th>Grade</th>
                
           </tr>
               
            </thead>
            <tbody>
            {/* {filteredData.map((row, index) => (
                <tr key={index}>
                <td>{row.studentRegNO}</td>
                <td>{row.subjectCode}</td>
                <td>{row.mark}</td>

            </tr>
            ))} */}
            </tbody>
        </table>
        
      </div>
    </>


)
}


export default StudentReport;


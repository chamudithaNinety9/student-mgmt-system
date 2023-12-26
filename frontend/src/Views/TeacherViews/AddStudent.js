import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function AddStudent (){
const navigate = useNavigate();
const [reg_no, setRegNo] = useState("");
const [name, setName] = useState("");
const [grade, setGrade] = useState("");

// const [searchResults, setSearchResults] = useState([]);

const handleSubmit = async (event) => {
  
    event.preventDefault();
    const newStudent={ reg_no, name, grade}

    axios.post("http://localhost:5000/Teacher/AddStudent",newStudent).then(()=>{
        console.log("Student Added")
    }).catch((err)=>{
        console.log(err)
    })

    // await axios.get(
    //     `https://www.googleapis.com/customsearch/v1?key=AIzaSyBYW4B8xzKMApVvzVevwJi4r4IcnuuZFnY&cx=66ac6fa7ccb7d4eca&q=${name}&num=5`
    //   ).then((response)=>{       
    //     setSearchResults(response.data.items)

    //     console.log("Response1",response.data.items)
    //   }).catch((err)=>{
    //     console.log(err)
    //  })
      
    navigate(`/Teacher/StudentList`);
};

return(
        <>
        <h1>Add a student</h1>
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
            <input type="submit" value="Submit" />
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

export default AddStudent
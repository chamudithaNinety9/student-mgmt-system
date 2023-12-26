import axios from "axios";
import React, { useState } from "react";
import "./Form.css";
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";

function AddMark (){

const navigate = useNavigate();
const [studentRegNO, setRegNo] = useState("");
const [subjectCode, setsubject] = useState("");
const [mark, setMark] = useState("");
const [modules,setModules] = useState("");
const [searchResults ,setSearchResults] = useState("")

const handleSubmit = async (event) => {

    event.preventDefault();
    const newMark={ studentRegNO, subjectCode, mark ,modules}

    axios.post("http://localhost:5000/Teacher/AddMark",newMark).then(()=>{
        console.log("Mark Added")
    }).catch((err)=>{
        console.log(err)
    })

    await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBYW4B8xzKMApVvzVevwJi4r4IcnuuZFnY&cx=66ac6fa7ccb7d4eca&q=${modules}&num=5`)
    .then((response)=>{       
        setSearchResults(response.data.items)

        //console.log("Response1",response.data.items)
      })
    //   .catch((err)={
    //      console.log(err)
    //  })

    const emailResults = searchResults.map((result) => {
        return {
          title: result.title,
          link: result.link,
        };
      });

      console.log("emailref::",emailResults)

    const templateParams = {
      from_name: 'nipundileka199957@gmail.com',
      to_name: 'dileka.itexphere@gmail.com',
      subject: 'Refferences',
      message: JSON.stringify(emailResults),
  };

  emailjs.send('service_2impguo', 'template_5xr4sjr', templateParams, 's3YdcAgf4Ev77JRTd')
      .then((response) => {
          console.log('Email sent', response);
      })
      .catch((error) => {
          console.log('Email error', error);
      });

      navigate(`/Teacher/MarkList`);
}
    

return(
        <>
        <h2>Add a Mark</h2>
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

            <label>
                Weak Modules:
                <input 
                    type="text" 
                    name="modules" 
                    value={modules}
                    onChange={(event) => setModules(event.target.value)}
                />
            </label>
            <br />

            {/* <label>
                Parent Email:
                <input 
                    type="text" 
                    name="email" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <br /> */}

            <input type="submit" value="Submit" />
        </form>
        </div>
    

        </>
        
    )
}

export default AddMark
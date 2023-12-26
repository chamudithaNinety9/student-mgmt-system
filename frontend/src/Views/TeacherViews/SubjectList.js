
import React, { useEffect, useState } from "react";
import  "./Table.css";
import { Button ,InputBase, Paper, IconButton, Grid  } from "@mui/material";
import axios from "axios";
import { blueGrey, green, grey, orange, red, yellow } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

//Icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';

function SubjectList() {
    
    const [tableData, setTableData] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:5000/teacher/getAllSubjects")
        .then(response => {
            //console.log("response",response.data)
            setTableData(response.data);
            setFilteredData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      },[])

      const handleDelete = async (row) => {
        try {
          await axios.delete(`http://localhost:5000/teacher/deleteSubject/${row._id}`);
          setTableData(tableData.filter((p) => p._id !== row._id));
          setFilteredData(filteredData.filter((p) => p._id !== row._id));
          console.log('Record deleted successfully');
        } catch (error) {
          console.error('Error deleting record:', error);
        }
      }

      const handleEdit = (row) => {
        navigate(`/Teacher/UpdateSubject/${row._id}`);
    }


    const handleSearch = (event) => {
      const searchedValue = event.target.value.toLowerCase();
      setSearchQuery(searchedValue)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const filtered = tableData.filter((row) => {
        return row.sub_code.toLowerCase().includes(searchQuery) ||
          row.subject.toLowerCase().includes(searchQuery) ||
          row.grade.toLowerCase().includes(searchQuery)
      });
      setFilteredData(filtered);
    }

    const handleReport = () =>{
      const doc = new jsPDF();
      doc.text('Subjects Report', 10, 10);
      const tableData = filteredData.map(row => [row.sub_code, row.subject, row.grade]);
      doc.autoTable({
        head: [['Subject code', 'Subject', 'Grade']],
        body: tableData
      });

      const pdfBlob = doc.output('blob');
      const objectUrl = URL.createObjectURL(pdfBlob);
      window.open(objectUrl);
      // doc.save('subjects_report.pdf');
    }

    return(
        <>
        <h2 >Subjects</h2>
 

          <div className="table-container" >


          <Grid container spacing={1} justifyContent="center"  marginBottom={"10px"}>
          
              <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 , marginRight:3 ,backgroundColor:"#2F7D8C"}}>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search here"
                    onChange={handleSearch}
                    onKeyPress={(event) => {
                      // console.log(`Pressed keyCode ${ev.key}`);
                      if (event.key === 'Enter') {
                        event.preventDefault()
                        const filtered = tableData.filter((row) => {
                          return row.sub_code.toLowerCase().includes(searchQuery) ||
                            row.subject.toLowerCase().includes(searchQuery) ||
                            row.grade.toLowerCase().includes(searchQuery)
                        });
                        setFilteredData(filtered);
                      }
                    }}
                  />
                  <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleSubmit}>
                    <SearchIcon />
                  </IconButton>
            </Paper>
            
            
            <Button href="/Teacher/AddSubject" variant="contained" startIcon={<AddIcon/> } 
                    sx={{marginBottom:2,backgroundColor:green[900]}}
            >Add 
            </Button>
            
          </Grid>

            <table className="table">
                <thead>
                <tr>
                    <th>Subject code</th>
                    <th>Subject</th>
                    <th>Grade</th>
                    <th>Actions</th>
                    
                </tr>
                </thead>
                <tbody>
                {filteredData.map((row, index) => (
                    <tr key={index}>
                    <td>{row.sub_code}</td>
                    <td>{row.subject}</td>
                    <td>{row.grade}</td>

                    <td>
                    <Button 
                        variant="contained" 
                        startIcon={<EditIcon/> } 
                        sx={{marginBottom:2,marginRight:1 ,backgroundColor:orange[900]}}
                        onClick={()=>handleEdit(row)}
                    >Edit</Button>
  
                    <Button

                        variant="contained" 
                        startIcon={<DeleteIcon/> } 
                        sx={{marginBottom:2,backgroundColor:red[900]}}
                        onClick={()=>handleDelete(row)}
                    >Delete</Button>
                    </td>

                    </tr>
                ))}
                </tbody>
            </table>

            <Button
              variant="contained" 
              startIcon={<DownloadIcon/> } 
              sx={{marginTop:2,backgroundColor:red[900] ,color:"black" ,fontWeight: 900}}
              onClick={()=>handleReport()}
              >Generate Report</Button>
            
          </div>
        </>
    )

}
export default SubjectList;

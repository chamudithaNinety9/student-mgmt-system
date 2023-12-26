import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import  "./Table.css";
import { Button , Paper, IconButton, Grid ,InputBase } from "@mui/material";
import axios from "axios";
import { blueGrey, green, grey, orange, red, yellow } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


function StudentList() {
  
  const [tableData, setTableData] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:5000/teacher/getAllStudents")
        .then(response => {
            // console.log("response",response.data)
          setTableData(response.data);
          setFilteredData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      },[])


      const handleDelete = async (row) => {
        try {
          await axios.delete(`http://localhost:5000/teacher/deleteStudent/${row._id}`);
          setTableData(tableData.filter((p) => p._id !== row._id));
          setFilteredData(filteredData.filter((p) => p._id !== row._id));
          console.log('Record deleted successfully');
        } catch (error) {
          console.error('Error deleting record:', error);
          
        }
      }

      

      const handleEdit = (row) => {
        navigate(`/Teacher/UpdateStudent/${row._id}`);
    }

    const handleSearch = (event) => {
      const searchedValue = event.target.value.toLowerCase();
      setSearchQuery(searchedValue)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const filtered = tableData.filter((row) => {
        return row.reg_no.toLowerCase().includes(searchQuery) ||
          row.name.toLowerCase().includes(searchQuery) ||
          row.grade.toLowerCase().includes(searchQuery)
      });
      setFilteredData(filtered);
    }

    const handleReport = () =>{
      const doc = new jsPDF();
      doc.text('Student details', 10, 10);
      const tableData = filteredData.map(row => [row.reg_no, row.name, row.grade]);
      doc.autoTable({
        head: [['Student ID', 'Name', 'Grade']],
        body: tableData
      });

      const pdfBlob = doc.output('blob');
      const objectUrl = URL.createObjectURL(pdfBlob);
      window.open(objectUrl);
    }

    return(
        <>
        <h2>Students</h2>
       
          <div className="table-container">

          <Grid container spacing={1} justifyContent="center"  marginBottom={"10px"}>
          
              <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 , marginRight:3,backgroundColor:"#2F7D8C" }}>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search here"
                    onChange={handleSearch}
                    onKeyPress={(event) => {
                      // console.log(`Pressed keyCode ${ev.key}`);
                      if (event.key === 'Enter') {
                        event.preventDefault()
                        const filtered = tableData.filter((row) => {
                          return row.reg_no.toLowerCase().includes(searchQuery) ||
                            row.name.toLowerCase().includes(searchQuery) ||
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

            <Button href="/Teacher/AddStudent" variant="contained" startIcon={<AddIcon/> } sx={{marginBottom:2,backgroundColor:green[900]}}>Add</Button>
            
            </Grid>

            <table className="table">
                <thead>
                <tr>
                    <th>Reg NO</th>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Actions</th>
                    
                </tr>
                </thead>
                <tbody>
                {filteredData.map((row, index) => (
                    <tr key={index}>
                    <td>{row.reg_no}</td>
                    <td>{row.name}</td>
                    <td>{row.grade}</td>

                    <td>
                    <Button 

                        variant="contained" 
                        startIcon={<EditIcon/> } 
                        sx={{marginBottom:2, marginRight:5 , backgroundColor:orange[900]}}
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
              >Generate Report
              </Button>
          </div>
        </>
    )

}

export default StudentList;
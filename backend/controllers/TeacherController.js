
import Student from "../models/StudentModel.js";
import Mark from "../models/MarksModel.js";
import Teacher from "../models/TeacherModel.js";
import Subject from "../models/SubjectModel.js";


export const addStudent = async (req, res) => {
    const { reg_no, grade, name  } = req.body;

    const saveStudent = new Student({
 
      name: name,
      grade:grade,
      reg_no:reg_no
    });
  
    
    try {
      await saveStudent.save();
      res.status(201).json(saveStudent);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  

  export const addTeacher = async (req, res) => {
    const { reg_no, subject, name  } = req.body;

    const saveTeacher = new Teacher({
 
      name: name,
      subject:subject,
      reg_no:reg_no
    });
  
    try {
      await saveTeacher.save();
      res.status(201).json(saveTeacher);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  export const addSubject = async (req, res) => {
    const {  sub_code, subject, grade  } = req.body;

    const saveSubject = new Subject({
 
      sub_code: sub_code,
      subject:subject,
      grade:grade
    });
  
    try {
      await saveSubject.save();
      res.status(201).json(saveSubject);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };



  export const addMark = async (req, res) => {
    const { studentRegNO, subjectCode, mark } = req.body;
  
    const saveMark = new Mark({
 
      studentRegNO: studentRegNO,
      subjectCode:subjectCode,
      mark:mark
    });
  
    try {
      await saveMark.save();
      res.status(201).json(saveMark);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  

  export const getAllStudents = async (req, res) => {
    try {
      const getAllStudents = await Student.find();
      res.status(200).json(getAllStudents);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const getAllTeachers = async (req, res) => {
    try {
      const getAllTeachers = await Teacher.find();
      res.status(200).json(getAllTeachers);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


  export const getAllSubjects = async (req, res) => {
    try {
      const getAllSubjects = await Subject.find();
      res.status(200).json(getAllSubjects);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


  export const getAllMarks = async (req, res) => {
    try {
      const getAllMarks = await Mark.find();
      res.status(200).json(getAllMarks);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


  export const getMarkDetails = async (req, res) => {
    const { id } = req.params;
  
    try {
      const markDetails = await Mark.findById(id);
      res.status(200).json(markDetails);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const getTeacherDetails = async (req, res) => {
    const { id } = req.params;
  
    try {
      const teacherDetails = await Teacher.findById(id);
      res.status(200).json(teacherDetails);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const getSubjectDetails = async (req, res) => {
    const { id } = req.params;
  
    try {
      const subjectDetails = await Subject.findById(id);
      //console.log("Subject",subjectDetails)

      res.status(200).json(subjectDetails);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const getStudentDetails = async (req, res) => {
    const { id } = req.params;
  
    try {
      const studentDetails = await Student.findById(id);
      //console.log("Subject",subjectDetails)

      res.status(200).json(studentDetails);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


  export const updateStudent = async (req, res) => {
    const studentId = req.params.id
    const { name,  grade  } = req.body;
    try {
      await Student.findByIdAndUpdate(studentId, {
        name: name,
        grade:grade
      });
   //console.log("student updated:::",id)
      res.status(200).json({ message: "successfully updated" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


  export const updateTeacher = async (req, res) => {
    const teacherId = req.params.id
    const { name,  subject  } = req.body;
    try {
      await Teacher.findByIdAndUpdate(teacherId, {
        name: name,
        subject:subject
      });
   
      res.status(200).json({ message: "successfully updated" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const updateSubject = async (req, res) => {
    const subjectId = req.params.id
    const { grade,  subject  } = req.body;
    try {
      await Subject.findByIdAndUpdate(subjectId, {
        grade: grade,
        subject:subject
      });
   //console.log("updatedDetails",req.body)
      res.status(200).json({ message: "successfully updated" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const updateMark = async (req, res) => {
    const markId = req.params.id
    const { studentRegNO, subjectCode, mark } = req.body;
    try {
      await Mark.findByIdAndUpdate(markId, {
        studentRegNO: studentRegNO,
        subjectCode:subjectCode,
        mark:mark
      });
   
      res.status(200).json({ message: "successfully updated" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


  export const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
      await Student.findByIdAndDelete(id);
      res.status(200).json({ message: "successfully deleted" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


  export const deleteSubject = async (req, res) => {
    const { id } = req.params;
    try {
      await Subject.findByIdAndDelete(id);
      res.status(200).json({ message: "successfully deleted" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


  export const deleteTeacher = async (req, res) => {
    const { id } = req.params;
    try {
      await Teacher.findByIdAndDelete(id);
      res.status(200).json({ message: "successfully deleted" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
};

  export const deleteMark = async (req, res) => {
    const { id } = req.params;
    try {
      await Mark.findByIdAndDelete(id);
      res.status(200).json({ message: "successfully deleted" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
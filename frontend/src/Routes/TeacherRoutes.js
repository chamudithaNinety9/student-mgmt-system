import React from "react";
import { createBrowserRouter } from "react-router-dom";

import TeacherLayout from '../Layouts/TeacherLayout';
import HomeTeacher from '../Views/TeacherViews/TeacherHome';
import StudentList from "../Views/TeacherViews/StudentList";
import AddStudent from "../Views/TeacherViews/AddStudent";
import SubjectList from "../Views/TeacherViews/SubjectList";
import AddSubject from "../Views/TeacherViews/AddSubject";
import TeacherList from "../Views/TeacherViews/TeacherList";
import MarkList from "../Views/TeacherViews/MarksList";
import AddMark from "../Views/TeacherViews/AddMark";
import AddTeacher from "../Views/TeacherViews/AddTeacher";
import UpdateStudent from "../Views/TeacherViews/UpdateStudent";
import UpdateTeacher from "../Views/TeacherViews/UpdateTeacher";
import UpdateSubject from "../Views/TeacherViews/UpdateSubject";
import UpdateMark from "../Views/TeacherViews/UpdateMark";

const TeacherRoutes = 
// createBrowserRouter ([
  {
    path: "/Teacher",
    element: <TeacherLayout />,
    children: [
      {
        path: "/Teacher/:id",
        element: <HomeTeacher />,
      },
      {
        path: "/Teacher/TeacherList",
        element: <TeacherList/>,
      },   
      {
        path: "/Teacher/AddTeacher",
        element: <AddTeacher/>,
      },   
      {
        path: "/Teacher/UpdateTeacher/:id",
        element: <UpdateTeacher/>,
      },
      {
        path: "/Teacher/StudentList",
        element: <StudentList/>,
      },
      {
        path: "/Teacher/AddStudent",
        element: <AddStudent/>,
      },      
      {
        path: "/Teacher/UpdateStudent/:id",
        element: <UpdateStudent/>,
      },
      {
        path: "/Teacher/SubjectList",
        element: <SubjectList/>,
      },
      {
        path: "/Teacher/AddSubject",
        element: <AddSubject/>,
      },
      {
        path: "/Teacher/UpdateSubject/:id",
        element: <UpdateSubject/>,
      },
      {
        path: "/Teacher/MarkList",
        element: <MarkList/>,
      },
      {
        path: "/Teacher/AddMark",
        element: <AddMark/>,
      },
      {
        path: "/Teacher/UpdateMark/:id",
        element: <UpdateMark/>,
      },

    ]}
  // ])
        

export default TeacherRoutes;
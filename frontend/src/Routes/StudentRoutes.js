import React from "react";
import { createBrowserRouter } from "react-router-dom";

import StudentLayout from '../Layouts/StudentLayout';
import HomeStudent from '../Views/StudentViews/StudentHome';
import StudentReport from '../Views/StudentViews/StudentReport';

const StudentRoutes = 
// createBrowserRouter ([
  {
    path: "/Student",
    element: <StudentLayout />,
    children: [
    //   {
    //     path: "/HomeTeacher",
    //     element: <HomeTeacher />,
    //   },
      {
        path: "/Student/resources",
        element: <HomeStudent/>,
      },
      {
        path: "/Student/:id",
        element: <StudentReport/>,
      }

    ]}
  // ])
        

export default StudentRoutes;
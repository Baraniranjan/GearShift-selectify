import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./index.css";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import {Header, UploadResume } from './components/index.js';
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter(
  [
    
    
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {

      
      path:"/home",
      element:<App/>,
      errorElement: <NotFoundPage/>,
      // children: [
      //   {
      //     path: "/upload-resume",
      //     element: <UploadResume />
      //   }
      // ]
    },
    {
      path:"/upload-resume",
      element:<UploadResume/>,
    }
  ]
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
      {/* <App /> */}
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./index.css";
import App from "./App.jsx";
import {Header, UploadResume } from './components/index.js';
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter(
  [
    {
      path:"/",
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

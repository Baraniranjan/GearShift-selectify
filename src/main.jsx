import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./index.css";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import {SearchPage, UploadResume,Category } from './components/index.js';
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { FindTalent, FindJobs } from "./components/index.js";

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
    },
    {
      path:"/upload-resume",
      element:<UploadResume/>,
    },
    {
      path: "/search",
      element: <SearchPage />
    },
    {
      path: "/profiles/:title",
      element:<Category />
    },
    {
      path: "/find-talent",
      element: <FindTalent />
    },
    {
      path: "/find-jobs",
      element: <FindJobs />
    },
  ]
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
      {/* <App /> */}
  </StrictMode>
);

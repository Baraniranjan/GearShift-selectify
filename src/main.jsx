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
import PostAJob from "./components/PostAJob.jsx";
import SearchResults from "./components/SearchResults.jsx";
import {Tools,
  LearnMore,
  Summarize,
  IdentifyRoles,
  ScreenProfiles,
  SummarizeData,
  ToolsData,IdentifyData} from "./components/index.js";

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
      path: "/find-talent/search",
      element: <SearchResults />
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
    {
      path: "/post-a-job",
      element: <PostAJob />
    },
    {
      path: "/tools",
      element: <Tools />
    },
    {
      path: "/tools/learn-more",
      element: <LearnMore />
    },
    {
      path: "/tools/identify-roles",
      element: <IdentifyRoles />
    },
    {
      path: "/tools/screen-profiles",
      element: <ScreenProfiles />
    },
    {
      path:"/tools/summarize",
      element:<Summarize/>
    },
    {
      path:"/summarize-data",
      element:<SummarizeData/>
    },{
      path:"/identify-data",
      element:<IdentifyData/>
    },
    
    {
      path:"/find-roles",
      element:<ToolsData/>
    },
  ]
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
      {/* <App /> */}
  </StrictMode>
);

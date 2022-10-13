import Nav from "./Nav.js";
import BlogSection from "./englishDynamic/blogSection.js";
//import Latestpage from "./latestsection.js";
import LatestBlogs from "./latestsection.js";
// import AuthPage from "./AuthPage";
import { Routes, Route, Outlet } from "react-router-dom";
function Homepage() {
  return (
    <div className="h-screen bg-slate-50">
      <div className="">
        <LatestBlogs></LatestBlogs>
      </div>
      <footer> </footer>
    </div>
  );
}

export default Homepage;

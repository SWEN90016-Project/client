import Nav from "./Nav.js";
import BlogSection from "./englishDynamic/blogSection.js";
// import AuthPage from "./AuthPage";
import { Routes, Route, Outlet } from "react-router-dom";
function Homepage() {
  return (
    <div className="h-screen bg-slate-50">
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <h1>Welcome to the Online Language Research Tool </h1>
      <div class="columns-1"></div>
      <body>
        <BlogSection></BlogSection>
      </body>

      <footer> </footer>
    </div>
  );
}

export default Homepage;

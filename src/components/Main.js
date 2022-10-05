import Nav from "./Nav.js";
// import AuthPage from "./AuthPage";
import { Routes, Route, Outlet } from "react-router-dom";
function Main() {
  return (
    <div className="">
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>

      <footer> </footer>
    </div>
  );
}

export default Main;

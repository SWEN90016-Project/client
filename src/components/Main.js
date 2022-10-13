import Nav from "./Nav.js";
// import AuthPage from "./AuthPage";
import { Routes, Route, Outlet } from "react-router-dom";
function Main() {
  return (
    <div className="min-h-screen  bg-gradient-to-bl from-amber-50 via-red-200 to-yellow-200">
      <header className="z-200">
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

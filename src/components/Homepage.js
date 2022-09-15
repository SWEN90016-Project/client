import Nav from "./Nav.js";
// import AuthPage from "./AuthPage";
import { Routes, Route, Outlet } from "react-router-dom";
function Homepage() {
  return (
    <div className="h-screen bg-yellow-400">
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <h1>Launder</h1>
      <footer></footer>
    </div>
  );
}

export default Homepage;

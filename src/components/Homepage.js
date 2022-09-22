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
      <h1>Welcome to the Online Language Research Tool </h1>
      <div class="columns-1"></div>
      <body>
        <p>Latest Research</p>

        <ul class="list-decimal">
          <li class="indent-8"> Research 1</li>
          <li class="indent-8">Research 2</li>
          <li class="indent-8">Research 3</li>
        </ul>
      </body>

      <footer> </footer>
    </div>
  );
}

export default Homepage;

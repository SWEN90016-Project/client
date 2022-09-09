import { Link } from "react-router-dom";
function Welcome() {
  return (
    <div className="h-screen bg-red-400">
      <h1>Welcome</h1>
      <ul>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Homepage">Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default Welcome;

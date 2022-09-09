import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="h-screen bg-blue-400">
      <h1 className="text-black">Login</h1>
      <Link to="/Homepage">Homepage</Link>
    </div>
  );
}

export default Login;

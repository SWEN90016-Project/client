import { Link } from "react-router-dom";
function AuthPage() {
  return (
    <div className="h-screen bg-blue-400">
      <h1 className="text-black">auth</h1>
      <Link to="/Homepage">Homepage</Link>
    </div>
  );
}

export default AuthPage;

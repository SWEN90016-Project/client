import { Link } from "react-router-dom";
function Groups() {
  return (
    <div className="h-screen bg-blue-400">
      <h1 className="text-black">Groups</h1>
      <Link to="/Homepage">Homepage</Link>
    </div>
  );
}

export default Groups;

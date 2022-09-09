import { Link } from "react-router-dom";
function Fatsil() {
  return (
    <div className="h-screen bg-blue-400">
      <h1 className="text-black">Fatsil</h1>
      <Link to="/Homepage">Homepage</Link>
    </div>
  );
}

export default Fatsil;

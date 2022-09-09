import { Link } from "react-router-dom";
function EnglishStatic() {
  return (
    <div className="h-screen bg-blue-400">
      <h1 className="text-black">EnglishStatic</h1>
      <Link to="/Homepage">Homepage</Link>
    </div>
  );
}

export default EnglishStatic;

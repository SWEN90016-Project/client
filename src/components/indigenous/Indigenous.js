import { Link } from "react-router-dom";
import { UserTokenContext } from "../../App";
import { useContext } from "react";
function Indigenous() {
  const { authLevel, username } = useContext(UserTokenContext);
  if ((authLevel === "admin") | (authLevel === "client")) {
    return (
      <div className="h-screen bg-blue-400">
        <h1 className="text-black">Indigenous</h1>
        <Link to="/Homepage">Homepage</Link>
      </div>
    );
  }
  return (
    <div className="h-screen bg-blue-400">
      <h1 className="text-black">ACCESS RESTRICTED</h1>
      <Link to="/Homepage">Homepage</Link>
    </div>
  );
}

export default Indigenous;

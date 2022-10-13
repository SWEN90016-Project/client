import { Link } from "react-router-dom";
import { UserTokenContext } from "../../App";
import { useContext } from "react";
function Indigenous() {
  const { authLevel, username } = useContext(UserTokenContext);
  if ((authLevel === "admin") | (authLevel === "client")) {
    return (
      <div className="">
        <div className="  font-bold  text-2xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-8xl container mx-auto  py-12 sm:py-24  px-12 ">
          Indigenous Dhudhuroa Language
          <h2 className="  text-gray-900  sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl container mx-auto px-8  ">
            Access Granted
          </h2>
        </div>
      </div>
    );
  }
  return (
    <div className="">
      <div className="  font-bold  text-2xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-8xl container mx-auto  py-12 sm:py-24  px-12">
        [Access Restricted]
      </div>
    </div>
  );
}

export default Indigenous;

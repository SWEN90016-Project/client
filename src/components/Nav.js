import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";
import indigenousSymbol from "./assets/aboriginal-australia.png";
export default function Nav() {
  return (
    <header className="bg-amber-500 z-100 z-10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center z-30">
            <Link to="/Homepage">
              {/* <span className="sr-only">Your Company</span> */}
              <img
                className="h-10 w-auto"
                src={indigenousSymbol}
                // src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt=""
              />
            </Link>
            <div className="grid grid-flow-col ml-10 space-x-8">
              <NavDropdown />
              <Link
                to="/Homepage/Authorization"
                className="text-base font-medium text-white hover:text-black"
              >
                Authorization
              </Link>
              <Link
                to="/Homepage/Groups"
                className="text-base font-medium text-white hover:text-black"
              >
                Groups
              </Link>
              <Link
                to="/Homepage/Text"
                className="text-base font-medium text-white hover:text-black"
              >
                Text
              </Link>
              <Link
                to="/Homepage/Fatsil"
                className="text-base font-medium text-white hover:text-black"
              >
                Fatsil
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4 z-20">
            <Link
              to="/"
              className="inline-block border-2 border-white text-white px-4 py-2 rounded-md hover:bg-white hover:border-amber-400 hover:text-black"
              onClick={() => {
                localStorage.removeItem("user");
              }}
            >
              Log Out
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

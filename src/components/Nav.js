import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";

export default function Nav() {
  return (
    <header className="bg-indigo-600 z-100 z-10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center z-30">
            <Link to="/Homepage">
              {/* <span className="sr-only">Your Company</span> */}
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt=""
              />
            </Link>
            <div className="grid grid-flow-col ml-10 space-x-8">
              <NavDropdown />
              <Link
                to="/Homepage/Authorization"
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                Authorization
              </Link>
              <Link
                to="/Homepage/Groups"
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                Groups
              </Link>
              <Link
                to="/Homepage/Text"
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                Text
              </Link>
              <Link
                to="/Homepage/Fatsil"
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                Fatsil
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              to="/"
              className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
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

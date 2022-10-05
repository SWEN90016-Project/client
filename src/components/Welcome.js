import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="h-screen ">
      <div className="grid grid-cols-3">
        <div className="grid grid-cols-1 gap-4 place-items-center h-screen bg-blue-500">
          <div className="grid grid-rows-2 h-96 place-items-center">
            <div>
              <h1 className="pb-4 px-4 text-center text-4xl font-bold text-white">
                Sample Text Welcome to Page
              </h1>
              <h2 className="text-center text-xl text-white">subtext sample</h2>
            </div>

            <Link
              to="/Login"
              className="border-2 border-white text-white px-8 py-2 rounded-md"
            >
              Login
            </Link>
            
          </div>
        </div>
        <div className="h-screen bg-white col-span-2 grid grid-cols-1 gap-4 place-items-center">
          <div className="grid grid-flow-row place-items-center  rounded-lg">
            <div>
              <h1 className="p-4 text-center text-7xl font-bold text-blue-500">
                Create Account
              </h1>
              <h2 className="text-center text-xl text-blue-500">
                Register subtext
              </h2>
            </div>
            <div className="w-full pt-4">
              <div className=" py-8 px-4 rounded-lg">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 px-8 py-2 rounded-md text-white"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

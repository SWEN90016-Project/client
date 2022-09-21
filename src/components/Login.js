import { Link } from "react-router-dom";
function Login() {
  return (
    // <div className="h-screen bg-blue-400">
    //   <h1 className="text-black">Login</h1>
    //   <Link to="/Homepage">Homepage</Link>
    // </div>
    <div className="flex h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-50">
      <div>
        <Link to="/">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </Link>
        <h1 className="p-4 text-center text-4xl font-bold text-blue-500">
          Sign in to your account
        </h1>
        <h2 className="text-center text-xl text-blue-500">Login subtext</h2>
      </div>
      <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                  placeholder="Password"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 px-8 py-2 rounded-md text-white"
            >
              Login
            </button>
            <Link
              to="/Homepage"
              className="bg-blue-500 px-8 py-2 rounded-md text-white"
            >
              Temp
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

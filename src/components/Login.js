import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import AuthService from "../Services/auth.service.js";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import indigenousSymbol from "./assets/aboriginal-australia-128.png";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
function Login() {
  let navigate = useNavigate();
  const checkBtn = useRef();
  const form = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
        () => {
          AuthService.getCurrentUser();
          navigate("/Homepage");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-h-screen  bg-gradient-to-bl from-amber-50 via-red-200 to-yellow-200 ">
      <div className=" mt-2 sm:mx-auto sm:w-full sm:max-w-md rounded-lg bg-white bg-opacity-50 backdrop-blur-lg drop-shadow-lg border">
        <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Link to="/">
            <img
              className="mx-auto h-32 w-auto rotate-180"
              src={indigenousSymbol}
              alt="Your Company"
            />
          </Link>
          <h1 className="p-4 text-center text-4xl font-bold text-amber-400">
            Sign in to your account
          </h1>
          <h2 className="text-center text-xl text-amber-400 pb-8">
            Login to see research
          </h2>
          <Form className="space-y-6" onSubmit={handleLogin} ref={form}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm"
                  placeholder="you@example.com"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required]}
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
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-amber-400 px-8 py-2 rounded-md text-white hover:bg-amber-700"
              disabled={loading}
            >
              Login
            </button>
            {/* <Link
              to="/Homepage"
              className="bg-amber-500 px-8 py-2 rounded-md text-white"
            >
              Temp
            </Link> */}
            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
            <div></div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;

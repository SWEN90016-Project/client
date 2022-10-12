import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/Form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useNavigate } from "react-router-dom";
import { isEmail } from "validator";
import AuthService from "../Services/auth.service.js";
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
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
function Welcome() {
  let navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          navigate("/Login");
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };
  return (
    <div className="h-screen ">
      <div className="grid grid-cols-3">
        <div className="grid grid-cols-1 gap-4 place-items-center h-screen bg-amber-400">
          <div className="grid grid-rows-auto h-96 place-items-center">
            <img className="h-32 w-auto" src={indigenousSymbol} alt="" />
            <div>
              <h1 className="pb-4 px-4 text-center text-4xl font-bold text-white">
                Indigenous Languages: Revival and Reclamation Online Research
                Tool
              </h1>
              <h2 className="text-center text-xl text-white">
                To access this tool Login or Register a new account!
              </h2>
            </div>

            <Link
              to="/Login"
              className="border-2 border-white text-white px-8 py-2 rounded-md hover:bg-white hover:border-amber-400 hover:text-black"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="h-screen bg-white col-span-2 grid grid-cols-1 gap-4 place-items-center">
          <div className="grid grid-flow-row place-items-center  rounded-lg">
            <div>
              <h1 className="p-4 text-center text-7xl font-bold text-amber-500">
                Create Account
              </h1>
              <h2 className="text-center text-xl text-amber-500">
                Create an Account and apply for authorization on the
                authorization page
              </h2>
            </div>
            <div className="w-full pt-4">
              <div className=" py-8 px-4 rounded-lg">
                <Form
                  className="space-y-6"
                  onSubmit={handleRegister}
                  ref={form}
                >
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <div className="mt-1">
                      <Input
                        type="text"
                        name="username"
                        id="username"
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm"
                        placeholder="Username"
                        value={username}
                        onChange={onChangeUsername}
                        validations={[required, vusername]}
                      />
                    </div>
                  </div>
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
                        validations={[required, validEmail]}
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
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required, vpassword]}
                      />
                    </div>
                  </div>
                  {message && (
                    <div className="form-group">
                      <div
                        className={
                          successful
                            ? "alert alert-success"
                            : "alert alert-danger"
                        }
                        role="alert"
                      >
                        {message}
                      </div>
                    </div>
                  )}
                  <button
                    type="submit"
                    className="bg-amber-500 px-8 py-2 rounded-md text-white hover:bg-amber-800"
                  >
                    Register
                  </button>
                  <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

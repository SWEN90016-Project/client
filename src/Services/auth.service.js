import axios from "axios";
import { useState } from "react";
const API_URL = "http://localhost:9000/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};
const login = async (email, password) => {
  const response = await axios.post(API_URL + "signin", {
    email,
    password,
  });
  if (response.data.accessToken) {
    // console.log("local");
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  console.log(response.data);
  return response.data;
};
const logout = () => {
  console.log("new");
  //   localStorage.removeItem("user");
};
const getCurrentUser = () => {
  console.log(localStorage.getItem("user"));
  return JSON.parse(localStorage.getItem("user"));
};

const getAuthLevel = async () => {
  const token = JSON.parse(localStorage.getItem("user"));

  try {
    console.log(JSON.parse(localStorage.getItem("user")));
    var config;
    if (token == null) {
      config = "null";
      console.log("null");
    } else {
      config = {
        headers: { Authorization: `Bearer ${token.accessToken}` },
      };
    }

    const response = await axios.get(API_URL + "api/permsCheck", config);

    if (response.status === 200) {
      // console.log(response.data.user);
      // level = response.data.user.Permissions;
      return response.data.user;
    }

    // return response.data;
  } catch (error) {
    console.log("false");

    console.error(error);
    return false;
  }
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  getAuthLevel,
};
export default AuthService;

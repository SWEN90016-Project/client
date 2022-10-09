import { useState, useRef, useEffect, useContext } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";
import ImageCard from "./imageCard";
import { UserTokenContext } from "../App";
const API_URL = "http://localhost:9000/api/";
// this provides an alert if required field is not filled
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

function Files() {
  const { authLevel, username } = useContext(UserTokenContext);
  const checkBtn = useRef();
  const form = useRef();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [getState, setGetState] = useState("defualt");
  const [getLoading, setGetLoading] = useState(true);

  const onChangeTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };
  const onChangeText = (e) => {
    const text = e.target.value;
    setText(text);
  };

  // this gets called when the form is submitted
  // creates a new formData then appends the values to the form
  // the string is important as this gets matched on the backend
  const formSubmission = async (e) => {
    e.preventDefault();
    try {
      // TODO: ADD LOGGEDIN USER TO FORM
      const formData = new FormData();
      formData.append("myFile", selectedFile);
      formData.append("text", text);
      formData.append("title", title);
      formData.append("username", username);
      axios.post(API_URL + "single", formData);
      // calls a reload after submission to reset form and load new data
      window.location.reload();
    } catch (error) {
      const message = error.response
        ? error.response.data.message
        : error.message;
      setMessage(message);
    }
  };

  // function to get every file
  // also contains loading check in this
  const getAllFiles = async () => {
    try {
      const response = await axios.get(API_URL + "getFile");
      setGetState(response.data);
      setGetLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  // deletes the file based on the id

  // gets the files on the first load of the page
  useEffect(() => {
    getAllFiles();
  }, []);
  // renders a loading page while it waits for the request to finish
  if (getLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div className="bg-slate-400 h-1/2 overflow-auto px-4">
      
        {/* the form to be submitted to the backend */}

        <Form
          encType="multipart/form-data"
          className="space-y-6"
          onSubmit={formSubmission}
          ref={form}
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <div className="mt-1">
              <Input
                type="text"
                name="fileTitle"
                id="title"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm"
                placeholder="Title"
                value={title}
                onChange={onChangeTitle}
                validations={[required]}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              Text
            </label>
            <div className="mt-1">
              <Input
                id="text"
                name="text"
                type="text"
                placeholder="Text"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                value={text}
                onChange={onChangeText}
                validations={[required]}
              />
            </div>
            <input
              type="file"
              id="myFile"
              name="myFile"
              validations={[required]}
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 px-8 py-2 rounded-md text-white"
          >
            Submit
          </button>

          <CheckButton style={{ display: "none" }} ref={checkBtn} />
          <div></div>
        </Form>

    
     
    </div>
  );
}

export default Files;

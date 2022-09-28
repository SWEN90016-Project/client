import { useState, useRef } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";
const API_URL = "http://localhost:9000/api/";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const createPost = (title, text) => {
  return axios
    .post(API_URL + "newPost", {
      title,
      text,
    })
    .then((response) => {
      //   console.log(response.data);
      return response.data;
    });
};
function SamplePage() {
  const checkBtn = useRef();
  const form = useRef();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const onChangeTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };
  const onChangeText = (e) => {
    const text = e.target.value;
    setText(text);
  };
  const handlePost = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      createPost(title, text).then((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setLoading(false);
        setMessage(resMessage);
      });
    } else {
      setLoading(false);
    }
  };
  return (
    <div className="flex h-screen flex-col justify-center">
      <Form className="space-y-6" onSubmit={handlePost} ref={form}>
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
              name="title"
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
              //   validations={[required]}
            />
          </div>
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
          disabled={loading}
        >
          Submit
        </button>

        <CheckButton style={{ display: "none" }} ref={checkBtn} />
        <div></div>
      </Form>
    </div>
  );
}

export default SamplePage;

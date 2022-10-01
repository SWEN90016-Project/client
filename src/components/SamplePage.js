import { useState, useRef, useEffect } from "react";
import uploadFile from "./englishDynamic/uploadFiles.js";
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

// const get = axios.get("http://localhost:9000/api/download");
const createPost = (title, text, upload) => {
  return axios
    .post(API_URL + "upload", {
      title,
      text,
      upload,
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
  const [selectedFile, setSelectedFile] = useState(null);
  const [getState, setGetState] = useState("defualt");

  // On file select (from the pop up)
  // onFileChange = (event) => {
  //   // Update the state
  //   setSelectedFile(event.target.files[0]);
  // };
  // const get = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:9000/api/download", {
  //       responseType: "arraybuffer",
  //     });
  //     console.log(response);
  //     // setGetState(response.data);
  //     // console.log(getState);
  //     const binaryString = Array.from(new Uint8Array(response.body), (v) =>
  //       String.fromCharCode(v)
  //     ).join("");
  //     // 7.
  //     // const theImage = btoa(binaryString);
  //     setGetState(binaryString.toString("base64"));
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

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
      console.log(selectedFile);
      createPost(title, text, selectedFile).then((error) => {
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

  const testing = async (e) => {
    e.preventDefault();
    try {
      // let formID = document.getElementById("form");
      const formData = new FormData();
      formData.append("myFile", selectedFile);
      formData.append("text", message);
      console.log(formData);
      axios.post("http://localhost:9000/api/single", formData);
      // window.location.reload();
    } catch (error) {
      const message = error.response
        ? error.response.data.message
        : error.message;
      setMessage(message);
    }
  };

  const getAllFiles = async () => {
    // e.preventDefault();
    try {
      const response = await axios.get("http://localhost:9000/api/getFile");
      setGetState(response.data);
      console.log(getState.data[0].filePath);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllFiles();
  }, []);
  return (
    <div className="flex h-screen flex-col justify-center">
      <Form
        encType="multipart/form-data"
        className="space-y-6"
        onSubmit={testing}
        ref={form}
        if="form"
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
              //   validations={[required]}
            />
          </div>
          <input
            type="file"
            id="myFile"
            name="myFile"
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
          disabled={loading}
        >
          Submit
        </button>

        <CheckButton style={{ display: "none" }} ref={checkBtn} />
        <div></div>
      </Form>
      <button
        onClick={() => {
          getAllFiles();
          console.log("test");
        }}
      >
        testing
      </button>
      <img
        src={`http://localhost:9000/${getState.data[0].filePath}`}
        alt="{{ image }}"
        width={500}
      />
    </div>
  );
}

export default SamplePage;

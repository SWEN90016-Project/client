import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
function AuthPage() {
  const [radio, setRadio] = useState("");

  const onValueChange = (e) => {
    rad = e.target.value;
    setRadio(rad);
  };

  const sendRequest = async () => {
    try {
      axios.post("http://localhost:9000/api/newRequest", {
        username: "default",
        level: radio,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="h-screen bg-blue-400">
      <div className="grid grid-cols-1 gap-4 place-items-center h-screen bg-blue-500">
        <div className="grid grid-rows-2 h-96 place-items-center bg-white rounded-md py-2 px-8 shadow-md">
          <div>
            <h1 className="pb-4 px-4 text-center text-4xl font-bold">
              Request Page
            </h1>
            <div>
              <label className="text-base font-medium text-gray-900">
                Levels
              </label>

              <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                <div className="flex items-center gap-2">
                  <input
                    id="create"
                    name="notification-method"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onChange={onValueChange}
                    checked={radio === "Create"}
                    value="Create"
                  />
                  <label className="pr-2 block text-sm font-medium text-gray-700">
                    Create
                  </label>
                  <input
                    id="read"
                    name="notification-method"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onChange={onValueChange}
                    checked={radio === "Read"}
                    value="Read"
                  />
                  <label className="pr-2 block text-sm font-medium text-gray-700">
                    Read
                  </label>
                  <input
                    id="update"
                    name="notification-method"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onChange={onValueChange}
                    checked={radio === "Update"}
                    value="Update"
                  />
                  <label className="pr-2 block text-sm font-medium text-gray-700">
                    Update
                  </label>
                  <input
                    id="delete"
                    name="notification-method"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onChange={onValueChange}
                    checked={radio === "Delete"}
                    value="Delete"
                  />
                  <label className=" block text-sm font-medium text-gray-700">
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button
            className="border-2 border-blue-500 p-2 rounded-md"
            onClick={() => {
              console.log(radio);
              sendRequest();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;

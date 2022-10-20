import { useState, useContext } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import FileDownload from "js-file-download";
import moment from "moment";
import { UserTokenContext } from "../../App";
import {
  ArrowDownTrayIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
const API_URL = "http://localhost:9000/api/";
function AudioV2(props) {
  const { authLevel, username } = useContext(UserTokenContext);
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(props.item.text);
  const onChangeEdit = (e) => {
    const edit = e.target.value;
    setEditText(edit);
  };
  const deleteFile = async (id) => {
    try {
      axios.delete(API_URL + "deleteFile/" + id);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const updateFile = async (id) => {
    try {
      axios.put(API_URL + "updateFile/" + id, { text: editText });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const download = async (file, id) => {
    try {
      await axios
        .get(API_URL + "download/" + id, { responseType: "blob" })
        .then((response) => {
          console.log(response);

          FileDownload(response.data, file);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="h-96 w-96 p-2 rounded-lg hover:shadow-md bg-red-300 bg-opacity-20 backdrop-blur-lg drop-shadow-lg border border-red-400 overflow-auto ">
      <div className="grid grid-cols-2 mb-2 mt-1">
        <div>
          <h1 className="font-bold">{props.item.title}</h1>
          <h1> Authored by: {props.item.postedBy}</h1>

          <h1> Posted on {moment(props.item.createdAt).format("MMM Do YY")}</h1>
        </div>{" "}
        <div className="ml-auto">
          {authLevel === "admin" ||
          authLevel === "update" ||
          authLevel === "delete" ? (
            <button
              className="bg-blue-400 rounded-lg p-2 group mr-2 hover:bg-blue-700 hover:text-white"
              onClick={() => {
                setEdit(true);
              }}
            >
              <PencilSquareIcon
                className="h-5 w-5 text-black group-hover:text-white"
                aria-hidden="true"
              />
            </button>
          ) : (
            <></>
          )}
          {authLevel === "admin" || authLevel === "delete" ? (
            <button
              className="bg-rose-500 rounded-lg p-2 group mr-2 hover:bg-red-500 hover:text-white"
              onClick={() => {
                deleteFile(props.item._id);
              }}
            >
              <TrashIcon
                className="h-5 w-5 text-black group-hover:text-white"
                aria-hidden="true"
              />
            </button>
          ) : (
            <></>
          )}
          <button
            className="bg-green-400 rounded-lg p-2 group hover:bg-green-500 hover:text-white"
            onClick={() => {
              console.log(props.item);
              download(props.item.fileName, props.item._id);
            }}
          >
            <ArrowDownTrayIcon
              className="h-5 w-5 text-black group-hover:text-white"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      <div className="relative pb-[50%]">
        <ReactPlayer
          className="absolute"
          url={`http://localhost:9000/${props.item.filePath}`}
          controls
          preload="none"
          width="80%"
          height="80%"
          // light={"../assets/aboriginalCool.jpg"}
        />
      </div>
      {edit ? (
        <div>
          <input
            className="border-2 border-blue-500 mr-2 rounded-md"
            placeholder="Edit mode"
            onChange={onChangeEdit}
            value={editText}
          />
          <button
            className="bg-blue-400 rounded-lg p-1 hover:bg-blue-700 hover:text-white"
            onClick={() => {
              setEdit(false);
              updateFile(props.item._id);
            }}
          >
            Finish
          </button>
        </div>
      ) : (
        <p>{props.item.text}</p>
      )}
    </div>
  );
}

export default AudioV2;

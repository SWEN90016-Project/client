import { useState, useContext } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import FileDownload from "js-file-download";
import moment from "moment";
import { UserTokenContext } from "../../App";
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
    <div>
      <div className="grid grid-cols-2">
        <div>
          <h1>{props.item.title}</h1>
          <h1> Authored by: {props.item.postedBy}</h1>

          <h1> Posted on {moment(props.item.createdAt).format("MMM Do YY")}</h1>
        </div>{" "}
        <div>
          {authLevel === "admin" ||
          authLevel === "update" ||
          authLevel === "delete" ? (
            <button
              className="bg-blue-400 rounded-lg p-1 mr-2 hover:bg-blue-700 hover:text-white"
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit
            </button>
          ) : (
            <></>
          )}
          {authLevel === "admin" || authLevel === "delete" ? (
            <button
              className="bg-rose-400 rounded-lg p-1 mr-2 hover:bg-red-500 hover:text-white"
              onClick={() => {
                deleteFile(props.item._id);
              }}
            >
              Delete
            </button>
          ) : (
            <></>
          )}
          <button
            className="bg-green-400 rounded-lg p-1 hover:bg-green-500 hover:text-white"
            onClick={() => {
              console.log(props.item);
              download(props.item.fileName, props.item._id);
            }}
          >
            Download
          </button>
        </div>
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
      <div className="relative pt-[20%]">
        <ReactPlayer
          className="absolute"
          url={`http://localhost:9000/${props.item.filePath}`}
          controls
          preload="none"
          width="100%"
          height="100%"
          // light={"../assets/aboriginalCool.jpg"}
        />
      </div>
    </div>
  );
}

export default AudioV2;

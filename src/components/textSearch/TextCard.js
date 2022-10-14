import { useContext, useState } from "react";
import { UserTokenContext } from "../../App";
import axios from "axios";
import {
  TrashIcon,
  UserPlusIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
const API_URL = "http://localhost:9000/api/";
function TextCard(props) {
  const { authLevel, username } = useContext(UserTokenContext);
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(props.data.text);
  const onChangeEdit = (e) => {
    const edit = e.target.value;
    setEditText(edit);
  };
  const updateText = async (id) => {
    try {
      axios.put(API_URL + "updateText/" + id, { text: editText });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-white rounded-md hover:shadow-2xl">
      <div className="grid grid-flow-col items-center bg-red-400 p-2 rounded-t-md">
        <div className="flex  flex-row gap-2 text-white text-lg font-medium">
          <h1>Posted By:</h1>
          <p>{username}</p>
        </div>

        <div className="flex place-self-end flex-row gap-2">
          <button
            onClick={() => {
              props.setOpen(true);
              props.setSelectedText(props.data._id);
            }}
            className="place-self-end bg-blue-400 rounded-lg p-2 group mr-2 hover:bg-blue-700 hover:text-white"
          >
            <UserPlusIcon
              className="h-5 w-5 text-black group-hover:text-white"
              aria-hidden="true"
            />
          </button>
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
          {authLevel === "admin" ? (
            <button
              className="bg-rose-500 rounded-lg p-2 group mr-2 hover:bg-red-500 hover:text-white"
              onClick={() => {
                props.deleteText(props.data._id);
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
        </div>
      </div>
      <div className="grid grid-flow-row p-2 gap-2">
        <p className="font-bold">Posted Text:</p>
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
                updateText(props.data._id);
              }}
            >
              Finish
            </button>
          </div>
        ) : (
          <p>{props.data.text}</p>
        )}
      </div>
    </div>
  );
}

export default TextCard;

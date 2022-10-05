import { useContext, useState } from "react";
import { UserTokenContext } from "../../App";
import axios from "axios";
const API_URL = "http://localhost:9000/api/";
function TextCard(props) {
  const auth = useContext(UserTokenContext);
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState("");
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
    <div>
      <div className="grid grid-flow-col">
        <h1>Posted By</h1>
        <p>Username here</p>
        <div>
          <button
            onClick={() => {
              props.setOpen(true);
              props.setSelectedText(props.data._id);
            }}
          >
            AddUser
          </button>
          <button
            className="bg-blue-400 rounded-lg p-2"
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit
          </button>
          {auth === "admin" ? (
            <button
              onClick={() => {
                props.deleteText(props.data._id);
              }}
            >
              Delete Text
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>

      {edit ? (
        <div>
          <input placeholder="edit mode" onChange={onChangeEdit} />{" "}
          <button
            className="bg-blue-400"
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
  );
}

export default TextCard;

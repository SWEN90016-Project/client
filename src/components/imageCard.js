// SHOULD NOT REQUIRE MUCH CHANGES JUST NEW FILE AND COPY THIS INTO IT THEN CALL IT
import { useState } from "react";
import axios from "axios";
import FileDownload from "js-file-download";
const API_URL = "http://localhost:9000/api/";
function ImageCard(props) {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState("");
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

  // DOWNLOAD FUNCTION HERE MAKE SURE YOU IMPORT!!!!!
  const download = async (file, id) => {
    try {
      await axios
        .get(
          API_URL + "download/" + id,
          { responseType: "blob" } // !!!
        )
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
      <div>
        <h1>{props.item.title}</h1>
        <button
          className="bg-blue-400 rounded-lg p-2"
          onClick={() => {
            setEdit(true);
          }}
        >
          Edit
        </button>
        <button
          className="bg-red-400 rounded-lg p-2"
          onClick={() => {
            deleteFile(props.item._id);
          }}
        >
          Delete
        </button>
        <button
          className="bg-red-400 rounded-lg p-2"
          onClick={() => {
            console.log(props.item);
            download(props.item.fileName, props.item._id);
          }}
        >
          Download
        </button>
      </div>

      <img
        src={`http://localhost:9000/${props.item.filePath}`}
        alt="{{ image }}"
        width={500}
      />
      {edit ? (
        <div>
          <input placeholder="edit mode" onChange={onChangeEdit} />{" "}
          <button
            className="bg-blue-400"
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

export default ImageCard;

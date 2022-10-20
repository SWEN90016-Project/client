import Audio from "./Audio";
import Files from "../files";
import ImageCard from "../imageCard";
import "./englishdynamic.css";
import { useState, useEffect, useContext } from "react";
import AudioV2 from "./AudioV2";
import axios from "axios";
import { UserTokenContext } from "../../App";
const API_URL = "http://localhost:9000/api/";

function EnglishDynamic() {
  const { authLevel, username } = useContext(UserTokenContext);
  const [getState, setGetState] = useState("defualt");
  const [getLoading, setGetLoading] = useState(true);

  const getAllFiles = async () => {
    try {
      const response = await axios.get(API_URL + "getFile");

      setGetState(response.data);
      setGetLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

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

  // Request image from your server

  return (
    <div className="">
      <div className="  font-bold  text-2xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-8xl container mx-auto  py-12 sm:py-24  px-12">
        {" "}
        Indigenous Dynamic Page
        <h2 className="  text-gray-900  sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl container mx-auto px-8  ">
          Check out the latest languages, text and audio below.{" "}
        </h2>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Language information shown below
          </p>
        </div>
        <div className=" mt-12 mb-12 grid gap-4 grid-cols-3">
          {getState.data.length === 0 ? (
            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
              No Uploads
            </div>
          ) : (
            getState.data.map((item) => (
              <div key={item._id} className="">
                {item.fileType.substring(0, item.fileType.lastIndexOf("/")) ===
                "image" ? (
                  <ImageCard item={item} />
                ) : (
                  <AudioV2 item={item} />
                )}
              </div>
            ))
          )}
        </div>
      </div>
      <div className=" h-1/2 justify-center align-middle grid grid-cols-3 ">
        <div className=" col-start-2 col-end-3"></div>
      </div>
      {authLevel === "admin" ||
      authLevel === "create" ||
      authLevel === "update" ||
      authLevel === "delete" ? (
        <div className="  px-48 py-48 justify-items-center	">
          <p className="mx-auto mt-3 max-w-2xl text-4xl text-gray-500 sm:mt-4 py-8">
            Upload your text Language files below
          </p>
          <Files />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default EnglishDynamic;

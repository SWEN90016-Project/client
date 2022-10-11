import { Link } from "react-router-dom";
import Carousel from "./carousel";
import BlogSection from "./blogSection";
import Audio from './Audio'
import Files from "../files";
import ImageCard from "../imageCard";
import "./englishdynamic.css";
import { useState,useEffect} from "react";
import axios from "axios";
const API_URL = "http://localhost:9000/api/";
const track = require("url:../assets/test.mp3");

function EnglishDynamic() {
  const [getState, setGetState] = useState("defualt");
  const [getLoading, setGetLoading] = useState(true);
  const [getdownload, setdownload] = useState(false);

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
    <div className=" h-full bg-white" style={{ minHeight: 1080 }}>
      





        
      <div className=" bg-absolute justify-end grid grid-rows-3 ">
      <div className="row-span-1">  
      <div class=" bg-shape bg-black bg-blur bg-opacity-50 -z-10 " > </div>
      </div>
      <div className="row-span-1"> 
      <div class=" bg-shape bg-yellow bg-blur bg-opacity-50 -z-10" > </div>
      </div>      
      <div className="row-span-1"> 
      <div class=" bg-shape bg-red bg-blur bg-opacity-50 -z-10" ></div>
      </div>      
      </div>

 
      <div>
            
            </div>
      <div className=" z-40  font-bold  text-2xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-8xl container mx-auto  py-12 sm:py-24  px-12"> Indigenous Dynamic Page 
      <h2 className="  text-gray-900  sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl container mx-auto   ">
        Check out the latest Languages ,Text and Audio </h2>
       </div>





      <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Language information shown below
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            
            {getState.data.map((item) => (
              
              <div key={item._id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <ImageCard item={item} />

              </div>
            ))}
          </div>
          <Audio
        urls={[
          track,
          track,
          track,
        ]}
       
       
      />
        </div>
      <div className=" h-1/2 justify-center align-middle grid grid-cols-3 ">
        <div className=" col-start-2 col-end-3">
        
        </div>
      </div>
      <div className="  px-48 py-48 justify-items-center	">
      <p className="mx-auto mt-3 max-w-2xl text-4xl text-gray-500 sm:mt-4 py-8">
      Upload your  text Language files below  
      </p>
      <Files />

      </div>

      





      
    </div>
    
  );
}

export default EnglishDynamic;

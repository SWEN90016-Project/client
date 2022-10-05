import { Link } from "react-router-dom";
import Carousel from "./carousel";
import BlogSection from "./blogSection";
import Audio from './Audio'
import Files from "../files";
import "./englishdynamic.css";
import { useState,useEffect} from "react";
import axios from "axios";
const API_URL = "http://localhost:9000/api/";
import AboriginalFlag from "../assets/aboriginal.png"
const track = require("url:../assets/test.mp3");

function EnglishDynamic() {
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
  return (
    <div className=" h-full bg-white" style={{ minHeight: 1080 }}>
      


      
      <div className=" bg-absolute justify-end grid grid-rows-3 ">
      <div className="row-span-1">  
      <div class=" bg-shape bg-black bg-blur bg-opacity-50 -z-10 " > </div>
      </div>
      <div className="row-span-1"> 
      <div class=" bg-shape bg-yellow bg-blur bg-opacity-50" > </div>
      </div>      
      <div className="row-span-1"> 
      <div class=" bg-shape bg-red bg-blur bg-opacity-50" ></div>
      </div>      
      </div>

 
      <div>
            
            </div>
      <div className=" z-40  text-2xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-9xl container mx-auto  py-12 sm:py-24 justify-center px-24"> Indigenous dynamic page This page is for aboriginals .... </div>




      <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Check out the latest languages and audio </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Language information shown below
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {getState.data.map((item) => (
              <div key={item._id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={`http://localhost:9000/${item.filePath}`} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={`http://localhost:9000/${item.filePath}`} className="hover:underline">
                        {item.text}
                      </a>
                    </p>
                    <a href={`http://localhost:9000/${item.filePath}`} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                      <p className="mt-3 text-base text-gray-500">{item.text}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                   
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                    
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                    
                        <span aria-hidden="true">&middot;</span>
                     
                        <a href={`http://localhost:9000/${item.filePath}`} download={item._id}> Download Here </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      <div className=" h-1/2 justify-center align-middle grid grid-cols-3 ">
        <div className=" col-start-2 col-end-3">
        
        </div>
      </div>
      <div className="  px-48 py-48 justify-items-center	">
     
      <Files />
      the next thing to do is download data capability
      a landing page that has language and view hear data.
      and permissions to show specific things
      </div>
     <div>
      maybe i have a chunk of code below which shows information depending on the auth level, like a collague of information depending on auth level
     </div>
      




<div className="p-2 grid grid-flow-cols gap-2">
        
        </div>
        <Audio
        urls={[
          track,
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        ]}
      />
          <a href={AboriginalFlag} download="aboriginal.png"> Download Here </a>
          <div className="  px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute ">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        
      </div>


      
    </div>
    
  );
}

export default EnglishDynamic;

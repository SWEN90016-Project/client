import { Link } from "react-router-dom";
import Carousel from "./carousel";

function EnglishDynamic() {
  return (
    <div className=" h-screen bg-blue-400" style={{ minHeight: 1080 }}>
             <div className=" z-40  text-2xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-9xl container mx-auto  py-12 sm:py-24 justify-center px-24"> Indigenous dynamic page This page is for aboriginal .... </div>

      <div className=" h-1/2 justify-center align-middle grid grid-cols-3 ">
        <div className=" col-start-2 col-end-3">
        <Carousel className="justify-center"></Carousel>
        </div>
      </div>
      <h1 className="text-black">EnglishDynamic</h1>
   


      <Link to="/Homepage">Homepage</Link>
    </div>
  );
}

export default EnglishDynamic;

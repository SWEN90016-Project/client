import { Link } from "react-router-dom";
import Carousel from "./carousel";
import UploadFile from "./uploadFiles";
function EnglishDynamic() {
  return (
    <div className=" h-full bg-white" style={{ minHeight: 1080 }}>
      <div>
            <Link to="/Homepage">Homepage</Link>
            </div>
      <div className=" z-40  text-2xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-9xl container mx-auto  py-12 sm:py-24 justify-center px-24"> Indigenous dynamic page This page is for aboriginals .... </div>

      <div className=" h-1/2 justify-center align-middle grid grid-cols-3 ">
        <div className=" col-start-2 col-end-3">
        <Carousel className="justify-center"></Carousel>
        </div>
      </div>
      <div className="  px-48 py-48 justify-items-center	">

      <UploadFile></UploadFile>
      the next thing to do is download data capability
      a landing page that has language and view hear data.
      and permissions to show specific things
      </div>


    </div>
  );
}

export default EnglishDynamic;

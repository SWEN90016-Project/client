import { Link } from "react-router-dom";
import Audio from "../englishdynamic/Audio.js";
const track = require("url:../assets/X2Download.app - Traditional Didgeridoo Rhythms by Lewis Burns, Aboriginal Australian Artist (128 kbps).mp3");
import UML from "../assets/UML Draft.png";
function EnglishStatic() {
  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 divide-x divide-black">
        <div className="grid grid-cols-1 place-items-center h-screen ">
          <div className="grid grid-rows-2 relative h-96 place-items-center">
            <div>
              <h1 className="pb-4 px-4 text-center text-xl sm:text-lg md:text-lg lg:text-4xl xl:text-4xl font-bold ">
                Further Indigenous Language Learning Subpages
              </h1>
              <h2 className="text-center text-xl sm:text-lg md:text-lg lg:text-4xl xl:text-4xl ">
                To greater enrich your learning please visit these subpages
              </h2>
            </div>

            <Link
              to="/Homepage/englishStatic/IndigenousCommunityKnowledge"
              className="border-2 border-white e px-8 py-2 rounded-md"
            >
              Indigenous Community Knowledge
            </Link>

            <Link
              to="/Homepage/englishStatic/CulturallyRelevantPerspective"
              className="border-2 border-white  px-8 py-2 rounded-md"
            >
              Culturally Relevant Perspective
            </Link>
          </div>
        </div>
        <div className="h-screen col-span-2 grid grid-cols-2 items-center justify-center pr-2 pl-2 ml-4">
          <div className="relative col-span-2 grid grid-cols-1 items-center justify-center">
            <h1 className=" relative align-bottom justify-center place-items-center px-4 text-center text-4xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold ">
              DATA TYPES DISPLAYED BELOW:
            </h1>

            <h1 className=" relative align-bottom  px-4 pt-8 text-center text-4xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold ">
              It is of incredible importance to many individuals and communities
              that this project is completed to a high standard.
            </h1>
            <h1 className="relative align-bottom px-4 pt-8 text-center text-4xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-bold ">
              Because then all forms of language and culture can be safeguarded
              and preserved throughout history.
            </h1>
          </div>

          <div className="relative col-span-5 grid grid-cols-5 items-center justify-center ml-4">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 md:grid-cols-5  lg:grid-cols-5 place-items-center ">
        <figure className=" pt-5 relative max-w-sm">
          <a href="#">
            <img
              className="rounded-lg"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAZlBMVEX///8AAAAuLi6cnJzFxcX09PRYWFgmJiaqqqpCQkKNjY3p6end3d19fX34+Phra2s8PDzNzc25ublNTU2xsbHKyso1NTXm5ubg4OBHR0eUlJS/v79wcHBgYGDX19fv7++hoaGCgoJx4fsJAAAFA0lEQVR4nO2c63bqIBCFQxLIxVxqtLVaq/b9X/JALtUoTLy0Dj1rf3+aZWGt2cLAMEwMAgAAAAAAAAAAAAAAAAAAAAAAAAAA8B9TzXbN4etTLbJsvV6o7WYZ71Z7bqtupHrdfIbCxkt5KLitu5Z9rOwiBsJ6XnEbOc2uplX0WnLJbShN/HKNjFbKgdtWgnl2rQyjZOHr/JJXTapTKX6uYa83yjBKfHSU/HYdQrxxW31B5dg2poYk5zb8DHmXDKPkndv0EdW9OoRYcNs+Yn23DhG+cht/wq3L7giP/D19RIcId9z2D+wf0iGE4hYwsHhMhwhn3Ao67tjQz/BkL3lYhwi9CB6bx4WIhluE4e1xHSLjFqH5+IEB8cLdH12yOkpuGfcHi2P43f3wIzqEWHIL+QlXN3Dv7o9GJ99wn96bK0xc1Nt6MSn4wCtkO6Viu+vcuHrf0FpeeIVMZEbV6qRtFVGteecW7SIXqcT9mmjPum7NSR0W07ZuJZ/PN//IF6XDGpyXTiWse+InIcQRCLq7cN6aEIFWGDv6vLh6RE81fQSVzXJG5oWrE6OT7N06iEWovFX671O4dRDbgitgZszM79xCqK/XFQ7wefurW8iW6LZzDAlf7vTDLYTM8Dhi/49n2X0BEfuSAYdjbvEFKalbCDlNYnuf9Fl2X0Ccc8nE9Mo3IZFbCLkCyf9FiOMY4+XUom8GM2sfvsQp4ey0EOWZkOXPCnHFy78PsY/QPmIP/+dPMvsSx34wLcS+tfPduBNHdnIfsZ9jGKPfe4XMrF38PI+QQuz9GE+I9m+2hfQR+yLBeEdSuYWQjmuPfvmieCIjIsi7NHu3FdXll7FvbAYq22ZPtLIm6NzJeMoq+8GStdzpy6UjpHrl1i6M+TkiRiFvO+wuwhdpBcRGUhOdHC7CetXuTDVS88SeROK9sXImf6mjxcbag0qEPQFXOp6KyGtrD1YXcS1A9IS33pBwX087DrvkhLeOInd9kCOQJwNZazjAXUTnuNbdUH2sU4vvmNtjP7SSpxFbNoy/Osh6/UQfWleWUeSuqQmCd9vcmjDLEqJwnkV6bK47cT+wvBDPP7Osm/ukWRcZUyo0exryfKaE5JplOPeSkPNweMJZjf96usdZrbAXA2KoDse39sKror+Rm/jgId8Uy0+9pYRv0ZWz5ESJP69dDFS3fLPFMIj+6biVuR7DcJ36NK/updr7+D4lAAAAAAAAAAAAAAAAPMYs0qSm3CFqSYO4/WMyojJVKmorIZpcP7WlGlH3wSzy4Nc3RsRCKSWSNJAi008qD6LukyIokiTPs0QLUkKVdWZKA2R/XxpzV6Bc0Fo0yxIphwKnSEhTF6GCsq2cbcytaVsylOsWWm77soinQrTx8ViINl6PQ5dxb4b/6NHRrVQi/5AQmWT6ofvR0nKoac7bVrGpV/ZUiGynlvGR2gjRzp5pH5GlSPKiHZyubS+31F18FKLNT4zZojbLlTFXZcbXzT9rUxp4LkQmykshZbfYjqbWPOlrOWLt6OdCglSkPgrpLRr7SDq8yBaLKB/qHGsx61qppPkrQuT3kIho3pcFGC/vWun56LOQMtbM++VXr1BJHseNSmb6uW7iOEqUHOSW7CWZFxwne9LenateSKF9x1TQ1MbrU/OUlEdPkhl/4dw5x2tmafj+pFUTDxHVLC7GzXE7DQAAAAAAAAAAAAAAAAAAAAAANP8ARFkvTRLdGFkAAAAASUVORK5CYII="
              alt="image description"
            ></img>
          </a>
        </figure>
        <figure className="pt-5 relative max-w-sm">
          <a href="#">
            <img
              className="rounded-lg"
              src="https://www.corroboreedreamart.com.au/wp-content/uploads/river.jpg"
              alt="image description"
            ></img>
          </a>
        </figure>
        <figure className="pt-5 relative max-w-sm ">
          <a href="#">
            <img
              className="rounded-lg"
              src="https://www.corroboreedreamart.com.au/wp-content/uploads/waterhole.jpg"
              alt="image description"
            ></img>
          </a>
        </figure>
        <figure className="pt-5 relative max-w-sm ">
          <a href="#">
            <img
              className="rounded-lg"
              src="https://www.corroboreedreamart.com.au/wp-content/uploads/campfire-or-site.jpg"
              alt="image description"
            ></img>
          </a>
        </figure>
        <figure className="pt-5 relative max-w-sm ">
          <a href="#">
            <img
              className="rounded-lg"
              src="https://www.corroboreedreamart.com.au/wp-content/uploads/human-footprint.jpg"
              alt="image description"
            ></img>
          </a>
        </figure>
      </div>
      <div className="pt-5 pb-5 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 place-items-center ">
        <figure className="relative max-w-full">
          <a href="#">
            <img
              className="rounded-lg"
              src="https://www.wakademy.online/wp-content/uploads/blog-choisir-didgeridoo.jpg"
              alt="image description"
            ></img>
          </a>
        </figure>
        <Audio urls={[track]} className="place-self-center" />
      </div>
      <h1 className=" relative align-bottom justify-center place-items-center px-4 text-center text-4xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl">
        UML Design
      </h1>
      <div className="pt-5 pb-5 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 place-items-center ">
        <figure className="relative max-w-full col-span-3">
          <a href="#">
            <img className="rounded-lg" src={UML} alt="image description"></img>
          </a>
        </figure>
      </div>
    </div>
  );
}

export default EnglishStatic;

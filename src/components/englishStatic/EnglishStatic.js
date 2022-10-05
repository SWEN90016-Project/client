import { Link } from "react-router-dom";
function EnglishStatic() {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <div className="grid grid-cols-1 gap-4 place-items-center h-screen bg-red-500">
          <div className="grid grid-rows-2 h-96 place-items-center">
            <div>
              <h1 className="pb-4 px-4 text-center text-4xl font-bold text-white">
                Further Indigenous Language Learning Subpages
              </h1>
              <h2 className="text-center text-xl text-white">
                To greater enrich your learning please visit these subpages
              </h2>
            </div>

            <Link
              to="/Homepage/englishStatic/IndigenousCommunityKnowledge"
              className="border-2 border-white text-white px-8 py-2 rounded-md"
            >
              Indigenous Community Knowledge
            </Link>

            <Link
              to="/Homepage/englishStatic/CulturallyRelevantPerspective"
              className="border-2 border-white text-white px-8 py-2 rounded-md"
            >
              Culturally Relevant Perspective
            </Link>
          </div>
        </div>
        <div className="h-screen bg-yellow-300  col-span-2 grid grid-cols-2 items-center justify-center">
          <figure class="relative max-w-full">
            <a href="#">
              <img
                class="rounded-lg"
                src="https://cdn.pixabay.com/photo/2016/07/25/08/44/aboriginal-art-1540115_1280.jpg"
                alt="image description"
              ></img>
            </a>
          </figure>
          <div className="grid grid-rows-2 h-96 place-items-center">
            <h1 className=" pt-11  px-4 text-center text-4xl font-bold text-white">
              It is of incredible importance to many individuals and communities
              that this project is completed to a high standard.
            </h1>
          </div>
          <div className="grid grid-rows-2 h-96 place-items-center">
            <h1 className="pt-3 px-4 text-center text-4xl font-bold text-white">
              Because then all forms of language and culture can be safeguarded
              and preserved throughout history.
            </h1>
          </div>
          <figure class="relative max-w-full">
            <a href="#">
              <img
                class="rounded-lg"
                src="https://www.lawyersweekly.com.au/images/articleImages-850x492/Aboriginal-flag-lw.jpg"
                alt="image description"
              ></img>
            </a>
          </figure>
        </div>
      </div>
      <div className="grid grid-cols-5 md:grid-cols-5  lg:grid-cols-5 place-items-center bg-black">
        <figure class=" pt-5 relative max-w-sm">
          <a href="#">
            <img
              class="rounded-lg"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAZlBMVEX///8AAAAuLi6cnJzFxcX09PRYWFgmJiaqqqpCQkKNjY3p6end3d19fX34+Phra2s8PDzNzc25ublNTU2xsbHKyso1NTXm5ubg4OBHR0eUlJS/v79wcHBgYGDX19fv7++hoaGCgoJx4fsJAAAFA0lEQVR4nO2c63bqIBCFQxLIxVxqtLVaq/b9X/JALtUoTLy0Dj1rf3+aZWGt2cLAMEwMAgAAAAAAAAAAAAAAAAAAAAAAAAAA8B9TzXbN4etTLbJsvV6o7WYZ71Z7bqtupHrdfIbCxkt5KLitu5Z9rOwiBsJ6XnEbOc2uplX0WnLJbShN/HKNjFbKgdtWgnl2rQyjZOHr/JJXTapTKX6uYa83yjBKfHSU/HYdQrxxW31B5dg2poYk5zb8DHmXDKPkndv0EdW9OoRYcNs+Yn23DhG+cht/wq3L7giP/D19RIcId9z2D+wf0iGE4hYwsHhMhwhn3Ao67tjQz/BkL3lYhwi9CB6bx4WIhluE4e1xHSLjFqH5+IEB8cLdH12yOkpuGfcHi2P43f3wIzqEWHIL+QlXN3Dv7o9GJ99wn96bK0xc1Nt6MSn4wCtkO6Viu+vcuHrf0FpeeIVMZEbV6qRtFVGteecW7SIXqcT9mmjPum7NSR0W07ZuJZ/PN//IF6XDGpyXTiWse+InIcQRCLq7cN6aEIFWGDv6vLh6RE81fQSVzXJG5oWrE6OT7N06iEWovFX671O4dRDbgitgZszM79xCqK/XFQ7wefurW8iW6LZzDAlf7vTDLYTM8Dhi/49n2X0BEfuSAYdjbvEFKalbCDlNYnuf9Fl2X0Ccc8nE9Mo3IZFbCLkCyf9FiOMY4+XUom8GM2sfvsQp4ey0EOWZkOXPCnHFy78PsY/QPmIP/+dPMvsSx34wLcS+tfPduBNHdnIfsZ9jGKPfe4XMrF38PI+QQuz9GE+I9m+2hfQR+yLBeEdSuYWQjmuPfvmieCIjIsi7NHu3FdXll7FvbAYq22ZPtLIm6NzJeMoq+8GStdzpy6UjpHrl1i6M+TkiRiFvO+wuwhdpBcRGUhOdHC7CetXuTDVS88SeROK9sXImf6mjxcbag0qEPQFXOp6KyGtrD1YXcS1A9IS33pBwX087DrvkhLeOInd9kCOQJwNZazjAXUTnuNbdUH2sU4vvmNtjP7SSpxFbNoy/Osh6/UQfWleWUeSuqQmCd9vcmjDLEqJwnkV6bK47cT+wvBDPP7Osm/ukWRcZUyo0exryfKaE5JplOPeSkPNweMJZjf96usdZrbAXA2KoDse39sKror+Rm/jgId8Uy0+9pYRv0ZWz5ESJP69dDFS3fLPFMIj+6biVuR7DcJ36NK/updr7+D4lAAAAAAAAAAAAAAAAPMYs0qSm3CFqSYO4/WMyojJVKmorIZpcP7WlGlH3wSzy4Nc3RsRCKSWSNJAi008qD6LukyIokiTPs0QLUkKVdWZKA2R/XxpzV6Bc0Fo0yxIphwKnSEhTF6GCsq2cbcytaVsylOsWWm77soinQrTx8ViINl6PQ5dxb4b/6NHRrVQi/5AQmWT6ofvR0nKoac7bVrGpV/ZUiGynlvGR2gjRzp5pH5GlSPKiHZyubS+31F18FKLNT4zZojbLlTFXZcbXzT9rUxp4LkQmykshZbfYjqbWPOlrOWLt6OdCglSkPgrpLRr7SDq8yBaLKB/qHGsx61qppPkrQuT3kIho3pcFGC/vWun56LOQMtbM++VXr1BJHseNSmb6uW7iOEqUHOSW7CWZFxwne9LenateSKF9x1TQ1MbrU/OUlEdPkhl/4dw5x2tmafj+pFUTDxHVLC7GzXE7DQAAAAAAAAAAAAAAAAAAAAAANP8ARFkvTRLdGFkAAAAASUVORK5CYII="
              alt="image description"
            ></img>
          </a>
        </figure>
        <figure class="pt-5 relative max-w-sm">
          <a href="#">
            <img
              class="rounded-lg"
              src="https://www.corroboreedreamart.com.au/wp-content/uploads/river.jpg"
              alt="image description"
            ></img>
          </a>
        </figure>
        <figure class="pt-5 relative max-w-sm ">
          <a href="#">
            <img
              class="rounded-lg"
              src="https://www.corroboreedreamart.com.au/wp-content/uploads/waterhole.jpg"
              alt="image description"
            ></img>
          </a>
        </figure>
        <figure class="pt-5 relative max-w-sm ">
          <a href="#">
            <img
              class="rounded-lg"
              src="https://www.corroboreedreamart.com.au/wp-content/uploads/campfire-or-site.jpg"
              alt="image description"
            ></img>
          </a>
        </figure>
        <figure class="pt-5 relative max-w-sm ">
          <a href="#">
            <img
              class="rounded-lg"
              src="https://www.corroboreedreamart.com.au/wp-content/uploads/human-footprint.jpg"
              alt="image description"
            ></img>
          </a>
        </figure>
      </div>
      <div className="pt-5 pb-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 place-items-center bg-black">
        <figure class="relative max-w-full">
          <a href="#">
            <img
              class="rounded-lg"
              src="https://www.wakademy.online/wp-content/uploads/blog-choisir-didgeridoo.jpg"
              alt="image description"
            ></img>
          </a>
        </figure>
        <Link
          to="https://www.youtube.com/watch?v=nN-542IYoE0"
          className="bg-blue-500 px-8 py-2 rounded-md text-white"
        >
          Sample Music
        </Link>
      </div>
    </div>
  );
}

export default EnglishStatic;

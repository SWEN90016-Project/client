import { Link } from "react-router-dom";
function EnglishStatic() {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-3">
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
        <div className="h-screen bg-yellow-300 col-span-2 grid grid-cols-1">
          <div className="grid grid-rows-2 h-25 place-items-center ">
            <div class="rounded bg-white border-4 border-black...">
              <h1 className="text-center text-lg font-bold tracking-wide text-black">
                UML
                <p>
                  This is where the diagram will go. Not sure what it is yet
                </p>
              </h1>
            </div>
          </div>
          <div className="grid grid-rows-2 h-30 space-y-2 ">
            <div class="rounded bg-yellow-200 border-4 border-black ">
              <h1 className="text-center text-base font-bold tracking-wide text-black">
                Data Types
                <p className="text-left pl-6 ">
                  Sentences
                  <ol class="list-decimal">
                    <li>
                      Now this how, my life got flipped-turned upside down
                    </li>
                    <li>Hey Snow hows it hanging</li>
                  </ol>
                </p>
              </h1>
            </div>
            <div class="rounded bg-yellow-200 border-4 border-black space-y-2">
              <h1 className="text-center text-base font-bold tracking-wide text-black">
                Data Types
                <p className="text-left pl-6 ">
                  Symbols
                  <ol class="list-decimal">
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                  </ol>
                </p>
              </h1>
            </div>
            <div class="rounded bg-yellow-200 border-4 border-black space-y-2">
              <h1 className="text-center text-base font-bold tracking-wide text-black">
                Data Types
                <p className="text-left pl-6">
                  Images and Music
                  <ol class="list-decimal">
                    <li>Image 1</li>
                    <li>Image 2</li>
                    <li>Image 3</li>
                    <li>Song</li>
                  </ol>
                </p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnglishStatic;

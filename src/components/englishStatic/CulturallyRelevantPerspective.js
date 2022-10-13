import { Link } from "react-router-dom";
function CulturallyRelevantPerspective() {
  return (
    <div className="">
      <div className="grid grid-cols-3 md:grid-cols-3  lg:grid-cols-3 place-items-center">
        <figure className="pt-10 col-span-3 max-w-xl max-h-40 place-items-center">
          <a href="#">
            <img
              className="rounded-lg"
              src="https://insiderguides.com.au/wp-content/uploads/2016/09/Screen-Shot-2016-12-13-at-5.39.25-pm.png"
              alt="image description"
            ></img>
          </a>
        </figure>
      </div>
      <h1 className="text-3xl pt-64 px-36 font-bold text-center">
        It is vital to acknowledge that indigenous communities are the only true
        wholesale owners of their language and culture. As such they must
        recieve the best possible support in language revitalisation. They must
        be consulted about materials published about their languages. In making
        use of linguistics and their research, it is vital that indigenous
        communities are provided the opportunity to approach the linguistic and
        gain an understanding of their materials. By doing so, indigenous
        communities will be able to ensure that published language findings are
        beneficial to their culture and community. In dealing with culturally
        sensitive materials it is important that they are safeguarded with
        appropriate levels of restriction and access, in keeping with FATSIL
        protocol to protect indigenous culture.
      </h1>
      <h1 className="text-4xl pt-4 font-bold text-center"></h1>
    </div>
  );
}

export default CulturallyRelevantPerspective;

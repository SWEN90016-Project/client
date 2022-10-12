import { Link } from "react-router-dom";
function IndigenousCommunityKnowledge() {
  return (
    <div className="h-screen bg-slate-50">
      <div className="grid grid-cols-3 md:grid-cols-3  lg:grid-cols-3 place-items-center bg-slate-50">
        <figure class="pt-10 col-span-3 relative max-w-xl max-h-40 place-items-center object-center">
          <a href="#">
            <img
              class="rounded-lg object-center place-items-center justify relative max-w-full"
              src="https://www.amnesty.org.au/wp-content/uploads/2016/09/kids-sunset-fence-e1474976465431.jpg"
              alt="image description"
            ></img>
          </a>
        </figure>
      </div>
      <h1 className="text-3xl pt-48 px-36 font-bold text-center">
        There has never been a greater loss to culture in Australian history
        than the one suffered by indigenous peoples due to colonisation. Many
        languages that existed long before colonistion have suffered greatly due
        to its impact. Some have been relegated to manuscripts and special
        ceremonies, whilst others have simply been left lost and undocumented.
        In spite of all this, Indigenous Australians have been greatly admirable
        in their stand against the cultural absorption they have been
        continually faced with. All assistance that can be had in helping
        Indigneous Australians maintain their fight for their linguistic
        heritage and cultural survival would provide a benefit to not only the
        Indigenous community, but Australian society as a whole.
      </h1>
      <h1 className="text-4xl pt-4 font-bold text-center"></h1>
    </div>
  );
}

export default IndigenousCommunityKnowledge;

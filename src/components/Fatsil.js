import { Link } from "react-router-dom";
function Fatsil() {
  return (
    <div className=" py-2 mx-auto max-w-7xl  ">
      <div className="flex items-center justify-center  ">
        <div className="container px-6 py-10 mx-auto">
          <div className="bg-red-400 text-white   rounded-lg border shadow-lg p-10">
            <h2 className="  text-white sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl container mx-auto px-8 text-bold ">
              We would like to acknowledge the Traditional Custodians of the
              land on which we meet today, and pay our respects to their Elders
              past and present. we extend that respect to Aboriginal and Torres
              Strait Islander peoples viewing the page.
            </h2>

            <div className="flex flex-col justify-between py-6 lg:mx-6 sm:text-xl mb-16">
              <p className="text-md">
                {" "}
                To view the Legal requirements we are following in regards to
                upholding and showing our utmost respect to the Aboriginal
                people can be viewed via clicking The button.{" "}
              </p>
              <p className="mb-16">
                {" "}
                and from following the fatsil guidelines we have presented an
                excerpt below. Containing summaries of topics alongside direct
                information from the document deemed relevent to this project.{" "}
              </p>

              <button className="bg-orange-400 rounded-lg   hover:bg-red-500 hover:text-white py-8">
                <a
                  href="https://www.wipo.int/export/sites/www/tk/en/databases/creative_heritage/docs/fatsil_protocol_guide.pdf"
                  className="hover:underline"
                >
                  Fatsil Protocol Guide
                </a>
              </button>

              <p className="text-md font-medium text-white-600 py-16 "></p>
              <ul className="list-disc text-bold">
                <li className=" text-white text-bold text-2xl ">
                  Language revitalisation
                </li>
                <p className="font-xs text-sm ">
                  the role of preserving language to pass down to future
                  generations is of vital importantance. The publishing and
                  recording of language resources such as dictionaries grammars
                  and language learning material is vital , with the help of
                  academics and non aboriginal people languages are able to be
                  revitalized{" "}
                </p>
                <li className=" text-white text-bold text-2xl ">
                  Community consultation
                </li>
                <p className="font-xs text-sm">
                  The role of community is fundamental as the are the owners and
                  custodians of the languages and creators of the culture to
                  which can be spread to younger generations. In recent times
                  there has been an emergence of indigenous people from within
                  their communities that are researching and teaching their
                  languages , Acting as a connector between linguists and the
                  community of
                </p>
                <li className=" text-white text-bold text-2xl ">
                  Access to language materials{" "}
                </li>
                <p className="font-xs text-sm">
                  As aboriginal and torres straigt islander communities are the
                  custodians of their culture and language heritage they should
                  be viewed with the utmost respect and should be cherished as
                  consultants in passing on this knowledge they hold . When it
                  comes to accessing copies of language material, These should
                  be stored in a safe location for sharing however these
                  documents may contain culturally sensitive materials , Thus
                  language centres have created mechanisms to make sure that
                  only the appropriate people have access to certain material.
                  This is embodied within our website also{" "}
                </p>

                <li className=" text-white text-bold text-2xl ">
                  Copyright laws and ownership of content{" "}
                </li>
                <p className="font-xs text-sm">
                  When dealing with storing content ownership is important.
                  copyright only applies ot the original materia, hjowever much
                  traditional indigenous cultural knowledge is passed down from
                  generation to genereation and may not be considered original
                  and at risk of not being protected under copyright laws.
                  However: as stated : The model agreement developed by the Arts
                  Law Centre of Australia helps to overcome some of the
                  difficulties faced to date by communities and their
                  consultants. Where a community works with a consultant, use of
                  this kind of agreement helps to protect communities’
                  intellectual and cultural property, and determine what happens
                  to the developed materials. The model agreement recognises the
                  contributions made by all parties to any language publication.
                  It includes the possibility of joint copyright ownership,
                  where the different contributors can each have rights over the
                  materials - the right to publish, distribute and copy them
                </p>

                <li className=" text-white text-bold text-2xl ">Recognition</li>
                <p className="font-xs text-sm">
                  Aboriginal and Torres Strait Islander contributors should be
                  properly credited for their input into any language project or
                  publication, eg the names of individuals, and/or the language
                  community as a whole, need to appear in a prominent place in
                  the publication. Publications contain the cultural and
                  intellectual property which belongs to Aboriginal and Torres
                  Strait Islander communities and due recognition needs to be
                  made. Wherever a language publication is sold widely,
                  recognition must also include royalties, though many people
                  realise that many language publications are produced on a
                  non-profit basis and that often sales do not cover the cost of
                  production. Some language publications are produced for
                  limited circulation and it is mostly the consultant, school
                  and community members who will buy copies. However, it is
                  strongly symbolic that royalties, regardless of how small the
                  amount, are put back into the local language program.
                  Consultants also need to be acknowledged for their
                  contributions to a publication. Consultants bring to language
                  projects skills and knowledge which complement and build on
                  those of the community.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fatsil;

import { Link } from "react-router-dom";
function Fatsil() {
  return (
    <div className="container px-6 py-10 mx-auto">
      <div class="flex flex-col justify-between py-6 lg:mx-6">
        <p className="text-sm font-medium text-white-600">
          <a
            href="https://www.wipo.int/export/sites/www/tk/en/databases/creative_heritage/docs/fatsil_protocol_guide.pdf"
            className="hover:underline"
          >
            Fatsil Protocol Guide
          </a>
        </p>
      </div>
    </div>
  );
}

export default Fatsil;

import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";

const Featured = () => {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="text-center py-8">
        <h1 className="font-bold text-2xl mb-1">Featured Projects</h1>
        <p className="text-gray-700">A selection of my recent work.</p>
      </div>

      {/* card section */}
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between py-8 px-8">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src="https://i.ibb.co/DPCCxCRh/Project-01.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project Zenith</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <Link className="flex items-center gap-2 text-primary font-medium mt-6">
              View Project <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src="https://i.ibb.co/s9SQRHdw/Project-02.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shop Smart</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <Link className="flex items-center gap-2 text-primary font-medium mt-6">
              View Project <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://i.ibb.co/vpxr9q1/Project-03.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Data Insight</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <Link className="flex items-center gap-2 text-primary font-medium mt-6">
              View Project <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

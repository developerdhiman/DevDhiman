import { AiFillDatabase } from "react-icons/ai";
import { GiDatabase } from "react-icons/gi";
import { IoMdCode } from "react-icons/io";

const Expertise = () => {
  return (
    <div className="container mx-auto px-4 bg-gray-200 overflow-x-hidden">
      <div className="text-center py-8">
        <h1 className="font-bold text-2xl mb-1">My Expertise</h1>
        <p className="text-gray-700">
          Core strengths in full-stack development.
        </p>
      </div>

      {/* card section */}
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between py-8">
        <div className="card w-full max-w-sm mx-auto bg-base-100 shadow-sm">
          <div className="card-body">
            <IoMdCode className="text-4xl bg-cyan-100 text-sky-800 py-2 rounded-full" />
            <div>
              <h2 className="card-title">Front-End Development</h2>
              <p>
                Crafting responsive and interactive user interfaces using modern
                frameworks.
              </p>
            </div>
          </div>
        </div>
        <div className="card w-full max-w-sm mx-auto bg-base-100 shadow-sm">
          <div className="card-body">
            <AiFillDatabase className="text-4xl bg-cyan-100 text-sky-800 py-2 rounded-full" />
            <div>
              <h2 className="card-title">Back-End Development</h2>
              <p>
                Building robust and scalable server-side applications with
                efficient APIs.
              </p>
            </div>
          </div>
        </div>
        <div className="card w-full max-w-sm mx-auto bg-base-100 shadow-sm">
          <div className="card-body">
            <GiDatabase className="text-4xl bg-cyan-100 text-sky-800 py-2 rounded-full" />
            <div>
              <h2 className="card-title">Database Management</h2>
              <p>
                Designing and managing databases to ensure data integrity and
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;

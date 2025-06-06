import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";

const Projects = () => {
  useEffect(() => {
    document.title = "DevDhiman || Projects";
  }, []);
  return (
    <div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="All"
          defaultChecked
        />
        {/* cart-section 01 */}
        <div className="tab-content bg-base-100 border-base-300 p-6 pb-20">
          <div className="flex flex-col lg:flex-row gap-20 shadow-2xl">
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://i.ibb.co/Gf9WrvKv/e-commerce.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">E-commerce Platform</h2>
                <p>
                  Developed a full-featured e-commerce platform with user
                  authentication, product catalog, shoping cart, and payment
                  gateway integration. My role: Lead Full-Stack Developer.
                </p>
                <div className="flex justify-around">
                  <div className="badge badge-sm badge-soft badge-primary">React</div>
                  <div className="badge badge-sm badge-soft badge-primary">Node.js</div>
                  <div className="badge badge-sm badge-soft badge-primary">Express</div>
                  <div className="badge badge-sm badge-soft badge-primary">MongoDB</div>
                </div>
                <div className="card-actions justify-between mt-6">
                  <button className="btn btn-primary">
                    {" "}
                    <MdRemoveRedEye /> Demo
                  </button>
                  <button className="btn btn-neutral">
                    {" "}
                    <FaGithub /> Github
                  </button>
                  <button className="btn btn-soft">Study</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://i.ibb.co/M5pjwsB7/Social-media.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Social Media Dashboard</h2>
                <p>
                  Created a social media dashboard with real-time updates, user
                  profiles, and content management features. My role: Front-End
                  Developer.
                </p>
                <div className="flex justify-around">
                  <div className="badge badge-sm badge-soft badge-primary">React</div>
                  <div className="badge badge-sm badge-soft badge-primary">Node.js</div>
                  <div className="badge badge-sm badge-soft badge-primary">Express</div>
                  <div className="badge badge-sm badge-soft badge-primary">MongoDB</div>
                </div>
                <div className="card-actions justify-between mt-6">
                  <button className="btn btn-primary">
                    {" "}
                    <MdRemoveRedEye /> Demo
                  </button>
                  <button className="btn btn-neutral">
                    {" "}
                    <FaGithub /> Github
                  </button>
                  <button className="btn btn-soft">Study</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://i.ibb.co/zVPF7tp7/finance.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Personal Finance Tracker</h2>
                <p>
                  Built a personal finance tracker with budgeting, expense
                  tracking, and reporting capabilities. My role: Back-End
                  Developer.
                </p>
                <div className="flex justify-around">
                  <div className="badge badge-sm badge-soft badge-primary">React</div>
                  <div className="badge badge-sm badge-soft badge-primary">Node.js</div>
                  <div className="badge badge-sm badge-soft badge-primary">Express</div>
                  <div className="badge badge-sm badge-soft badge-primary">MongoDB</div>
                </div>
                <div className="card-actions justify-between mt-6">
                  <button className="btn btn-primary">
                    {" "}
                    <MdRemoveRedEye /> Demo
                  </button>
                  <button className="btn btn-neutral">
                    {" "}
                    <FaGithub /> Github
                  </button>
                  <button className="btn btn-soft">Study</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Front-end"
        />
        {/* cart-section 02*/}
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="flex flex-col lg:flex-row gap-20 shadow-2xl">
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">E-commerce Platform</h2>
                <p>
                  Developed a full-featured e-commerce platform with user
                  authentication, product catalog, shoping cart, and payment
                  gateway integration. My role: Lead Full-Stack Developer.
                </p>
                <div className="flex justify-around">
                  <div className="badge badge-soft badge-primary">React</div>
                  <div className="badge badge-soft badge-primary">Node.js</div>
                  <div className="badge badge-soft badge-primary">Express</div>
                  <div className="badge badge-soft badge-primary">MongoDB</div>
                </div>
                <div className="card-actions justify-between mt-6">
                  <button className="btn btn-primary">
                    {" "}
                    <MdRemoveRedEye /> Demo
                  </button>
                  <button className="btn btn-neutral">
                    {" "}
                    <FaGithub /> Github
                  </button>
                  <button className="btn btn-soft">Study</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">E-commerce Platform</h2>
                <p>
                  Developed a full-featured e-commerce platform with user
                  authentication, product catalog, shoping cart, and payment
                  gateway integration. My role: Lead Full-Stack Developer.
                </p>
                <div className="flex justify-around">
                  <div className="badge badge-soft badge-primary">React</div>
                  <div className="badge badge-soft badge-primary">Node.js</div>
                  <div className="badge badge-soft badge-primary">Express</div>
                  <div className="badge badge-soft badge-primary">MongoDB</div>
                </div>
                <div className="card-actions justify-between mt-6">
                  <button className="btn btn-primary">
                    {" "}
                    <MdRemoveRedEye /> Demo
                  </button>
                  <button className="btn btn-neutral">
                    {" "}
                    <FaGithub /> Github
                  </button>
                  <button className="btn btn-soft">Study</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">E-commerce Platform</h2>
                <p>
                  Developed a full-featured e-commerce platform with user
                  authentication, product catalog, shoping cart, and payment
                  gateway integration. My role: Lead Full-Stack Developer.
                </p>
                <div className="flex justify-around">
                  <div className="badge badge-soft badge-primary">React</div>
                  <div className="badge badge-soft badge-primary">Node.js</div>
                  <div className="badge badge-soft badge-primary">Express</div>
                  <div className="badge badge-soft badge-primary">MongoDB</div>
                </div>
                <div className="card-actions justify-between mt-6">
                  <button className="btn btn-primary">
                    {" "}
                    <MdRemoveRedEye /> Demo
                  </button>
                  <button className="btn btn-neutral">
                    {" "}
                    <FaGithub /> Github
                  </button>
                  <button className="btn btn-soft">Study</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Back-end"
        />
        {/* cart-section 03*/}
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="flex flex-col lg:flex-row gap-20 shadow-2xl">
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">E-commerce Platform</h2>
                <p>
                  Developed a full-featured e-commerce platform with user
                  authentication, product catalog, shoping cart, and payment
                  gateway integration. My role: Lead Full-Stack Developer.
                </p>
                <div className="flex justify-around">
                  <div className="badge badge-soft badge-primary">React</div>
                  <div className="badge badge-soft badge-primary">Node.js</div>
                  <div className="badge badge-soft badge-primary">Express</div>
                  <div className="badge badge-soft badge-primary">MongoDB</div>
                </div>
                <div className="card-actions justify-between mt-6">
                  <button className="btn btn-primary">
                    {" "}
                    <MdRemoveRedEye /> Demo
                  </button>
                  <button className="btn btn-neutral">
                    {" "}
                    <FaGithub /> Github
                  </button>
                  <button className="btn btn-soft">Study</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">E-commerce Platform</h2>
                <p>
                  Developed a full-featured e-commerce platform with user
                  authentication, product catalog, shoping cart, and payment
                  gateway integration. My role: Lead Full-Stack Developer.
                </p>
                <div className="flex justify-around">
                  <div className="badge badge-soft badge-primary">React</div>
                  <div className="badge badge-soft badge-primary">Node.js</div>
                  <div className="badge badge-soft badge-primary">Express</div>
                  <div className="badge badge-soft badge-primary">MongoDB</div>
                </div>
                <div className="card-actions justify-between mt-6">
                  <button className="btn btn-primary">
                    {" "}
                    <MdRemoveRedEye /> Demo
                  </button>
                  <button className="btn btn-neutral">
                    {" "}
                    <FaGithub /> Github
                  </button>
                  <button className="btn btn-soft">Study</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">E-commerce Platform</h2>
                <p>
                  Developed a full-featured e-commerce platform with user
                  authentication, product catalog, shoping cart, and payment
                  gateway integration. My role: Lead Full-Stack Developer.
                </p>
                <div className="flex justify-around">
                  <div className="badge badge-soft badge-primary">React</div>
                  <div className="badge badge-soft badge-primary">Node.js</div>
                  <div className="badge badge-soft badge-primary">Express</div>
                  <div className="badge badge-soft badge-primary">MongoDB</div>
                </div>
                <div className="card-actions justify-between mt-6">
                  <button className="btn btn-primary">
                    {" "}
                    <MdRemoveRedEye /> Demo
                  </button>
                  <button className="btn btn-neutral">
                    {" "}
                    <FaGithub /> Github
                  </button>
                  <button className="btn btn-soft">Study</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Full-stack"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {/* cart-section 04*/}
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">E-commerce Platform</h2>
                <p>
                  Developed a full-featured e-commerce platform with user
                  authentication, product catalog, shoping cart, and payment
                  gateway integration. My role: Lead Full-Stack Developer.
                </p>
                <div className="flex justify-around">
                  <div className="badge badge-soft badge-primary">React</div>
                  <div className="badge badge-soft badge-primary">Node.js</div>
                  <div className="badge badge-soft badge-primary">Express</div>
                  <div className="badge badge-soft badge-primary">MongoDB</div>
                </div>
                <div className="card-actions justify-between mt-6">
                  <button className="btn btn-primary">
                    {" "}
                    <MdRemoveRedEye /> Demo
                  </button>
                  <button className="btn btn-neutral">
                    {" "}
                    <FaGithub /> Github
                  </button>
                  <button className="btn btn-soft">Study</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">E-commerce Platform</h2>
                <p>
                  Developed a full-featured e-commerce platform with user
                  authentication, product catalog, shoping cart, and payment
                  gateway integration. My role: Lead Full-Stack Developer.
                </p>
                <div className="flex justify-around">
                  <div className="badge badge-soft badge-primary">React</div>
                  <div className="badge badge-soft badge-primary">Node.js</div>
                  <div className="badge badge-soft badge-primary">Express</div>
                  <div className="badge badge-soft badge-primary">MongoDB</div>
                </div>
                <div className="card-actions justify-between mt-6">
                  <button className="btn btn-primary">
                    {" "}
                    <MdRemoveRedEye /> Demo
                  </button>
                  <button className="btn btn-neutral">
                    {" "}
                    <FaGithub /> Github
                  </button>
                  <button className="btn btn-soft">Study</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">E-commerce Platform</h2>
                <p>
                  Developed a full-featured e-commerce platform with user
                  authentication, product catalog, shoping cart, and payment
                  gateway integration. My role: Lead Full-Stack Developer.
                </p>
                <div className="flex justify-around">
                  <div className="badge badge-soft badge-primary">React</div>
                  <div className="badge badge-soft badge-primary">Node.js</div>
                  <div className="badge badge-soft badge-primary">Express</div>
                  <div className="badge badge-soft badge-primary">MongoDB</div>
                </div>
                <div className="card-actions justify-between mt-6">
                  <button className="btn btn-primary">
                    {" "}
                    <MdRemoveRedEye /> Demo
                  </button>
                  <button className="btn btn-neutral">
                    {" "}
                    <FaGithub /> Github
                  </button>
                  <button className="btn btn-soft">Study</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

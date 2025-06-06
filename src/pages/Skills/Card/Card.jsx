import { FaReact, FaVuejs } from "react-icons/fa";
import {
  MdOutlineCss,
  MdOutlineHtml,
  MdOutlineJavascript,
} from "react-icons/md";
import { RiAngularjsLine } from "react-icons/ri";

const Card = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      <div class="card bg-base-100 shadow-2xl w-full">
        <div class="card-body px-14 py-8">
          <div class="flex flex-col items-center">
            <MdOutlineHtml className="text-4xl text-orange-600" />
            <h2 class="card-title text-blue-500">HTML5</h2>
          </div>
          <progress
            class="progress progress-primary w-full"
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
      <div class="card bg-base-100 shadow-2xl w-full">
        <div class="card-body px-14 py-8">
          <div class="flex flex-col items-center">
            <MdOutlineCss className="text-4xl text-sky-600" />
            <h2 class="card-title text-blue-500">CSS3</h2>
          </div>
          <progress
            class="progress progress-primary w-full"
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
      <div class="card bg-base-100 shadow-2xl w-full">
        <div class="card-body px-14 py-8">
          <div class="flex flex-col items-center">
            <MdOutlineJavascript className="text-4xl text-orange-400" />
            <h2 class="card-title text-blue-500">JavaScript</h2>
          </div>
          <progress
            class="progress progress-primary w-full"
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
      <div class="card bg-base-100 shadow-2xl w-full">
        <div class="card-body px-14 py-8">
          <div class="flex flex-col items-center">
            <FaReact className="text-2xl text-blue-500" />
            <h2 class="card-title">React.js</h2>
          </div>
          <progress
            class="progress progress-primary w-full"
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
      <div class="card bg-base-100 shadow-2xl w-full">
        <div class="card-body px-14 py-8">
          <div class="flex flex-col items-center">
            <FaVuejs className="text-2xl text-green-600" />
            <h2 class="card-title">Vue.js</h2>
          </div>
          <progress
            class="progress progress-primary w-full"
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
      <div class="card bg-base-100 shadow-2xl w-full">
        <div class="card-body px-14 py-8">
          <div class="flex flex-col items-center">
            <RiAngularjsLine className="text-3xl text-orange-600"/>
            <h2 class="card-title">Angular</h2>
          </div>
          <progress
            class="progress progress-primary w-full"
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Card;

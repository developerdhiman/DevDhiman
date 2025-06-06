const Skills = () => {
  return (
    <div className="px-40">
      <h1 className="text-4xl font-bold">Skills</h1>
      <h3 className="text-2xl font-bold ml-20 border-b-2">Front-end</h3>
      <div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="flex items-center">
              <h2 class="card-title text-blue-500">React.js</h2>
            </div>
            <progress
              class="progress progress-primary w-full"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

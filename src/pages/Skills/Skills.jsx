import Card from "./Card/card";

const Skills = () => {
  return (
    <div className="px-40">
      <h1 className="text-4xl font-bold">Skills</h1>
      <h3 className="text-2xl font-bold border-b-2 mt-8">Front-end</h3>

      {/* Front-end Card */}
      <div>
        <Card></Card>
      </div>
    </div>
  );
};

export default Skills;

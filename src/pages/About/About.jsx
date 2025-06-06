import { useEffect } from "react";
import { IoMdDownload } from "react-icons/io";

const About = () => {
  useEffect(() => {
    document.title = "DevDhiman || About";
  }, []);

  return (
    <div className="card card-dash bg-base-100 w-full drop-shadow-2xl px-20 py-6">
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">About Me</h2>
        <p>
          I'm Dhiman Chandra, a full-stack web developer with a passion for
          creating innovative and user-friendly web applications. My journey
          into web development began with a fascination for how websites work
          and a desire to build things that could impact people’s lives. I'm
          driven by the challenge of solving complex problems and the
          satisfaction of seeing my creations come to life.
        </p>
        <h2 className="card-title mt-10 text-2xl">My Approach</h2>
        <p>
          I believe in writing clean, maintainable code that is both efficient
          and scalable. My approach is user-centric, focusing on creating
          intuitive and engaging experiences. I'm committed to continuous
          learning and staying up-to-date with the latest technologies and best
          practices in the industry.
        </p>
        <h2 className="card-title mt-10 text-2xl">Personal Values & Interests</h2>
        <p>
          Beyond coding, I value collaboration, open communication, and a
          positive work environment. I'm a team player who enjoys working with
          others to achieve common goals. In my free time, I enjoy hiking,
          photography, and exploring new technologies. These interests not only
          provide a creative outlet but also inspire my problem-solving skills
          in development.
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary mt-12">
            <IoMdDownload /> Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

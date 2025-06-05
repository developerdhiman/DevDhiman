const Hero = () => {
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        {/* text section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Hi, I'm Dhiman, a full-
            <br className="hidden lg:inline" />
            Stack Web
            <br className="hidden lg:inline" />
            Developer
          </h1>

          <p className="py-6">
            I craft seamless digital experiences, blending front-end artistry
            with back-end engineering. Let's build something amazing together.
          </p>
        </div>

        {/* image section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co/HRshMxt/Hero-Photo.jpg"
            className="max-w-sm rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

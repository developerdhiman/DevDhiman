import { useEffect } from "react";
import Connect from "../../components/Connect/Connect";
import Expertise from "../../components/Expertise/Expertise";
import Featured from "../../components/Featured/Featured";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  useEffect(() => {
    document.title = "DevDhiman || Home";
  }, []);
  return (
    <div>
      <Hero />
      <Expertise />
      <Featured />
      <Connect />
    </div>
  );
};

export default Home;

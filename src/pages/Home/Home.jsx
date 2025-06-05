import Connect from "../../components/Connect/Connect";
import Expertise from "../../components/Expertise/Expertise";
import Featured from "../../components/Featured/Featured";
import Hero from "../../components/Hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Expertise/>
            <Featured/>
            <Connect/>
        </div>
    );
};

export default Home;
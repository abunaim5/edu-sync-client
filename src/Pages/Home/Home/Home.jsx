import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-screen-xl mx-auto">
                <About />
            </div>
        </div>
    );
};

export default Home;
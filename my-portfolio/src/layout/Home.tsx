import SocialMedias from "../components/SocialMedias";
import Tecnologies from "../components/Tecnologies";
import { BsFillMouseFill } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex items-center justify-between min-h-screen bg-white font-poppins">
      <aside className="flex flex-col">
        <div
          id="introduction"
          className="flex flex-row items-center justify-center gap-6"
        >
          <SocialMedias />
          <div id="text-introduction" className="flex flex-col gap-4">
            <h1 className="text-black text-6xl font-black w-lg leading-16">
              Hello World!
              <br />
              I'm a <span className="text-blue">Front-End</span> Developer.
            </h1>
            <p className="text-gray w-lg font-medium">
              Hello! I am Arthur Risso, a passionate about the Front-End
              development.
            </p>
          </div>
        </div>
        <Tecnologies />
        <div id="scroll-down">
          <BsFillMouseFill size={32} />
          <p>Scroll down</p>
          <FaArrowDown size={16} />
        </div>
      </aside>
      <img
        src="../src/assets/images/home-img.jpg"
        alt="Homepage image"
        className="max-w-xl"
      />
    </div>
  );
};

export default Home;

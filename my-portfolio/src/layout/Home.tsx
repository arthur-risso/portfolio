import SocialMedias from "../components/SocialMedias";
import Tecnologies from "../components/Tecnologies";
import { BsFillMouseFill } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex items-center justify-around bg-white font-poppins h-screen w-screen">
      <aside className="flex flex-col items-center">
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
        <a href="#" id="scroll-down" className="flex items-center gap-4 transition delay-150 duration-300 ease-in-out hover:translate-y-3 cursor-default">
          <BsFillMouseFill size={32} fill="#333533"/>
          <p className="text-gray">Scroll down</p>
          <FaArrowDown size={16} fill="#333533"/>
        </a>
      </aside>
      <img
        src="../src/assets/images/home-img.jpg"
        alt="Homepage image"
        className="max-w-lg w-lg"
      />
    </div>
  );
};

export default Home;

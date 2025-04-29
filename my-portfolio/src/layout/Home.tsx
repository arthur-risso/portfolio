import SocialMedias from "../components/SocialMedias";
import Tecnologies from "../components/Tecnologies";
import { BsFillMouseFill } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-poppins">
      <SocialMedias />
      <h1 className="text-black text-4xl font-extrabold" >
        Hello World! I'm a <span>Front-End</span> Developer.
      </h1>
      <p>
        Hello! I am Arthur Risso, a passionate about the Front-End development.
      </p>
      <Tecnologies />
      <div id="scroll-down">
        <BsFillMouseFill size={32} />
        <p>Scroll down</p>
        <FaArrowDown size={16} />
      </div>
      <img src="../src/assets/images/home-img.jpg" alt="Homepage image" />

      {/* <Footer /> */}
    </div>
  );
};

export default Home;

import SocialMedias from "../components/SocialMedias";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-poppins">
      <SocialMedias />
      <h1>Hello World! I'm a <span>Front-End</span> Developer.</h1>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

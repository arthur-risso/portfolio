import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedias = () => {
  return (
    <div className="flex flex-col gap-4">
      <a href="https://www.linkedin.com/in/arthur-risso/" className="w-6">
        <FaLinkedin
          size={32}
          fill="#014f86"
          className="w-6 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        />
      </a>
      <a href="https://github.com/arthur-risso" className="w-6">
        <FaGithub
          size={32}
          fill="#014f86"
          className="w-6 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        />
      </a>
    </div>
  );
};

export default SocialMedias;

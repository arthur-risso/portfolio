import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Tecnologies = () => {
    return (
        <div className="flex items-center">
            <p className="font-bold text-black">Tecnologies</p>
            <div className="line w-1 bg-black"></div>
            <FaHtml5 size={40} fill="#1e1a1a"/>
            <FaCss3Alt size={40} fill="#1e1a1a"/>
            <IoLogoJavascript size={40} fill="#1e1a1a"/>
            <FaReact size={40} fill="#1e1a1a"/>
        </div>
    )
}

export default Tecnologies;
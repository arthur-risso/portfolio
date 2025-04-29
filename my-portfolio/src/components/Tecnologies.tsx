import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Tecnologies = () => {
    return (
        <div>
            <p>Tecnologies</p>
            <div className="line"></div>
            <FaHtml5 size={40}/>
            <FaCss3Alt size={40}/>
            <IoLogoJavascript size={40}/>
            <FaReact size={40}/>
        </div>
    )
}

export default Tecnologies;
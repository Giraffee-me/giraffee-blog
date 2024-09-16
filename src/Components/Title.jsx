import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

function Title(parms) {
    return (
        <div className="flex items-center gap-[0.5rem] ">
                <BiSolidLeftArrow  className="text-white text-[1.5rem]"/>
                    <h2 id="blogs" className="text-[2rem] font-bold ">{parms.text}</h2>
                <BiSolidRightArrow className="text-white text-[1.5rem]"/>
        </div>
    )
}

export default Title
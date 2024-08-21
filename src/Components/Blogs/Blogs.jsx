import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import Posts from "./Posts";

function Blogs() {
  return (
    <div className="w-mainSize mx-auto mt-[4rem]">
        <div className="flex justify-center ">
            <div className="flex items-center gap-[.5rem] ">
                <BiSolidLeftArrow  className="text-white text-[1.5rem]"/>
                <h2 className="text-[2rem] font-bold ">التدوينات </h2>
                <BiSolidRightArrow className="text-white text-[1.5rem]"/>
            </div>
        </div>
        <Posts/>
    </div>
  )
}

export default Blogs
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

function ArticleTitle (parms) {
    return (
        <div className="flex items-center gap-[0.5rem] justify-center mb-6">
                <BiSolidLeftArrow  className="text-primary text-[1.5rem]"/>
                    <h2 id="blogs" className="text-[2rem] font-bold">{parms.text}</h2>
                <BiSolidRightArrow className="text-primary text-[1.5rem]"/>
        </div>
    )
}

export default ArticleTitle;
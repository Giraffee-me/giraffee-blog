import { LiaTasksSolid } from "react-icons/lia";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GrLogin } from "react-icons/gr";
import { GrMore } from "react-icons/gr";
import "./application.css"

function Application({text, icon}) {
    return (
        <div className="appShadow sm:h-40 flex items-center bg-white px-3 transform duration-200 hover:-translate-y-2">
            {
                text === "متجرنــــــا"?
                <SiHomeassistantcommunitystore className="text-5xl sm:text-8xl py-2 sm:py-0 text-primary"/> : 
                text === "الطقس اليوم"? <TiWeatherPartlySunny className="text-5xl sm:text-8xl py-2 sm:py-0 text-primary"/> : 
                text==="تسجيل الدخول"? <GrLogin className="text-5xl sm:text-8xl py-2 sm:py-0 text-primary"/> : 
                text==="المزيد . . ."? <GrMore className="text-5xl sm:text-8xl py-2 sm:py-0 text-primary"/> :
                <LiaTasksSolid className="text-5xl sm:text-8xl py-2 sm:py-0 text-primary"/>
            }
            <h1 className="text-2xl font-bold mx-auto">{text}</h1>
        </div>
    )
}

export default Application;
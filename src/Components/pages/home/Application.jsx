import { LiaTasksSolid } from "react-icons/lia";
import "./application.css"

function Application(parms) {
    return (
        <div className="appShadow h-40 flex items-center bg-white px-3 transform duration-200 hover:-translate-y-2">
            <LiaTasksSolid className="text-8xl text-primary"/>
            <h1 className="text-2xl font-bold mx-auto">{parms.text}</h1>
        </div>
    )
}

export default Application;
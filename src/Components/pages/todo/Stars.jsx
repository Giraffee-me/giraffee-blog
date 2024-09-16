import { useEffect, useState } from "react";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

function Stars (prams) {

    const [stars, setStars] = useState("");

    const handleStars = () => {
        setStars("");
        prams.todoList.map((todo)=>{
            if (todo.isComplete) {
                setStars((prev)=>{return +prev+1})
            }
        })
    }

    useEffect(() => {
        handleStars();
    },[prams.todoList]);

    return (
        <div className="-mt-6 -ml-6 flex justify-end">
                {stars ? <IoMdStar className="text-primary text-4xl"/> : <IoMdStarOutline className="text-slate-300 text-4xl "/>}
                <p className="absolute mt-4 ml-5 text-fontColor font-bold">{stars}</p>
        </div>
    )
}

export default Stars;
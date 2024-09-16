import { RiCheckboxFill } from "react-icons/ri";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";

function TodoItems({text, id, isComplete, deleteTodo, toggle}) {
    return (
        <div className="flex items-center my-3 gap-2">

            <div onClick={() => {toggle(id)}} className="flex flex-1 items-center cursor-pointer">
                {
                    isComplete? <RiCheckboxFill className="text-3xl text-primary"/> : <RiCheckboxBlankLine className="text-3xl text-gray-400"/>
                }
                <p className={`text-fontColor mr-4 text-[17px] ${isComplete? "line-through" : ""}`}>{text}</p>
            </div>

            <RiDeleteBin5Line onClick={() => deleteTodo(id)} className="text-2xl text-gray-400 cursor-pointer"/>

        </div>
    )
}


export default TodoItems
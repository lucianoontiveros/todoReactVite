import React from "react";
import IconCheck from "./icons/IconCheck";
import CrossIcon from "./icons/IconCross"

const TodoItem = React.forwardRef(
    ({ todo, removeTodo, apdateTodo, ...props}, ref ) => { 

        const { id , title , complete } = todo;
    
        return (
            <article {...props} ref={ref} className="flex gap-4 border-b border-b-gray-400 py-4 px-4 dark:bg-gray-800">
                <button className={`h-5 w-5 flex-none reounded-full border-2 ${
                    complete
                    ? "grid place-items-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    :"inline-block h-5 w-5 rounded-full border-2 flex-none"
                }`}
                onClick={() => apdateTodo(id)}> 
                { complete && <IconCheck />}</button>
                <p className={`text-gray-600 dark:text-fuchsia-200 grow ${complete && "line-through"}`}>{ title }</p>
    
                <button className="flex-none text-gray-900 "
                onClick={() => removeTodo(id)}><CrossIcon /></button>
            </article>
        )
     }
)

 export default TodoItem

 
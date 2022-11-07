import { useState } from "react";

const TodoCreate = ({createTodo}) => { 

    const [ title , setTitle] = useState('')

    const heandleSubmitAddTodo = (e) => {
      e.preventDefault();
      if(!title.trim()){
        return setTitle('')
      }
      createTodo(title)
      setTitle('')
    }

    return(
        <form 
          onSubmit={heandleSubmitAddTodo} 
          className=" flex items-center rounded-md bg-white py-4 px-5">
          <span className=" inline-block h-5 w-6 rounded-full border-2"></span>
          <input 
            type="text" 
            placeholder=" Create a new todo..." 
            className="w-full text-gray-800 mx-3 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
    )
 }

 export default TodoCreate
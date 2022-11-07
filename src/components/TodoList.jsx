import TodoItem from "./TodoItem"

const TodoList = ({ todos }) => { 
    return(
        <div className=" bg-white mt-8 rounded-t-md">
            { todos.map((todo) => (
                <TodoItem key={ todo.id } todo={ todo } />
            ))}
          
        </div>
    )
 }

 export default TodoList
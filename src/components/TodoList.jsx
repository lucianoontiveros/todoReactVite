import TodoItem from "./TodoItem"

const TodoList = ({ todos, removeTodo, apdateTodo }) => { 
    return(
        <div className="  bg-white overflow-hidden mx-1.5 dark:bg-indigo-900 mt-8 rounded-t-md">
            { todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} apdateTodo={apdateTodo}/>
            ))}
          
        </div>
    )
 }

 export default TodoList
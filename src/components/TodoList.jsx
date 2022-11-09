import TodoItem from "./TodoItem"

const TodoList = ({ todos, removeTodo, apdateTodo }) => { 
    return(
        <div className=" bg-white dark:bg-indigo-900 mt-8 rounded-t-md">
            { todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} apdateTodo={apdateTodo}/>
            ))}
          
        </div>
    )
 }

 export default TodoList
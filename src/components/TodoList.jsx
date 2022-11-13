import TodoItem from "./TodoItem"
import { Droppable, Draggable } from "@hello-pangea/dnd";


const TodoList = ({ todos, removeTodo, apdateTodo }) => { 
    return(
        <Droppable droppableId="todos">
                {
                    (droppableProvided) => (
                        <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps} className="  bg-white overflow-hidden mx-1.5 dark:bg-indigo-900 mt-8 rounded-t-md">
                            { todos.map((todo, index) => (
                                <Draggable key={todo.id} draggableId={`${todo.id}`} index={index}>
                                    {
                                        (draggableProvided) => (
                                            <TodoItem 
                                            {...draggableProvided.dragHandleProps}
                                            ref={draggableProvided.innerRef} 
                                            {...draggableProvided.draggableProps}
                                            todo={todo} 
                                            removeTodo={removeTodo} 
                                            apdateTodo={apdateTodo}
                                            />
                                        )
                                    }
                                </Draggable>
                            ))}
                            {droppableProvided.placeholder} 
                        </div>
                    )
                }
            </Droppable>
    )
 }

 export default TodoList
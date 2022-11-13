import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/Todocomputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";


const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const App = () => { 

  const [todos, setTodos] = useState(initialStateTodos)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  })

  const createTodo = (title) => {
    const newTodo = { 
      id: Date.now(),
      title,
      complete: false
    }

    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id ))
  }

  const apdateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, complete: !todo.complete} : todo))
  }

  const computedItemsLeft = todos.filter((todo)  => !todo.complete).length;

  const clearComplete = () => setTodos(todos.filter((todo) => !todo.complete))

  const [filter, setFilter] = useState('all')

  const changeFilter = (filter) => setFilter(filter)

  const filterTodos = () => {
    switch (filter) {
      case "all":
        return todos
      case "active":
        return todos.filter((todo) => !todo.complete)
      case "complete":
        return  todos.filter((todo) => todo.complete)
      default:
        return todos
    }
  }

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
        source.index === destination.index &&
        source.droppableId === destination.droppableId
    )
        return;

    setTodos((prevTasks) =>
        reorder(prevTasks, source.index, destination.index)
    );
  };

  return ( 
  <>
    <div className="transition-all duration-1000 bg-[url('./assets/images/bg-mobile-light.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300  dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      <Header/>

      <main className="rounded-md overflow-hidden mt-4 mx-auto md:max-w-xl">
        {/* Todo create */}
        <TodoCreate createTodo={createTodo}/>

        {/* TodoList(TodoItem) TodoUpdate y TodoDelete */}
        <DragDropContext  onDragEnd={handleDragEnd}>
          <TodoList  todos={filterTodos()} removeTodo={removeTodo} apdateTodo={apdateTodo} />
        </DragDropContext>


        {/* TodoCompute */}
        <TodoComputed computedItemsLeft={computedItemsLeft} clearComplete={clearComplete} />

    

        {/* TodoCFilter */}
        <TodoFilter  changeFilter={changeFilter} filter={filter}/>

      </main>
      <footer className="text-center dark:text-fuchsia-300 mt-8"> Drag and drofooter to reorder list </footer>
    </div>
  </>
  )
}

export default App;


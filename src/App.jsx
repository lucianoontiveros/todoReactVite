import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/Todocomputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  { id: 1, title:"Complete online Javascroipt bluuweb curse", complete:true},
  { id: 2, title:"Complete online Javascroipt bluuweb curse", complete:false},
  { id: 3, title:"Complete online Javascroipt bluuweb curse", complete:false},
  { id: 4, title:"Complete online Javascroipt bluuweb curse", complete:false},
]

const App = () => { 

  const [todos, setTodos] = useState(initialStateTodos)

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


  return ( 
  <>
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300 dark:bg-neutral-900">
      <Header/>

      <main className="rounded-md overflow-hidden mt-4 mx-2">
        {/* Todo create */}
        <TodoCreate createTodo={createTodo}/>

        {/* TodoList(TodoItem) TodoUpdate y TodoDelete */}
        <TodoList  todos={filterTodos()} removeTodo={removeTodo} apdateTodo={apdateTodo} />

        {/* TodoCompute */}
        <TodoComputed computedItemsLeft={computedItemsLeft} clearComplete={clearComplete} />

      </main>

        {/* TodoCFilter */}
        <TodoFilter  changeFilter={changeFilter} filter={filter}/>

      <footer className="text-center dark:text-fuchsia-300 mt-8"> Drag and drofooter to reorder list </footer>
    </div>
  </>
  )
}

export default App;


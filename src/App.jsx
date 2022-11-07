import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/Todocomputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  { id: 1, title:"Complete online Javascroipt bluuweb curse", complete:true},
  { id: 2, title:"Complete online Javascroipt bluuweb curse", complete:true},
  { id: 3, title:"Complete online Javascroipt bluuweb curse", complete:true},
  { id: 4, title:"Complete online Javascroipt bluuweb curse", complete:true},
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

  return ( 
  <>
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300 ">
      <Header/>


      <main className="rounded-md overflow-hidden mt-4 mx-2">
        {/* Todo create */}
        <TodoCreate createTodo={createTodo}/>

        {/* TodoList(TodoItem) TodoUpdate y TodoDelete */}
        <TodoList  todos={ todos }/>

        {/* TodoCompute */}
        <TodoComputed />

      </main>

        {/* TodoCFilter */}
        <TodoFilter />

      <footer className="text-center mt-8"> Drag and drofooter to reorder list </footer>
    </div>
  </>
  )
}

export default App;


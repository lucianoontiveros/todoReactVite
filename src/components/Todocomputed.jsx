const TodoComputed = ({computedItemsLeft, clearComplete}) => { 
    return(
        <section className="bg-white dark:bg-indigo-900 rounded-b-md flex justify-between py-4 px-4 text-gray-400 dark:text-fuchsia-200 ">
            <span className="dark:text-fuchsia-300"> {computedItemsLeft} items left</span>
            <button className="dark:text-fuchsia-300" onClick={clearComplete}>clear completed</button>
        </section>
    )
 }

 export default TodoComputed
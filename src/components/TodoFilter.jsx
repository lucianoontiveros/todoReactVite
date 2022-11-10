const TodoFilter = ({changeFilter, filter}) => { 
    return(
        <section className="mt-8 mx-1.5  ">
            <div className=" bg-white dark:bg-gray-800 p-4 rounded-md flex justify-center gap-10">
            <button className={`${filter === 'all' ? "text-blue-500 hover:text-gray-500" : "hover:text-blue-500"}`} onClick={() => changeFilter("all")}>All</button>
            <button className={`${filter === 'active' ? "text-blue-500 hover:text-gray-500" : "hover:text-blue-500"}`} onClick={() => changeFilter("active")}>Active</button>
            <button className={`${filter === 'complete' ? "text-blue-500 hover:text-gray-500" : "hover:text-blue-500"}`} onClick={() => changeFilter("complete")}>Completed</button>
            </div>
        </section>
    )
 }

 export default TodoFilter
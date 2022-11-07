const TodoFilter = () => { 
    return(
        <section className="mt-8 mx-2 ">
            <div className=" bg-white p-4 rounded-md flex justify-center gap-10">
            <button className="hover:text-blue-600">All</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
            </div>
        </section>
    )
 }

 export default TodoFilter
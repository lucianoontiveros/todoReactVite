const TodoComputed = ({computedItemsLeft, clearComplete}) => { 
    return(
        <section className="bg-white rounded-b-md flex justify-between py-4 px-4 text-gray-400">
            <span> {computedItemsLeft} items left</span>
            <button onClick={clearComplete}>clear completed</button>
        </section>
    )
 }

 export default TodoComputed
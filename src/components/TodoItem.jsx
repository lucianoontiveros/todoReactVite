import CrossIcon from "./icons/CrossIcon"

const TodoItem = ({ todo }) => { 

    const { id , title , complete } = todo;

    return (
        <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="text-gray-600 grow">{ title }</p>
            <button className="flex-none text-gray-900 "><CrossIcon /></button>
        </article>
    )
 }

 export default TodoItem
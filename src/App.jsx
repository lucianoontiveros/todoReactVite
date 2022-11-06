import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => { 
  return ( 
  <>
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300 ">

      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className='text-3xl font-semibold uppercase text-white tracking-[0.3em]'> Todo </h1>
          <button><MoonIcon fill="ffff" /></button>
        </div>
      </header>

      <form className="bg-white rounded-md overflow-hidden mt-4 py-4 mx-2 flex items-center px-5">
        <span className="rounded-full border-2 h-5 w-6 inline-block"></span>
        <input 
          type="text" 
          placeholder=" Create a new todo..." 
          className="w-full text-gray-800 mx-3 outline-none"
        />
      </form>

      <main className=" rounded-md overflow-hidden bg-white mt-4 mx-2">
        <div className=" bg-white">
          <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className=" text-gray-800 grow">Complete Online Javascript curse in bluuweb</p>
            <button className="flex-none text-gray-900 "><CrossIcon /></button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className=" text-gray-800 grow">Complete Online Javascript curse in bluuweb</p>
            <button className="flex-none text-gray-900 "><CrossIcon /></button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className=" text-gray-800 grow">Complete Online Javascript curse in bluuweb</p>
            <button className="flex-none text-gray-900 "><CrossIcon /></button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className=" text-gray-800 grow">Complete Online Javascript curse in bluuweb</p>
            <button className="flex-none text-gray-900 "><CrossIcon /></button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="text-gray-600 grow">Complete Online Javascript curse in bluuweb</p>
            <button className="flex-none text-gray-900 "><CrossIcon /></button>
          </article>


          <section className="flex justify-between py-4 px-4 text-gray-400">
            <span> 5 items left</span>
            <button>clear completed</button>
          </section>


        </div>
      </main>

      <section className="mt-8 mx-2 ">
        <div className=" bg-white p-4 rounded-md flex justify-center gap-10">
          <button className="hover:text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <p className="text-center mt-8"> Drag and drop to reorder list </p>
    </div>
  </>
  )
}

export default App;


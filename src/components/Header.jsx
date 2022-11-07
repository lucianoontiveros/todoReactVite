import MoonIcon from "./icons/MoonIcon"

const Header = () => { 
    return( 
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
            <h1 className='text-3xl font-semibold uppercase text-white tracking-[0.3em]'> Todo </h1>
            <button><MoonIcon fill="ffff" /></button>
            </div>
        </header>   
    )
 }

 export default Header
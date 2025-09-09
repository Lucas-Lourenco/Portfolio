import Navigation from "./Navigation";



export default function Header () {
  return (
    <header className=" flex 
     w-full  justify-between border-b border-[rgb(70,63,45)] items-center   ">
        <div>
            <h1 className="text-5xl p-2 pl-3 ">
              <a href="#" className="logo   hover:text-yellow-500 transition-colors duration-300">LL</a></h1>
        </div>
        <Navigation />
    </header>
  )
}
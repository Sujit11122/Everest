export default function Navbar(){
    return(
        <nav className="bg-white border-gray-300 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <button className=" text-white px-1 py-1">Home</button>
                <button className="text-white px-1 py-1">About</button>
                <button className="text-white">Help</button>
                <div className="search">
                    <form>
                        <input type="text" placeholder="Search..."></input>
                    </form>
                </div>
                <button className=" border-2 px-2 py-2 border-black rounded-3xl text-white">Profile</button>
            </div>

        </nav>
            )
}
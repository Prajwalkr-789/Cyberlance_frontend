import {
  ChevronDown,
  LogOut,
  Menu,
  Moon,
  Settings,
  Sun,
  User,
  X,
} from "lucide-react";
import  { useEffect, useState } from "react";
import Logo from '../assests/Academic.png'
import { Link } from "react-router-dom";

function Navbar({ toggleSidebar,sidebarOpen }) {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() =>{
    document.documentElement.classList.add("dark")
  },[])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };


  return (
    <div>
      <div className=" bg-white dark:bg-black ">
        {/* Navbar */}
        <nav className="bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none 
            text-zinc-900 dark:text-white  hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-9 px-3 text-sm lg:hidden" onClick={() => toggleSidebar()} > {sidebarOpen ? ( <X className="h-5 w-5" /> ) : ( <Menu className="h-5 w-5" /> )} </button>
            <Link to="/" className="text-md text-slate-500 dark:text-slate-400  flex items-center gap-2 ml-0 md:ml-5">

              <img src={Logo} className="h-7 w-7 dark:bg-white border rounded-full " alt="" />
              Student Portal
            </Link>
          </div>

          <div className="flex items-start gap-4">
         <button
  className={`inline-flex items-center justify-center rounded-md font-medium transition-colors h-9 px-3 text-sm
    dark:bg-black dark:text-white dark:hover:bg-gray-800bg-white text-zinc-900 hover:bg-zinc-100
  `}
  onClick={toggleDarkMode}
>
  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
</button>


            <div className="relative">
              <button
                className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-zinc-900 dark:hover:text-slate-50 h-10 py-2 px-4 flex items-center gap-2"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              >
                <div className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                  <img
                    className="aspect-square h-full w-full"
                    src="data:image/jpeg;base64,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"
                    alt="User Avatar"
                  />
                </div>
                <ChevronDown className="h-4 w-4 dark:text-white text-zinc-900" />
              </button>
              {userDropdownOpen && (
                <div className="absolute right-0 z-50 mt-2 w-48 rounded-md border border-slate-200 bg-white py-3 px-2 text-slate-950 shadow-md dark:border-slate-800 dark:bg-transparent backdrop-blur-lg dark:text-slate-50 ">
                  <div className="flex flex-row items-center justify-around mb-2 mt-1">
                    <div>
                      <User className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-sm">John Doe</p>
                      <p className="text-xs">JohnDoe@gmail.com</p>
                    </div>
                  </div>
                  {
                    [{name:"Edit Profile" , icon:<User className="h-4 w-4 mr-2"/>}, {name:"Change Password",icon:<Settings className="h-4 w-4 mr-2"/>},{name:"Logout",icon:<LogOut className="h-4 w-4 mr-2"/> }].map((option) => (
                      <div
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-3 text-sm outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-zinc-900 dark:hover:text-slate-50"
                    onClick={() => setUserDropdownOpen(false)}
                    >
                      {option.icon}
                      {option.name}
                    </div>
                    ))
                  }
                  
                </div>
              )}
            </div>
          </div>
        </nav>


      </div>
    </div>
  );
}

export default Navbar;

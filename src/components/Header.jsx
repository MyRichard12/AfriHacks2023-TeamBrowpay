import { useState } from "react";
import { Control, logo } from "../assets/icons";
import { Menus } from "../constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(true);
    return (
        <div
            className={` ${
            open ? "w-96" : "w-20 "
            } bg-[#0b141f] h-screen p-5  pt-8 relative duration-300 flex flex-col`}
        >
            <img
            src={Control}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-black
                border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
            <img
                src={logo}
                className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
                }`}
            />
            <h1
                className={`text-white origin-left font-medium text-4xl duration-200 ${
                !open && "scale-0"
                }`}
            >
                <Link to="/">KudiKart</Link>
            </h1>
            </div>
            <ul className="pt-10">
            {Menus.map((Menu, index) => (
                <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm md:text-2xl items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                    index === 0 && "bg-light-white"
                } `}
                >
                    <img src={`./src/assets/${Menu.src}.png`} />
                    <Link to={Menu.path}><span className={`${!open && "hidden"} origin-left duration-200`}>
                        {Menu.title}</span>
                    </Link>                
                </li>
            ))}
            
            </ul>
        </div>
    )
}

export default Header

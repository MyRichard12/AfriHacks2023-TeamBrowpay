import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Control, logo } from "../assets/icons";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { logoutUser } from "../redux/actions/authAction";



import { Menus } from "../constants";
import { close } from "../assets"; 

const cooker = new Cookies()

const Header = () => {
    const [open, setOpen] = useState(true);

    const navigator = useNavigate()
    const dispatch = useDispatch()

    const Logout = () => {
        cooker.remove("SECRETKEY", {
            path: "/"
        });
        dispatch(logoutUser())
       navigator('/login')
    }
    


    return (
        <div
            className={` ${
            open ? "w-72" : "w-20 "
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
                <Link to="/">MySeller.ai</Link>
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
            <li className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm md:text-2xl items-center gap-x-4 mt-2`} onClick={() => Logout()}>
            <img src={close} className="hidden md:flex" />
                <div className={`${!open && "hidden"} origin-left duration-200`}>Logout</div>
            </li>
            
            </ul>
        </div>
    )
}

export default Header

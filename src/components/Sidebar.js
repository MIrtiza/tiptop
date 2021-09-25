import { useState } from 'react'
import logo from '../assets/images/logo.png'
import shortlogo from '../assets/images/short-logo.png'
import { FaRegSun, FaUserFriends, FaLandmark, FaChevronDown } from 'react-icons/fa'
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom'
const Sidebar = ({sidebar}) => {
const [dropdownOpen, setDropdownOpen] = useState(false);

const showDropdown = () =>{
    setDropdownOpen(!dropdownOpen);
}
    return (
        <>
           <div className={`flex-shrink-0 transition-transform  bg-gray-900  ${sidebar ? "nav-menu w-20 active " : "nav-menu w-64"}`}>
                        <a href="/panel" className="block">
                            <div className="flex items-center h-16 px-4 bg-gray-900 text-xl text-white font-medium">
                                <div className="logo-wrap w-full text-center">
                                    {sidebar ?   <img src={shortlogo} alt="logo" className="" /> : <img src={logo} alt="logo" className="m-auto" /> }
                                    
                                </div>
                             
                            </div>
                        </a>
                        <div className=" border-t border-gray-700">
                        
                            <nav className="text-white">

                            <ul className="">
                            <li className="bg-gray-800 px-6 py-1">
                                <button className="block py-4 hasSubMenu w-full relative text-left" onClick={showDropdown}> 
                                <FaUserFriends className="inline-block text-gray-100 text-2xl mr-4 " />{sidebar?"": "User"} 
                                {sidebar ? "" :   
                                <span className="absolute right-0">
                                    <FaChevronDown className="inline-block" />
                                </span> 
                                }
                              
                                </button>

                                <ul className={` text-sm subMenu pl-12 ${dropdownOpen ? "show" : "hidden"}`}>
                                <li className="mb-3">
                                        <Link to="/manageuser" className="">
                                        User
                                        </Link>
                                    </li>
                                <li className="mb-3">
                                        <Link to="/Managerole" className="">
                                        Role
                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/Manageorganization" className="">
                                        Organization
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="/managemodule" className="">
                                        Module
                                        </Link>
                                    </li>
                                    </ul>
                            </li>
                            <li className="px-6 py-1"><Link to="/pools" className="block py-4"> <FaLandmark className="inline-block text-gray-100 text-2xl mr-4" /> {sidebar?"": "Pools"} </Link></li>
                            <li className="px-6 py-1"><Link to="/settings" className="block py-4"> <FaRegSun className="inline-block text-gray-100 text-2xl mr-4" />{sidebar?"": "Settings"}  </Link></li>
                            </ul>
                        </nav>
              
                        </div>
                    </div>
  
        </>
    )
}

export default Sidebar

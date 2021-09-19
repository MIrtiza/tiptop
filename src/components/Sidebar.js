import { useState } from 'react'
import logo from '../assets/images/logo.png'
import shortlogo from '../assets/images/short-logo.png'
import { FaUserCircle, FaRegSun, FaUserFriends, FaLandmark } from 'react-icons/fa'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
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
                        
                            <nav class="text-white">

                            <ul class="">
                            <li className="bg-gray-800 px-6 py-1">
                                <button class="block py-4 hasSubMenu w-full relative text-left" onClick={showDropdown}> 
                                <FaUserFriends className="inline-block text-gray-100 text-2xl mr-4 " />{sidebar?"": "User"}  
                                <span class="inline-block absolute right-0 text-3xl"><svg data-baseweb="icon" viewBox="0 0 24 24" class="ml-1 w-4 h-4 fill-current chevron">
                                    <title>Chevron Down</title>
                                    <path transform="rotate(270, 12, 12)" fill-rule="evenodd" clip-rule="evenodd" 
                                    d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z">
                                    </path>
                                    </svg> </span> 
                                </button>
                                <ul class={` text-sm subMenu pl-12 ${dropdownOpen ? "show" : "hidden"}`}>
                                <li className="mb-3">
                                        <a href="#" className="">
                                        Role
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="">
                                        Organization
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="">
                                        Module
                                        </a>
                                    </li>
                                    </ul>
                            </li>
                            <li className="px-6 py-1"><a href="#" class="block py-4"> <FaLandmark className="inline-block text-gray-100 text-2xl mr-4" /> {sidebar?"": "Panel"} </a></li>
                            <li className="px-6 py-1"><a href="#" class="block py-4"> <FaRegSun className="inline-block text-gray-100 text-2xl mr-4" />{sidebar?"": "Settings"}  </a></li>
                            </ul>
                        </nav>
              
                        </div>
                    </div>
  
        </>
    )
}

export default Sidebar

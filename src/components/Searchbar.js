
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profile from '../assets/images/profile.png'
const Searchbar = ({showSidebar}) => {
    return (
        <>
                 {/* Top bar start */}
                 <div className="relative shadow-md bg-white flex-shrink-0 flex justify-between items-center h-16 px-8">   
                        <       Link to='#' className='menu-bars pr-4'>
                                    <FaIcons.FaBars onClick={showSidebar}  className="text-3xl" />
                                </Link>
                                <div className="relative w-full h-full">
                               
                              
                                    <div className="relative h-full">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="block w-full  h-full
                                        py-2 pl-12 pr-4 bg-white 
                                         border-transparent focus:bg-gray-100 focus:border-gray-300 focus:outline-none"
                                    />
                                    <div className="flex items-center absolute left-0 inset-y-0 pl-3">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6 fill-current text-gray-600"
                                        >
                                        <path
                                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                                        ></path>
                                        </svg>
                                    </div>
                                    </div>
                                
                                </div>
                                <div className="profile-icon relative ml-6 h-16 w-16">
                                <button type="button" className="h-full w-full p-0">
                                  <img
                                        src={profile}
                                        className="block w-full border-blue-600 border-2 rounded-full  p-0  focus:outline-none"/>
                                </button> 
                                </div>
                        </div>
                        {/* Top bar end */} 
        </>
    )
}

export default Searchbar

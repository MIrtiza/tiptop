
import logo from '../assets/images/logo.png'

import ManageUser from './ManageUser'
import AddNewUser from './AddNewUser'

const Panel = () => {

    return (
        <>
             <div className="font-sans text-gray-900 antialiased">
               <div className="min-h-screen flex bg-white">

{/* ======================= left side of panel start ============================ */}
                    <div className="flex-shrink-0 w-64 bg-gray-900">
                        <a href="/panel" className="block">
                            <div className="flex items-center h-16 px-4 bg-gray-900 text-xl text-white font-medium">
                                <div className="logo-wrap w-full text-center">
                                    <img src={logo} alt="logo" className="m-auto" />
                                </div>
                            </div>
                        </a>
                        <div className="px-6 py-6 border-t border-gray-700">
                            <h4
                            className="text-sm text-gray-600 uppercase font-bold"
                            >
                            Manage User
                            </h4>
                            <ul className="mt-3 text-white">
                            <li className="mt-3">
                                <a href="#" className="">
                                Maange rule
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="#" className="">
                                Manage Organization
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="#" className="">
                                Manage Module
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="#" className="">
                                Placeholder
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>

{/* ======================= right side of panel start ============================ */}

                    <div className="flex-grow flex flex-col">
                        
                            {/* Top bar start */}
                        <div className="relative shadow-md bg-white flex-shrink-0 flex justify-between items-center h-16 px-8">   
                                <div className="relative w-full h-full">
                                    <div className="relative z-50 h-full">
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
                                <div className="profile-icon relative ml-6">
                                <button type="button" className="block w-full border-blue-600 border-2 rounded-full p-1/2 focus:outline-none">
                                  <img
                                        src="https://www.gravatar.com/avatar/9240e2357dc0b9a4cfd1b109c23af063?d=https%3A%2F%2Fui-avatars.com%2Fapi%2Fmuse"
                                        className="h-8 w-8 rounded-full"/>
                                </button> 
                                </div>
                        </div>
                        {/* Top bar end */}

                        {/* Inner section start */}

                        <div className="inner-section py-9 px-8">
                            
                            {/* <ManageUser /> */}

                            <AddNewUser />
                       
                        </div>
                        {/* Inner section end */}
                       
                    </div>
                </div>
             </div>   
        </>
    )
}

export default Panel

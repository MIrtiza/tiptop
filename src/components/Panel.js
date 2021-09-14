
import logo from '../assets/images/logo.png'
const Panel = () => {
    return (
        <>
             <div className="font-sans text-gray-900 antialiased">
               <div className="min-h-screen flex bg-gray-200">
                    <div className="flex-shrink-0 w-64 bg-gray-900">
                        <a href="/panel">
                        <div
                            className="flex items-center h-16 px-4 bg-gray-900 text-xl text-white font-medium"
                        >
                        
                            <div className="logo-wrap w-full text-center">
                                <img src={logo} alt="logo" className="m-auto" />
                            </div>
                        </div>
                        </a>
                    <div>
                    
                    
                        
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
                    </div>
                    <div className="flex-grow flex flex-col">
                            <div
                            className="relative shadow-md bg-white flex-shrink-0">
                            <div className="flex justify-between items-center h-16 px-12">
                              
                                <div className="relative w-64">
                                    <div className="relative z-50">
                                    <input
                                        type="text"
                                        className="block w-full py-2 pl-12 pr-4 bg-gray-200 rounded-full border border-transparent focus:bg-white focus:border-gray-300 focus:outline-none"
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
                            <div className="flex items-center">
                        
                            <div className="ml-6">
                            
                                <div className="relative">
                                <button type="button" className="block w-full focus:outline-none">
                                    <span className="flex items-center"
                                    ><img
                                        src="https://www.gravatar.com/avatar/9240e2357dc0b9a4cfd1b109c23af063?d=https%3A%2F%2Fui-avatars.com%2Fapi%2Fmuse"
                                        className="h-8 w-8 rounded-full"/>
                                
                                    </span>
                                </button>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
        
                </div>
                </div>
             </div>   
        </>
    )
}

export default Panel

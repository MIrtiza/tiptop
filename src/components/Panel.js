

import React, { useState, useEffect } from 'react'
import axios from "axios"
import ManageUser from './ManageUser'
import ManageRole from './ManageRole'
import ManageOrganization from './ManageOrganization'
import ManageModule from './ManageModule'
import AddNewUser from './AddNewUser'
import AddNewRole from './AddNewRole'
import AddNewModule from './AddNewModule'
import Sidebar from './Sidebar'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
const Panel = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const [userResults,setUserResult] = useState([]);
    const [roleResults,setRoleResult] = useState([]);
    const [orgResults,setOrgResult] = useState([]);
    const [moduleResults,setModuleResult] = useState([]);

    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get("http://localhost:3000/user/",{
                params:{
                    action: "query",
                    format: "json"
                }
            })

            setUserResult(data);

        }
        search();
    },[]);

    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get("http://localhost:3000/role/",{
                params:{
                    action: "query",
                    format: "json"
                }
            })

            setRoleResult(data);

        }
        search();
    },[]);
    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get("http://localhost:3000/organization/",{
                params:{
                    action: "query",
                    format: "json"
                }
            })

            setOrgResult(data);

        }
        search();
    },[]);
    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get("http://localhost:3000/module/",{
                params:{
                    action: "query",
                    format: "json"
                }
            })

            setModuleResult(data);

        }
        search();
    },[]);
    return (
        <>
             <div className="font-sans text-gray-900 antialiased">
               <div className="min-h-screen flex bg-white">

{/* ======================= left side of panel start ============================ */}
                    <Sidebar sidebar={sidebar} />
                   
{/* ======================= right side of panel start ============================ */}

                    <div className="flex-grow flex flex-col">
                        
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

                            {/* <ManageUser data={userResults} /> */}
                            {/* <ManageRole data={roleResults} /> */}
                            {/* <ManageOrganization data={orgResults} /> */}
                            {/* <ManageModule data={moduleResults} /> */}

                            {/* <AddNewUser /> */}
                            {/* <AddNewRole /> */}
                            <AddNewModule />
                       
                        </div>
                        {/* Inner section end */}
                       
                    </div>
                </div>
             </div>   
        </>
    )
}

export default Panel

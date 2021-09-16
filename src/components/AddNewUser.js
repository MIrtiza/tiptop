import React from 'react'
import Breadcrumb from './Breadcrumb'
const AddNewUser = () => {
    return (
        <>
        <Breadcrumb />
        <div className="inner-head flex justify-between items-center">
            <h2 className="text-blue-600 text-3xl mb-7">Add New User</h2>
        </div>

        <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
            <div className="col-span-2 pr-6">
                <div className="mb-7">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Name
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    id="username" 
                    type="text" 
                    />
                </div>
                <div className="mb-7 w-3/6 inline-block pr-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Email Address
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    id="username" 
                    type="text" 
                    placeholder="e.g. user@domain.com"
                    />
                </div>
                <div className="mb-7 w-3/6 inline-block pl-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Temporary Password
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    id="username" 
                    type="password" 
                    />
                </div>

                <div className="mb-7 w-3/6 pr-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Mobile No.
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    id="username" 
                    type="text" 
                    />
                </div>

                <div className="mb-7 w-3/6 inline-block pr-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Organization
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    id="username" 
                    type="text" 
                    />
                </div>
                <div className="mb-7 w-3/6 inline-block pl-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                    Role
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    id="username" 
                    type="password" 
                    />
                </div>
            
                <div className="button-wrapper flex flex-row mt-auto">
                    <button className="px-9 py-2 border-2 border-indigo-500 text-blue-600 rounded-md mx-3">Filter</button>
                    <button className="px-9 py-2 bg-blue-800 border-2 border-indigo-500 text-white rounded-md"
               
                    >Add New User
                    
                    </button>
                </div>
            </div>

            {/* inner right side */}
            <div className="p-7 border-2 border-gray-300 rounded-2xl">
            <h3 className="text-lg font-semibold mb-7">Step by Step guide</h3>
            <ul className="step-list ">
                <li className="pb-5 mb-3">
                    <h6>User Role</h6>
                    <p>
                        Please ensure the required role is available.
                        select a role that user belongs to form the dropdown
                        list or setup new.if non available. 

                        <br />
                        Click to setup a new role.
                    </p>
                </li>
                <li className="pb-5 mb-3">
                    <h6>Organization</h6>
                    <p>
                        Please ensure the required role is available.
                        select a role that user belongs to form the dropdown
                        list or setup new.if non available. 

                        <br />
                        Click to setup a new role.
                    </p>
                </li>
                <li className="pb-5 mb-3">
                    <h6>Station</h6>
                    <p>
                        Please ensure the required role is available.
                        select a role that user belongs to form the dropdown
                        list or setup new.if non available. 

                        <br />
                        Click to setup a new role.
                    </p>
                </li>
                <li className="pb-5 mb-3">
                    <h6>Good to know</h6>
                    <p>
                        Please ensure the required role is available.
                        select a role that user belongs to form the dropdown
                        list or setup new.if non available. 

                        <br />
                        Click to setup a new role.
                    </p>
                </li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default AddNewUser

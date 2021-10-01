import {useState } from 'react'
import Breadcrumb from './Breadcrumb'
import 'react-simple-tabs-component/dist/index.css'
import Select from 'react-select';
import { Link } from 'react-router-dom'
const AddNewModule = () => {

    const selectParameteroptions = [
        { value: 'ABC', label: 'ABC' },
        { value: 'DEF', label: 'DEF' },
        { value: 'GHI', label: 'GHI' },
      ];
      const selectPlatfomoptions = [
        { value: 'ABC', label: 'ABC' },
        { value: 'DEF', label: 'DEF' },
        { value: 'GHI', label: 'GHI' },
      ];
    const [selectParameter, setSelectParameter] = useState(null);
    const [selectPlatform, setSelectPlatform] = useState(null);


    return (
        <>
        <Breadcrumb />
        <div className="inner-head flex justify-between items-center">
            <h2 className="text-blue-600 text-3xl mb-7">Add New Module</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="col-span-2 pr-6">
                <div className="mb-7">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Module Name
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    id="username" 
                    type="text" 
                    />
                </div>
                <div className="mb-7 block">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                    Module Parameter
                    </label>
                    <Select
                        // defaultValue={[selectRoleoptions[1], selectRoleoptions[3]]}
                       
                        // defaultValue={selectedOption}
                        onChange={setSelectParameter}
                        options={selectParameteroptions}
                        name="module parameter"
                        value={selectParameter}
                        className=""
                    />
                   
                </div>
                <div className="mb-7">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Discription
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    id="discription" 
                    type="text" 
                    />
                </div>

                <div className="mb-7 block">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                    Platform
                    </label>
                    <Select
                        // defaultValue={[selectRoleoptions[1], selectRoleoptions[3]]}
                       
                        // defaultValue={selectedOption}
                        onChange={setSelectPlatform}
                        options={selectPlatfomoptions}
                        name="module parameter"
                        value={selectPlatform}
                        className=""
                    />
                   
                </div>
              
                <div className="button-wrapper flex flex-row ml-auto justify-end">
                    <Link to="/managemodule" className="px-4 py-2 lg:px-9 border-2 border-indigo-500 text-blue-600 rounded-md mx-3">Cancel</Link>
                    <button className="px-4 py-2 lg:px-9 bg-cus-green border-2 border-indigo-500 text-white rounded-md"
               
                    >Add New Module
                    
                    </button>
                </div>

               </div>

            {/* inner right side */}
            <div className="p-7 border-2 border-gray-300 rounded-2xl" style={{height: "fit-content"}}>
            <h3 className="text-lg font-semibold mb-7">Step by Step guide</h3>
            <ul className="step-list ">
                <li className="pb-5 mb-3">
                    <h6>Create new role</h6>
                    <p>
                        Please ensure the required role is available.
                        select a role that user belongs to form the dropdown
                        list or setup new.if non available. 

                        <br />
                        Click to setup a new role.
                    </p>
                </li>
                <li className="pb-5 mb-3">
                    <h6>Attached module to Role</h6>
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

export default AddNewModule

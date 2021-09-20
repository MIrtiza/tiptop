import {useState, useEffect } from 'react'
import Breadcrumb from './Breadcrumb'
import { Tabs } from 'react-simple-tabs-component'
import 'react-simple-tabs-component/dist/index.css'
import axios from "axios"
import Select from 'react-select';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
const AddNewRole = () => {
    const selectOrgoptions = [
        { value: 'Org 1', label: 'Org 1' },
        { value: 'Org 2', label: 'Org 2' },
        { value: 'Org 3', label: 'Org 3' },
      ];
      const selectRoleoptions = [
        { value: 'Role 1', label: 'Role 1' },
        { value: 'Role 2', label: 'Role 2' },
        { value: 'Role 3', label: 'Role 3' },
      ];
    const selectoptions = [
        { value: 'ABC', label: 'ABC' },
        { value: 'DEF', label: 'DEF' },
        { value: 'GHI', label: 'GHI' },
      ];
    const [results,setResult] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [PermissionmodalIsOpen, setPermissionModalIsOpen] = useState(false);

    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get("http://localhost:3000/user/",{
                params:{
                    action: "query",
                    format: "json"
                }
            })

            setResult(data);

        }
        search();
    },[]);

    const handlePerOpenModal =()=> {
        setPermissionModalIsOpen(true);
      }
      
     const handlePerCloseModal= ()=> {
        setPermissionModalIsOpen(false);
      }
 
    const TabOne = () => {
        return (
          <>
             <button  onClick={handlePerOpenModal} className="px-9 py-2 mt-4 bg-blue-800 border-2 border-indigo-500 text-white rounded-md">Add Permissions</button>
              {/* Table start */}
                    
              <table class="table-fixed w-full my-6">
                                <thead className="bg-gray-100 border-b-2 border-gray-200">
                                    <tr>
                                        <th className="w-1/6 py-3 px-3 text-left">Policy name</th>
                                        <th className="w-1/6 py-3 px-3 text-left">Plicy type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                        {
                                                results.map((result)=>{
                                                return( 
                                                    <>
                                                        <tr className="border-b-2 border-gray-200" key={result.id}>
                                                            <td className="w-1/6 py-3 px-3 text-left">{result.permission}</td>    
                                                             <td className="w-1/6 py-3 px-3 text-left">{result.permissionType}</td>                                            
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        
                                    
                                </tbody>
                            </table>
                        
                    
                    {/* Table end */}

                    <div className="modal-container">
                        <Modal
                        isOpen={PermissionmodalIsOpen}
                        contentLabel=" Modal"
                        overlayClassName="inset-0 fixed bg-gray-900 bg-opacity-80"
                        >
                            <div className="modal-header flex justify-between items-center bg-gray-200 py-3 px-3">
                            <input type="text" name="search" placeholder="Search Permision" className="border-2 py-3 px-4 w-5/12 inline-block"  />
                            <h6 className="ml-9 mb-0">Showing {results.length} results</h6>
                            </div>
                        <table class="table-fixed w-full my-6">
                            <thead className="bg-gray-100 border-b-2 border-gray-200">
                                <tr>
                                    <th className="w-1/6 py-3 px-3 text-left">Policy name</th>
                                    <th className="w-1/6 py-3 px-3 text-left">Plicy type</th>
                                </tr>
                            </thead>
                            <tbody>
                                    
                                        {
                                                results.map((result)=>{
                                                return( 
                                                    <>
                                                        <tr className="border-b-2 border-gray-200" key={result.id}>
                                                            <td className="w-1/6 py-3 px-3 text-left"> <input type="checkbox" name="name1" /> {result.permission}</td>    
                                                             <td className="w-1/6 py-3 px-3 text-left"> {result.permissionType}</td>                                            
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        
                                
                            </tbody>
                        </table>


                            <button 
                            onClick={handlePerCloseModal} 
                            className="px-9 py-2 bg-blue-800 border-2 border-indigo-500 text-white rounded-md"
                            >Submit
                            </button>
                        </Modal>
                    </div>
          </>
        )
      }
      const TabTwo = () => {
        return (
          <>
            <h3>Tab two</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint illum iusto nostrum cumque qui
              voluptas tenetur inventore ut quis?
            </p>
          </>
        )
      }
      const TabThree = () => {
        return (
          <>
            <h3>Tab three</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint illum iusto nostrum cumque qui
              voluptas tenetur inventore ut quis?
            </p>
          </>
        )
      }
      // Tabs structure Array
const tabs = [
    {
      label: 'Permissions', // Tab Title - String
      Component: TabOne // Tab Body - JSX.Element
    },
    {
      label: 'Groups',
      Component: TabTwo
    },
    {
      label: 'Tags',
      Component: TabThree
    }
  ]
    return (
        <>
        <Breadcrumb />
        <div className="inner-head flex justify-between items-center">
            <h2 className="text-blue-600 text-3xl mb-7">Add New Role</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="col-span-2 pr-6">
                <div className="mb-7">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Role Name
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    id="username" 
                    type="text" 
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
              
               
            
                <div className="select-section mb-7">
                <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                    Search from select
                    </label>
                <Select
                    defaultValue={[selectoptions[1], selectoptions[3]]}
                    isMulti
                    // defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={selectoptions}
                    name="user"
                    value={selectedOption}
                />
                </div>
                <div className="tabing-section mb-12">
                <Tabs tabs={tabs} /* Props */ />
                </div>
                <div className="button-wrapper flex flex-row ml-auto justify-end">
                    <button className="px-9 py-2 border-2 border-indigo-500 text-blue-600 rounded-md mx-3">Cancel</button>
                    <button className="px-9 py-2 bg-blue-800 border-2 border-indigo-500 text-white rounded-md"
               
                    >Add New User
                    
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

export default AddNewRole

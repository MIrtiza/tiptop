
import { useState, useEffect } from 'react'
import axios from "axios"
import ToggleSwitch from './ToggleSwitch'
import Pagination from './Pagination'
const ManageOrganization = ({ data}) => {
    const [ active, setActive ] = useState(true);
 
    return (
        <>
                <div className="flex flex-col" style={{height: "84vh"}}>

                
                    <div className="inner-head flex justify-between items-center ">
                        <h2 className="text-blue-600 text-3xl">Manage Organization</h2>
                        <div className="button-wrapper flex flex-row">
                            {/* <button className="px-9 py-2 border-2 border-indigo-500 text-blue-600 rounded-md mx-3">Filter</button> */}
                            <button className="px-9 py-2 bg-blue-800 border-2 border-indigo-500 text-white rounded-md"
                           
                            >Add New Organization
                            
                            </button>
                        </div>
                    </div>

                    {/*  */}
                  
                    <table class="rwd-table w-full border-2 border-gray-200">
                        <tbody>
                        <tr className="bg-gray-200">
                            <th className=" py-3 px-3 text-left">Organization Name</th>
                            <th className=" py-3 px-3 text-left">Registration No.</th>
                            <th className=" py-3 px-3 text-left">Status</th>
                            <th className=" py-3 px-3 text-left" colSpan="2">Created</th>
                        </tr>
                        {
                            data.map((result)=>{
                            return( 
                                <>
                                    <tr className="" key={result.id}>
                                <td className=" py-3 px-3 text-left" data-th="Organization Name">{result.name}</td>
                                <td className=" py-3 px-3 text-left" data-th="Registration N0.">{result.registraionNumber}</td>
                                <td className=" py-3 px-3 text-left" data-th="Status">
                                    {/* toggle switch */}
                                    <ToggleSwitch id="toggle" optionLabels=""  checked={ result.status } onChange={ (checked)=> setActive(checked) } />
                                </td>
                                <td className=" py-3 px-3 text-left" data-th="Created">{result.created}</td>
                                <td className=" py-3 px-3 text-left"> <button className="text-blue-800">Edit</button> </td>

                                </tr>
                                </>
                                )
                                })
                            }
                        </tbody>
                    </table>


                        
                    
                    {/* Table start */}
               

                <Pagination />
                </div>

        </>
    )
}

export default ManageOrganization

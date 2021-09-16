
import { useState, useEffect } from 'react'
import axios from "axios"
import ToggleSwitch from './ToggleSwitch'
import Pagination from './Pagination'
const ManageUser = () => {
    const [results,setResult] = useState([]);
    const [ active, setActive ] = useState(true);
    const [click, setClick] = useState(false);

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

    return (
        <>
            
                    <div className="inner-head flex justify-between items-center">
                        <h2 className="text-blue-600 text-3xl">Manage User</h2>
                        <div className="button-wrapper flex flex-row">
                            <button className="px-9 py-2 border-2 border-indigo-500 text-blue-600 rounded-md mx-3">Filter</button>
                            <button className="px-9 py-2 bg-blue-800 border-2 border-indigo-500 text-white rounded-md"
                            onClick={setClick(!click)}
                            >Add New User
                            
                            </button>
                        </div>
                    </div>

                    {/* Table start */}
                    
                        <table class="table-fixed w-full my-6">
                                <thead className="bg-gray-100 border-b-2 border-gray-200">
                                    <tr>
                                    <th className="w-1/6 py-3 px-3 text-left">Name</th>
                                    <th className="w-1/12 py-3 px-3 text-left">Status</th>
                                    <th className="w-1/12 py-3 px-3 text-left">Role</th>
                                    <th className="w-1/12 py-3 px-3 text-left">Organization</th>
                                    <th className="w-1/6 py-3 px-3 text-left" colSpan="2">Created</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                        {
                                                results.map((result)=>{
                                                return( 
                                                    <>
                                                        <tr className="border-b-2 border-gray-200">
                                                    <td className="w-1/6 py-3 px-3 text-left">{result.name}</td>
                                                    <td className="w-1/12 py-3 px-3 text-left">
                                                        {/* toggle switch */}
                                                  
                                                        {/* {result.status ? setActive(true) : setActive(false)}  */}
                                                        <ToggleSwitch id="toggle" optionLabels=""  checked={ result.status } onChange={ (checked)=> setActive(checked) } />
                                                        <label htmlFor="toggle">{result.status ? "active" : "deactive"}</label>
                                                    </td>
                                                    <td className="w-1/12 py-3 px-3 text-left">{result.role}</td>
                                                    <td className="w-1/12 py-3 px-3 text-left">{result.organization}</td>
                                                    <td className="w-1/12 py-3 px-3 text-left">{result.created}</td>
                                                    <td className="w-6 py-3 px-3 text-left"> <button className="text-blue-800">Edit</button> </td>

                                                    </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        
                                    
                                </tbody>
                            </table>
                        
                    
                    {/* Table start */}
               

                <Pagination />
                      

        </>
    )
}

export default ManageUser

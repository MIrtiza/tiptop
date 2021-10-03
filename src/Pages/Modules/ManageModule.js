
import { useState,useEffect } from 'react'
import ToggleSwitch from '../../components/ToggleSwitch'
import Pagination from '../../components/Pagination'
import { Link } from 'react-router-dom'
import axios from 'axios'
const ManageModule = () => {

    const [ active, setActive ] = useState(true);
    const [module, setModule] = useState([]);
    useEffect(() => {

        loadUser();
      }, [])
 
      const loadUser = async () => {
        const {data} = await axios.get(`http://localhost:3000/module/`);
        setModule(data);
        console.log("module :"+data);
      };
 
    return (
        <>
                <div className="flex flex-col h-full">

                
                    <div className="inner-head flex justify-between items-center mb-7">
                        <h2 className="text-blue-600 text-3xl">Manage Module</h2>
                        <div className="button-wrapper flex flex-row">
                            {/* <button className="px-9 py-2 border-2 border-indigo-500 text-blue-600 rounded-md mx-3">Filter</button> */}
                            <Link to="/addmodule" className="px-9 py-2 bg-cus-green border-2 border-indigo-500 text-white rounded-md"
                           
                            >Add New Module
                            
                            </Link>
                        </div>
                    </div>

                    {/* table */}
                    <div className="table-scroller border-b-2 border-gray-200">
                        <table className="rwd-table w-full border-2 border-gray-200">
                            <tbody>
                            <tr className="bg-gray-200">
                                <th className=" py-3 px-3 text-left">Module Name</th>
                                <th className=" py-3 px-3 text-left">Discription</th>
                                <th className=" py-3 px-3 text-left">Platform</th>
                                <th className=" py-3 px-3 text-left">Status</th>
                                <th className=" py-3 px-3 text-left" colSpan="2">Created</th>
                            </tr>
                            {
                                module.map((result)=>{
                                return( 
                                        <tr className="" key={result.id}>
                                    <td className=" py-3 px-3 text-left" data-th="Module Name">{result.name}</td>
                                    <td className=" py-3 px-3 text-left" data-th="Discription">{result.discription}</td>
                                    <td className=" py-3 px-3 text-left" data-th="Platform">{result.platform.value}</td>
                                    <td className=" py-3 px-3 text-left" data-th="Status">
                                        {/* toggle switch */}
                                        <ToggleSwitch id="toggle" name={`check-${result.id}`}  checked={ result.status } onChange={ (checked)=> setActive(checked) } />
                                    </td>
                                    <td className=" py-3 px-3 text-left" data-th="Created">{result.created}</td>
                                    <td className=" py-3 px-3 text-left"> 
                                    <Link
                                    to={ `/updatemodule/${result.id}`}
                                     
                                    className="text-blue-800">Edit</Link> 
                                    
                                    </td>

                                    </tr>
                                    )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                        
                    
                    {/* Table start */}
               

                <Pagination />
                </div>

        </>
    )
}

export default ManageModule

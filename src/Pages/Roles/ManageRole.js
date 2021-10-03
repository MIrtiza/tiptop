
import { useState, useEffect } from 'react'
import ToggleSwitch from '../../components/ToggleSwitch'
import Pagination from '../../components/Pagination'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ManageRole = () => {
    const [ active, setActive ] = useState(true);
    const [role, setRole] = useState([]);

     useEffect(() => {

        loadUser();
      }, [])
 
      const loadUser = async () => {
        const {data} = await axios.get(`http://localhost:3000/role/`);
        setRole(data);
        console.log("module :"+data);
      };
    return (
        <>
                <div className="flex flex-col h-full">        
                    <div className="inner-head flex justify-between items-center mb-7">
                        <h2 className="text-blue-600 text-3xl">Manage Role</h2>
                        <div className="button-wrapper flex flex-row">
                            {/* <button className="px-9 py-2 border-2 border-indigo-500 text-blue-600 rounded-md mx-3">Filter</button> */}
                            <Link to="/addrole" className="px-9 py-2 bg-cus-green border-2 border-indigo-500 text-white rounded-md"
                           
                            >Add New Role
                            
                            </Link>
                        </div>
                    </div>
                    <div className="table-scroller border-b-2 border-gray-200">
                    <table className="rwd-table w-full border-2 border-gray-200">
                        <tbody>
                        <tr className="bg-gray-200">
                            <th className=" py-3 px-3 text-left">Role Name</th>
                            <th className=" py-3 px-3 text-left">Discription</th>
                            <th className=" py-3 px-3 text-left">Status</th>
                            <th className=" py-3 px-3 text-left" colSpan="2">Created</th>
                        </tr>
                        {
                            role.map((result)=>{
                            return( 
                                    <tr className="" key={result.id}>
                                <td className=" py-3 px-3 text-left" data-th="Role Name">{result.name}</td>
                                <td className=" py-3 px-3 text-left" data-th="Role Name">{result.discription}</td>
                                <td className=" py-3 px-3 text-left" data-th="Discription">
                                    {/* toggle switch ====  */}
                                    <ToggleSwitch id="toggle" name={`check-${result.id}`}  checked={ result.status.value } onChange={ (checked)=> setActive(checked)} />
                                </td>
                                <td className=" py-3 px-3 text-left" data-th="Created">{result.created}</td>
                                <td className=" py-3 px-3 text-left"> 
                                    <Link  className="text-blue-800"
                                     to={ `/updaterole/${result.id}`} >
                                    Edit</Link> 
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

export default ManageRole

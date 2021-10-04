
import { useState, useEffect } from 'react'
import ToggleSwitch from '../../components/ToggleSwitch'
import Pagination from '../../components/Pagination'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import axios from 'axios'
const ManageUser = ({ poolsdata}) => {
    const [ active, setActive ] = useState(true);
 
    const [selectPool, setSelectPool] = useState(null);
    let pooloption = poolsdata.map((pool)=>{
        return {value: pool.name, label: pool.name}
    })



     const [users, setUsers] = useState([]);

     useEffect(() => {

        loadUser();
      }, [])
 
      const loadUser = async () => {
        const {data} = await axios.get(`http://localhost:3000/user/`);
        setUsers(data);
        console.log("user :"+data);
      };

      const deleteUser = async id => {
        await axios.delete(`http://localhost:3000/user/${id}`);
        loadUser();
      };
    return (
        <>
                <div className="flex flex-col h-full">

                
                    <div className="inner-head flex justify-between items-center mb-7">
                        <h2 className="text-blue-600 text-3xl">Manage User</h2>
                        <div className="button-wrapper flex flex-row">
                            {/* <button className="px-9 py-2 border-2 border-indigo-500 text-blue-600 rounded-md mx-3">Filter</button> */}
                            <Link to="/adduser" className="px-9 py-2 bg-cus-green border-2 border-indigo-500 text-white rounded-md"
                           
                            >Add New User
                            
                            </Link>
                        </div>
                    </div>
                    <div className="select-wrapper">
                    <div className="mb-7 block w-1/2">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                    Select by Pool
                    </label>
                   
                        <Select
                            onChange={setSelectPool}
                            options={pooloption}
                            name="module pool"
                            value={selectPool}
                            className=""
                        />
                    
                    
                   
                </div>
                    </div>
                    {/* table */}
                    <div className="table-scroller border-b-2 border-gray-200">
                        <table className="rwd-table w-full border-2 border-gray-200">
                            <tbody>
                            <tr className="bg-gray-200">
                                <th className=" py-3 px-3 text-left">Name</th>
                                <th className=" py-3 px-3 text-left">Status</th>
                                <th className=" py-3 px-3 text-left">Role</th>
                                <th className=" py-3 px-3 text-left">Organization</th>
                                <th className=" py-3 px-3 text-left" colSpan="2">Created</th>
                               
                            </tr>
                            {
                                users.map((result)=>{
                                return( 
                                
                                        <tr className="" key={result.id}>
                                    <td className=" py-3 px-3 text-left" data-th="Name">{result.name}</td>
                                    <td className=" py-3 px-3 text-left" data-th="Status">
                                        {/* toggle switch */}
                                
                                        {/* {result.status ? setActive(true) : setActive(false)}  */}
                                        <ToggleSwitch id="toggle"  checked={ result.status } onChange={ (checked)=> setActive(checked) } />
                                        {/* <label htmlFor="toggle">{result.status ? "active" : "deactive"}</label>  */}
                                    </td>
                                    <td className=" py-3 px-3 text-left" data-th="Role">{result.role}</td>
                                    <td className=" py-3 px-3 text-left" data-th="Organization">{result.organization}</td>
                                    <td className=" py-3 px-3 text-left" data-th="Created">{result.created}</td>
                                    <td className=" py-3 px-3 text-left"> 
                                    <Link 
                                    to={ `/updateuser/${result.id}`}
                                     
                                    className="text-blue-800">Edit</Link> 

                                    <button 
                                    className="pl-3 text-red-300"
                                        onClick={()=>deleteUser(result.id)}
                                    >Delete</button>
                                    
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

export default ManageUser

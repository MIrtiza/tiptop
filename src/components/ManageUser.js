
import { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'
import Pagination from './Pagination'
import { Link, useParams } from 'react-router-dom'
import Select from 'react-select';
const ManageUser = ({ data, poolsdata, permissionData}) => {
    // const [results,setResult] = useState(data);
    const [ active, setActive ] = useState(true);
 
    const [selectPool, setSelectPool] = useState(null);
    let pooloption = poolsdata.map((pool)=>{
        return {value: pool.name, label: pool.name}
    })
  const {id} = useParams();
    const setData = (data, idKey) => {
        // localStorage.setItem('user', JSON.stringify(data));
        console.log(data);
        

        let { id, name, status, role,organization, created,permission, mobile,email } = data[idKey];
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('status', status);
        localStorage.setItem('role', role);
        localStorage.setItem('organization', organization);
        localStorage.setItem('created', created);
        localStorage.setItem('permission', permission);
        localStorage.setItem('email', email)
        localStorage.setItem('mobile', mobile)
        // localStorage.setItem('permissionData', permissionData);
     }

  
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
                                data.map((result)=>{
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
                                    onClick={() => setData(data,result.id, permissionData)}
                                    to={{
                                        pathname: `/updateuser/${result.id}`,
                                    
                                        // state: [{id:result.id, name: result.name, status: result.status, role: result.role, organization: result.organization, created: result.created}]
                                    }}
                                    // to="/updateuser"
                                     
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

export default ManageUser

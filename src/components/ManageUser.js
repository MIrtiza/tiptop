
import { useState, useEffect } from 'react'
import axios from "axios"
import ToggleSwitch from './ToggleSwitch'
import Pagination from './Pagination'
const ManageUser = ({ data}) => {
    // const [results,setResult] = useState(data);
    const [ active, setActive ] = useState(true);

    // useEffect(()=>{
    //     const search = async ()=>{
    //         const {data} = await axios.get("http://localhost:3000/user/",{
    //             params:{
    //                 action: "query",
    //                 format: "json"
    //             }
    //         })

    //         setResult(data);

    //     }
    //     search();
    // },[]);
 
    return (
        <>
                <div className="flex flex-col" style={{height: "84vh"}}>

                
                    <div className="inner-head flex justify-between items-center ">
                        <h2 className="text-blue-600 text-3xl">Manage User</h2>
                        <div className="button-wrapper flex flex-row">
                            {/* <button className="px-9 py-2 border-2 border-indigo-500 text-blue-600 rounded-md mx-3">Filter</button> */}
                            <button className="px-9 py-2 bg-blue-800 border-2 border-indigo-500 text-white rounded-md"
                           
                            >Add New User
                            
                            </button>
                        </div>
                    </div>

                    {/*  */}
                  
                    <table class="rwd-table w-full border-2 border-gray-200">
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
                                <>
                                    <tr className="" key={result.id}>
                                <td className=" py-3 px-3 text-left" data-th="Name">{result.name}</td>
                                <td className=" py-3 px-3 text-left" data-th="Status">
                                    {/* toggle switch */}
                            
                                    {/* {result.status ? setActive(true) : setActive(false)}  */}
                                    <ToggleSwitch id="toggle" optionLabels=""  checked={ result.status } onChange={ (checked)=> setActive(checked) } />
                                    {/* <label htmlFor="toggle">{result.status ? "active" : "deactive"}</label>  */}
                                </td>
                                <td className=" py-3 px-3 text-left" data-th="Role">{result.role}</td>
                                <td className=" py-3 px-3 text-left" data-th="Organization">{result.organization}</td>
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
                    
                        {/* <table class="table-fixed w-full my-6 ">
                                <thead className="bg-gray-100 ">
                                    <tr className="">
                                    <th className=" py-3 px-3 text-left">Name</th>
                                    <th className=" py-3 px-3 text-left">Status</th>
                                    <th className=" py-3 px-3 text-left">Role</th>
                                    <th className=" py-3 px-3 text-left">Organization</th>
                                    <th className=" py-3 px-3 text-left" colSpan="2">Created</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    
                                        {
                                                results.map((result)=>{
                                                return( 
                                                    <>
                                                        <tr className="" key={result.id}>
                                                    <td className=" py-3 px-3 text-left">{result.name}</td>
                                                    <td className=" py-3 px-3 text-left">
                                                        {/* toggle switch */}
                                                  
                                                        {/* {result.status ? setActive(true) : setActive(false)}  */}
                                                        {/* <ToggleSwitch id="toggle" optionLabels=""  checked={ result.status } onChange={ (checked)=> setActive(checked) } /> */}
                                                        {/* <label htmlFor="toggle">{result.status ? "active" : "deactive"}</label>  */}
                                                    {/* </td>
                                                    <td className=" py-3 px-3 text-left">{result.role}</td>
                                                    <td className=" py-3 px-3 text-left">{result.organization}</td>
                                                    <td className=" py-3 px-3 text-left">{result.created}</td>
                                                    <td className=" py-3 px-3 text-left"> <button className="text-blue-800">Edit</button> </td>

                                                    </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        
                                    
                                </tbody>
                            </table> */} 
                        
                    
                    {/* Table start */}
               

                <Pagination />
                </div>

        </>
    )
}

export default ManageUser

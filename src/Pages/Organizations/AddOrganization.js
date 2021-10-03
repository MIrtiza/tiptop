import {useState, useEffect } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Select from 'react-select';
import uuid from 'react-uuid'
import axios from 'axios'
import { useHistory, Link } from "react-router-dom";

const AddOrganization = ({hide,path}) => {
    let history = useHistory();

      const selectStatusoptions = [
        { value: false, label: 'false' },
        { value: true, label: 'true' },
      ];

      const [name, setName] = useState('');
      const [regNumber, setRegNumber] = useState('');
      const [status, setStatus]  = useState(false);
      const [date, setDate] = useState('');
      
      useEffect(() => {
        let today = new Date();
        let time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        setDate(time);
      }, [])

      const onSubmitHandler = (e)=>{
        e.preventDefault();
        const Add = async ()=>{
            await axios.post('http://localhost:3000/organization/',{id:uuid(),name:name, registraionNumber: regNumber ,status: status.value, created: date })
        }
        Add();
        if(path==="/adduser"){
            history.push("/adduser");
        }else{
            history.push("/manageorganization");
        }
       
        alert("added")
      } 

    return (
        <>
        <Breadcrumb />
        <div className="inner-head flex justify-between items-center">
            <h2 className="text-blue-600 text-3xl mb-7">Add New Organization</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="col-span-2 pr-6">
                <form onSubmit={e=> onSubmitHandler(e)}>
                    <div className="mb-7">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                            Organization Name
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                        id="username" 
                        type="text" 
                        value={name}
                        onChange={e=> setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-7">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="regno">
                            Registration No.
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                        id="regno" 
                        type="text" 
                        value={regNumber}
                        onChange={e=> setRegNumber(e.target.value)}
                        />
                    </div>
                    <div className="select-section mb-7">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="status">
                            Status
                            </label>
                        <Select
                            onChange={setStatus}
                            options={selectStatusoptions}
                            name="status"
                            value={status}
                        />
                    </div>
                    <div className="button-wrapper flex flex-row ml-auto justify-end">
                    <Link to="/manageorganization" className={`px-4 py-2 lg:px-9 border-2 border-indigo-500 text-blue-600 rounded-md mx-3 ${hide}`}>Cancel</Link>
                    <button className="px-4 py-2 lg:px-9 bg-cus-green border-2 border-indigo-500 text-white rounded-md"
                    
                    >Add New Organization
                    
                    </button>
                </div>
                </form>
            </div>

            {/* inner right side */}
            <div className="p-7 border-2 border-gray-300 rounded-2xl" style={{height: "fit-content"}}>
            <h3 className="text-lg font-semibold mb-7">Step by Step guide</h3>
            <ul className="step-list ">
                <li className="pb-5 mb-3">
                    <h6>Create new Organization</h6>
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

export default AddOrganization

import {useState, useEffect } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import 'react-simple-tabs-component/dist/index.css'
import Select from 'react-select';
import { Link, useHistory } from 'react-router-dom'
import uuid from 'react-uuid'
import axios from "axios"
const AddNewModule = ({platformOption,parameterOpt }) => {
    let history = useHistory();
 
      const [selectPlatform, setSelectPlatform] = useState(null);
      let platoption = platformOption.map((opt)=>{
          return {value: opt.value, label: opt.label}
      })
      const [selectParameter, setSelectParameter] = useState(null);
      let paraOption = parameterOpt.map((opt)=>{
          return {value: opt.value, label: opt.label}
      })
      const selectStatusoptions = [
        { value: false, label: 'false' },
        { value: true, label: 'true' },
      ];
   
    const [name, setName] = useState('');
    const [disc, setDisc] = useState('');
    const [status, setStatus] = useState(false);

    const [date, setDate] = useState('');

    
    useEffect(() => {
        let today = new Date();
        let time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        setDate(time);
      }, [])
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const Add = async ()=>{
            await axios.post('http://localhost:3000/module/',{id:uuid(),name:name, status: status.value, created: date ,discription: disc, platform: selectPlatform.value, parameter:selectParameter.value})
        }
        Add();
        history.push("/managemodule");
        alert("added")
        
       }

    return (
        <>
        <Breadcrumb />
        <div className="inner-head flex justify-between items-center">
            <h2 className="text-blue-600 text-3xl mb-7">Add New Module</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="col-span-2 pr-6">
                <form onSubmit={e=> onSubmitHandler(e)}>
                    <div className="mb-7">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                            Module Name
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                        id="username" 
                        type="text" 
                        value={name}
                        onChange={e=> setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-7 block">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="parameter">
                        Module Parameter
                        </label>
                        <Select
                            // defaultValue={[selectRoleoptions[1], selectRoleoptions[3]]}
                        
                            // defaultValue={selectedOption}
                            onChange={setSelectParameter}
                            options={paraOption}
                            name="parameter"
                            value={selectParameter}
                            className=""
                        />
                    
                    </div>
                    <div className="mb-7">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="discription">
                            Discription
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                        id="discription" 
                        type="text" 
                        value={disc}
                        onChange={e=> setDisc(e.target.value)}
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

                    <div className="mb-7 block">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Platform
                        </label>
                        <Select
                            // defaultValue={[selectRoleoptions[1], selectRoleoptions[3]]}
                        
                            // defaultValue={selectedOption}
                            onChange={setSelectPlatform}
                            options={platoption}
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
                </form>
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

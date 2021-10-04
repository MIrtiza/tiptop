import {useState, useEffect } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import axios from "axios"
import Select from 'react-select';
import { Link, useParams, useHistory } from 'react-router-dom'
import Tabbing from '../../components/Tabs'


const UpdateRole = ({hide, permissionData}) => {
    let history = useHistory();
    const { id } = useParams();
    const selectoptions = [
        { value: 'ABC', label: 'ABC' },
        { value: 'DEF', label: 'DEF' },
        { value: 'GHI', label: 'GHI' },
      ];
      const selectStatusoptions = [
        { value: false, label: 'false' },
        { value: true, label: 'true' },
      ];
      const [role,setRole] = useState([]);

      const {name, status,created, discription, permission } = role;
  
    const [selectedOption, setSelectedOption] = useState(null);
    // const [myname, setName] = useState(name);
    // const [disc, setDisc] = useState(discription);
    const [mystatus, setStatus] = useState(status);
    const [date, setDate] = useState(created);
    const [error, setError] = useState('');
    const [permissionRow, setPermissionRow] = useState([]);

    const onInputChange = e => {
        setRole({ ...role, [e.target.name]: e.target.value });
      };
   
    useEffect(() => {
        let today = new Date();
        let time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        setDate(time);

        loadUser();
    }, [])
   

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        const Add = async ()=>{
            await axios.put(`http://localhost:3000/role/${id}`,{name: name,discription: discription, status: mystatus.value, created:date,permission: permissionRow })
        }
        Add();
        alert("updated");
        history.push("/managerole");
        
      }

    const loadUser = async () => {
        const {data} = await axios.get(`http://localhost:3000/role/${id}`);
        setRole(data);
        console.log("updated data :"+data);
      };

     //   this is getting data from tabs child comp
     const eventhandler = data => {console.log("child to parent :"+  data); setPermissionRow(data)}
 

    return (
        <>
        <Breadcrumb />
        <div className="inner-head flex justify-between items-center">
            <h2 className="text-blue-600 text-3xl mb-7">Update Role</h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3`} >
            <div className="col-span-2 pr-6">
                {/* <form> */}
                    <div className="mb-7">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                                ID
                            </label>
                            <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                            id="id" 
                            type="text" 
                            value={id}
                            disabled
                            />
                        </div>
                    <div className="mb-7">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Role Name
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                        id="username" 
                        type="text" 
                        value={name}
                        onChange={e=> onInputChange(e)}
                        />
                         <span> <b>previous value :</b> {name} </span>
                        <span className="text-red-500"> {error} </span>
                    </div>
                    <div className="mb-7">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Discription
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                        id="discription" 
                        type="text" 
                        value={discription}
                        onChange={e=> onInputChange(e)}
                        />
                         <span> <b>previous value :</b> {discription} </span>
                            <span className="text-red-500"> {error} </span>
                    </div>
                    <div className="select-section mb-7">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                                Status
                                </label>
                            <Select
                                onChange={setStatus}
                                options={selectStatusoptions}
                                name="user"
                                value={mystatus}
                            />
                        </div>
                    <div className="select-section mb-7">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                        Search Stations
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
                    
                        <Tabbing  Userid={id} permissionData={permissionData} onChange={eventhandler} />
                    </div>
                    <div className={`button-wrapper flex flex-row ml-auto justify-end`}>
                        <Link to="/managerole" className="px-9 py-2 border-2 border-indigo-500 text-blue-600 rounded-md mx-3">Cancel</Link>
                        <button className="px-9 py-2 bg-cus-green border-2 border-indigo-500 text-white rounded-md"
                            onClick={e=>onSubmitHandler(e)}
                        >Update Role
                        
                        </button>
                    </div>
                {/* </form> */}
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


export default UpdateRole

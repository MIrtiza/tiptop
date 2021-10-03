import {useState, useEffect } from 'react'
import Breadcrumb from '../../components/Breadcrumb'

import Select from 'react-select';
import Modal from 'react-modal';
import { Link, useParams , useHistory} from 'react-router-dom'
import AddNewRole from '../Roles/AddNewRole'
import Tabbing from '../../components/Tabs'
import axios from "axios";
import AddOrganization from '../Organizations/AddOrganization';
const UpdateUser = ({ permissionData,orgOption, roleOption}) => {
        let history = useHistory();
        const { id } = useParams();
 
      const [selectOrg, setSelectOrg] = useState(null);
      let Orgoptions = orgOption.map((opt)=>{
        return {value: opt.name, label: opt.name}
        })
      const [selectRole, setSelectRole] = useState(null);
      let Roleoptions = roleOption.map((opt)=>{
        return {value: opt.name, label: opt.name}
        })


    const selectoptions = [
        { value: 'ABC', label: 'ABC' },
        { value: 'DEF', label: 'DEF' },
        { value: 'GHI', label: 'GHI' },
      ];
      const selectStatusoptions = [
        { value: false, label: 'false' },
        { value: true, label: 'true' },
      ];

      const [user, setUser] = useState([])

      const { name, email, password, mobile, status,created,permission } = user;
     
      const [selectedOption, setSelectedOption] = useState(null);
   
      const [orgmodalIsOpen, setOrgModalIsOpen] = useState(false);
      const [rolemodalIsOpen, setRoleModalIsOpen] = useState(false);
     
  
   
    //   const [myname, setName] = useState(name);
    //   const [myemail, setEmail] = useState(email);
      const [mypassword, setPassword] = useState('');
    //   const [mymobile, setMobile] = useState(mobile);
     
      const [mystatus, setStatus] = useState(status);
      const [date, setDate] = useState(created);
      const [permissionRow, setPermissionRow] = useState([]);
      const [error, setError] = useState('');
      console.log("permission row :"+permissionRow)
         // for test
    const mypermission = [
        {
            value:"permission 1",
            type: "type 1"
        }
    ]
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

      const handleOrgOpenModal =()=> {
        setOrgModalIsOpen(true);
      }
      
     const handleOrgCloseModal= ()=> {
        setOrgModalIsOpen(false);
      }
      const handleRoleOpenModal =()=> {
        setRoleModalIsOpen(true);
      }
      
     const handleRoleCloseModal= ()=> {
        setRoleModalIsOpen(false);
      }


      const eventhandler = data => {console.log("child to parent :"+  data); setPermissionRow(data)}

    useEffect(() => {
        let today = new Date();
        let time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        setDate(time);
        loadUser();
    }, []);

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const Add = async ()=>{
            await axios.put(`http://localhost:3000/user/${id}`,{name:name, status: mystatus.value, created: date ,email: email, 
            organization: selectOrg.value, role:selectRole.value, mobile: mobile,password: mypassword, permission: permissionRow})
        }
        Add();
        alert("updated")  
        history.push("/manageuser");
             
    }
    const loadUser = async () => {
        const {data} = await axios.get(`http://localhost:3000/user/${id}`);
        setUser(data);
        console.log("updated data :"+data);
      };
      
      const ResetPassword = (e)=>{
        e.preventDefault();
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for ( var i = 0; i < 6; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 4));
       }
       alert('Password Reset');
       return  setPassword(result);
        
      }


      
 

    return (
        <>
        <Breadcrumb />
     
        {/* {SearchResult} */}
        <div className="inner-head flex justify-between items-center">
            <h2 className="text-blue-600 text-3xl mb-7">Update User</h2>

            <div className="button-wrapper flex flex-row ml-auto justify-end mt-8 mb-7">
                <button className="px-4 py-2 lg:px-9 bg-cus-green border-2 border-indigo-500 text-white rounded-md" onClick={e=> ResetPassword(e)}>Reset Password</button>
            </div>
        </div>
        {/* {data.map((item)=>{
            return(
                <h3> {item.id} </h3>
            )
        })} */}
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <div className="col-span-2 lg:col-span-2 md:col-span-3 pr-0 md:pr-6 lg:pr-6">
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
                        Name
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    id="username" 
                    type="text" 
                    value={name}
                    onChange={e=> onInputChange(e)}
                    />
                      <span> <b>previous value :</b> {name} </span>
                </div>
                <div className="mb-7 w-full md:w-full lg:w-3/6 block lg:inline-block md:block pr-0 md:pr-0 lg:pr-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                        Email Address
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    id="username" 
                    type="text" 
                    placeholder="e.g. user@domain.com"
                    value={email}
                    onChange={e=> onInputChange(e)}
                    />
                      <span> <b>previous value :</b> {email} </span>
                </div>
                

                <div className="mb-7 w-full md:w-full lg:w-3/6 block lg:block md:inline-block pr-0 md:pr-0 lg:pr-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                        Mobile No.
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                    id="username" 
                    type="text" 
                    value={mobile}
                    onChange={e=> onInputChange(e)}
                    />
                          <span> <b>previous value :</b> {mobile} </span>
                </div>

                <div className="mb-7 w-full md:w-full lg:w-3/6 block lg:inline-block md:inline-block pr-0 md:pr-0 lg:pr-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                        Organization
                    </label>
                 
                     <Select
                        defaultValue={[Orgoptions[1]]}
                       
                        // defaultValue={selectedOption}
                        onChange={setSelectOrg}
                        options={Orgoptions}
                        name="organization"
                        value={selectOrg}
                        className=""
                    />
                       <div className="add-more mt-3">
                            <span>or</span> 
                            <button className="ml-2 text-blue-700" onClick={handleOrgOpenModal}>Add new Organization</button>
                        </div>
                </div>
                <div className="mb-7 w-full md:w-full lg:w-3/6 block lg:inline-block md:inline-block pl-0 md:pl-0 lg:pl-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="role">
                    Role
                    </label>
                    <Select
                        defaultValue={[Roleoptions[1]]}
                       
                        // defaultValue={selectedOption}
                        onChange={setSelectRole}
                        options={Roleoptions}
                        name="role"
                        value={selectRole}
                        className=""
                    />
                   
                        <div className="add-more mt-3">
                            <span>or</span> 
                            <button className="ml-2 text-blue-700" onClick={handleRoleOpenModal}>Add new Role</button>
                        </div>
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
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="station">
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
                <div className="button-wrapper flex flex-row ml-auto justify-end">
                    <Link to="/manageuser" className="px-4 py-2 lg:px-9 border-2 border-indigo-500 text-blue-600 rounded-md mx-3">Cancel</Link>
                    <button className="px-4 py-2 lg:px-9 bg-cus-green border-2 border-indigo-500 text-white rounded-md"
                    onClick={e=>onSubmitHandler(e)}
                    >Update User
                    
                    </button>
                </div>

                {/* organization modal */}
                <div className="modal-container">
                    <Modal
                        isOpen={orgmodalIsOpen}
                        contentLabel=" Modal"
                        className=" w-11/12 h-4/5  bg-white m-auto border-2 absolute -inset-5 p-5 add-role-modal "
                        overlayClassName="inset-0 fixed bg-gray-900 bg-opacity-80"
                    >
                        {/* <h2 className="text-blue-600 text-2xl mb-7">Add New Organization</h2>
                          <div className="flex row items-center mb-6 justify-between">
                            <label className="block text-grey-darker text-sm font-bold mb-2 mr-4" htmlFor="username">
                                    Organization NAme
                                </label>
                                <input 
                                className="shadow appearance-none border rounded w-8/12 py-2 px-3 text-grey-darker" 
                                id="organization" 
                                type="text" 
                                />
                          </div>
                          <div className="flex row items-center mb-6 justify-between">
                            <label className="block text-grey-darker text-sm font-bold mb-2 mr-4" htmlFor="username">
                                    Registration No. 
                                </label>
                                <input 
                                className="shadow appearance-none border rounded w-8/12 py-2 px-3 text-grey-darker" 
                                id="organization" 
                                type="text" 
                                />
                          </div> */}
                            <AddOrganization hide={"hidden"} path="/adduser"  />
                        <div className="button-wrapper flex flex-row ml-auto justify-end mt-auto">
                            <button onClick={handleOrgCloseModal} className="px-4 py-2 lg:px-9 border-2 border-indigo-500 text-blue-600 rounded-md mx-3">Cancel</button>
                            {/* <button onClick={handleOrgCloseModal} className="px-4 py-2 lg:px-9 bg-cus-green border-2 border-indigo-500 text-white rounded-md">Add Organization</button> */}
                        </div>
                    </Modal>
                </div>
          
                {/* Role modal */}
                <div className="modal-container">
                    <Modal
                        isOpen={rolemodalIsOpen}
                        contentLabel=" Modal"
                        className=" w-11/12 h-4/5  bg-white m-auto border-2 absolute -inset-5 p-5 add-role-modal "
                       overlayClassName="inset-0 fixed bg-gray-900 bg-opacity-80"
                    >
                      
                    {/* add role modal content */}
                        <AddNewRole hide={"hidden"} permissionData={permissionData} path="/adduser"   />


                        <div className="button-wrapper flex flex-row ml-auto justify-end mt-8">
                            <button onClick={handleRoleCloseModal} className="px-4 py-2 lg:px-9 border-2 border-indigo-500 text-blue-600 rounded-md mx-3">Cancel</button>
                            {/* <button onClick={handleRoleCloseModal} className="px-4 py-2 lg:px-9 bg-cus-green border-2 border-indigo-500 text-white rounded-md">Add Role</button> */}
                        </div>
                    </Modal>
                </div>
            </div>

            {/* inner right side */}
            <div className="md:col-span-2 lg:col-span-1 p-7 border-2 border-gray-300 rounded-2xl mb-6">
            <h3 className="text-lg font-semibold mb-7">Step by Step guide</h3>
            <ul className="step-list ">
                <li className="pb-5 mb-3">
                    <h6>User Role</h6>
                    <p>
                        Please ensure the required role is available.
                        select a role that user belongs to form the dropdown
                        list or setup new.if non available. 

                        <br />
                        Click to setup a new role.
                    </p>
                </li>
                <li className="pb-5 mb-3">
                    <h6>Organization</h6>
                    <p>
                        Please ensure the required role is available.
                        select a role that user belongs to form the dropdown
                        list or setup new.if non available. 

                        <br />
                        Click to setup a new role.
                    </p>
                </li>
                <li className="pb-5 mb-3">
                    <h6>Station</h6>
                    <p>
                        Please ensure the required role is available.
                        select a role that user belongs to form the dropdown
                        list or setup new.if non available. 

                        <br />
                        Click to setup a new role.
                    </p>
                </li>
                <li className="pb-5 mb-3">
                    <h6>Good to know</h6>
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

export default UpdateUser

import {useState, useEffect } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import 'react-simple-tabs-component/dist/index.css'
import Select from 'react-select';
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from "axios";

const Updateodule = ({platformOption, parameterOpt}) => {
    const [selectPlatform, setSelectPlatform] = useState(null);
    let platoption = platformOption.map((opt)=>{
        return {value: opt.value, label: opt.label}
    })
    const [selectParameter, setSelectParameter] = useState(null);
    let paraOption = parameterOpt.map((opt)=>{
        return {value: opt.value, label: opt.label}
    })

        let history = useHistory();
        const { id } = useParams();

      const [module, setModule] = useState([]);

      const {name, status,created, discription, platform,parameter } = module;

    //   const [myname, setName] = useState(name);
    //   const [disc, setDisc] = useState(discription);
      const [mystatus, setStatus] = useState(status);
      const [date, setDate] = useState(created);    
      const selectStatusoptions = [
        { value: false, label: 'false' },
        { value: true, label: 'true' },
      ];

      const onInputChange = e => {
        setModule({ ...module, [e.target.name]: e.target.value });
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
            await axios.put(`http://localhost:3000/module/${id}`,{name: name,discription: discription, status: mystatus.value,parameter: selectParameter.value,platform: selectPlatform.value, created:date})
        }
        Add();
        alert("updated");
        history.push("/managemodule");
        
      }
      
   
    const loadUser = async () => {
        const {data} = await axios.get(`http://localhost:3000/module/${id}`);
        setModule(data);
        console.log("updated data :"+data);
      };

    return (
        <>
        <Breadcrumb />
        <div className="inner-head flex justify-between items-center">
            <h2 className="text-blue-600 text-3xl mb-7">Update Module</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="col-span-2 pr-6">
                <form onSubmit={e=> onSubmitHandler(e)}>
                    <div className="mb-7">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Module ID
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
                            Module Name
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
                    <div className="mb-7 block">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                        Module Parameter
                        </label>
                        <Select
                            // defaultValue={[selectRoleoptions[1], selectRoleoptions[3]]}
                        
                            // defaultValue={selectedOption}
                            onChange={setSelectParameter}
                            options={paraOption}
                            name="module parameter"
                            value={selectParameter}
                            className=""
                        />
                    
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

                    <div className="mb-7 block">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="platform">
                        Platform
                        </label>
                        <Select
                            // defaultValue={[selectRoleoptions[1], selectRoleoptions[3]]}
                        
                            // defaultValue={selectedOption}
                            onChange={setSelectPlatform}
                            options={platoption}
                            name="platform"
                            value={selectPlatform}
                            className=""
                        />
                    
                    </div>
                
                    <div className="button-wrapper flex flex-row ml-auto justify-end">
                        <Link to="/managemodule" className="px-4 py-2 lg:px-9 border-2 border-indigo-500 text-blue-600 rounded-md mx-3">Cancel</Link>
                        <button className="px-4 py-2 lg:px-9 bg-cus-green border-2 border-indigo-500 text-white rounded-md"
                        >Update Module
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

export default Updateodule

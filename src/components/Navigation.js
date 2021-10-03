import React, { useState, useEffect } from 'react'
import axios from "axios"
import ManageUser from '../Pages/Users/ManageUser'
import ManageRole from '../Pages/Roles/ManageRole'
import ManageOrganization from '../Pages/Organizations/ManageOrganization'
import ManageModule from '../Pages/Modules/ManageModule'
import AddNewUser from '../Pages/Users/AddNewUser'
import AddNewRole from '../Pages/Roles/AddNewRole'
import AddNewModule from '../Pages/Modules/AddNewModule'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'
import Home from '../Pages/Home/Home'
import Pools from '../Pages/Pools/Pools'
import UpdateUser from '../Pages/Users/UpdateUser'
import UpdateRole from '../Pages/Roles/UpdateRole'
import UpdateModule from '../Pages/Modules/UpdateModule'
import AddOrganization from '../Pages/Organizations/AddOrganization'
import UpdateOrganization from '../Pages/Organizations/UpdateOrganization'
const Navigation = (props) => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [userResults,setUserResult] = useState([]);
    const [roleResults,setRoleResult] = useState([]);
    const [orgResults,setOrgResult] = useState([]);
    const [moduleResults,setModuleResult] = useState([]);
    const [permissionResults,setpermissionResult] = useState([]);
    const [pool,setpool] = useState([]);
    const [platform, setPlatform]= useState([]);
    const [parameter, setParameter]= useState([]);

    useEffect(()=>{
        // let id= props.match.params.id;
        const search = async ()=>{
            const {data} = await axios.get("http://localhost:3000/user/",{
                params:{
                    action: "query",
                    format: "json"
                }
                
            })
            // props.history.push('/add');

            setUserResult(data);

        }
        search();
    },[]);
    useEffect(()=>{
        // let id= props.match.params.id;
        const search = async ()=>{
            const {data} = await axios.get("http://localhost:3000/permission/",{
                params:{
                    action: "query",
                    format: "json"
                }
                
            })
            // props.history.push('/add');

            setpermissionResult(data);

        }
        search();
    },[]);

    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get("http://localhost:3000/role/",{
                params:{
                    action: "query",
                    format: "json"
                }
            })

            setRoleResult(data);

        }
        // const Add = async ()=>{
        //      await axios.post('http://localhost:3000/role/',{id:11,name:" amii irtiza", status: true, created:"12,23,12",discription: "testing 123"})
        // }
        // Add();
        search();
    },[]);
    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get("http://localhost:3000/organization/",{
                params:{
                    action: "query",
                    format: "json"
                }
            })

            setOrgResult(data);

        }
        search();
    },[]);
    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get("http://localhost:3000/module/",{
                params:{
                    action: "query",
                    format: "json"
                }
            })

            setModuleResult(data);

        }
        search();
    },[]);

    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get("http://localhost:3000/pools/",{
                params:{
                    action: "query",
                    format: "json"
                }
            })

            setpool(data);

        }
        search();
    },[]);
    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get("http://localhost:3000/platforms/",{
                params:{
                    action: "query",
                    format: "json"
                }
            })

            setPlatform(data);

        }
        search();
    },[]);
    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get("http://localhost:3000/parameters/",{
                params:{
                    action: "query",
                    format: "json"
                }
            })

            setParameter(data);

        }
        search();
    },[]);
    return (
            <>
         
        <Router>
        <Switch>
            
            <div className="font-sans text-gray-900 antialiased">
               <div className="min-h-screen flex bg-white">
               <Sidebar sidebar={sidebar} />
                    <div className="flex-grow flex flex-col">
                    <Searchbar showSidebar={showSidebar} />
                        <div className="inner-section h-full py-9 px-8">
                        <Route exact path="/"> <Home /> </Route>
                            <Route exact path="/adduser"> <AddNewUser  permissionData= {permissionResults} orgOption={orgResults} roleOption={roleResults} /> </Route>
                            <Route path="/updateuser/:id"> <UpdateUser permissionData= {permissionResults} orgOption={orgResults} roleOption={roleResults} /> </Route>
                            <Route path="/updaterole/:id"> <UpdateRole permissionData= {permissionResults} /> </Route>
                            <Route path="/updatemodule/:id"> <UpdateModule permissionData= {permissionResults} platformOption={platform} parameterOpt={parameter} /> </Route>
                            <Route path="/updateorg/:id"> <UpdateOrganization data={orgResults} /> </Route>
                            <Route path="/addrole"> <AddNewRole permissionData= {permissionResults} /> </Route>
                            <Route path="/addmodule"> <AddNewModule permissionData= {permissionResults} platformOption={platform} parameterOpt={parameter} /> </Route>
                            <Route path="/addorganization"> <AddOrganization /> </Route>


                            <Route path="/managemodule"> <ManageModule data={moduleResults}  /> </Route>
                            <Route path="/manageorganization"> <ManageOrganization data={orgResults} /> </Route>
                            <Route path="/managerole"> <ManageRole data={roleResults}  /> </Route>
                            <Route path="/manageuser"> <ManageUser data={userResults} poolsdata={pool } permissionData= {permissionResults} /> </Route>
                            <Route path="/pools"> <Pools poolsdata={pool} /> </Route>
                        </div>
                    </div>
               </div>
            </div>
              
           
                <Route exact path="/login"> <Login /> </Route>
            
            </Switch>
        </Router>
        </>
    )
}

export default Navigation

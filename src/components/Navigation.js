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
    // const [userResults,setUserResult] = useState([]);
    const [roleResults,setRoleResult] = useState([]);
    const [orgResults,setOrgResult] = useState([]);
    // const [moduleResults,setModuleResult] = useState([]);
    const [permissionResults,setpermissionResult] = useState([]);
    const [pool,setpool] = useState([]);
    const [platform, setPlatform]= useState([]);
    const [parameter, setParameter]= useState([]);

    const PermissionLoad = ()=>{
        const search = async ()=>{
            const {data} = await axios.get("http://localhost:3000/permission/",{
                params:{
                    action: "query",
                    format: "json"
                }
                
            })
            setpermissionResult(data);

        }
        search();
    }
    const roleLOad = ()=>{
        const search = async ()=>{
        const {data} = await axios.get("http://localhost:3000/role/",{
            params:{
                action: "query",
                format: "json"
            }
        })

        setRoleResult(data);

        }
 
        search();
    }
    const OrganizationLoad = ()=>{
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
    }
    const poolLoad = ()=>{
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
    }
    const platformLoad = ()=>{
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
    }

    const ParameterLoad = ()=>{
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
    }
    useEffect(()=>{
        PermissionLoad();
        roleLOad();
        OrganizationLoad();
        poolLoad();
        platformLoad();
        ParameterLoad();
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
                            <Route path="/updateorg/:id"> <UpdateOrganization  /> </Route>
                            <Route path="/addrole"> <AddNewRole permissionData= {permissionResults} /> </Route>
                            <Route path="/addmodule"> <AddNewModule permissionData= {permissionResults} platformOption={platform} parameterOpt={parameter} /> </Route>
                            <Route path="/addorganization"> <AddOrganization /> </Route>


                            <Route path="/managemodule"> <ManageModule   /> </Route>
                            <Route path="/manageorganization"> <ManageOrganization  /> </Route>
                            <Route path="/managerole"> <ManageRole  /> </Route>
                            <Route path="/manageuser"> <ManageUser poolsdata={pool } permissionData= {permissionResults} /> </Route>
                            <Route path="/pools"> <Pools  /> </Route>
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

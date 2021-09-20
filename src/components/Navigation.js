import React, { useState, useEffect } from 'react'
import axios from "axios"
import ManageUser from './ManageUser'
import ManageRole from './ManageRole'
import ManageOrganization from './ManageOrganization'
import ManageModule from './ManageModule'
import AddNewUser from './AddNewUser'
import AddNewRole from './AddNewRole'
import AddNewModule from './AddNewModule'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Login from './Login'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'
const Navigation = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [userResults,setUserResult] = useState([]);
    const [roleResults,setRoleResult] = useState([]);
    const [orgResults,setOrgResult] = useState([]);
    const [moduleResults,setModuleResult] = useState([]);

    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get("http://localhost:3000/user/",{
                params:{
                    action: "query",
                    format: "json"
                }
            })

            setUserResult(data);

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
    return (
            <>
         
        <Router>
        <Switch>
        <div className="font-sans text-gray-900 antialiased">
               <div className="min-h-screen flex bg-white">
               <Sidebar sidebar={sidebar} />
                    <div className="flex-grow flex flex-col">
                    <Searchbar showSidebar={showSidebar} />

                        <div className="inner-section py-9 px-8">
                            <Route path="/adduser"> <AddNewUser /> </Route>
                            <Route path="/addrole"> <AddNewRole /> </Route>
                            <Route path="/addmodule"> <AddNewModule /> </Route>

                            <Route path="/managemodule"> <ManageModule data={moduleResults} /> </Route>
                            <Route path="/manageorganization"> <ManageOrganization data={orgResults} /> </Route>
                            <Route path="/managerole"> <ManageRole data={roleResults} /> </Route>
                            <Route path="/manageuser"> <ManageUser data={userResults} /> </Route>
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

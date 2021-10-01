import {useState, useEffect} from 'react'
import logo from '../assets/images/logo.png'
import bgImage from '../assets/images/bg-login.jpg'
import sponsorLogo from '../assets/images/sponsor-logo.svg'
import { useHistory, Link } from 'react-router-dom'
// import axios from 'axios'
export const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [userResults,setUserResult] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        // if(localStorage.getItem('user-info')){
        //     history.push("/panel")
        // }
    },[])

    async function Login(){
        // let item = {email,password};
        // let result = await fetch("http://localhost:3000/user/",{
        //     method: "POST",
        //     headers:{
        //         "Content-Type":"application/json",
        //         "Accept":"application/json"
        //     },
        //     body: JSON.stringify(item)
        // })
        // // result = await result.JSON();  
        // localStorage.setItem("user-info",JSON.stringify(result))
        // history.push("/panel")
    }
   
    
    return (
        <>
        <div className="login-page h-screen flex flex-col  bg-gray-100 relative">
            <div className="background-wrap absolute w-full h-full">
                <img src={bgImage} alt="bg" className="w-full h-full " />
            </div>

            <div className="flex justify-center items-center h-full">
                <div className="login-head w-full md:w-1/2 lg:w-1/5 relative m-4 md:m-4 lg:m-0">
                    <div className="logo-wrap w-full text-center">
                        <img src={logo} alt="logo" className="m-auto" />
                    </div>
                    <h1 className="text-3xl font-sans text-white my-8 text-center">Sign in to your account</h1>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col  h-auto ">
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlfor="username">
                            Email Address
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                        id="username" 
                        type="text" 
                        value={email}
                        onChange={(event)=> setEmail(event.target.value)}
                        />
                        <span className="error-text">Please enter a valid value</span>
                    </div>
                    <div className="mb-6">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input 
                        className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                        id="password" 
                        type="password" 
                        value={password}
                        onChange={(event)=> setPassword(event.target.value)}
                        />
                        <span className="error-text">Please enter a valid value</span>
                    </div>
                    <div className="flex items-center justify-between">
                    
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2 font-semibold">Remember me</span>
                        </label>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-600" href="/">
                            Forgot Password?
                        </a>
                    </div>
                    <button
                   
                    className="bg-blue-700 border text-center text-white py-2 mt-5 border-blue-200 hover:text-white hover:bg-purple-600 hover:border-transparent 
                                        focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" 
                    type="button"
                    onClick={Login()}
                    >
                            Sign In
                    </button>
                </div>
                </div>
            </div>

            <div className="footer relative w-full h-auto flex flex-col lg:flex-row justify-center lg:justify-between justify-items-center p-9">
                <div className="sponsor-logo mb-5 text-center">
                    <span className="text-white mb-2 inline-block text-sm">Powered by</span>
                    <img src={sponsorLogo} alt="sponsor" className="m-auto" />
                </div>
                <ul className="flex justify-items-center m-0 p-0 justify-center items-center list-none">
                    <li>
                        <Link to="/" className="text-white px-3">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white px-3">terms of Service</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white px-3">Support</Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Login
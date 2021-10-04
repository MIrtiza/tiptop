

import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Pools = () => {

    const [pool, setPool] = useState([])

    useEffect(() => {

        loadUser();
      }, [])
 
      const loadUser = async () => {
        const {data} = await axios.get(`http://localhost:3000/pools/`);
        setPool(data);
        console.log("pool :"+data);
      };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3000/pools/${id}`);
        loadUser();
      };
    return (
        <div className="pools-container">
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Pool id
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Pool Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Pool Type
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Pool Description
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {pool.map((poolitem, poolindex) => (
                        <tr key={poolitem.id} className={poolindex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{poolitem.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{poolitem.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{poolitem.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{poolitem.discription}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link to="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                            </Link>
                            <button 
                                className="pl-3 text-red-300"
                                    onClick={()=>deleteUser(poolitem.id)}
                                >Delete
                            </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Pools

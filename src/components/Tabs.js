import { useState, useEffect } from "react";
import Modal from 'react-modal';
import axios from "axios"
const Tabs =({permissionData, Userid})=> {
    const [PerAPI,setPerAPI] = useState([]);
    const [PermissionmodalIsOpen, setPermissionModalIsOpen] = useState(false);
    const [permissionSearch, setPermissionSearch]= useState('');
  const [toggleState, setToggleState] = useState(1);
  const [ischecked, setChecked] = useState(false);
  // console.log("checked : "+ ischecked)
  const [CurrentuserId, CurrentsetUserID] = useState(Userid);

  const toggleCheckboxChange = (e, name) => {
    setChecked({
      ischecked:false,
      [name]: e.target.checked
    })
  }
  const [permissionRest, setPermissionRest] = useState([]);
  console.log("tabs page id :"+ CurrentuserId)
  console.log("tabs page user :"+ PerAPI);





  
  // useEffect(()=>{
  //   Modal.setAppElement('body');
  //   const search = async ()=>{
  //     const {data} =  await axios.get(`http://localhost:3000/user/?permission=${permissionSearch}`,{
  //           params:{
  //               action: 'query',
  //               list: 'search',
  //               origin: '*',
  //               format: 'json',
  //               srsearch: permissionSearch
  //           }
  //       });
  //       setResult(data);
  //   }

  //    if(permissionSearch && !results.length){
  //        search();
  //    }else{
  //        const timeoutId = setTimeout(()=>{
  //            if(permissionSearch){search()}
  //        }, 500);

  //    return () =>{
  //            clearTimeout(timeoutId);
  //        }
  //    }

  //       search();
        
  // },[permissionSearch])

        
        useEffect(()=>{
          Modal.setAppElement('body');
            const search = async ()=>{
                const {data} =  await axios.get(`http://localhost:3000/user?id=${CurrentuserId}`,{
                      params:{
                          action: 'query',
                          list: 'search',
                          origin: '*',
                          format: 'json'
                      }
                  });
                  setPerAPI(data);
              }
              search()
        },[])


        function onSubmitHandler() {
          axios
            .put(`http://localhost:3000/user/1`, {
              permission: permissionRest
            })
            .then((response) => {
              // setPost(response.data);
            });
        }
        // const onSubmitHandler=()=>{
    
              // const Add = async ()=>{
              //         await axios.put(`http://localhost:3000/user?id=1`,{
              //           permission: permissionRest
              //         })
              // }
              // Add();

              // alert("permission added");

              
          
        //  }


const handlePerOpenModal =()=> {
    setPermissionModalIsOpen(true);
  }
  
 const handlePerCloseModal= ()=> {
    setPermissionModalIsOpen(false);
  }
  
  const toggleTab = (index) => {
    setToggleState(index);
  };



  const [checkedState, setCheckedState] = useState(
    // new Array(permissionData.length).fill(false)
    [permissionData]
  );
  const handleOnChange = (position) => {
    // const updatedCheckedState = checkedState.map((item, index) =>
    //   index === position ? !item : item
    // );

    setCheckedState(position);
    console.log("name:"+permissionData[position].name+ "--type:"+ permissionData[position].Type);
    const permissionObj = 
    {
      id:permissionData[position].id, 
      name: permissionData[position].name,
      type: permissionData[position].Type
    }

    setPermissionRest(permissionObj);
  }



  // this function show all permissions arrary in modal table
  const tableBody = permissionData.map((result, index)=>{
    return( 
            <tr className={`border-b-2 border-gray-200 `} key={result.id}>

              <td>
                {/* <input
                      type="checkbox"
                      checked={ischecked}
                      onChange={toggleCheckboxChange}
                  />  */}
                  <input type='checkbox'
                    // onChange={(e) => toggleCheckboxChange(e, result.name)}
                    // checked={ischecked[result.name]}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />

              </td>
               <td> {result.id} </td>
             
                <td className="w-1/6 py-3 px-3 text-left">{result.name}</td>    
                <td className="w-1/6 py-3 px-3 text-left">{result.Type}</td>  
              
            </tr>
    )
})

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         Permission
        </button> 
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Policy
        </button>
     
      </div>

      <div className="content-tabs border-t-2 border-gray-500">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <button  onClick={handlePerOpenModal} className="px-9 py-2 mt-4 bg-cus-green border-2 border-indigo-500 text-white rounded-md">Add Permissions</button>
           
           <table className="table-fixed w-full my-6">
                 <thead className="bg-gray-100 border-b-2 border-gray-200">
                     <tr>
                         <th className="w-1/6 py-3 px-3 text-left">Policy name</th>
                         <th className="w-1/6 py-3 px-3 text-left">Plicy type</th>
                     </tr>
                 </thead>
                 <tbody>
                     
                     {/* {tableBody} user assigned permission table */}
                    
                       {
                         PerAPI.map((per)=>{
                           return(
                            <>
                            
                            {
                              per.permission.map((item)=>{
                                return(
                                 
                                  <tr className="border-b-2 border-gray-200" key={per.id}>
                                  <td className="w-1/6 py-3 px-3 text-left">{item.name}</td>    
                                  <td className="w-1/6 py-3 px-3 text-left">{item.Type}</td>  
                                  </tr>
                                 
                                )
                               
                              })
                              
                            }
                         </>
                           )
                        
                         })

                       }
                        {/* <td className="w-1/6 py-3 px-3 text-left">{permission[0]}</td>    
                        <td className="w-1/6 py-3 px-3 text-left">{permission}</td>                                             */}
                 
                 </tbody>
             </table>
                     
                 
                 {/* Table end */}

                 <div className="modal-container">
                     <Modal
                     isOpen={PermissionmodalIsOpen}
                     contentLabel=" Modal"
                     overlayClassName="inset-0 fixed bg-gray-900 bg-opacity-80"
                     >
                         <div className="modal-header flex justify-between items-center bg-gray-200 py-3 px-3">
                         <input 
                         onChange={e=> setPermissionSearch(e.target.value)}
                                 value={permissionSearch}
                                 
                                 type="text" name="search" 
                                 placeholder="Search Permision" 
                                 className="border-2 py-3 px-4 w-5/12 inline-block"  
                         />
                         <h6 className="ml-9 mb-0">Showing {permissionData.length} results</h6>
                         </div>
                     <table className="table-fixed w-full my-6">
                         <thead className="bg-gray-100 border-b-2 border-gray-200">
                             <tr>
                                {/* <th></th> */}
                                <th colSpan="2" className="w-1/6 py-3 px-3 text-center">ID</th>
                                <th className="w-1/6 py-3 px-3 text-left">Policy name</th>
                                <th className="w-1/6 py-3 px-3 text-left">Plicy type</th>
                             </tr>
                         </thead>
                         <tbody>
                             {tableBody}
                         </tbody>
                     </table>

                     <button onClick={handlePerCloseModal} className="px-4 py-2 lg:px-9 border-2 border-indigo-500 text-blue-600 rounded-md mx-3">Cancel</button>
                         <button 
                         onClick={onSubmitHandler} 
                         className="px-9 py-2 bg-cus-green border-2 border-indigo-500 text-white rounded-md"
                         >Submit
                         </button>
                     </Modal>
                 </div>
        
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

 
      </div>
    </div>
  );
}

export default Tabs;
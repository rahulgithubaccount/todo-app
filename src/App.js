
import React,{useState} from "react";
import "./App.css"
function App() {
  const [state, setstate] = useState(" ")

  const [data, setdata] = useState([])
 
  const handle =(e)=>{
    setstate(e.target.value)
  }


React.useEffect(() => {
  if(localStorage.getItem ("localtask")){
    const storelist = JSON.parse(localStorage.getItem("localtask"))
    setdata(storelist)
  }
}, [])

  const submit=(e)=>{
    e.preventDefault()
    
    const newdata = {
      id:new Date().getTime(),
      text:state,
  
    }
    setdata([...data].concat( newdata)) 
    setstate("")
 
    localStorage.setItem("localtask",JSON.stringify([...data , newdata]))
    
  }

const deleteit=(id)=>{
  const finalData = [...data].filter(val=>{
    return val.id !==id
  })
setdata(finalData)
}



  return (
<div className=" grid grid-rows-1 justify-center">
<div className="   ">
<h1 className=" text-3xl  text-white font-bold mt-20 mb-16"> React Todo App</h1>

</div>
<div className=" bg-white  w-96 rounded-md  md:w-96  lg:w-96 sm:96">
  <form onSubmit={submit}>
<input type="text" placeholder="Add todo"  value={state} onChange={handle} className="  border-2 pl-3 pt-3 pb-3 mb-3 ml-4 mt-4 w-64 rounded-md focus:border-red-600"  
 /> 
<button className="rounded-md  bg-green-500 text-white pt-3 pb-3 pl-3 pr-3 ml-4 w-20 " > Add</button>
</form>




{
  data.map((value,index) =>{
   return(
     <table className="grid justify-center justify-items-center bg-gray-400 mt-5  mr-3 ml-3 rounded-md mb-3">
       <tr key={index}>

        
        <td width="200px">
     <p  className="mt-2 text-2xl capitalize text-black font-semibold font-mono  ">{value.text} </p></td>
     <td >
     <button  className="w-20   text-white " onClick={()=>deleteit(value.id)}><i className="fa fa-trash-alt  text-red-600 font-bold text-2xl"></i></button>
   
</td>
      
      </tr>
      </table>
   )
     
    
  })
}

</div>
</div>
  
  );
}

export default App;

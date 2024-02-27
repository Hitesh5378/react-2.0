import { useState } from "react"

import './App.css'

function App() {
  const [color, setcolor]=useState("grey")
  return(
    
    <div className="w-full  h-screen duration-200"
     style={{backgroundColor:color}}>
   
      
       
        <div className=" fixed flex flex-wrap justify-center bottom-12  insert-x-0 px-12 ">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl  buttom-12 items-center ">
          <button 
           
           onClick={()=>setcolor("red")}
           style={{backgroundColor:"red"}}
           className="rounded-3xl px-3">
             red
          </button>
          
          <button style={{backgroundColor:"blue"}}
          onClick={()=>setcolor("blue")}
          className="rounded-3xl  px-2">
            blue
          </button>



          <button style={{backgroundColor:"green"}}
           className="rounded-3xl px-2"
          onClick={()=>setcolor("green")}>

            green
          </button>

       
       </div>
       </div>
        
    </div>
    
  )
}

export default App
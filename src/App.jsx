import React, { useState } from "react";


function App() {
  const [color,setcolor] = useState("olive")
 

  return (

  <div className="w-full h-screen flex justify-center items-center duration-200 " 
  style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap 
    bottom-12 insert-x-0 px-1 py-1 ">
    <div className="flex flex-wrap  h-16 w-fit-center
    gap-3 shadow-lg bg-white rounded-2xl px-3 py-3">
      <button onClick={()=>{setcolor("red")}}
       className="outline-none w-20 h-8 rounded-xl" 
      style={{backgroundColor:"red"}}
      >RED</button>
       <button onClick={()=>{setcolor("purple")}}
        className="outline-none  w-20 h-8 rounded-xl" 
      style={{backgroundColor:"purple"}} >PURPLE</button>
      <button onClick={()=>{setcolor("rgb(22 163 74")}}
      className="outline-none bg-green-600 w-20 h-8 rounded-xl" 
      >GREEN</button>
      <button  onClick={()=>{setcolor("rgb(96,165,250)")}}
       className="outline-none bg-blue-400 w-20 h-8 rounded-xl" 
      >BLUE</button>
      <button onClick={()=>{setcolor("yellow")}}
       className="outline-none bg-yellow-500 w-20 h-8 rounded-xl" 
      >YELLOW</button>
      <button   onClick={()=>{setcolor("rgb(236,72,153)")}}
       className="outline-none bg-pink-500 w-20 h-8 rounded-xl" 
      >PINK</button>
      <button  onClick={()=>{setcolor("black")}}
      className="outline-none bg-black w-20 h-8 rounded-xl text-white" 
      >BLACK</button>
      <button  onClick={()=>{setcolor("rgb(255,255,255)")}}
      className="outline-none bg-white w-20 h-8 rounded-xl shadow-2xl border-2 border-black" >
      WHITE </button>
    </div>
   </div>
  </div>

  )
}

export default App;


import { useAtom } from "jotai";
import { useZustand } from "./store/zustand"
import { dataAtom } from "./store/jotai";
import { useSelector } from "react-redux";
import { useState } from "react";
import DialogAdd from "./components/DialogAdd";

export default function App() {
  const dataZ = useZustand(state=>state.data)
  const [dataJ] = useAtom(dataAtom)
  const dataR = useSelector((state)=>state.data)
   
  const [open,setOpen] = useState(false)
  
   

  
  
  return (
    <div>
    {/* <DialogAdd open={open} setOpen={setOpen}/> */}
   {/* <button onClick={()=>setOpen(true)}>add</button> */}
    <div >
      {
        dataZ.map((el)=>{
          return <div key={el.id}>
            <h1>{el.name}</h1>
            <img  src={el.img} alt="" />
          </div>
        })
      }
      {
        dataJ.map((el)=>{
          return <div key={el.id}>
            <h1>{el.email}</h1>
            <h1>{el.status?'online':'offline'}</h1>
          </div>
        })
      }
      {
        dataR.map((el)=>{
          return <div key={el.id}>
            <h1>{el.phone}</h1>
            <img  src={el.surname} alt="" />
          </div>
        })
      }
    </div>
  
    </div>
  )
}
import { useAtom } from "jotai"
import { useDispatch } from "react-redux"
import { AddUserJ } from "../store/jotai"
import { useZustand } from "../store/zustand"

export default function DialogAdd({open,setOpen}) {
  const dispatch = useDispatch()
  const {Adduser} = useZustand()
  const [,AddUserJ] = useAtom(AddUserJ)
  function add(e) {
    e.preventDefault()
    const newobj = {
      name:e.tager.name.value,
      img:e.tager.img.value,
      email:e.tager.img.value,
      phone:e.tager.img.value,
    }
    AddUserJ(newobj)
    dispatch(newobj)
    Adduser(newobj)
    
  }
  return (
    <dialog open={open}>
      <p>DialogAdd</p>
      <form action="">
        <input type="text" name="name" id="" />
        <input type="text" name="img" id="" />
        <input type="text" name="email" id="" />
        <input type="text" name="phone" id="" />
        <select name="status" id=""></select>
      </form>
    </dialog>
  )
}

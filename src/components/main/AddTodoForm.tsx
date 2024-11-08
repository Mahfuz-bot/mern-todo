import { useContext, useState } from "react"
import { TaskDispatchContext } from "../../context/context"
import axios from "axios"

function AddTodoForm() {
   const [text, setText] = useState("")

   const dispatch = useContext(TaskDispatchContext)

   const handleAdd = async (e: React.FormEvent) => {
      e.preventDefault()
      if (text) {
         await axios.post("http://localhost:3000/api/add-todo", {
            title: text,
         })
         dispatch({
            type: "add_task",
            payload: {
               title: text,
            },
         })
         setText("")
      }
   }

   return (
      <form className="row-[1/2]" onSubmit={handleAdd}>
         <h2 className="font-medium text-center text-[#231d15]">Add Todo</h2>
         <input
            type="text"
            value={text}
            className="h-[45px] border outline-black/[12%] border-black/[12%] rounded-md my-2 text-[14px] block w-full px-4"
            onChange={(e) => setText(e.target.value)}
         />
         <button
            className={`btn ${
               text ? "" : "pointer-events-none cursor-default bg-slate-500"
            }`}
            type="submit"
            disabled={text ? false : true}
         >
            Add to List
         </button>
      </form>
   )
}

export default AddTodoForm

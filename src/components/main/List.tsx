import { useContext, useRef, useState } from "react"
import { Data } from "../../assets/data/datas"
import { TaskDispatchContext } from "../../context/context"
import axios from "axios"

function List({
   children,
   item,
   isEditing,
   setIsEditing,
}: {
   children: React.ReactNode
   item: Data
   isEditing: string
   setIsEditing: React.Dispatch<React.SetStateAction<string>>
}) {
   const url = "todo-backend.up.railway.app"
   const dispatch = useContext(TaskDispatchContext)
   const [inputValue, setInputValue] = useState(item.title)

   const handleDelete = async (passedId: string) => {
      await axios.delete(`${url}/api/delete-todo/${passedId}`)
      dispatch({
         type: "delete",
         payload: {
            id: passedId,
         },
      })
   }

   const handleChecked = async (passedId: string) => {
      await axios.put(`${url}/api/update-todo/${passedId}`, {
         isCompleted: !item.isCompleted,
      })
      dispatch({
         type: "update",
         payload: {
            id: passedId,
            isCompleted: !item.isCompleted,
         },
      })
   }

   const handleUpdate = async (passedId?: string) => {
      try {
         const response = await axios.put(
            `${url}/api/update-todo/${passedId}`,
            {
               title: inputValue,
               isCompleted: item.isCompleted,
            }
         )
         console.log(inputValue)
         console.log(response.data)
         dispatch({
            type: "update",
            payload: {
               id: passedId,
               title: inputValue,
            },
         })
      } catch (error) {
         console.error(error)
      }
   }

   const handleEdit = (passedId: string) => {
      setIsEditing(passedId)
      setTimeout(() => inputRef.current?.focus(), 0)
   }

   const handleSave = () => {
      setIsEditing("")
   }

   const inputRef = useRef<HTMLInputElement>(null)

   return (
      <>
         {isEditing === item._id ? (
            <li className="todoList">
               <input
                  className="w-10/12"
                  type="text"
                  ref={inputRef}
                  defaultValue={item.title}
                  onChange={(e) => setInputValue(e.target.value)}
                  onBlur={() => handleUpdate(item._id)}
               />
               <aside>
                  <button type="button" onClick={handleSave}>
                     ✅
                  </button>
               </aside>
            </li>
         ) : (
            <li className="todoList">
               <span
                  onClick={() => handleChecked(item._id)}
                  className={item.isCompleted ? "line-through text-[#ccc]" : ""}
               >
                  {children}
               </span>
               <aside className="flex gap-4">
                  <button
                     type="button"
                     onClick={() => handleEdit(item._id)}
                     disabled={isEditing !== "" && isEditing !== item._id}
                  >
                     📜
                  </button>
                  <button type="button" onClick={() => handleDelete(item._id)}>
                     ❌
                  </button>
               </aside>
            </li>
         )}
      </>
   )
}

export default List

import { useContext, useEffect, useState } from "react"
import { Data } from "../../assets/data/datas"
import List from "./List"
import { TaskContext } from "../../context/context"

function TodoList() {
   const [isEditing, setIsEditing] = useState<string>("")
   const todos = useContext(TaskContext) as Data[]
   console.log(todos)
   const [visibleItems, setVisibleItems] = useState<number>(0)

   useEffect(() => {
      if (visibleItems < todos.length) {
         const timeout = setTimeout(() => {
            setVisibleItems((prev) => prev + 1)
         }, 300)
         return () => clearTimeout(timeout)
      }
   }, [visibleItems, todos.length])
   return (
      <ul className="overflow-y-scroll ">
         {todos.slice(0, visibleItems).map((item: Data) => (
            <List
               key={item._id}
               item={item}
               isEditing={isEditing}
               setIsEditing={setIsEditing}
            >
               {item.title}
            </List>
         ))}
      </ul>
   )
}

export default TodoList

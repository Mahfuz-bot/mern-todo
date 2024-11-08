import { useContext, useState } from "react"
import { Data } from "../../assets/data/datas"
import List from "./List"
import { TaskContext } from "../../context/context"

function TodoList() {
   const [isEditing, setIsEditing] = useState<string>("")
   const todos = useContext(TaskContext) as Data[]

   return (
      <ul className="overflow-y-scroll ">
         {todos.map((item: Data) => (
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

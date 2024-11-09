import { useContext } from "react"
import { TaskContext } from "../../context/context"
import { Data } from "../../assets/data/datas"

function Counter() {
   const todos = useContext(TaskContext) as Data[]
   console.log(todos)
   return (
      <p>
         <strong>
            {todos.reduce((acc, todo) => (todo.isCompleted ? acc + 1 : acc), 0)}
         </strong>
         /{todos.length} todos completed
      </p>
   )
}

export default Counter

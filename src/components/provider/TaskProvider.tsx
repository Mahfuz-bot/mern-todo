import { useReducer } from "react"
import { TaskContext, TaskDispatchContext } from "../../context/context"
import { dataSet, Data } from "../../assets/data/datas"

export function TaskProvider({ children }: { children: React.ReactNode }) {
   const [todoData, dispatch] = useReducer(taskReducer, dataSet)
   return (
      <TaskContext.Provider value={todoData}>
         <TaskDispatchContext.Provider value={dispatch}>
            {children}
         </TaskDispatchContext.Provider>
      </TaskContext.Provider>
   )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function taskReducer(state: Data[], action: any) {
   switch (action.type) {
      case "add_task": {
         if (action.payload && action.payload.title) {
            return [...state, action.payload]
         }
         return state
      }
      case "delete": {
         return state.filter((t) => t._id !== action.payload.id)
      }
      case "update": {
         return state.map((todo) =>
            todo._id === action.payload.id
               ? { ...todo, ...action.payload }
               : todo
         )
      }
      default:
         return state
   }
}

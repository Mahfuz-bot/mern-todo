import { useEffect, useReducer } from "react"
import { TaskContext, TaskDispatchContext } from "../../context/context"
import { Data } from "../../assets/data/datas"
import axios from "axios"

export function TaskProvider({ children }: { children: React.ReactNode }) {
   const [todoData, dispatch] = useReducer(taskReducer, [])

   const url = "https://todo-backend.up.railway.app"
   useEffect(() => {
      const fetchTodos = async () => {
         try {
            const response = await axios.get(`${url}/api/get-todos`)

            dispatch({
               type: "set_initial_data",
               payload: response.data.data,
            })
         } catch (error) {
            console.error("Error fetching todos:", error)
         }
      }

      fetchTodos()
   }, [])
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
      case "set_initial_data": {
         return action.payload
      }
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

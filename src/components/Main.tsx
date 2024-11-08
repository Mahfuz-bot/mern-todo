import Header from "./main/Header"
import TodoList from "./main/TodoList"
import Sidebar from "./main/Sidebar"
import { TaskProvider } from "./provider/TaskProvider"

function Main() {
   // const [todos, setTodos] = useState(dataSet)

   return (
      <main className="main">
         <TaskProvider>
            <Header />
            <TodoList />
            <Sidebar />
         </TaskProvider>
      </main>
   )
}

export default Main

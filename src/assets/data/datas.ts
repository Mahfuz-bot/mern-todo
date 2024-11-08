import axios from "axios"

export interface Data {
   _id: string
   title: string
   isCompleted: boolean
}

export const getTodos = async () => {
   try {
      const response = await axios.get("http://localhost:3000/api/get-todos")
      // console.log(response.data)

      return response.data.data
   } catch (error) {
      console.log(error)
   }
}
export const dataSet: Data[] = await getTodos()

// export const dataSet: Data[] = [
//    {
//       _id: "1",
//       title: 'Task 1',
//       isCompleted: true
//    },
//    {
//       _id: "2",
//       title: 'Task 2',
//       isCompleted: false
//    },
//    {
//       _id: "3",
//       title: 'Task 3',
//       isCompleted: false
//    },
// ]

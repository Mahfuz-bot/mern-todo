import express from "express"
import { handleResError } from "../utils/ResError.js"
import { Todo } from "../model/todo.js"

const todoRouter = express.Router()

todoRouter.route("/add-todo").post(async (req, res) => {
   try {
      const { title } = req.body
      if (!title) return handleResError(res, 400, "Title is required")
      const todo = new Todo({ title })
      await todo.save()
      return res
         .status(200)
         .json({ message: "Todo added successfully", data: todo })
   } catch (error) {
      console.error(error)
      return handleResError(res, 500, "Something went wrong", error)
   }
})

todoRouter.route("/get-todos").get(async (req, res) => {
   try {
      const todos = await Todo.find()
      return res
         .status(200)
         .json({ message: "Todo fetched successfully", data: todos })
   } catch (error) {
      console.error(error)
      return handleResError(res, 500, "Something went wrong", error)
   }
})

todoRouter.route("/update-todo/:id").put(async (req, res) => {
   try {
      const { id } = req.params
      const { title, isCompleted } = req.body

      if (typeof isCompleted !== "boolean")
         return handleResError(res, 400, "isCompleted must be a boolean")

      const updatedTodo = await Todo.findByIdAndUpdate(
         id,
         { title, isCompleted },
         { new: true, runValidators: true }
      )

      if (!updatedTodo) return handleResError(res, 404, "Todo not found")

      return res
         .status(200)
         .json({ message: "Todo updated successfully", data: updatedTodo })
   } catch (error) {
      console.error(error)
      return handleResError(res, 500, "Something went wrong", error)
   }
})

todoRouter.route("/delete-todo/:id").delete(async (req, res) => {
   try {
      const { id } = req.params
      const deletedTodo = await Todo.findByIdAndDelete(id)
      if (!deletedTodo) return handleResError(res, 404, "Todo not found")
      return res.status(200).json({ message: "Todo deleted successfully" })
   } catch (error) {
      console.error(error)
      return handleResError(res, 500, "Something went wrong", error)
   }
})

export { todoRouter }

import express from "express"
import cors from "cors"
import { todoRouter } from "./router/todoRouter.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
   cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      // allowedHeaders: ["Content-Type", "Authorization"],
   })
)

app.use("/api", todoRouter)

export { app }

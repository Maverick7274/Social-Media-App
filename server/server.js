import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import postRoutes from "./routes/postsRoutes.js"

dotenv.config()

connectDB()

const app = express()
app.use(express.json())

app.use(cors())


const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server running on port : ${port}`)
})


app.use("/posts", postRoutes)


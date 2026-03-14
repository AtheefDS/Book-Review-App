const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/bookreview")

.then(()=>console.log("Database Connected"))
.catch(err=>console.log(err))

const BookSchema = new mongoose.Schema({
title:String,
author:String,
review:String
})

const Book = mongoose.model("Book",BookSchema)

app.post("/addbook",async(req,res)=>{

const book = new Book(req.body)

await book.save()

res.send("Book Added")

})

app.get("/books",async(req,res)=>{

const books = await Book.find()

res.json(books)

})

app.listen(5000,()=>{

console.log("Server running on port 5000")

})

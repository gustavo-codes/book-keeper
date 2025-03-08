const express = require('express')
const app = express()

const booksRouter = require('./routes/books')

const PORT = 3000

app.use(express.json())

app.use("/books",booksRouter)

// //Middleware
// const resquestTime = function (req,res,next){
//     req.requestTime = Date.now()
//     next()
// }

// app.use(resquestTime)

app.get('/',(req,res)=>{
    res.send(req.ip)
})

app.listen(PORT, ()=> {
    console.log(`running on port ${PORT}`)    
})


// db.any('SELECT * FROM books;')
//   .then((data) => {
//     console.log('DATA:', data)
//   })
//   .catch((error) => {
//     console.log('ERROR:', error)
//   })


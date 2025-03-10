const pool = require('../db')
const queries = require('../queries')

const getBooks = (req,res)=>{
    pool.query(queries.getBooks,(error,result)=>{
        if(error) throw error;
        res.send(result.rows)
    })
}

const getBookById = (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query(queries.getBookById,[id],(error,result)=>{
        if(error) throw error;
        res.send(result.rows)
    })
}

const addBook = (req,res)=>{
    const {name, year, author } = req.body;

    console.log(req.body)

    pool.query(queries.checkIfBookExists,[name],(error,result)=>{
        if(result.rows.length){
            res.send("Book Already Exists")
        }else{
            pool.query(queries.addBook,[name,year,author],(error,result)=>{
                if(error) throw error;
                res.status(201).json("Book Created Successfully!")
            })
        }
    })
}

const deleteBook = (req,res)=>{
    const id = parseInt(req.params.id)
    console.log("deleted " + id)

    pool.query(queries.getBookById,[id],(error,result)=>{
        const notFound = !result.rows.length
        if(notFound){ 
            res.send("Book not found!")
        }else{
            pool.query(queries.deleteBook,[id],(error,result)=>{
                if(error) throw error;
        
                res.status(200).send("Book deleted successfully!")
            })
        }
    })

    

}

const updateBook = (req,res)=>{
    const id = parseInt(req.params.id)
    const { name } = req.body

    pool.query(queries.getBookById,[id],(error,result)=>{
        const notFound = !result.rows.length
        if(notFound){ 
            res.send("Book not found!")
        }else{
            pool.query(queries.updateBook,[name,id],(error,result)=>{
                if (error) throw error;
                res.status(200).send("Book update successuly!")
            })
        }
    })

}

module.exports ={
    getBooks,
    getBookById,
    addBook,
    deleteBook,
    updateBook
}
import { useState, useEffect } from 'react'
import BookCard from './BookCard'
import AddForm from './AddForm'
const URL = "http://localhost:3000/books"
const POST = "http://localhost:3000/books"

export default function BookList(){
    const [bookList, setBookList] = useState([])
    const [book,setBook] = useState("")
    const [title,setTitle] = useState("")
    const [reading,setReading] = useState(false)
    const [font,setFont] = useState(20)

    const handleDelete = (id) => {
        setBookList((prevBookList) => prevBookList.filter((book) => book.id !== id));
    }

    const handleClick = async (event) =>{
        event.preventDefault()
        let id = 0
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        data.year = parseInt(data.year)

        console.log(data)
        const content = await fetch(POST,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
              },
            body:JSON.stringify(data)
        })

        content.json().then((content)=>{
            data.id=content[0].id;
            setBookList([...bookList,{
                ...data
            }])
        })


        // if(!bookList.length){
        //     setBookList([data])
        // }
        // setBookList([...bookList,{
        //     ...data,
        //     id:bookList[bookList.length - 1].id + 1 //Mudar isso para que o back end retorne o id correto do objeto criado
        // }])
    }

    const openBook = (id)=>{
        setReading(true)
        setBook((bookList.filter((book)=>book.id==id))[0].content)
        setTitle((bookList.filter((book)=>book.id==id))[0].name)
    }
    

    useEffect(()=>{
    const fetchData = async ()=> {
        const content = await fetch(URL)
        
        content.json().then(content =>{
            setBookList(content)
        })
        

        // content.json().then(json =>{
        // setBookList(json.map(book=>
        //     <li key={book.id}>
        //     <BookCard name={book.name} year={book.year} author={book.author}/>
        //     </li>
        // ))
        // }) 
    }
    fetchData()
    },[])


    return (
    <div className='bookList'>
       {reading?
       <div className='book'>
            <div className='controls'>
                <button onClick={()=>{setReading(false)}}>x</button>
                <button onClick={()=>{setFont(font-2)}}>-</button>
                <button onClick={()=>{setFont(font+2)}}>+</button>
            </div>
            <div className='content'>
                <h1>{title}</h1>
                <p style={{fontSize:font}}>{book}</p>
            </div>
       </div>:
       <></>}
        <ul className='list'>
        {bookList.map(book=>
             <li key={book.id}>
                <BookCard name={book.name} year={book.year} author={book.author} id = {book.id} deleteSignal={handleDelete} openSignal={openBook}/>
             </li>
        )}
         <AddForm  handleClick = {handleClick} handleForm={null}/>
        </ul>
    </div>
    )
}
import { useState, useEffect } from 'react'
import BookCard from './BookCard'
import AddForm from './AddForm'
const URL = "http://localhost:3000/books"
const POST = "http://localhost:3000/books"

export default function BookList(){
    const [bookList, setBookList] = useState([])
    const [count,setCount] = useState(0)

    const handleDelete = (id) => {
        setBookList((prevBookList) => prevBookList.filter((book) => book.id !== id));
    }

    const handleClick = (event) =>{
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        data.year = parseInt(data.year)

        console.log(data)
        fetch(POST,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
              },
            body:JSON.stringify(data)
        })

        setBookList([...bookList,{
            ...data,
            id:bookList[bookList.length - 1].id + 1
        }])

        console.log(bookList)
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
        <AddForm  handleClick = {handleClick} handleForm={null}/>
        <ul>
        {bookList.map(book=>
             <li key={book.id}>
                <BookCard name={book.name} year={book.year} author={book.author} id = {book.id} deleteSignal={handleDelete}/>
             </li>
        )}
        </ul>
    </div>
    )
}
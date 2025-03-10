import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookCard from './components/BookCard'
import BookList from './components/BookList'

const logged = true
const URL = "http://localhost:3000/books"

function NotFound(){
  return (
    <>
      <h1>not found</h1>
    </>
  )
}

function MyButton({count,onClick}) {
  return (
    <button className = "button" onClick={onClick}>
      I'm a beatiful button {count}
    </button>
  );
}

function App() {
  const [bookList, setBookList] = useState([])

  const [count, setCount] = useState(0)
  function handleClick(){
    setCount(count + 1)
  }

  return (
    <div>
      <header>
        <img src='./public/books.svg' width="50px"></img>
        <h1>Book Keeper</h1>

      </header>
        <BookList/>
    </div>
  )
}

export default App

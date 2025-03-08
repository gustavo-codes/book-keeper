import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const logged = true

const book = {
  cape : "https://upload.wikimedia.org/wikipedia/commons/e/e8/King-James-Version-Bible-first-edition-title-page-1611.png",
  name : "Bible - KJV",
  year : 1611,
  author : "God"
};

const people = [
  {id:1, name:"Cesar", isFine:false},
  {id:2, name:"Gustavo", isFine:true},
  {id:3, name:"Pedro", isFine:true}
];


function ListOfPeople(){
  const listPeople = people.map(person=>
    <li key={person.id}
        style={{color: person.isFine?'green' : 'red'}}
    >
      {person.name}
    </li>
  )

  return (
    <ul>
      {listPeople}
    </ul>
  )
}


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

function Book(){
  return(
    <>
      <img
        className='bookCape'
        src={book.cape}
      />
      <h2>{book.name}</h2>
      <p>{book.year}</p>
      <p><b>{book.author}</b></p>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
    setCount(count + 1)
  }

  return (
    <div>
    <h1>Hello World!</h1>
      <MyButton count = {count} onClick={handleClick}/><br/>
      <MyButton count = {count}  onClick={handleClick}/><br/>
      {logged ?(<Book/>):(<NotFound/>)}
      <ListOfPeople/>
    </div>
  )
}

export default App

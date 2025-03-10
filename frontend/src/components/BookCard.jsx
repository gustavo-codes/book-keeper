import { useState } from 'react'
import '../App.css'


export default function BookCard({name, year,author,id,deleteSignal}){
    const handleDelete = (event) =>{

        const userConfirmed = confirm('Deseja mesmo deletar o livro?');

        if (userConfirmed) {
            console.log('O usuário clicou em OK.');
            deleteSignal(id)
            fetch(`http://localhost:3000/books/${id}`,{
                method:"DELETE",
                headers: {
                    'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
                },
            })
        } else {
            console.log('O usuário clicou em Cancelar.');
        }


    }

    return (
        <div className='bookCard'>
            <h2>{id}</h2>
            <h3>{name}</h3>
            <p>{author} - {year}</p>
            <button onClick={handleDelete}>X</button>
            <button>Edit</button>
        </div>
    )
}
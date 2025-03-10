import { useState } from 'react'
import '../App.css'
import AddForm from './AddForm'


export default function BookCard({name, year,author,id,deleteSignal,openSignal}){
    const [editing, setEdition] = useState(false)
    const [showOptions, setShowOptions] = useState(false)

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

    const handleEdit = (e)=>{
        setEdition(!editing)
        if(editing) setShowOptions(!setShowOptions)
    }

    const handleClick = (e)=>{
        setEdition(!editing)
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = formData.get("name")
        

        const userConfirmed = confirm('Deseja mesmo editar o livro?');

        if (userConfirmed) {
            console.log('O usuário clicou em OK.');

            fetch(`http://localhost:3000/books/${id}`,{
                method:"PUT",
                headers: {
                    'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
                },
                body:JSON.stringify({name:data})
                
            })
        } else {
            console.log('O usuário clicou em Cancelar.');
        }
    }

    const handleOpen = () =>{
        openSignal(id)
    }
    
    return (
        <div className='bookCard'>
            <div className='bookCardItem idContainer'>
                <h2>{id}</h2>
            </div>
            <div className='bookCardItem infoContainer' onClick={handleOpen}>
            {!editing?<h3>{name}</h3>:
                <form onSubmit={handleClick}>
                    <label>Novo nome</label><br/>
                    <input name='name' type='text' placeholder='insira o novo nome'></input>
                    <button>send</button>
                </form>
            }
                <p>{author} - {year}</p>
            </div>
            <div className='bookCardItem optionContainer'>
                {showOptions?
                <div>
                    <button onClick={handleDelete}>X</button>
                    <button onClick={handleEdit}>Edit</button>
                </div>
                :<button className="button" onClick={()=>setShowOptions(!showOptions)} ><img src='./public/pencil.svg' width='20px'></img></button>}          
            </div>
        </div>
    )
}
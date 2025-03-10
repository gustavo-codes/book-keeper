import { useState } from "react";

export default function AddForm({handleClick, handleForm}){
    const [adding,setAdding] = useState(false)

    const handleAdding = (event) => {
        setAdding(!adding)
    }

    return(
        <div>
        {adding?
            <form className="form bookCard" onSubmit={handleClick} method="POST">
                <label>Name</label>
                <input type="text" name="name"/>
                <label>Author</label>
                <input type="text" name="author"/>
                <label>Year</label>
                <input type="number" name="year"/>
                <label>Content</label>
                <textarea name="content"></textarea>
                <button>Send</button><button onClick={handleAdding}>X</button>
            </form>:
            <div className=" addCard bookCard">
                <button onClick={handleAdding}>+</button>
            </div>}
        </div>
    )
}
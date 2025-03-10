import { useState } from "react";

export default function AddForm({handleClick, handleForm}){
    return(
        <form className="form" onSubmit={handleClick} method="POST">
            <label>Name</label>
            <input type="text" name="name"/>
            <label>Author</label>
            <input type="text" name="author"/>
            <label>Year</label>
            <input type="number" name="year"/>
            <button>Send</button>
        </form>
    )
}
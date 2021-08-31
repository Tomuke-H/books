import React, { useState } from 'react';

const BookForm = (props) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('submitted')
        props.func({ isbn: Math.random(), title, author, genre })
    };

    return (
        <div>
            <h1>New Book</h1>
            <form onSubmit={handleSubmit}>
                <p>Title</p>
                <input title={title} onChange={(event) => setTitle(event.target.value)}/>
                <p>Author</p>
                <input author={author} onChange={(event) => setAuthor(event.target.value)}/>
                <p>Genre</p>
                <input genre={genre} onChange={(event) => setGenre(event.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default BookForm;
import React, { useState } from 'react';

const BookForm = (props) => {
    const {book, updateBook, addBook} = props
    const [title, setTitle] = useState(book ? book.title : '')
    const [author, setAuthor] = useState(book ? book.author: '')
    const [genre, setGenre] = useState(book ? book.genre : '')
    const [description, setDescription] = useState(book ? book.description : '')
    const [publisher, setPublisher] = useState(book ? book.publisher : '')

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('submitted')
        if(book){
            updateBook({ isbn:book.isbn, title, author, genre, description, publisher})
        }else {
            addBook({ isbn: Math.random(), title, author, genre, description, publisher })
        }
    };

    return (
        <div>
            <h1>{book? "Update" : "New"} Book</h1>
            <form onSubmit={handleSubmit}>
                <p>Title</p>
                <input value={title} onChange={(event) => setTitle(event.target.value)}/>
                <p>Author</p>
                <input value={author} onChange={(event) => setAuthor(event.target.value)}/>
                <p>Genre</p>
                <input value={genre} onChange={(event) => setGenre(event.target.value)}/>
                <p>Description</p>
                <textarea value={description} onChange={(event) => setDescription(event.target.value)}/>
                <p>Publisher</p>
                <input value={publisher} onChange={(event) => setPublisher(event.target.value)}/>
                <button type="submit">{book ? "Update" : "Add"}</button>
            </form>
        </div>
    )
}

export default BookForm;
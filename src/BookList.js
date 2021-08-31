import React, {useState} from 'react';
import BookForm from './BookForm';
import "./BookList.css"

const BookList = (props) => {
    const {books, deleteBook, updateBook} = props
    const [showForm, setShowForm] = useState(false)
    const renderBooks = () => {
        return books.map(b => {
            return (
                <div key={b.isbn} className="book">
                    <div className="bookInfo">
                        <h2>{`Title: ${b.title}`}</h2>
                        <h3>{`By: ${b.author}`}</h3>
                        <h3>{`Publisher: ${b.publisher}`}</h3>
                        <h5>{`Genre: ${b.genre}`}</h5>
                        <h5>{`Description: ${b.description}`}</h5>
                        <h6>{`ISBN: ${b.isbn}`}</h6>
                        <button onClick={() => deleteBook(b.isbn)}>Delete</button>
                    </div>
                    <div>
                        {showForm && <BookForm book={b} updateBook={updateBook} setShowForm={setShowForm}/>}
                    </div>
                </div>
            )
        })
    }
    return (
        <div>
            <h1>BookList</h1>
            <button className="editButton" onClick={()=> setShowForm(!showForm)}>Toggle Edit Mode</button>
            {renderBooks()}
        </div>
    )
}

export default BookList;
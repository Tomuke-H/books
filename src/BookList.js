import React from 'react';
import BookForm from './BookForm';

const BookList = (props) => {
    const {books} = props
    const renderBooks = () => {
        return books.map(b => {
            return (
                <div key={b.isbn}>
                    <h2>{`Title: ${b.title}`}</h2>
                    <h3>{`By: ${b.author}`}</h3>
                    <h3>{`Publisher: ${b.publisher}`}</h3>
                    <h5>{`Genre: ${b.genre}`}</h5>
                    <h5>{`Description: ${b.description}`}</h5>
                    <h6>{`ISBN: ${b.isbn}`}</h6>
                    <button onClick={() => props.deleteBook(b.isbn)}>Delete</button>
                    <BookForm book={b} updateBook={props.updateBook}/>
                </div>
            )
        })
    }
    return (
        <div>
            <h1>BookList</h1>
            {renderBooks()}
        </div>
    )
}

export default BookList;
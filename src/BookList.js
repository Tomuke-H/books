import React from 'react';

const BookList = (props) => {
    const {books} = props
    const renderBooks = () => {
        return books.map(b => {
            return (
                <div>
                    <h2>{`Title: ${b.title}`}</h2>
                    <h3>{`By: ${b.author}`}</h3>
                    <h3>{`Genre: ${b.genre}`}</h3>
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
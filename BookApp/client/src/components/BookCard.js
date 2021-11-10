import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    const  book  = props.book;

    return(
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h6>Title:  { book.title }<Link to={`/show-book/${book._id}`}>
                    <p>(click to edit details)</p>
                    </Link></h6>
                <h3>Author:{book.author}</h3>
                <p>Description:{book.description}</p>
                <h2>
                      
                </h2>
            </div>
        </div>
    )
};

export default BookCard;
import React from 'react';
import './styles.css';

export function favoritesDisplay({ favList }) {
    //  JS here
    return (
        <div className="joke-display">
            <p className="quote">{favList}</p>
            {/* <p className="quote-owner">- Quoter</p> */}

        </div>
    )
}
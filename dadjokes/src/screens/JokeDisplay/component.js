import React from 'react';
import './styles.css';

export function JokeDisplay({ joke }) {
    //  JS here
    return (
        <div className="joke-display">
            <p className="quote">{joke}</p>
            {/* <p className="quote-owner">- Quoter</p> */}

        </div>
    )
}
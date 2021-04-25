import React from 'react';
import './styles.css';

export function favoritesDisplay({ favList }) {
    //  JS here
    return (
        <div className="joke-display">
            <div>
                <p className="quote">{favList}</p>
            </div>
            <div className="joke-engagement">
                <div className="copy">
                    <img src="src/screens/favoritesDisplay/svgs/clipboard.svg" alt="" />
                    <p>Copy</p>
                </div>
                <div className="favorite">
                    <img src="src/screens/favoritesDisplay/svgs/star.svg" alt="" />
                    <p>Favorite</p>
                </div>
            </div>
        </div>
    )
}
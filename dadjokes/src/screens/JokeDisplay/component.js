import React from 'react';
import './styles.css';

export function JokeDisplay({ joke }) {
    // if (joke) {
    //  render joke-engagement   
    // }
    // function copyToClipboard() {
    //     navigator.clipboard.writeText(joke)
    // }
    function addToFavorites() {
        let favs = JSON.parse(localStorage.getItem('favs'));

        console.log(favs);

        if (!favs) {
            favs = [];
        }

        favs.push(joke);
        

        localStorage.setItem('favs', JSON.stringify(favs));
    }

    return (
        <div className="joke-display">
            <div>
                <p className="quote">{joke}</p>
            </div>
            <div className="joke-engagement">
                <div className="copy" onClick={() => navigator.clipboard.writeText(joke)}>
                    <img src="src/screens/favoritesDisplay/svgs/clipboard.svg" alt="" />
                    <p>Copy</p>
                </div>
                <div className="favorite" onClick={addToFavorites}>
                    <img src="src/screens/favoritesDisplay/svgs/star.svg" alt="" />
                    <p>Favorite</p>
                </div>
            </div>
        </div >
    )
}
import React, { useState } from 'react';

import { JokeDisplay } from '../JokeDisplay/component'
import { JokeGenerator } from '../JokeGenerator/component'
import './styles.css';


export function FavoritesComponent() {

    const [joke, setJoke] = useState('')
    //  JS here
    return (

        <div className="main-container">
            <div className="left-column">
                <h1>Favorite Jokes</h1>
            </div>
            <div className="right-column">
            </div>

        </div>
    )
}

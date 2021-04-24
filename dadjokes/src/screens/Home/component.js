import React, { useState } from 'react';

import { JokeDisplay } from '../JokeDisplay/component'
import { JokeGenerator } from '../JokeGenerator/component'
import './styles.css';


export function HomeComponent() {

    const [joke, setJoke] = useState('')

    console.log(joke, 'home-component');
    //  JS here
    return (

        <div className="main-container">
            <div className="left-column">
                <JokeGenerator setJoke={setJoke} />
            </div>
            <div className="right-column">
                <JokeDisplay joke={joke} />
            </div>

        </div>
    )
}

import React from 'react';

import { JokeDisplay } from '../JokeDisplay/component'
import { JokeGenerator } from '../JokeGenerator/component'
import './styles.css';


export function HomeComponent() {
    //  JS here
    return (
        
        <div className="main-container">
            <div className="left-column">
                <JokeGenerator />
            </div>
            <div className="right-column">
                <JokeDisplay />
            </div>

        </div>
    )
}

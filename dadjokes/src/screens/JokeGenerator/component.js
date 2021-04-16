import React from 'react';
import './styles.css';
import { Button } from '../../components/Button'

export function JokeGenerator() {
    //  JS here
    return (
        <div class="joke-generator">
            <div className="body"><h1>Dad Joke Generator</h1></div>
            <Button text="Generate Joke" onClick={() => console.log('YEET')} />
        </div>
    )
}

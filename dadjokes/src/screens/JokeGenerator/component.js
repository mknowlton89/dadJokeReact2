import React, { useState } from 'react';
import './styles.css';
import { Button } from '../../components/Button'

export function JokeGenerator({ setJoke }) {

    const [componentState, setComponentState] = useState('complete')
    //  JS here
    async function fetchJoke() {
        setComponentState('loading');
        try {
            const jokes = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const joke = await jokes.json();
            setJoke(joke.joke);
            setComponentState('complete');

        } catch (err) {
            console.log(err);
            setComponentState('error');
        }
    }

    return (
        <div className="joke-generator">
            <div className="body"><h1>Dad Joke Generator</h1></div>
            <Button text="Generate Joke" onClick={fetchJoke} disabled={componentState === 'loading'} />
            {componentState === "error" && <p className="error">Sorry, something when wrong. Please try again.</p>}
        </div>
    )
}

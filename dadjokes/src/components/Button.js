import React from 'react'
import './styles.css';

export function Button({onClick, text='Hi'}) {
    // JS here if need
    return (
        <button onClick={onClick}>{text}</button>
    )
}
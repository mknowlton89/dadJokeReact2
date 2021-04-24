import React from 'react'
import './styles.css';

export function Button({ onClick, text = 'Hi', disabled = false }) {
    // JS here if need
    return (
        <button onClick={onClick} disabled={disabled}>{text}</button>
    )
}
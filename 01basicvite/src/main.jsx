import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>My Custome myApp</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="http://google.com" target='_blank'>Visit Google</a>
)

const areactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: "_blank"},
    'click to visit google'
)

createRoot(document.getElementById('root')).render(
    <App />
    // areactElement
)

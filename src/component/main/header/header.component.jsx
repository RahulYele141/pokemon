import React from 'react'
import './header.style.css'

const Header = () => {
    return (
        <div >
            <div className='header'>
                <h1 className='logo'>Pokédex</h1>
                <div className='vertical'></div>
                <h3 className='tagline'>Search for any Pokémon that exists on the planet </h3>
            </div>
        </div>
    )
}

export default Header
import React from 'react';
import logo from './logo.svg';
import './App.css';

function About(){
    return (
        <div className='App'>
            <header className="App-header">
                <img src={logo} className='App-logo' alt='logo' />
                <h1 className='App-title'>Página Sobre</h1>
            </header>
            <p className="App-intro">
                Exemplo de págia sobre
            </p>
        </div>
    );
}

export default About;
import React from 'react';
import './stylesheets/navbar.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/navbar/Navbar";
import Slideshow from './components/slideshow/Slide';

function App() {
    return (
        <div className="App">

            <div className="Navbar">
                <Navbar/>
            </div>
            <div className="Slideshow">
                <Slideshow/>
            </div>

        </div>
    );
}

export default App;

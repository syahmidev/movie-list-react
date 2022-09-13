import React from 'react';
import landinglogo from '../assets/movie.svg'

const Home = () => {
    return (
        <section id="landing">
            <div className="container">
                <div className="row">
                    <div className="landing__wrapper">
                        <h1 className='landing__title'>Playback Movie Suggestion</h1>
                        <h3 className='landing__subtitle'>FIND YOUR MOVIE WITH <span id='purple'>PLAYBACK</span></h3>
                        <div className="landing__search">
                            <input
                                className='landing__search--input'
                                type="text"
                                placeholder='Search by Title' 
                            />
                            <button className='landing__search--button'>s</button>
                        </div>
                        <img className='landing__logo' src={landinglogo} alt="movie" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;

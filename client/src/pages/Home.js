import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <div className='home'>
            <h2>Next Event</h2>
            <p>Next event is a web app that allows you to select your favorite sports, teams, and athletes <br/>
             to keep track of their next scheduled sporting event. <br/>
             Once selected you can see all upcoming events so you never miss an upcoming event.</p>
            <div className="container">
                {/* add schedule component here */}
                {/* if logged in this will give personalized schedules */}
            </div>
        </div>
    );
}

export default Home;
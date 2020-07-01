import React from 'react';
import Me from '../img/MoiGris.png';

function About() {

    return (
        <>
            <div className="container about m-5">
                <h1 className="title">À PROPOS</h1>
                <hr className="HR"/>
            </div>
            <div className="">
                <img className="PhotoHome" src={Me} alt="HakimNemar" />
            </div>
        </>
    )
}

export default About;
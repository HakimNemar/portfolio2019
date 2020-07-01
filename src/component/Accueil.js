import React from 'react';
import Me from '../img/me.png';

function Home() {

    return (
        <>
            <div className="ml-5 absolute">
                <div className="mb-4">
                    <h1 className="colorWhite">Bonjour, je suis</h1>
                    <h1 className="Im"><b>HAKIM NEMAR</b></h1>
                </div>
                <div className="textDescriptif py-2">
                    <h2>INTEGRATEUR/DEVELOPPEUR WEB - FULL STACK</h2>
                    <p className="size">Recherche d'alternance en contrat de professionnalisation en React.js pour la periode du 2 novembre 2020 au 29 octobre 2021</p>
                </div>
            </div>
            <div className="">
                <img className="PhotoHome" src={Me} alt="HakimNemar"/>
            </div>
        </>
    )
}

export default Home;
import React from 'react';
import Me from '../../assets/img/myPictures/me.png';
import pdf from '../../assets/pdf/Nemar_Hakim.pdf';

function Home() {

    return (
        <div className="PanelHome">
            <div className="ml-5 pl-5 absolute">
                <div className="CVPhone">
                    <h6><a href={pdf} className="CV" target="_blank" rel="noopener noreferrer">CV <i className="material-icons icon">save_alt</i></a></h6>
                </div>
                <div className="bonjour">
                    <h1 className="colorWhite fontSize">Bonjour, je suis</h1>
                    <h1 className="Im fontSize"><b>HAKIM NEMAR</b></h1>
                </div>
                <div className="textDescriptif py-2">
                    <h2>INTEGRATEUR/DEVELOPPEUR WEB - FULL STACK</h2>
                    <p className="size16">Recherche d'alternance en contrat de professionnalisation en React.js pour la periode du 2 novembre 2020 au 29 octobre 2021</p>
                </div>
            </div>
            <div className="">
                <img className="PhotoHome" src={Me} alt="HakimNemar" />
            </div>
        </div>
    )
}

export default Home;
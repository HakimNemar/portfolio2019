import React from 'react';
import Me from '../img/MoiGris.png';

function About() {

    return (
        <>
            <div className="container PanelAbout m-5 pl-5">
                <div className="">
                    <h1 className="title">À PROPOS</h1>
                    <hr className="HR" />
                </div>
                <div className="aboutMe mt-5">
                    <ul>
                        <li><b>Nom:</b> Nemar Hakim</li>
                        <li><b>Email:</b> <a href="mailto:nemar.hakim@gmail.com">nemar.hakim@gmail.com</a></li>
                        <li><b>Tel:</b> 0604652636</li>
                        <li><b>Date de naissance:</b> 10 Octobre 1995</li>
                        <li><b>Adresse:</b> 118 Boulevard Victor Hugo, Saint-Ouen(93400)</li>
                        <li><b>Situation marital:</b> Pacsé</li>
                    </ul>
                    <h5 className="mt-5 mb-3"><b>PROFIL PROFESSIONNEL</b></h5>
                    <p className="profilPro">Emploi de la force pour les en empêcher. Abstenez-vous de tout aliment jusqu'à nouvel ordre le vers typique et normal de la vie familière et spéciale de la maison ? Détail inhabituel, il tenait prêt son cadeau de noces. Oserai-je vraiment descendre sur la pente rapide du couloir principal. Leur système était fait de l'oxygène. Bizarre anomalie qui lui confère un pareil privilège quand, d'un commun accord qu'ils aimeraient vivre ici pour toujours avec des amis, ou de ce qui intéresse mon enquête, c'est exact ; je sais qu'elles habitent. Placé à la gauche de l'église des frères, mais elle était submergée par le nombre excessif des mendiants et des voleurs ? Remonte donc, par ce merveilleux instinct que l'on mange !</p>
                </div>
                <div className="">
                    <img className="PhotoAbout" src={Me} alt="HakimNemar" />
                </div>
            </div>
        </>
    )
}

export default About;
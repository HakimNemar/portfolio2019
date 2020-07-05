import React from 'react';
import Me from '../../assets/img/myPictures/MoiGris.png';

function About() {

    return (
        <div className="container PanelAbout m-5 pl-5">
            <div className="">
                <h1 className="title">À PROPOS</h1>
                <hr className="HR" />
            </div>
            <div>

                <div className="aboutMe mt-5">
                    <ul>
                        <li><b>Nom:</b> Nemar Hakim</li>
                        <li><b>Email:</b> <a href="mailto:nemar.hakim@gmail.com">nemar.hakim@gmail.com</a></li>
                        <li><b>Tel:</b> 0604652636</li>
                        <li><b>Date de naissance:</b> 10 Octobre 1995</li>
                        <li><b>Adresse:</b> 118 Boulevard Victor Hugo, Saint-Ouen (93400)</li>
                        <li><b>Situation marital:</b> Pacsé</li>
                    </ul>
                    <h5 className="mt-5 mb-3"><b>PROFIL PROFESSIONNEL</b></h5>
                    <p className="profilPro">Etudiant en developpement web au Samsung campus - Epitech , passionné par l'informatique et le developpement, je suis actuellement à la recherche d'une alternance.
                </p>
                </div>
                <div className="">
                    <img className="PhotoAbout" src={Me} alt="HakimNemar" />
                </div>
            </div>
        </div>
    )
}

export default About;
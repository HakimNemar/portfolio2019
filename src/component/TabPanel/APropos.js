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
                        <li><b>Date de naissance:</b> 10 octobre 1995</li>
                        <li><b>Adresse:</b> 118 Boulevard Victor Hugo, Saint-Ouen (93400)</li>
                        <li><b>Situation marital:</b> Pacsé</li>
                    </ul>
                    <div className="auDessus">
                        <h5 className="mt-5 mb-3"><b>PROFIL PROFESSIONNEL</b></h5>
                        <p className="profilPro">
                            Étudiant passionné en Développement Web au sein de Samsung campus - Epitech, 
                            je suis actuellement à la recherche d'une alternance. Grâce à de nombreux projets 
                            effectués en autonomie durant plusieurs mois intenses, j'ai pu acquérir de l'expérience 
                            dans de nombreux langages et frameworks (que vous pouvez observer dans la rubrique "Compétences"). 
                            Mon objectif, au delà d'obtenir mon diplôme, est de me perfectionner sans cesse, 
                            apporter mes compétences et ma personnalité à un projet motivant et ambitieux tout en sortant 
                            de ma zone de confort ! J'ai pu grâce à mes expériences m'adapter à différentes équipes de tout 
                            horizon ainsi qu'à une clientèle très variée dans des situations challengeantes. J'aime comprendre les 
                            différents mécanismes qui se cachent dans un système. Autonome, investi, avec un sens aiguisé du détail 
                            tant dans les aspects logiques que créatifs et ayant un fort intérêt pour le React js, je suis à l'aise 
                            dans une équipe, cherchant toujours à me surpasser et à partager.
                        </p>
                    </div>
                </div>
                <div className="">
                    <img className="PhotoAbout" src={Me} alt="HakimNemar" />
                </div>
            </div>
        </div>
    )
}

export default About;
import 'pure-react-carousel/dist/react-carousel.es.css';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModaleQuiz from '../Modal/ImageQuiz';
import P4 from '../../assets/img/projets/p4.png';
import ModaleFreeAds from '../Modal/ImageFreeAds';
import MVC from '../../assets/img/projets/MVC.png';
import QuizHome from '../../assets/img/quiz/home.png';
import Snap from '../../assets/img/projets/snapchat.png';
import smartphone from '../../assets/img/smartphone.png';
import Portfolio from '../../assets/img/projets/portfolio.png';
import BluePrint from '../../assets/img/projets/blueprint.png';
import FreeAdsAnnonce from '../../assets/img/freeads/annonce.png';

function Projets() {
    const [show, setShow] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);

    return (
        <div className="container PanelProjets m-5 pl-5">
            <div className="mb-5 pb-5 PROJETS">
                <h1 className="title">PROJETS</h1>
                <hr className="HR" />
            </div>
            <div>
                <div className="projets">
                    <div className="projets__item projets__item--1">
                        <div className="overlay-image">
                            <div className="projetNamePhone">
                                <div className="text">blueprint.</div>
                            </div>
                            <img className="image projets__img" src={BluePrint} alt="Projet blueprint" />
                            <div>
                                <div className="projetName">
                                    <div className="text">blueprint.</div>
                                </div>
                                <div className="hover">
                                    <div className="text">
                                        <h5>Projet phare de l'année. Dans un groupe de 8 étudiants, nous avons dû créer un site e-commerce à partir de zéro, marketing inclus.</h5>
                                        <button className="btn btn-outline-info visite" onClick={() => window.open('https://e-8commerce-client.herokuapp.com')}>
                                            Visiter le site
                                        </button>
                                        <h6 className="codeSource" onClick={() => window.open('https://github.com/HakimNemar/8-commerce')}>code source</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="separationProjets" />
                    <div className="projets__item projets__item--2">
                        <div className="overlay-image">
                            <div className="projetNamePhone">
                                <div className="text">Snpachat</div>
                            </div>
                            <img className="image projets__img" src={Snap} alt="Projet Snpachat" />
                            <div>
                                <div className="projetName">
                                    <div className="text">Snpachat</div>
                                </div>
                                <div className="hover">
                                    <div className="text">
                                        <div className="displayGrid">
                                            <h5>Recréation de Snapchat. Utilisez l'API fournie et créez une application React qui fonctionne comme Snapchat. (Application pour mobile)</h5>
                                            {/* <img src={smartphone} alt="Icon Smartphone" className="smartphone" /> */}
                                            <button className="btn btn-outline-info visite" onClick={() => window.open('http://our-snapchat.surge.sh')}>
                                                Visiter le site
                                            </button>
                                        </div>
                                        <h6 className="codeSource sourceSnap" onClick={() => window.open('https://github.com/HakimNemar/my_snapchat')}>code source</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="separationProjets" />
                    <div className="projets__item projets__item--3">
                        <div className="overlay-image">
                            <div className="projetNamePhone">
                                <div className="text">Quiz</div>
                            </div>
                            <img className="image projets__img" src={QuizHome} alt="Projet Quiz" />
                            <div>
                                <div className="projetName">
                                    <div className="text">Quiz</div>
                                </div>
                                <div className="hover">
                                    <div className="text">
                                        <h5>Création  d'un site Web de quiz que l'utilisateur peut créer et répondre avec un système de login.</h5>
                                        <button className="btn btn-outline-info visite" onClick={() => setShowQuiz(true)}>
                                            Regarder les photos
                                        </button>
                                        <h6 className="codeSource" onClick={() => window.open('https://github.com/HakimNemar/Puissance4')}>code source</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="separationProjets" />
                    <div className="projets__item projets__item--4">
                        <div className="overlay-image">
                            <div className="projetNamePhone">
                                <div className="text">MVC_Free_Ads</div>
                            </div>
                            <img className="image projets__img" src={FreeAdsAnnonce} style={{ height: "260px" }} alt="Projet MVC_Free_Ads" />
                            <div>
                                <div className="projetName">
                                    <div className="text">MVC_FreeAds</div>
                                </div>
                                <div className="hover">
                                    <div className="text">
                                        <h5>Création d'un site de petites annonces en utilisant le Framework Laravel.</h5>
                                        <button className="btn btn-outline-info visite" onClick={() => setShow(true)}>
                                            Regarder les photos
                                        </button>
                                        <h6 className="codeSource" onClick={() => window.open('https://github.com/HakimNemar/MVC_Free_Ads')}>code source</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="separationProjets" />
                    <div className="projets__item projets__item--5">
                        <div className="overlay-image">
                            <div className="projetNamePhone">
                                <div className="text">MVC_PiePHP</div>
                            </div>
                            <img className="image projets__img" src={MVC} alt="Projet MVC_PiePHP" />
                            <div>
                                <div className="projetName">
                                    <div className="text">MVC_PiePHP</div>
                                </div>
                                <div className="hover">
                                    <div className="text">
                                        <h5>Réalisation d'un framework basé sur la structure et les normes de CakePHP et Symfony pour s'initier à l'utilisation d'un framework MVC.</h5>
                                        <h6 className="codeSource" onClick={() => window.open('https://github.com/HakimNemar/MVC_PiePHP')}>code source</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="separationProjets" />
                    <div className="projets__item projets__item--6">
                        <div className="overlay-image">
                            <div className="projetNamePhone">
                                <div className="text">Puissance4</div>
                            </div>
                            <img className="image projets__img" src={P4} alt="Projet Puissance4" />
                            <div>
                                <div className="projetName">
                                    <div className="text">Puissance4</div>
                                </div>
                                <div className="hover">
                                    <div className="text">
                                        <h5>Création d'un plugin jQuery pour un puissance 4 dynamique.</h5>
                                        <button className="btn btn-outline-info visite" onClick={() => window.open('https://mypuissance4.herokuapp.com/')}>
                                            Visiter le site
                                        </button>
                                        <h6 className="codeSource" onClick={() => window.open('https://github.com/HakimNemar/Puissance4')}>code source</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="separationProjets" />
                    <div className="projets__item projets__item--7">
                        <div className="overlay-image">
                            <div className="projetNamePhone">
                                <div className="text">Portfolio</div>
                            </div>
                            <img className="image projets__img" src={Portfolio} alt="Projet Portfolio" />
                            <div>
                                <div className="projetName">
                                    <div className="text">Portfolio</div>
                                </div>
                                <div className="hover">
                                    <div className="text">
                                        <h5>Vous êtes sur mon site</h5>
                                        <h6 className="codeSource" onClick={() => window.open('https://github.com/HakimNemar/portfolio')}>code source</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="myModal">
                <Modal show={show} onHide={() => setShow(false)} style={{ background: "none", boxShadow: "none" }} dialogClassName="widhtModal">
                    <ModaleFreeAds />
                </Modal>
                <Modal show={showQuiz} onHide={() => setShowQuiz(false)} style={{ background: "none", boxShadow: "none" }} dialogClassName="widhtModal">
                    <ModaleQuiz />
                </Modal>
            </div>
        </div>
    )
}

export default Projets;
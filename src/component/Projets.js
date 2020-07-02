import React from 'react';
import P4 from '../img/p4.png';
import BluePrint from '../img/blueprint.png';
import Snap from '../img/snapchat.png';
import smartphone from '../img/smartphone.png';
import MVC from '../img/MVC.png';
import Portfolio from '../img/portfolio.png';

function Projets() {

    return (
        <div className="container PanelProjets m-5 pl-5">
            <div className="mb-5 pb-5">
                <h1 className="title">PROJETS</h1>
                <hr className="HR" />
            </div>
            {/* <div>
                <div className="max400">
                    <div className="overlay-image">
                        <img className="image" src={P4} alt="Alt text" />
                        <div className="normal">
                            <div className="text">Puissance 4</div>
                        </div>
                        <div className="hover">
                            <div className="text">
                                <button className="btn btn-outline-info visite" onClick={() => window.open('https://mypuissance4.herokuapp.com/')}>
                                    Visiter le site
                            </button>
                                <h6 className="codeSource" onClick={() => window.open('https://github.com/HakimNemar/Puissance4')}>code source</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div>
                <div class="projets">
                    <span class="projets__item projets__item--1">
                        <div className="overlay-image">
                            <img className="image projets__img" src={BluePrint} alt="Alt text" />
                            <div className="normal">
                                <div className="text">blueprint.</div>
                            </div>
                            <div className="hover">
                                <div className="text">
                                    <button className="btn btn-outline-info visite" onClick={() => window.open('https://e-8commerce-client.herokuapp.com')}>
                                        Visiter le site
                                    </button>
                                    <h6 className="codeSource" onClick={() => window.open('https://github.com/HakimNemar/8-commerce')}>code source</h6>
                                </div>
                            </div>
                        </div>
                    </span>
                    <span class="projets__item projets__item--2">
                        <div className="overlay-image">
                            <img className="image projets__img" src={Snap} alt="Alt text" />
                            <div className="normal">
                                <div className="text">Snpachat</div>
                            </div>
                            <div className="hover">
                                <div className="text">
                                    <div className="displayGrid">
                                        <img src={smartphone} alt="Icon Smartphone" className="smartphone" />
                                        <button className="btn btn-outline-info visite" onClick={() => window.open('http://our-snapchat.surge.sh')}>
                                            Visiter le site
                                        </button>
                                    </div>
                                    <h6 className="codeSource" onClick={() => window.open('https://github.com/HakimNemar/my_snapchat')}>code source</h6>
                                </div>
                            </div>
                        </div>
                    </span>
                    <span class="projets__item projets__item--3">
                        <div className="overlay-image">
                            <img className="image projets__img" src={P4} alt="Alt text" />
                            <div className="normal">
                                <div className="text">Quiz</div>
                            </div>
                            <div className="hover">
                                <div className="text">
                                    <button className="btn btn-outline-info visite" onClick={() => window.open('https://mypuissance4.herokuapp.com/')}>
                                        Visiter le site
                                    </button>
                                    <h6 className="codeSource" onClick={() => window.open('https://github.com/HakimNemar/Puissance4')}>code source</h6>
                                </div>
                            </div>
                        </div>
                    </span>
                    <span class="projets__item projets__item--4">
                        <div className="overlay-image">
                            <img className="image projets__img" src={P4} alt="Alt text" />
                            <div className="normal">
                                <div className="text">MVC_Free_Ads</div>
                            </div>
                            <div className="hover">
                                <div className="text">
                                    <button className="btn btn-outline-info visite" onClick={() => window.open('https://mypuissance4.herokuapp.com/')}>
                                        Visiter le site
                                    </button>
                                    <h6 className="codeSource" onClick={() => window.open('https://github.com/HakimNemar/Puissance4')}>code source</h6>
                                </div>
                            </div>
                        </div>
                    </span>
                    <span class="projets__item projets__item--5">
                        <div className="overlay-image">
                            <img className="image projets__img" src={MVC} alt="Alt text" />
                            <div className="normal">
                                <div className="text">MVC_PiePHP</div>
                            </div>
                            <div className="hover">
                                <div className="text">
                                    <h5>Réalisation d'un framework basé sur la structure et les normes de CakePHP et Symfony pour s'initier à l'utilisation d'un framework MVC.</h5>
                                    <h6 className="codeSource" onClick={() => window.open('https://github.com/HakimNemar/MVC_PiePHP')}>code source</h6>
                                </div>
                            </div>
                        </div>
                    </span>
                    <span class="projets__item projets__item--6">
                        <div className="overlay-image">
                            <img className="image projets__img" src={P4} alt="Alt text" />
                            <div className="normal">
                                <div className="text">Puissance 4</div>
                            </div>
                            <div className="hover">
                                <div className="text">
                                    <button className="btn btn-outline-info visite" onClick={() => window.open('https://mypuissance4.herokuapp.com/')}>
                                        Visiter le site
                                    </button>
                                    <h6 className="codeSource" onClick={() => window.open('https://github.com/HakimNemar/Puissance4')}>code source</h6>
                                </div>
                            </div>
                        </div>
                    </span>
                    <span class="projets__item projets__item--7">
                        <div className="overlay-image">
                            <img className="image projets__img" src={Portfolio} alt="Alt text" />
                            <div className="normal">
                                <div className="text">Portfolio</div>
                            </div>
                            <div className="hover">
                                <div className="text">
                                    <h5>Vous êtes sur mon site</h5>
                                    <h6 className="codeSource" onClick={() => window.open('https://github.com/HakimNemar/portfolio')}>code source</h6>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Projets;
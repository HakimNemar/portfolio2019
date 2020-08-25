import React from 'react';
import Flash from '../../assets/img/experience/2m.jpg';
import ICTS from '../../assets/img/experience/icts.png';
import Facilites from '../../assets/img/experience/facilitess.png';

function Experience() {
    return (
        <>
            <div className="container PanelExperience m-5 pl-5">
                <h1 className="title">EXPERIENCE</h1>
                <hr className="HR" />
                <div className="mt-5 divExperience">
                    <div className="divTitleExperience">
                        <h4 className="titleExperience">2M FLASH TRANSPORT</h4>
                        <h4>2018-2019</h4>
                    </div>
                    <div className="img_Text">
                        <img src={Flash} alt="Paul Eluard" className="imageExperience" />
                        <div className="ml-4 textExp">
                            <h5>Chauffeur Livreur</h5>
                            <p className="gray">Montrouge - Châtillon</p>
                            <p>
                                Livraison de produits pharmaceutiques.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="divExperience">
                    <div className="divTitleExperience">
                        <h4 className="titleExperience">ICTS FRANCE</h4>
                        <h4>2017</h4>
                    </div>
                    <div className="img_Text">
                        <img src={ICTS} alt="Paul Eluard" className="imageExperience" />
                        <div className="ml-4 textExp">
                            <h5>Agent de Sûreté Aéroportuaire</h5>
                            <p className="gray">Roissy Charles De Gaulle</p>
                            <p>
                                Contrôler l'accès des passagers en direction de l'avion, effectuer les contrôles essentiels à la surveillance du site et à la prévention des risques.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="divExperience">
                    <div className="divTitleExperience">
                        <h4 className="titleExperience">FACILITESS</h4>
                        <h4>2016</h4>
                    </div>
                    <div className="img_Text">
                        <img src={Facilites} alt="Paul Eluard" className="imageExperience" />
                        <div className="ml-4 textExp">
                            <h5>Agent Polyvalent</h5>
                            <p className="gray">SNCF à Saint-Denis</p>
                            <p>
                                Interventions diverses (déplacements de petits mobiliers, réapprovisionnement des
                                consommables), gestion des archives, affranchissement/répartition du courrier.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="divExperience">
                    <div className="divTitleExperience">
                        <h4 className="titleExperience">FACILITESS</h4>
                        <h4>2016</h4>
                    </div>
                    <div className="img_Text">
                        <img src={Facilites} alt="Paul Eluard" className="imageExperience" />
                        <div className="ml-4 textExp">
                            <h5>Agent Polyvalent</h5>
                            <p className="gray">DEXIA à la Défense</p>
                            <p>
                                Courrier et gestion documentaire (réceptionner, trier, répartir), gestion de salles
                                de réunion (agencement des tables et chaises, vérification du matériel audiovisuel),
                                factotum (montage de meubles, fixation de tableaux, manutentions diverses).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;
import React from 'react';
import CQP from '../../assets/img/education/CQP.png';
import Lycee from '../../assets/img/education/lycee.svg';
import Campus from '../../assets/img/education/campus.png';

function Education() {

    return (
        <>
            <div className="container PanelEducation m-5 pl-5">
                <h1 className="title">EDUCATION</h1>
                <hr className="HR" />
                <div>
                    <div className="mt-5 divEducation">
                        <div className="divTitleEducation">
                            <h4 className="titleEducation">SAMSUNG CAMPUS</h4>
                            <h4>2019-2021</h4>
                        </div>
                        <div className="img_Text">
                            <img src={Campus} alt="Paul Eluard" className="imageEducation" />
                            <div className="ml-4 textEdu">
                                <h5>Intégrateur Développeur web – Full Stack (Bac + 2)</h5>
                                <p>
                                    Samsung Campus - &#123;Epitceh&#125; à Saint-Ouen
                                <br />
                                Pédagogie d’apprentissage autonome par projets (individuel et en groupe)
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="divEducation">
                        <div className="divTitleEducation">
                            <h4 className="titleEducation">ICTS FRANCE</h4>
                            <h4>2017</h4>
                        </div>
                        <div className="img_Text">
                            <img src={CQP} alt="Paul Eluard" className="imageEducation" />
                            <div className="ml-4 textEdu">
                                <h5>Certificat de Qualification Professionnelle Agent de Sûreté Aéroportuaire</h5>
                                <p>
                                    Contrôle d’accès des personnes (passagers, membres d’équipage, personnel aéroportuaire), le cas échéant, de leurs bagages, et de la surveillance des véhicules.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="divEducation">
                        <div className="divTitleEducation">
                            <h4 className="titleEducation">LYCEE PAUL ELUARD</h4>
                            <h4>2015</h4>
                        </div>
                        <div className="img_Text">
                            <img src={Lycee} alt="Paul Eluard" className="imageEducation" />
                            <div className="ml-4 textEdu">
                                <h5>Baccalauréat Sciences et Technologies du Management et de la Gestion (STMG)</h5>
                                <p>
                                    Spécialisation en Gestion Finance
                                <br />
                                Lycée Paul Eluard à Saint-Denis (mention assez bien)
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education;
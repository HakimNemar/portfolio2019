import React from 'react';
import JS from '../../assets/img/language_logo/js2.png';
import Php from '../../assets/img/language_logo/php.png';
import Css from '../../assets/img/language_logo/css3.png';
import Html from '../../assets/img/language_logo/html5.png';
import Mysql from '../../assets/img/language_logo/mysql.png';
import Jquery from '../../assets/img/language_logo/jquery.png';
import NodeJs from '../../assets/img/language_logo/nodejs.png';
import ReactJs from '../../assets/img/language_logo/react.png';
import Laravel from '../../assets/img/language_logo/laravel.png';
import Symfony from '../../assets/img/language_logo/symfony.png';
import MongoDB from '../../assets/img/language_logo/mongodb.png';
import Socketio from '../../assets/img/language_logo/socketio.png';
import ExpressJs from '../../assets/img/language_logo/expressjs.png';
import GitHub from '../../assets/img/language_logo/github.png';
import GitLab from '../../assets/img/language_logo/gitlab.png';
import Bootstrap from '../../assets/img/language_logo/bootstrap.png';

function Skills() {

    return (
        <>
            <div className="container PanelSkills m-5 pl-5">
                <h1 className="title">COMPETENCES</h1>
                <hr className="HR" />

                <p className="textSkills">Voici mes compétences apprises jusqu'à présent classée par ordre de préfèrences.</p>

                <div className="mySkills">
                    <div className="">
                        <h2 className="styleDev">Front-End:</h2>
                        <div className="flexPhone mt-4 displayBlock">
                            <div className="gridLanguage">
                                <div className="divLanguage">
                                    <img src={ReactJs} alt="" className="logoSkills" />
                                    <h5 className="titleLanguage">React JS</h5>
                                </div>
                                <div className="divLanguage">
                                    <img src={Jquery} alt="" className="logoSkills" />
                                    <h5 className="titleLanguage">jQuery</h5>
                                </div>
                                <div className="divLanguage">
                                    <img src={JS} alt="" className="logoSkills" />
                                    <h5 className="titleLanguage">Javascript</h5>
                                </div>
                                <div className="divLanguage">
                                    <img src={Html} alt="" className="logoSkills" />
                                    <h5 className="titleLanguage">HTML 5</h5>
                                </div>
                            </div>
                            <div className="gridLanguage2">
                                <div className="divLanguage">
                                    <img src={Css} alt="" className="logoSkills" />
                                    <h5 className="titleLanguage">CSS 3</h5>
                                </div>
                                <div className="divLanguage">
                                    <img src={Bootstrap} alt="" className="logoSkills" />
                                    <h5 className="titleLanguage">Bootstrap</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="styleDev">Back-End:</h2>
                        <div className="flexPhone mt-4 displayBlock">
                            <div className="gridLanguage">
                                <div className="divLanguage">
                                    <img src={Php} alt="" className="logoSkills" />
                                    <h5 className="titleLanguage">PHP</h5>
                                </div>
                                <div className="divLanguage">
                                    <img src={NodeJs} alt="" className="logoSkills" />
                                    <h5 className="titleLanguage">Node JS</h5>
                                </div>
                                <div className="divLanguage">
                                    <img src={ExpressJs} alt="" className="logoSkills" />
                                    <h5 className="titleLanguage">Express JS</h5>
                                </div>
                                <div className="divLanguage">
                                    <img src={Laravel} alt="" className="logoSkills" />
                                    <h5 className="titleLanguage">Laravel</h5>
                                </div>
                            </div>
                            <div className="gridLanguage2">
                                <div className="divLanguage">
                                    <img src={Symfony} alt="" className="logoSkills" />
                                    <h5 className="titleLanguage">Symfony</h5>
                                </div>
                                <div className="divLanguage">
                                    <img src={Socketio} alt="" className="logoSkills" />
                                    <h5 className="titleLanguage">Socketio</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="styleDev">Autres <span className="competence">Compétences</span>:</h2>
                        <div className="flexPhone mt-4">
                            <div className="divLanguage">
                                <img src={MongoDB} alt="" className="logoSkills" />
                                <h5 className="titleLanguage">MongoDB</h5>
                            </div>
                            <div className="divLanguage">
                                <img src={Mysql} alt="" className="logoSkills" />
                                <h5 className="titleLanguage">Mysql</h5>
                            </div>
                            <div className="divLanguage">
                                <img src={GitHub} alt="" className="logoSkills" />
                                <h5 className="titleLanguage">GitHub</h5>
                            </div>
                            <div className="divLanguage">
                                <img src={GitLab} alt="" className="logoSkills" />
                                <h5 className="titleLanguage">GitLab</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="styleDev">Mes Préfèrences:</h2>
                    <div className="skillsPreference flexPhone">
                        <div>
                            <img src={ReactJs} alt="" className="logoSkills" />
                            <h5 className="titleLanguage">React JS</h5>
                        </div>
                        <div>
                            <img src={Jquery} alt="" className="logoSkills" />
                            <h5 className="titleLanguage">jQuery</h5>
                        </div>
                        <div>
                            <img src={JS} alt="" className="logoSkills" />
                            <h5 className="titleLanguage">Javascript</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;
import 'react-tabs/style/react-tabs.css';
import $ from 'jquery';
import Home from './TabPanel/Accueil';
import About from './TabPanel/APropos';
import Projets from './TabPanel/Projets';
import Contact from './TabPanel/Contact';
import LogoHN from '../assets/img/logo.png';
import Skills from './TabPanel/Competences';
import Education from './TabPanel/Education';
import Github from '../assets/img/github.png';
import Experience from './TabPanel/Experience';
import pdf from '../assets/pdf/Nemar_Hakim.pdf';
import Linkedin from '../assets/img/linkedin.png';
import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Index() {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        if (menu) {
            $(".tabPC").addClass("tabPhone");
            $(".tabPhone").removeClass("tabPC");
        } else {
            $(".tabPhone").addClass("tabPC");
            $(".tabPC").removeClass("tabPhone");
        }
        $(".react-tabs__tab").click(function () {
            $(".tabPhone").addClass("tabPC");
            $(".tabPC").removeClass("tabPhone");
            setMenu(false);
        });
    }, [menu]);

    return (
        <div className="container-fluid p-0 m-0 TabPanel">
            <Tabs className="row p-0 m-0" id="Tabs" forceRenderTabPanel={true} selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex(tabIndex)}>
                <TabList className="tabsHolder col-xs-2 m-0 p-0">
                    <li className="menu">
                        <span id="menu" className="pl-3" onClick={() => setMenu(!menu)}>☰</span>
                        <span className="float-right pr-3 pt-2"><h2>HN</h2></span>
                    </li>
                    <img className="logo" src={LogoHN} alt="logo NomPrenom" />
                    <Tab className="tabPC react-tabs__tab"><h6 className="tabtitles">ACCUEIL</h6></Tab>
                    <Tab className="tabPC react-tabs__tab"><h6 className="tabtitles">À PROPOS</h6></Tab>
                    <Tab className="tabPC react-tabs__tab"><h6 className="tabtitles">COMPETENCES</h6></Tab>
                    <Tab className="tabPC react-tabs__tab"><h6 className="tabtitles">EXPERIENCE</h6></Tab>
                    <Tab className="tabPC react-tabs__tab"><h6 className="tabtitles">EDUCATION</h6></Tab>
                    <Tab className="tabPC react-tabs__tab"><h6 className="tabtitles">PROJETS</h6></Tab>
                    <Tab className="tabPC react-tabs__tab"><h6 className="tabtitles">CONTACT</h6></Tab>
                    <li className="mt-5 CVPDF">
                        <h6><a href={pdf} className="CV" target="_blank" rel="noopener noreferrer">CURRICULUM VITAE <i className="material-icons icon">save_alt</i></a></h6>
                    </li>
                    <li className="row mt-5 iconLogo">
                        <img className="iconLink" src={Github} alt="GitHub" title="GitHub" onClick={() => window.open('https://github.com/HakimNemar')} />
                        <img className="iconLink" src={Linkedin} alt="Linkedin" title="Linkedin" onClick={() => window.open('https://www.linkedin.com/in/hakim-nemar')} />
                    </li>
                </TabList>
                <div className="col-xs-10 ">
                    <TabPanel>
                        <Home />
                    </TabPanel>
                    <TabPanel>
                        <About />
                    </TabPanel>
                    <TabPanel>
                        <Skills />
                    </TabPanel>
                    <TabPanel>
                        <Experience />
                    </TabPanel>
                    <TabPanel>
                        <Education />
                    </TabPanel>
                    <TabPanel>
                        <Projets />
                    </TabPanel>
                    <TabPanel>
                        <Contact />
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}

export default Index;
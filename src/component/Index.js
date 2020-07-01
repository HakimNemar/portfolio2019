import 'react-materialize';
import 'react-tabs/style/react-tabs.css';
import 'materialize-css/dist/css/materialize.min.css';
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LogoHN from '../img/logo.png';
import Github from '../img/github.png';
import Linkedin from '../img/linkedin.png';
import Home from './Accueil';
import About from './APropos';
import Skills from './Competences';
import Contact from './Contact';
import Experience from './Experience';
import Education from './Education';
import Projets from './Projets';

function Index() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="container-fluid p-0 m-0">
            <Tabs className="row p-0 m-0" forceRenderTabPanel={true} selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex(tabIndex)}>
                <TabList className="tabsHolder col-xs-2 m-0 p-0">
                    <img className="logo" src={LogoHN} alt="logo NomPrenom" />
                    <Tab><h6 className="tabtitles">ACCUEIL</h6></Tab>
                    <Tab><h6 className="tabtitles">À PROPOS</h6></Tab>
                    <Tab><h6 className="tabtitles">COMPETENCES</h6></Tab>
                    <Tab><h6 className="tabtitles">EXPERIENCE</h6></Tab>
                    <Tab><h6 className="tabtitles">EDUCATION</h6></Tab>
                    <Tab><h6 className="tabtitles">PROJETS</h6></Tab>
                    <Tab><h6 className="tabtitles">CONTACT</h6></Tab>
                    <li className="row mt-5">
                        {/* <a href="https://github.com/HakimNemar" target="_blank" rel="noopener"><img className="iconLink" src={Github} alt="GitHub" title="GitHub" /></a> */}
                        <img className="iconLink" src={Github} alt="GitHub" title="GitHub" onClick={() => window.open('https://github.com/HakimNemar')} />
                        {/* <a href="https://www.linkedin.com/in/hakim-nemar" target="_blank" rel="noopener"><img className="iconLink" src={Linkedin} alt="Linkedin" title="Linkedin" /></a> */}
                        <img className="iconLink" src={Linkedin} alt="Linkedin" title="Linkedin" onClick={() => window.open('https://www.linkedin.com/in/hakim-nemar')}/>
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
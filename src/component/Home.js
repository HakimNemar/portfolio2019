import 'react-materialize';
import 'react-tabs/style/react-tabs.css';
import 'materialize-css/dist/css/materialize.min.css';
import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LogoHN from '../img/logo.png';

function Home() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="container-fluid p-0 m-0">
            <Tabs className="row p-0 m-0" forceRenderTabPanel={true} selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex(tabIndex)}>
                <TabList className="tabsHolder col-xs-2 m-0 p-0">
                    <img src={LogoHN}/>
                    <Tab><h6 className="tabtitles">HOME</h6></Tab>
                    <Tab><h6 className="tabtitles">ABOUT</h6></Tab>
                    <Tab><h6 className="tabtitles">SKILLS</h6></Tab>
                    <Tab><h6 className="tabtitles">EXPERIENCE</h6></Tab>
                    <Tab><h6 className="tabtitles">EDUCATION</h6></Tab>
                    <Tab><h6 className="tabtitles">PROJETS</h6></Tab>
                    <Tab><h6 className="tabtitles">CONTACT</h6></Tab>
                </TabList>
                <div className="col-xs-10 m-5 p-0">
                    <TabPanel>
                        <h1>Test 1</h1>
                    </TabPanel>
                    <TabPanel>
                        <h1>Test 2</h1>
                    </TabPanel>
                    <TabPanel>
                        <h1>Test 3</h1>
                    </TabPanel>
                    <TabPanel>
                        <h1>Test 4</h1>
                    </TabPanel>
                    <TabPanel>
                        <h1>Test 5</h1>
                    </TabPanel>
                    <TabPanel>
                        <h1>Test 6</h1>
                    </TabPanel>
                    <TabPanel>
                        <h1>Test 7</h1>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}

export default Home;
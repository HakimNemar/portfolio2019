import React, { useState, useEffect } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Home';
import 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

function Home() {
    // const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        const options = {
            swipeable: true
        }

        const tabsContainer = document.querySelectorAll('.tabs');
        M.Tabs.init(tabsContainer, options);

    }, []);

    return (
        <>
            <div className="row">
                <div className="col s12">
                    <ul id="tabs-swipe-demo" className="tabs">
                        <li className="tab col s3"><a href="#test-swipe-1">Test 1</a></li>
                        <li className="tab col s3"><a className="active" href="#test-swipe-2">Test 2</a></li>
                        <li className="tab col s3"><a href="#test-swipe-3">Test 3</a></li>
                    </ul>
                    <div id="test-swipe-1" className="col s12 blue">Test 1</div>
                    <div id="test-swipe-2" className="col s12 red">Test 2</div>
                    <div id="test-swipe-3" className="col s12 green">Test 3</div>
                </div>
            </div>
        </>
    )
}

export default Home;
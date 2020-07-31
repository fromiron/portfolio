import React, {useEffect, useState} from 'react';
import '../index.css';
import {Route,Redirect } from 'react-router-dom';
import AboutPage from "./AboutPage";
import CertificatesPage from './CertificatesPage';
import SkillsPage from "./SkillsPage";
import ProjectsPage from "./ProjectsPage";


function App() {

    return (

        <div>
            <Route exact path="/" component={AboutPage} />
            <Route path="/certificates" component={CertificatesPage}/>
            <Route path="/skills" component={SkillsPage}/>
            <Route path="/projects" component={ProjectsPage}/>
            <Route component={() => <Redirect to="/" />} />
        </div>
    );
}

export default App;


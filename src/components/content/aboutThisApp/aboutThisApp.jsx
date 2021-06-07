import React from 'react';
import Class from "./aboutThisApp.module.css";
import structPicture from "../../../assets/structure.jpg";

const AboutThisApp = (props) => {
    return (
        <div className={Class.wrapper}>
            <p>&nbsp;&nbsp;This is my react app which is my portfolio of react work and a guide to my other works.</p>
            <img src={structPicture} alt="struct" />
            <ul>
                <li>
                    <a href="https://github.com/spanderok/portfolio-react/tree/master" rel="noreferrer" target="_blank">Source</a>
                </li>
                <li>
                    <a href="https://spanderok.github.io/portfolio-react/" rel="noreferrer" target="_blank">Deploy</a>
                </li>
            </ul>

        </div>
    );
};

export default AboutThisApp;
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
                    <a href="https://github.com/spanderok/portfolio/tree/develop" rel="noreferrer" target="_blank">Source</a>
                </li>
                <li>
                    <a href="https://portfolio-palyka-dmitry.herokuapp.com/about_me" rel="noreferrer" target="_blank">Deploy</a>
                </li>
            </ul>

        </div>
    );
};

export default AboutThisApp;
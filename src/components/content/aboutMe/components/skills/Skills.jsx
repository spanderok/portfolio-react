import React, { useState } from 'react';
import Class from "./Skills.module.css";
import OwnItemsClass from "../../../../content/aboutMe/aboutMe.module.css";



const Skills = (props) => {

    const [skillsState, setSkillsState] = useState(false);

    const activateSkills = () => {

        setSkillsState(true);
    };

    const deactivateSkills = () => {

        setSkillsState(false);
    };

    return (
        <div>
            {!skillsState &&
                <div className={OwnItemsClass.wrapper}>
                    <div className={OwnItemsClass.header}>
                        <div>Skills</div>
                        <button onClick={activateSkills}>More</button>
                    </div>
                </div>
            }
            {skillsState &&
                <div className={OwnItemsClass.wrapper}> 
                    <div className={OwnItemsClass.header}>
                        <div>Skills</div>
                        <button onClick={deactivateSkills}>Hide</button>
                    </div>
                    <div className={Class.main}>
                        <div>
                            <ul>
                                <li>HTML/CSS(Sass)/JavaScript</li>
                                <li>React (basic knowledge)</li>
                                <li>Canvas (basic knowledge)</li>
                                <li>Git</li>
                                <li>Webpack (basic knowledge)</li>
                                <li>Node.js (basic knowledge)</li>
                                <li>Trello (canban board)</li>
                                <li>REST APi/ ExpressJs/ Mongo DB (basic knowledge)</li>
                                <li>Knowledge OOP</li>
                            </ul>
                            <div>English Proficiency:</div>
                            <ul>
                                <li>A2 (Pre-intermediate) + </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    );

};
export default Skills;
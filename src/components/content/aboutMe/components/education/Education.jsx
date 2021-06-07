import React, { useState } from 'react';
import Class from "./Education.module.css";
import OwnItemsClass from "../../../../content/aboutMe/aboutMe.module.css";
import certificat from "../../../../../assets/certifikat.jpg";



const Education = (props) => {

    const [educationState, setEducationState] = useState(false);

    const activateEducation = () => {

        setEducationState(true);
    };

    const deactivateEducation = () => {

        setEducationState(false);
    };

    return (
        <div>
            {!educationState &&
                <div className={OwnItemsClass.wrapper}>
                    <div className={OwnItemsClass.header}>
                        <div>Education</div>
                        <button onClick={activateEducation}>More</button>
                    </div>
                </div>
            }
            {educationState &&
                <div className={OwnItemsClass.wrapper}>
                    <div className={OwnItemsClass.header}>
                        <div>Education</div>
                        <button onClick={deactivateEducation}>Hide</button>
                    </div>
                    <div className={Class.main}>
                        <div>
                            <ul>
                            <li>
                                    01.08.2007 – 01.08.2012 – Military Academy Belarus <br/>
                                    Faculty of Communications and Automated Control Systems<br/>
                                    Specialization: engineer/ management specialist
                                </li>
                                <li>
                                    01.09.20 – 15.02.21 – The Rolling Scopes School (JS/FE 2020 Q3)   
                                </li>
                                <li>
                                    <img src={certificat} alt="certificat" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    );

};
export default Education;
import React, { useState } from 'react';
import Class from "./WorkExperience.module.css";
import OwnItemsClass from "../../../../content/aboutMe/aboutMe.module.css";



const WorkExperience = (props) => {

    const [workExperienceState, setWorkExperienceState] = useState(false);

    const activateWorkExperience = () => {

        setWorkExperienceState(true);
    };

    const deactivateWorkExperience = () => {

        setWorkExperienceState(false);
    };

    return (
        <div>
            {!workExperienceState &&
                <div className={OwnItemsClass.wrapper}>
                    <div className={OwnItemsClass.header}>
                        <div>Work experience</div>
                        <button onClick={activateWorkExperience}>More</button>
                    </div>
                </div>
            }
            {workExperienceState &&
                <div className={OwnItemsClass.wrapper}>
                    <div className={OwnItemsClass.header}>
                        <div>Work experience</div>
                        <button onClick={deactivateWorkExperience}>Hide</button>
                    </div>
                    <div className={Class.main}>
                        <div>
                            <ul>
                                <li>
                                    01.12.2020 – 01.01.2021 – (teamwork, RS-School)<br/>
                                    https://spanderok.github.io/covid/ 
                                </li>
                                <li>
                                    15.01.21 – 10.02.21 - (teamwork with REST Api express.js mongoDB, RS-School) <br/>
                                    https://flamboyant-aryabhata-70f83f.netlify.app/
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    );

};
export default WorkExperience;
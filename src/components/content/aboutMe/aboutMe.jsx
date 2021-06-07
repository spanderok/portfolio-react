import React from 'react';
import MainInfo from "../aboutMe/components/mainInfo/MainInfo";
import Objective from "../aboutMe/components/objective/Objective";
import Summary from "../aboutMe/components/summary/Summary";
import Skills from "../aboutMe/components/skills/Skills";
import WorkExperience from "../aboutMe/components/workExperience/WorkExperience";
import Education from "../aboutMe/components/education/Education";


const AboutMe = (props) => {

    return (
        <div>
            {/* <MainInfo/> */}
            {/* <Objective/> */}
            <Summary/>
            <Skills/>
            <WorkExperience/>
            <Education/>
        </div>
    );
}

export default AboutMe;
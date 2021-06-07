import React, { useState } from 'react';
import Class from "./Summary.module.css";
import OwnItemsClass from "../../../../content/aboutMe/aboutMe.module.css";



const Summary = (props) => {

    const [summaryState, setSummaryState] = useState(true);

    const activateSummary = () => {

        setSummaryState(true);
    };

    const deactivateSummary = () => {

        setSummaryState(false);
    };

    return (
        <div>
            {!summaryState &&
                <div className={OwnItemsClass.wrapper}>
                    <div className={OwnItemsClass.header}>
                        <div>Summary</div>
                        <button onClick={activateSummary}>More</button>
                    </div>
                </div>
            }
            {summaryState &&
                <div className={OwnItemsClass.wrapper}> 
                    <div className={OwnItemsClass.header}>
                        <div>Summary</div>
                        <button onClick={deactivateSummary}>Hide</button>
                    </div>
                    <div className={Class.main}>
                        <div>
                            <p>&nbsp;&nbsp;Graduated from the Military Academy of Belarus, engineer / specialist in personnel management.
                                I served a contract for 5 years as an officer in the army.
                                Head of the radio center. I grew rapidly in positions, great management experience and experience in solving organizational issues, high communication skills and moral business qualities, very friendly.
                                A constant movement and comprehension of new things are very important for me.
                                The chance to have your own team in the future, lead it and continue to be directly involved in the process (there is a good managerial experience and working with people).
                                First of all, it is important for me to benefit the team and the project, and only secondarily, material and other goals.
                                Then I worked as a barber for 3 years in a barbershop on the territory of the HTP. Well acquainted with the world of IT and realized that I am very pleased to communicate with people from this area.
                            
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );

};
export default Summary;
import React, { useState } from 'react';
import Class from "./Objective.module.css";
import OwnItemsClass from "../../../../content/aboutMe/aboutMe.module.css";



const Objective = (props) => {

    const [objectiveState, setObjectiveState] = useState(false);

    const activateObjective = () => {

        setObjectiveState(true);
    };

    const deactivateObjective = () => {

        setObjectiveState(false);
    };

    return (
        <div>
            {!objectiveState &&
                <div className={OwnItemsClass.wrapper}>
                    <div className={OwnItemsClass.header}>
                        <div>Objective</div>
                        <button onClick={activateObjective}>More</button>
                    </div>
                </div>
            }
            {objectiveState &&
                <div className={OwnItemsClass.wrapper}> 
                    <div className={OwnItemsClass.header}>
                        <div>Objective</div>
                        <button onClick={deactivateObjective}>Hide</button>
                    </div>
                    <div className={Class.main}>
                        <div>Front-end Developer </div>
                    </div>
                </div>
            }
        </div>
    );

};
export default Objective;
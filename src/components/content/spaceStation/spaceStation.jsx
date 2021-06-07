import React from 'react';
import Class from "./spaceStation.module.css";
const SpaceStation = () => {
    return (
        <div className={Class.wrapper}>
            <ul>
                <li>
                    <a href="https://vitali-burakou.medium.com/space-wars-rsschool-34e8623e1043" rel="noreferrer" target="_blank">click here to read the job description</a>
                </li>
                <li>
                    <a href="https://youtu.be/WDScK2ZALRY" rel="noreferrer" target="_blank">click here to watch the video presentation</a>
                </li>
                <li>
                    <a href="https://github.com/Vitali-Minsk/rsclone" rel="noreferrer" target="_blank">instructions for the game</a>
                </li>
                <li>
                    <a href="https://github.com/spanderok/rsschool-cv" rel="noreferrer" target="_blank">Backend</a>
                </li>
                <li>
                    <a href="https://flamboyant-aryabhata-70f83f.netlify.app/" rel="noreferrer" target="_blank">Deploy</a>
                </li>
            </ul>

        </div>
    );
}

export default SpaceStation;
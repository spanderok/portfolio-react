import React from 'react';
import Class from "./componentForItems.module.css";
const ComponentForItems = (props) => {
    return (
        <div className={Class.wrapper} style={{
            backgroundImage: `url('${props.itemBackground}')`
            }} >
            <p>&nbsp;&nbsp;{props.itemContent}</p>
            <ul>
                <li>
                    <a href={props.itemSource} rel="noreferrer" target="_blank">Source</a>
                </li>
                <li>
                    <a href={props.itemDeploy} rel="noreferrer" target="_blank">Deploy</a>
                </li>
            </ul>

        </div>
    );
};

export default ComponentForItems;
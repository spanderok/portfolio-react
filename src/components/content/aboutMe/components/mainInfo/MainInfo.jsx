import React, { useState } from 'react';
import Class from "./mainInfo.module.css";
import OwnItemsClass from "../../../../content/aboutMe/aboutMe.module.css";
import ava from "../../../../../assets/ava.jpg";


const MainInfo = (props) => {

    const [mainInfoState, setMainInfoState] = useState(false);

    const activateMainInfo = () => {
        setMainInfoState(true);
    };

    const deactivateMainInfo = () => {
        setMainInfoState(false);
    };

    return (
        <div>
            {!mainInfoState &&
                <div className={OwnItemsClass.wrapper}>
                    <div className={OwnItemsClass.header}>
                        <div>Main info</div>
                        <button onClick={activateMainInfo}>More</button>
                    </div>
                </div>
            }
            {mainInfoState &&
                <div className={OwnItemsClass.wrapper}>
                    <div className={OwnItemsClass.header}>
                        <div>Main info</div>
                        <button onClick={deactivateMainInfo}>Hide</button>
                    </div>
                    <div className={Class.main}>
                        <div> DZMITRY PALYKA </div>
                        <div className={Class.ava}>
                            <img src={ava} alt="avator" />
                        </div>
                        <div>Phone:   +375(29)879-15-36</div>
                        <div>Email:     polykodima@mail.ru</div>
                        <div><a href="http://t.me/dip_soul">Telegram:   +375(29)879-15-36</a> </div>
                        <div> <a href="https://www.linkedin.com/in/dzmitry-palyka/">Linkedin:   linkedin.com/in/dzmitry-palyka</a></div>

                    </div>
                </div>
            }
        </div>


    );

};
export default MainInfo;
import React from 'react';
import Class from "./header.module.css";
import ava from "../../assets/ava.jpg";
import telegram from "../../assets/телеграмм.svg";
import mobile from "../../assets/mob.svg";
import linkedIn from "../../assets/link.svg";
import email from "../../assets/mail.svg";




const Header = () => {
    return (
        <div className={Class.header}>
            <div className={Class.summary}>
                <h3>Junior JS+React Engineer Dzmitry Palyka</h3>
                <ul>
                    <li>Strong leadership and managing skills</li>
                    <li>Continuous learner, efficient team player </li>
                    <li>Strong communication skills, high attention to details</li>
                    <li>Systems thinking and stress tolerance</li>
                </ul>
            </div>
            <div className={Class.avator}>
                <img src={ava} alt="avator" />
            </div>
            <div className={Class.contacts}>
                <a href="tel:+375298791536" target="_blank"><img src={mobile} alt="" />+375(29) 879-15-36</a>
                <a href="http://t.me/dip_soul" target="_blank"><img src={telegram} alt="" />Telegram</a>
                <a href="https://www.linkedin.com/in/dzmitry-palyka/" target="_blank"><img src={linkedIn} alt="" />Linkedin</a>
                <a href="mailto:polykodima@mail.ru" target="_blank"><img src={email} alt="" />mail: polykodima@mail.ru</a>
            </div>
        </div>
    );
}

export default Header;
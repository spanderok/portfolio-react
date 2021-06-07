import React from 'react';
import Class from "./footer.module.css";
import gitHub from "../../assets/git-hub.svg";
import inst from "../../assets/instagram.svg";
import telegram from "../../assets/телеграмм.svg";


const Footer = () => {
    return (
        <div className={Class.footer} >
           <div><a href="http://t.me/dip_soul"><img src={telegram} alt="" /></a></div>
           <div><a href="https://www.instagram.com/dip_soul_/"><img src={inst} alt="" /></a></div>
           <div><a href="https://github.com/spanderok/"><img src={gitHub} alt="" /></a></div>
        </div>
    );
}

export default Footer;
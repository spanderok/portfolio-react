import React from 'react';
import { NavLink } from 'react-router-dom';
import Class from "./mainMenu.module.css";


const MainMenu = () => {
    return (
        <div className={Class.mainMenu}>
            <div className={Class.item}>
                <NavLink to={process.env.PUBLIC_URL + '/about_this_app'} activeClassName={Class.active}>About this app</NavLink>
            </div >
            <div className={Class.item}>
                <NavLink exact to={process.env.PUBLIC_URL + "/"} activeClassName={Class.active}>About me</NavLink>
            </div >
            <div className={Class.item}>
                <NavLink to={process.env.PUBLIC_URL + '/space_station'} activeClassName={Class.active}>Space station</NavLink>
            </div >
            <div className={Class.item}>
                <NavLink to={process.env.PUBLIC_URL + '/covid'} activeClassName={Class.active}>Covid app</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to={process.env.PUBLIC_URL + '/form'} activeClassName={Class.active}>Form</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to={process.env.PUBLIC_URL + '/game_puzzle'} activeClassName={Class.active}>Game puzzle</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to={process.env.PUBLIC_URL + '/shelter'} activeClassName={Class.active}>Shelter</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to={process.env.PUBLIC_URL + '/momentum'} activeClassName={Class.active}>Momentum</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to={process.env.PUBLIC_URL + '/webdev'} activeClassName={Class.active}>Your life is webdev</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to={process.env.PUBLIC_URL + '/english_for_kids'} activeClassName={Class.active}>English for kids</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to={process.env.PUBLIC_URL + '/presentation'} activeClassName={Class.active}>Presentation API</NavLink>
            </div>

        </div>
    );
}

export default MainMenu;
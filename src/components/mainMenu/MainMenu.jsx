import React from 'react';
import { NavLink } from 'react-router-dom';
import Class from "./mainMenu.module.css";


const MainMenu = () => {
    return (
        <div className={Class.mainMenu}>
            <div className={Class.item}>
                <NavLink to='/portfolio-react/about_this_app' activeClassName={Class.active}>About this app</NavLink>
            </div >
            <div className={Class.item}>
                <NavLink to='/portfolio-react/about_me' activeClassName={Class.active}>About me</NavLink>
            </div >
            <div className={Class.item}>
                <NavLink to='/portfolio-react/space_station' activeClassName={Class.active}>Space station</NavLink>
            </div >
            <div className={Class.item}>
                <NavLink to='/portfolio-react/covid' activeClassName={Class.active}>Covid app</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to='/portfolio-react/form' activeClassName={Class.active}>Form</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to='/portfolio-react/game_puzzle' activeClassName={Class.active}>Game puzzle</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to='/portfolio-react/shelter' activeClassName={Class.active}>Shelter</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to='/portfolio-react/momentum' activeClassName={Class.active}>Momentum</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to='/portfolio-react/webdev' activeClassName={Class.active}>Your life is webdev</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to='/portfolio-react/english_for_kids' activeClassName={Class.active}>English for kids</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to='/portfolio-react/presentation' activeClassName={Class.active}>Presentation API</NavLink>
            </div>

        </div>
    );
}

export default MainMenu;
import React from 'react';
import { NavLink } from 'react-router-dom';
import Class from "./mainMenu.module.css";


const MainMenu = () => {
    return (
        <div className={Class.mainMenu}>
            <div className={Class.item}>
                <NavLink to='/about_this_app' activeClassName={Class.active}>About this app</NavLink>
            </div >
            <div className={Class.item}>
                <NavLink to='/about_me' activeClassName={Class.active}>About me</NavLink>
            </div >
            <div className={Class.item}>
                <NavLink to='/space_station' activeClassName={Class.active}>Space station</NavLink>
            </div >
            <div className={Class.item}>
                <NavLink to='/covid' activeClassName={Class.active}>Covid app</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to='/form' activeClassName={Class.active}>Form</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to='/game_puzzle' activeClassName={Class.active}>Game puzzle</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to='/shelter' activeClassName={Class.active}>Shelter</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to='/momentum' activeClassName={Class.active}>Momentum</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to='/webdev' activeClassName={Class.active}>Your life is webdev</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to='/english_for_kids' activeClassName={Class.active}>English for kids</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to='/presentation' activeClassName={Class.active}>Presentation API</NavLink>
            </div>

        </div>
    );
}

export default MainMenu;
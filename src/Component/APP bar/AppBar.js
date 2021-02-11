import React from "react";
import { NavLink } from "react-router-dom";
import routes from '../../routes';

const AppBar = () => {
    return (<>
        <ul className='links'> 
          <li className='link'>
          <NavLink
           exact to={routes.home}
          className='NavLink'
          activeClassName='NavLink--active'
          >Home</NavLink>
            </li>
            <li className='link'>
            <NavLink 
            to={routes.MoviesView}
            className='NavLink'
            activeClassName='NavLink--active'
            >Movies</NavLink>
            </li>
            </ul>
            </>)
};

export default AppBar;
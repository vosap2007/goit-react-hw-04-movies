import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import HomeView from "./views/HomeViews";
import MoviesView from "./views/MoviesViews";
import NotFound from "./views/NotFoundViews";
import styles from './styles/link.css';

const App = () => (
  <>
<ul className='links'> 
  <li className='link'>
  <NavLink
   exact to='/'
  className='NavLink'
  activeClassName='NavLink--active'
  >Home</NavLink>
    </li>
    <li className='link'>
    <NavLink 
    to='/Movies'
    className='NavLink'
    activeClassName='NavLink--active'
    >Movies</NavLink>
    </li>
    </ul>
<Switch>
  <Route exact path='/' component={HomeView} />
  <Route path='/movies' component={MoviesView} />
  <Route component={NotFound} />
  </Switch>
  </>
);

export default App;
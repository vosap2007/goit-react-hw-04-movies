import React, {Suspense, lazy} from "react";
import { Route, NavLink, Switch } from "react-router-dom";
//import HomeView from "./views/HomeViews";
//import MoviesView from "./views/MoviesViews";
import NotFound from "./views/NotFoundViews";
//import MovieDetailsViews from "./views/MovieDetailsViews";
import AppBar from "./Component/APP bar/AppBar";
import routes from './routes';
import styles from './styles/link.css';

const HomeView = lazy(() => import('./views/HomeViews.js' /* webpackChunkName: "HomeViews" */));
const MoviesViews = lazy(() => import('./views/MoviesViews.js' /* webpackChunkName: "MoviesViews" */));
const MovieDetailsViews = lazy(() => import('./views/MovieDetailsViews.js' /* webpackChunkName: "MovieDetailsViews" */));

const App = () => (
  <>
<AppBar/>
<Suspense fallback={<h1>Загружаем...</h1>}>
<Switch>
  <Route exact path={routes.home} component={HomeView} />
  <Route path={routes.MovieDetailsViews} component={MovieDetailsViews} />
  <Route path={routes.MoviesView} component={MoviesViews} />
  <Route component={NotFound} />
  </Switch>
  </Suspense>
  </>
);

export default App;
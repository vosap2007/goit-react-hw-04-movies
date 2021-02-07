import React, {Component} from "react";
import Axios from "axios";
import { NavLink, Route } from "react-router-dom";
import Actors from "../Component/Actors";

class MovieDetailsViews extends Component {
state = {
    id: null,
    title: null,
    overview: null,
    genres: [],
    poster_path: '',
    release_date: '',
    vote_average: null
};

async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0516dd3e6a153d51192e61dfe30410f4`);
    console.log(response.data);
    this.setState({...response.data});
  }

render() {
    
  return (
  <>
  <button type="submit" className='Button'>&#10939; Go back</button>
  <div className='SectionDetalis'>
  <img src={`https://image.tmdb.org/t/p/w300${this.state.poster_path}`} alt={`${this.state.title}`} />
  <div className='SectionDetalisText'>
  <h1>{this.state.title} ({this.state.release_date.slice(0,4)})</h1>
  <p>User Score {this.state.vote_average * 10}%</p>
  <h2>Overview</h2>
  <p>{this.state.overview}</p>
  <h2>Genres</h2>
  <ul>
      {this.state.genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
      ))}
  </ul>
  </div>
</div>
<div className='linksline'>
    <p>Additional information</p>
    <ul className='abaut'>
        <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
            </li>
        <li>
            <NavLink to='/movies/:movieId/reviews'>Reviews</NavLink>
            </li>
        
    </ul>
</div>
<Route path={`${this.props.match.path}/:castId`} component={Actors}/>
<Route path="/movies/:movieId/reviews" render={() => <h2>Информация об обзорах</h2>}/>
  </>)
}
};

export default MovieDetailsViews;
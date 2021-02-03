import React, {Component} from "react";
import Axios from "axios";
//import { Link } from "react-router-dom";

class MovieDetailsViews extends Component {
state = {
    id: null,
    title: null,
    overview: null,
    popularity: null,
    genre_ids: null,
    poster_path: null
};

async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await Axios.get(`https://api.themoviedb.org/3/trending/movie/${movieId}?api_key=0516dd3e6a153d51192e61dfe30410f4`);
    //console.log(response.data);
  
    this.setState({...response.data});
  }


render() {
  return 
  <>
  <h1>Один фильм</h1>
  <img></img>
  </>
}
};

export default MovieDetailsViews;
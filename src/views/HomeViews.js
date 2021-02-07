import React, {Component} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class HomeView extends Component {
state = {
    movies: []
};

async componentDidMount() {
  const response = await Axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=0516dd3e6a153d51192e61dfe30410f4');

  this.setState({movies: response.data.results})
}

render() {
  return (
      <>
  <h1>Trending today</h1>

  <ul>
      {this.state.movies.map(movie => (
          <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                  {movie.title}</Link></li>
      ))}
  </ul>
  </>
  );
}
};

export default HomeView;
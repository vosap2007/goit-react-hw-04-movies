import React, { Component } from "react";
import Axios from "axios";

export default class Actors extends Component {
    state = {
        cast: null,
        id: null,
        name: '',
    };

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0516dd3e6a153d51192e61dfe30410f4`);
            console.log(response.data);

          this.setState({ ...response.data });
      }


  render() { 
    console.log(this.state.id);
    console.log(this.state.name);
     return (
      <div>
          <h1>Состав авторов</h1>
          <ul>
             <li key={this.state.id}>{this.state.name}</li>
          </ul>
          
      </div>
    ); 
  }
  
};
/*<ul>
      {this.state.cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
      ))}
  </ul>
  
  <ul>
      {this.state.genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
      ))}
  </ul>*/
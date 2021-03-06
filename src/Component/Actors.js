import React, { Component } from "react";
import Axios from "axios";
//import Loader from "react-loader-spinner";

export default class Actors extends Component {
    state = {
        cast: [],
    };

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0516dd3e6a153d51192e61dfe30410f4`);
        //console.log(response.data);

          this.setState({ ...response.data });

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
      }


  render() { 
    
     return (
      <div>
          <ul>
      {this.state.cast.map(actor => (
          <li key={actor.id} className='ListActors'>{actor.name}
          <p className='ListCharacter'>Character: {actor.character}</p>
          <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={`${actor.name}`} />
          </li>
          
      ))}
  </ul>
          
      </div>
    ); 
  }
  
};

/*<Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
        className="Spiner"
      /> */
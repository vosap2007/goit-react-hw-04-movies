import React, { Component } from "react";
//import Axios from "axios";
import { Link } from "react-router-dom";

export default class MoviesView extends Component {
    state = {
        moviesName: '',
        moviesParam: [],
    };

    handleNameChange = event => {
        this.setState(
          {moviesName: event.currentTarget.value.toLowerCase()
           });
      };

      handleSubmit = event => {
        event.preventDefault();
    
    if (this.state.moviesName.trim() === '') {
      alert('Введите правильно запрос.');
      return;
    }
      };
      
     /* async componentDidMount() {
        const { movie } = this.state.moviesName;
        const response = await Axios.get(`https://api.themoviedb.org/3/search/${movie}?api_key=0516dd3e6a153d51192e61dfe30410f4`);
    
        this.setState({...response});
        console.log(this.state.moviesName);*/

        loadMovie = () => {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=0516dd3e6a153d51192e61dfe30410f4&language=en-US&page=1&include_adult=true&query=${this.state.moviesName}`)
            .then(res => res.json())
            .then(movies => this.setState({moviesParam: movies.results}),
      )
              }
          



  render() { 
    
     return (
         <>
        <div className="SearchForm">
   <button type="submit" onClick={this.loadMovie} className="SearchForm-button">
     <span className="SearchForm-button-label">Search</span>
   </button>

   <input
     className="SearchForm-input"
     type="text"
     value={this.state.moviesName}
     onChange={this.handleNameChange}
     placeholder="Search movies"
   />
 </div>
 <div><ul>
      {this.state.moviesParam.map(movie => (
          <li key={movie.id}><Link to={`/movies/${movie.id}`}>
          {movie.title}</Link></li>
      ))}
  </ul>
  </div>
 </>
 ); 
}};
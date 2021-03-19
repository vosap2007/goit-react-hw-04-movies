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

        loadMovie = (e) => {
          e.preventDefault();
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=0516dd3e6a153d51192e61dfe30410f4&language=en-US&page=1&include_adult=true&query=${this.state.moviesName}`)
            .then(res => res.json())
            .then(movies => this.setState({moviesParam: movies.results}),
      )
              }
          
/*<form onSubmit={this.onSubmitForm} className={styles.form}>
          <input
            type="text"
            autoComplete="false"
            placeholder="Enter movie"
            value={input}
            onChange={this.onChangeInput}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>*/


  render() { 
    
     return (
         <>
        <form onSubmit={this.loadMovie} className="SearchForm">
   <button type="submit" /*onClick={this.loadMovie}*/ className="SearchForm-button">
     <span className="SearchForm-button-label">Search</span>
   </button>

   <input
     className="SearchForm-input"
     type="text"
     value={this.state.moviesName}
     onChange={this.handleNameChange}
     placeholder="Search movies"
   />
 </form>
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
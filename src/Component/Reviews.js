import React, { Component } from "react";
import Axios from "axios";

export default class Reviews extends Component {
    state = {
        results: [],
    };

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=0516dd3e6a153d51192e61dfe30410f4`);
            console.log(response.data);

          this.setState({ ...response.data });
      }


  render() { 
    
     return (
         <>
         {this.state.results.length > 1 && (<div>
          <ul>
            {this.state.results.map(result => (
               <li key={result.id}>Author:{result.author}
                   <p>{result.content}</p>
               </li>
            ))}
          </ul>  
        </div>)}

         {this.state.results.length === 0 && 
           (<p>There is no review for this film yet.</p>)}
      </>
    ); 
  }
};
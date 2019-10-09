import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stars from "./Stars"
const Movie = (props) => {
  const [movie, setMovie] = useState([]);
 
  useEffect(() => {
    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  // const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{movie['title']}</h2>
        <div className="movie-director">
          <h2>Director: <em>{movie['director']}</em></h2>
        </div>
        <div className="movie-metascore">
          <h2>Metascore: <strong>{movie['metascore']}</strong></h2>
        </div>
        <h3>Actors</h3>

      
        <Stars stars={movie.stars}/>
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const MovieList = props => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.length > 0 && movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails( props ) {
  //const { title, director, metascore, stars } = movie;
  
  return (
    <div className="movie-card">
    <Link to={`/movies/${props.movie.id}`}>
      <h2>{props.movie["title"]}</h2>
      </Link>
      <div className="movie-director">
        Director: <em>{props.movie['director']}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.movie['metascore']}</strong>
      </div>
      <h3>Actors</h3>

      {props.movie['stars'].map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

export default MovieList;

import React from 'react';
import { getPosterURL } from '../../utils/movieUtils';
import { Link } from 'react-router-dom';
import './movieCard.css';

function MovieCard({ movie }) {
  const formatDate = (date) => {
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleString('en-US', options);
  };

  return (
    <Link to={`/${movie.id}/detail`} className="movieCardContainer">
      <div className="movieCardUpper">
        <img
          src={getPosterURL(movie.poster_path)}
          alt="poster"
          className="movieCardImage"
        />
      </div>
      <div className="movieCardLower">
        <div className="movieCardTitle">
          {movie?.title || movie?.name}
        </div>
        <div className="movieCardReleaseDate">
          {formatDate(movie?.release_date || movie?.first_air_date)}
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;

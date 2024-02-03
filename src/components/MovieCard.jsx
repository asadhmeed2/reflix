import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, onRentingMovie, onUnRentingMovie }) => {
  const onPlusClick = () => {
    onRentingMovie(movie.id);
  };

  const onMinusClick = () => {
    onUnRentingMovie(movie.id);
  };

  const isRented = movie.isRented;

  return (
    <div className="movie-card" style={{ backgroundImage: movie.img }}>
      <Link to={`/movie/${movie.id}`}>
        <img className="movie-card-image" src={movie.img} alt={movie.name} />
      </Link>

      {!isRented && (
        <button className="movie-card-btn" onClick={onPlusClick}>
          +
        </button>
      )}

      {isRented && (
        <button className="movie-card-btn" onClick={onMinusClick}>
          -
        </button>
      )}
    </div>
  );
};

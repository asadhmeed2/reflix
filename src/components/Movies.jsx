import React from "react";
import { MovieCard } from "./MovieCard";

export const Movies = ({ movies, onRentingMovie, onUnRentingMovie, title }) => {
  return (
    <>
      <div className="movies-list-title">{title} :</div>

      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onRentingMovie={onRentingMovie}
            onUnRentingMovie={onUnRentingMovie}
          />
        ))}
      </div>
    </>
  );
};

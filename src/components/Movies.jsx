import React from "react";
import { MovieCard } from "./MovieCard";

export const Movies = ({ movies, onRentingMovie, onUnRentingMovie, title }) => {
  return (
    <>
      <div className="">{title} :</div>

      <div className="catalog">
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
